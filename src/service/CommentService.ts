import { auth, role } from '../config/auth'
import { Account } from '../types/common'
import { AccountInfo } from '../types/User'
import BaseService from './BaseService'
import { encryptMD5, getUnixTS, omitFields } from '../utils/tools'
import { AuthException, CommentException, UserException } from '../exception'
import { errCode } from '../config'
import { DeleteComment, LikeGreeting, PostComment, PostGreeting } from '../types/Service'
import GreetingException from '../exception/GreetingException'
import gs from './GreetingService'

const models = require('../../db/models/index.js')
const { sequelize } = require('../../db/models')
const {
  User: UserModel,
  Greeting: GreetingModel,
  Like: LikeModel,
  Comment: CommentModel,
} = models

// const Op = Sequelize.Op

class Comment extends BaseService {
  constructor () {
    super()
  }

  async getComments (p?: any): Promise<any> {
    try {
      const comment = await CommentModel.findOne({
        where: { id: 1 },
        include: [
          {
            model: UserModel,
          },
        ],
      })
      return comment
    } catch (error) {
      return error
    }
  }

  async postComment (p: PostComment): Promise<any> {
    try {
      const { uid, gid, root, content, visible, uploadedAt } = p
      const v = visible == null ? true : visible
      const ts = uploadedAt ? uploadedAt : getUnixTS()

      // check that greeting and root comment both exist
      const greeting = await GreetingModel.findByPk(gid)
      if (!greeting) throw new GreetingException(errCode.GREETING_NOT_FOUND)
      if (root && root != 0) {
        const c = await CommentModel.findByPk(root)
        if (!c) throw new CommentException(errCode.COMMENT_NOT_FOUND)
      }

      const posted = await CommentModel.create({
        uid,
        gid,
        root,
        content,
        visible: v,
        uploadedAt: ts,
      })

      const newGreeting = await gs.getGreetings({ gid: posted.gid, userID: uid })

      return newGreeting
    } catch (error) {
      return error
    }
  }

  async deleteComment (p: DeleteComment): Promise<any> {
    try {
      const { uid, cid, gid } = p
      const c = await CommentModel.findByPk(cid)
      if (!c) throw new CommentException(errCode.COMMENT_NOT_FOUND)

      if (c.uid != uid && uid != auth.DIPPER_ID) throw new AuthException(errCode.AUTH_ERROR, 'Not Authorized') 

      c.visible = false
      await c.save()

      const newGreeting = await gs.getGreetings({ gid: gid, userID: uid })

      return newGreeting

    } catch (error) {
      return error
    }
  }
}

export default new Comment()