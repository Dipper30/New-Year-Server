import { errCode } from '../config/errCode'
import { ExceptionConfig } from '../types/common'
import BaseException from './BaseException'

class UserException extends BaseException {

  constructor (code: number = errCode.USER_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default UserException