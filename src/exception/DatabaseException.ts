import { errCode } from '../config/errCode'
import { ExceptionConfig } from '../types/common'
import BaseException from './BaseException'

class DatabaseException extends BaseException {

  config: ExceptionConfig = {
    [errCode.DATABASE_ERROR]: 'Oops! Our server is kind of busy now...',
    [errCode.DATABASE_TRANSACTION_ERROR]: 'Database transaction error!',
  }

  constructor (code: number = errCode.DATABASE_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default DatabaseException