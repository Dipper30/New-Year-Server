import { errCode } from '../config/errCode'
import BaseException from './BaseException'

class FileException extends BaseException {

  constructor (code: number = errCode.FILE_ERROR, message?: string|null|undefined) {
    super(code, message)
  }
}

export default FileException