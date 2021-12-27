import { errCode } from '../config/errCode'
import { ExceptionConfig } from '../types/common'
import BaseException from './BaseException'

class ParameterException extends BaseException {
  
  config: ExceptionConfig = {
    [errCode.PARAMETER_ERROR]: 'Nah Nah...Parameters are not in the right form.',
  }

  constructor (code: number = errCode.PARAMETER_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default ParameterException