import { access, errCode } from '../config'
import { ParameterException, FileException, TokenException } from '../exception'
import BaseController from './BaseController'
import { FileService, TokenService } from '../service'
import { GreetingValidator } from '../validator'
import { isError } from '../utils/tools'
import GreetingService from '../service/GreetingService'
const B = require('../validator/BaseValidator')
const BaseValidator = new B()
const multiparty = require('multiparty')
const fs = require('fs')

class Greeting extends BaseController {

  constructor () {
    super()
  }

  async postGreeting (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: { content: string } = req.body
      const valid = new GreetingValidator(data)
      if (!valid.goCheck()) throw new ParameterException(errCode.COMMENT_CONTENT)

      // post
      const posted = await GreetingService.postGreeting({ ...data, uid: userID })
      if (isError(posted)) throw posted

      const newGreeting = await GreetingService.getGreetings({ gid: posted.id, userID })
      if (isError(newGreeting)) throw newGreeting

      res.json({
        code: 201,
        data: newGreeting,
      })
    } catch (error) {
      next(error)
    }
  }

  async likeGreeting (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: { gid: number } = req.body
      const valid = new GreetingValidator(data)
      if (!valid.checkLike()) throw new ParameterException()

      // like
      const liked = await GreetingService.likeGreeting({ ...data, uid: userID })
      if (isError(liked)) throw liked

      const newGreeting = await GreetingService.getGreetings({ gid: liked.gid, userID })
      if (isError(newGreeting)) throw newGreeting

      res.json({
        code: 201,
        data: newGreeting,
      })

      res.json({
        code: 201,
        msg: 'success',
      })
    } catch (error) {
      next(error)
    }
  }

  async reportGreeting (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: { gid: number } = req.body
      const valid = new GreetingValidator(data)
      if (!valid.checkReport()) throw new ParameterException()

      // report
      const reported = await GreetingService.reportGreeting({ ...data, uid: userID })
      if (isError(reported)) throw reported

      const newGreeting = await GreetingService.getGreetings({ gid: reported.gid, userID })
      if (isError(newGreeting)) throw newGreeting

      res.json({
        code: 201,
        data: newGreeting,
      })
    } catch (error) {
      next(error)
    }
  }

  async getGreetings (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      let { userID, username } = Token.verifyToken()
      if (!userID) userID = null

      // parameter validation
      const data: { gid?: number } = req.query
      const valid = new GreetingValidator(data)
      const query = valid.checkGet()
      if (!query) throw new ParameterException(errCode.GREETING_ERROR)

      // get greeting
      const greeting = await GreetingService.getGreetings({ ...query, userID })
      if (isError(greeting)) throw greeting

      res.json({
        code: 200,
        data: greeting,
      })
    } catch (error) {
      next(error)
    }
  }

}

export default new Greeting()