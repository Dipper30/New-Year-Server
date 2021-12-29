import { errCode } from '../config/errCode'
import BaseException from './BaseException'

class ActivityException extends BaseException {

  constructor (code: number = errCode.ACTIVITY_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default ActivityException