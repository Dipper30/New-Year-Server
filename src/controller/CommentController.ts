import { errCode } from '../config'
import { ParameterException, FileException, TokenException } from '../exception'
import BaseController from './BaseController'
import { GreetingService, CommentService, TokenService } from '../service'
import { CommentValidator, GreetingValidator } from '../validator'
import { isError } from '../utils/tools'
const B = require('../validator/BaseValidator')
const BaseValidator = new B()
const multiparty = require('multiparty')
const fs = require('fs')

class Comment extends BaseController {

  constructor () {
    super()
  }

  async postComment (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()

      // parameter validation
      const data: { content: string, root: number, gid: number } = req.body
      const valid = new CommentValidator(data)
      if (!valid.goCheck()) throw new ParameterException(errCode.GREETING_CONTENT)

      // post
      const posted = await CommentService.postComment({ ...data, uid: userID })
      if (isError(posted)) throw posted
      res.json({
        code: 201,
        data: posted,
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
      if (!valid.checkLike()) throw new ParameterException(errCode.GREETING_ERROR)

      // like
      const liked = await GreetingService.likeGreeting({ ...data, uid: userID })
      if (isError(liked)) throw liked

      res.json({
        code: 201,
        msg: 'success',
      })
    } catch (error) {
      next(error)
    }
  }

}

export default new Comment()