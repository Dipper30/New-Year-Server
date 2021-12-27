import { errCode } from '../config/errCode'
import { ExceptionConfig } from '../types/common'
import BaseException from './BaseException'

class TokenException extends BaseException {

  config: ExceptionConfig = {
    [errCode.TOKEN_ERROR]: 'Token Error!',
  }

  constructor (code: number = errCode.TOKEN_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default TokenException