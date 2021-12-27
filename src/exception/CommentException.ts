import { errCode } from '../config/errCode'
import BaseException from './BaseException'

class CommentException extends BaseException {

  constructor (code: number = errCode.COMMENT_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default CommentException