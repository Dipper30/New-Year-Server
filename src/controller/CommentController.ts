import { errCode } from '../config'
import { ParameterException, FileException, TokenException, AuthException } from '../exception'
import BaseController from './BaseController'
import { GreetingService, CommentService, TokenService, AuthService } from '../service'
import { CommentValidator, GreetingValidator } from '../validator'
import { isError } from '../utils/tools'
import { DeleteComment } from '../types/Service'
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
      const hasAccount = await AuthService.findAccountByUserID(userID)
      if (!hasAccount) throw new AuthException(errCode.USER_ERROR, 'User Not Found')

      // parameter validation
      const data: { content: string, root: number, gid: number } = req.body
      const valid = new CommentValidator(data)
      if (!valid.goCheck()) throw new ParameterException(errCode.COMMENT_ERROR)

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

  async deleteComment (req: any, res: any, next: any): Promise<any> {
    try {
      // verify token
      const Token = new TokenService(req.headers.token)
      const { userID, username } = Token.verifyToken()
      if (!userID || !username) throw new TokenException()
      const hasAccount = await AuthService.findAccountByUserID(userID)
      if (!hasAccount) throw new AuthException(errCode.USER_ERROR, 'User Not Found')

      // parameter validation
      const data: DeleteComment = req.body
      const valid = new CommentValidator(data)
      if (!valid.checkDelete()) throw new ParameterException(errCode.COMMENT_ERROR, 'Parameter Error')

      const u = data.uid ? data.uid : userID
      // delete
      const deleted = await CommentService.deleteComment({ ...data, uid: u })
      if (isError(deleted)) throw deleted

      res.json({
        code: 201,
        data: deleted,
      })
    } catch (error) {
      next(error)
    }
  }

}

export default new Comment()