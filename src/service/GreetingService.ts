import { auth, role } from '../config/auth'
import { Account } from '../types/common'
import { AccountInfo } from '../types/User'
import BaseService from './BaseService'
import { encryptMD5, getUnixTS, omitFields } from '../utils/tools'
import { AuthException, GreetingException } from '../exception'
import { errCode } from '../config'
import { LikeGreeting, PostGreeting as PostGreetingType, ReportGreeting } from '../types/Service'
import { CommentService } from '.'
import GreetingArray from '../utils/GreetingArray'

const models = require('../../db/models/index.js')
const { sequelize } = require('../../db/models')
const {
  User: UserModel,
  Greeting: GreetingModel,
  Like: LikeModel,
  Comment: CommentModel,
  Report: ReportModel,
} = models

// const Op = Sequelize.Op

class Greeting extends BaseService {
  constructor () {
    super()
  }

  async postGreeting (p: PostGreetingType): Promise<any> {
    try {
      const { content, uid, uploadedAt, visible, anonymous } = p
      const ts = uploadedAt ? uploadedAt : getUnixTS()
      const v = visible == null ? true : visible
      const a = anonymous ? anonymous : false
      const posted = await GreetingModel.create({
        content,
        uid,
        uploadedAt: ts,
        visible: v,
        anonymous: a,
      })
      return posted
    } catch (error) {
      return error
    }
  }

  async deleteGreeting (p: LikeGreeting): Promise<any> {
    try {
      const { uid, gid } = p
      const greeting = await GreetingModel.findByPk(gid)
      if (!greeting) throw new GreetingException(errCode.GREETING_NOT_FOUND)

      if (greeting.uid != uid && uid != auth.DIPPER_ID) throw new AuthException()

      greeting.visible = false
      await greeting.save()
      
      return true

    } catch (error) {
      return error
    }
  }

  async likeGreeting (p: LikeGreeting): Promise<any> {
    try {
      const { uid, gid, negative } = p
      const greeting = await GreetingModel.findByPk(gid)
      if (!greeting) throw new GreetingException(errCode.GREETING_NOT_FOUND)

      if (!negative) {
        // 点赞
        const [liked, created] = await LikeModel.findOrCreate({
          where: {
            uid,
            gid,
          },
          defaults: {
            uid,
            gid,
          },
          attributes: ['gid', 'uid'],
        })
  
        if (!created) {
          // already liked
          throw new GreetingException(errCode.ALREADY_LIKED)
        } else {
          return liked
        }
      } else {
        // 取消点赞
        const cancelLike = await LikeModel.destroy({
          where: {
            uid,
            gid,
          },
        })
        return { gid }
      }

    } catch (error) {
      return error
    }
  }

  async reportGreeting (p: ReportGreeting): Promise<any> {
    try {
      const { uid, gid, type, reason, negative } = p
      const greeting = await GreetingModel.findByPk(gid)
      if (!greeting) throw new GreetingException(errCode.GREETING_NOT_FOUND)

      if (!negative) {
        // 举报
        const [reported, created] = await ReportModel.findOrCreate({
          where: {
            uid,
            gid,
          },
          defaults: {
            uid,
            gid,
            type,
            reason,
          },
          // attributes: ['gid', 'uid'],
        })
  
        if (!created) {
          // already reported
          throw new GreetingException(errCode.ALREADY_REPORTED)
        } else {
          return reported
        }
      } else {
        // 取消举报
        const cancelReport = await ReportModel.destroy({
          where: {
            uid,
            gid,
          },
        })
        return { gid }
      }

    } catch (error) {
      return error
    }
  }

  async getGreetings (p: any) {
    try {
      const { gid, userID } = p
      const criteria = gid ? { id: gid, visible: true } : { visible: true }

      // return await CommentService.getComments()
      const greetings = await GreetingModel.findAll({
        where: criteria,
        include: [
          {
            model: CommentModel,
            as: 'Comments',
            include: [
              {
                model: UserModel,
                attributes: ['id', 'username'],
              },
            ],
          },
          {
            model: LikeModel,
            as: 'Likes',
          },
          {
            model: UserModel,
            attributes: ['id', 'username'],
            as: 'User',
          },
          {
            model: ReportModel,
            as: 'Reports',
          },
        ],
        order: [
          ['uploadedAt', 'desc'],
        ],
      })

      greetings.forEach((greeting: any) => {
        greeting.dataValues.commentsCount = greeting.Comments.length
        greeting.dataValues.likesCount = greeting.Likes.length
        greeting.dataValues.reportsCount = greeting.Reports.length
        greeting.dataValues.liked = userID ? greeting.Likes.some((i: any) => i.uid == userID) : false
        greeting.dataValues.reported = userID ? greeting.Reports.some((i: any) => i.uid == userID) : false
        if (greeting.dataValues.anonymous == true) greeting.dataValues.User = null
        // if (greeting.dataValues.likesCount == 1 && !greeting.Likes[0]?.gid) greeting.dataValues.likesCount = 0
        // if (greeting.dataValues.reportsCount == 1 && !greeting.Reports[0]?.gid) greeting.dataValues.reportsCount = 0

        const ga = new GreetingArray()
        greeting.dataValues.Comments = ga.rearrangeComments(greeting.Comments)
        // greeting.dataValues.x = 1
      })
      
      return greetings

      // const query = `SELECT SUM(price) profit,id rid, r.name FROM (
      //   SELECT price,sid,s.region_id FROM Orders o LEFT JOIN Stores s ON o.sid=s.id) t LEFT JOIN Regions r ON t.region_id=r.id GROUP BY rid ORDER BY profit DESC;`
      // const [profits, metadata] = await sequelize.query(query)

    } catch (error) {
      return error
    }
  }

}

export default new Greeting()