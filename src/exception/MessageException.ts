import { errCode } from '../config/errCode'
import BaseException from './BaseException'

class MessageException extends BaseException {

  constructor (code: number = errCode.MESSAGE_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default MessageException