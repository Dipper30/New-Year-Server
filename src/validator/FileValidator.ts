const BaseValidator = require('./BaseValidator')

export default class AuthValidator extends BaseValidator {

  file: any

  // type check
  rules = []

  types = ['image/jpeg', 'image/jpg', 'image/png']

  constructor (params: any) {
    super()
    this.file = params
  }

  checkType (types?: any): Boolean {
    let t = types || this.types
    if (Array.isArray(this.file)) {
      for (let item of this.file) {
        if (!t.includes(item?.mimetype)) return false
      }
    } else {
      if (!t.includes(this.file?.mimetype)) return false
    }
    return true
  }

  goCheck (): Boolean {
    return true
  }
}
