import BaseService from './BaseService'
import { encryptMD5, getUnixTS, omitFields } from '../utils/tools'
import { ActivityException, CommentException, UserException } from '../exception'
import { activityType, errCode } from '../config'
import { LikeGreeting, PostComment, PostGreeting, Activity as ActivityType, Participation } from '../types/Service'
import GreetingException from '../exception/GreetingException'
import gs from './GreetingService'

const models = require('../../db/models/index.js')
const { sequelize } = require('../../db/models')
const {
  User: UserModel,
  Greeting: GreetingModel,
  Like: LikeModel,
  Comment: CommentModel,
  Activity: ActivityModel,
  Participation: ParticipationModel,
} = models

// const Op = Sequelize.Op

class Activity extends BaseService {
  constructor () {
    super()
  }

  async addActivity (p: ActivityType): Promise<any> {
    try {
      const { title, desc, startsAt, expiresAt } = p
      const ac = await ActivityModel.create({
        title,
        startsAt,
        expiresAt,
        desc: desc ? desc : '',
        deleted: false,
      })
      return ac
    } catch (error) {
      return error
    }
  }

  async deleteActivity (p: { aid: number }): Promise<any> {
    try {
      const { aid } = p
      const ac = await ActivityModel.findByPk(aid)
      if (!ac) throw new ActivityException(errCode.ACTIVITY_NOT_FOUND)
      else ac.deleted = true
      await ac.save()
      return ac
    } catch (error) {
      return error
    }
  }

  async userParticipate (p: Participation): Promise<any> {
    try {
      const { uid, aid, config } = p
      const ac = await ActivityModel.findByPk(aid)
      if (!ac) throw new ActivityException(errCode.ACTIVITY_NOT_FOUND)

      const participated = await ParticipationModel.create({
        uid,
        aid,
        config: config ? config : '',
      })

      return participated
    } catch (error) {
      return error
    }
  }

  async drawNewYearLuck (p: Participation): Promise<any> {
    try {
      const { uid, aid, config } = p
      const ac = await ActivityModel.findByPk(aid)
      if (!ac) throw new ActivityException(errCode.ACTIVITY_NOT_FOUND)

      const participated = await ParticipationModel.create({
        uid,
        aid,
        config: config ? config : '',
      })

      return participated
    } catch (error) {
      return error
    }
  }

}

export default new Activity()