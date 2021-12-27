import { errCode } from '../config/errCode'
import BaseException from './BaseException'

class GreetingException extends BaseException {

  constructor (code: number = errCode.GREETING_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default GreetingException