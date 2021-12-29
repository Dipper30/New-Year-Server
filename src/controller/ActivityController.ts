import { errCode } from '../config'
import { ParameterException, FileException, TokenException, ActivityException } from '../exception'
import BaseController from './BaseController'
import { GreetingService, CommentService, TokenService, ActivityService } from '../service'
import { CommentValidator, GreetingValidator } from '../validator'
import { isError } from '../utils/tools'
import { Activity as ActivityType, CheckParticipation, Participation as ParticipationType } from '../types/Service'
import ActivityValidator from '../validator/ActivityValidator'
const multiparty = require('multiparty')
const fs = require('fs')

class Activity extends BaseController {

  constructor () {
    super()
  }

  async addActivity (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username || username != 'Dipper') throw new TokenException()

      // parameter validation
      const data: ActivityType = req.body
      const valid = new ActivityValidator(data)
      if (!valid.goCheck()) throw new ActivityException()

      // add activity
      const added = await ActivityService.addActivity(data)
      if (isError(added)) throw added

      res.json({
        code: 201,
        msg: 'ok',
      })
    } catch (error) {
      next(error)
    }
  }

  async deleteActivity (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username || username != 'Dipper') throw new TokenException()

      // parameter validation
      const data: { aid: number } = req.body
      const valid = new ActivityValidator(data)
      if (!valid.checkDelete()) throw new ParameterException(errCode.ACTIVITY_ERROR)

      // deleted activity
      const deleted = await ActivityService.deleteActivity(data)
      if (isError(deleted)) throw deleted
      
      res.json({
        code: 201,
        msg: 'deleted',
      })
    } catch (error) {
      next(error)
    }
  }

  async participate (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: ParticipationType = req.body
      const valid = new ActivityValidator(data)
      if (!valid.checkParticipation()) throw new ParameterException(errCode.ACTIVITY_ERROR)

      // participate
      const participated = await ActivityService.userParticipate({ ...data, uid: userID })
      if (isError(participated)) throw participated
      
      res.json({
        code: 201,
        data: participated,
      })
    } catch (error) {
      next(error)
    }
  }

  async drawNewYearLuck (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: ParticipationType = req.body
      const valid = new ActivityValidator(data)
      if (!valid.checkParticipate()) throw new ParameterException(errCode.GREETING_CONTENT)

      // participate
      const participated = await ActivityService.drawNewYearLuck({ ...data, uid: userID })
      if (isError(participated)) throw participated
      
      res.json({
        code: 201,
        data: participated,
      })
    } catch (error) {
      next(error)
    }
  }

  async checkParticipation (req: any, res: any, next: any): Promise<any> {
    try {
      // parameter validation
      const data: CheckParticipation = req.query
      const valid = new ActivityValidator(data)
      const query = valid.checkP()
      if (!query) throw new ParameterException(errCode.ACTIVITY_ERROR)

      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      const { uid } = query
      if (uid) {
        if (uid != userID && username != 'Dipper') if (!userID || !username) throw new TokenException()
      } else {
        query.uid = userID
      }
      
      // participate
      const participated = await ActivityService.checkParticipation(query)
      if (isError(participated)) throw participated
      
      res.json({
        code: 201,
        data: participated,
      })
    } catch (error) {
      next(error)
    }
  }

}

export default new Activity()