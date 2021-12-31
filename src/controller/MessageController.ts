import { errCode } from '../config'
import { ParameterException, FileException, TokenException, AuthException } from '../exception'
import BaseController from './BaseController'
import { AuthService, FileService, MessageService, TokenService } from '../service'
import { GreetingValidator, MessageValidator } from '../validator'
import { isError } from '../utils/tools'
import GreetingService from '../service/GreetingService'
import { PostFeedback } from '../types/Service'
const B = require('../validator/BaseValidator')
const BaseValidator = new B()
const multiparty = require('multiparty')
const fs = require('fs')

class Message extends BaseController {

  constructor () {
    super()
  }

  async postMessage (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username || username != 'Dipper') throw new TokenException()
      const hasAccount = await AuthService.findAccountByUserID(userID)
      if (!hasAccount) throw new AuthException(errCode.USER_ERROR, 'User Not Found')

      // post
      const message = await MessageService.postMessage(req.body)
      if (isError(message)) throw message

      // const newGreeting = await GreetingService.getGreetings({ gid: posted.id, userID })
      // if (isError(newGreeting)) throw newGreeting

      res.json({
        code: 201,
        data: message,
      })
    } catch (error) {
      next(error)
    }
  }

  async getMessages (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      // if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: { lastCheck?: number } = req.query
      const valid = new MessageValidator(data)
      const query: any = valid.checkGet()
      if (!query) throw new ParameterException(errCode.COMMENT_CONTENT)

      const p: { uid?: number, lastCheck?: number} = {}
      if (userID) p.uid = userID
      if (query.lastCheck) p.lastCheck = query.lastCheck
      // post
      const [messages, news] = await MessageService.getMessages(p)
      if (isError(messages)) throw messages

      // const newGreeting = await GreetingService.getGreetings({ gid: posted.id, userID })
      // if (isError(newGreeting)) throw newGreeting

      res.json({
        code: 201,
        data: {
          messages,
          news,
        },
      })
    } catch (error) {
      next(error)
    }
  }

  async checkMessage (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: { lastCheck?: number } = req.body
      const valid = new MessageValidator(data)
      if (!valid.checkLast()) throw new ParameterException(errCode.COMMENT_CONTENT)

      // post
      const checked = await MessageService.checkMessage({ ...data, uid: userID })
      if (isError(checked)) throw checked

      res.json({
        code: 201,
        msg: 'success',
      })
    } catch (error) {
      next(error)
    }
  }

  async postFeedback (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: PostFeedback = req.body
      const valid = new MessageValidator(data)
      if (!valid.checkFeedback()) throw new ParameterException(errCode.FEEDBACK_ERROR, 'Parameter Error')

      // post
      const posted = await MessageService.postFeedback({ ...data, uid: userID })
      if (isError(posted)) throw posted

      res.json({
        code: 201,
        msg: 'success',
      })
    } catch (error) {
      next(error)
    }
  }
}

export default new Message()