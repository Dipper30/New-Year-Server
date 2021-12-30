import { role } from '../config/auth'
import { Account } from '../types/common'
import { AccountInfo } from '../types/User'
import BaseService from './BaseService'
import { encryptMD5, getUnixTS, omitFields } from '../utils/tools'
import { GreetingException } from '../exception'
import { errCode } from '../config'
import { GetMessage, LikeGreeting, PostFeedback, PostGreeting as PostGreetingType, PostMessage, ReportGreeting } from '../types/Service'
import { CommentService } from '.'
import GreetingArray from '../utils/GreetingArray'
import { Op } from 'sequelize'

const models = require('../../db/models/index.js')
const { sequelize } = require('../../db/models')
const {
  User: UserModel,
  Greeting: GreetingModel,
  Like: LikeModel,
  Comment: CommentModel,
  Report: ReportModel,
  Message: MessageModel,
  CheckedMessage: CheckedMessageModel,
  Feedback: FeedbackModel,
} = models

class Message extends BaseService {
  constructor () {
    super()
  }

  async getMessages (p: GetMessage): Promise<any> {
    try {
      let { uid, lastCheck } = p
      const criteria = uid
        ? { [Op.or]: [{ to: uid }, { to: 0 }] }
        : { to: 0 }
        console.log(1)
      const messages = await MessageModel.findAll({
        where: criteria,
        order: [
          ['uploadedAt', 'desc'],
        ],
      })

      console.log(2)

      const lastCheckTs = await CheckedMessageModel.findOne({
        where: { uid: uid ? uid : 0 },
        attributes: ['lastCheck'],
      })

      lastCheck = lastCheckTs?.lastCheck ? Number(lastCheckTs.lastCheck) : 0
      console.log(3)
      if (!messages || messages.length < 1) return [messages, 0]
      // 计算未被用户查看过的消息
      let news = 0
      for (let m of messages) {
        if (m.uploadedAt > lastCheck) news++
        else break
      }

      return [messages, news]
    } catch (error) {
      return error
    }
  }

  async postMessage (p: PostMessage): Promise<any> {
    try {
      const unixTs = getUnixTS()
      p.uploadedAt = unixTs

      const message = await MessageModel.create(p)

      return message
    } catch (error) {
      return error
    }
  }

  async checkMessage (p: { uid: number, lastCheck?: number }): Promise<any> {
    try {
      let { uid, lastCheck } = p
      lastCheck = lastCheck ? lastCheck : getUnixTS()

      const lastChecked = await CheckedMessageModel.findOne({
        where: uid,
      })
      if (!lastChecked) {
        const created = await CheckedMessageModel.create({
          uid,
          lastCheck,
        })
        return created
      } else {
        lastChecked.lastCheck = lastCheck
        await lastChecked.save()
        return true
      }
    } catch (error) {
      return error
    }
  }

  async postFeedback (p: PostFeedback): Promise<any> {
    try {
      const feedback = await FeedbackModel.create(p)

      return feedback
    } catch (error) {
      return error
    }
  }

}

export default new Message()