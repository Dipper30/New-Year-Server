const BaseValidator = require('./BaseValidator')
const { role } = require('../config/auth')
const validator = require('validator')

export default class AuthValidator extends BaseValidator {

  // type check
  rules = [
    'username|string|required',
    'password|string|required',
    'id|number',
  ]

  constructor (params: any) {
    super()
    this.params = params
  }

  checkAuthParam (): Boolean {
    if (!this.checkParams(this.params, this.rules)) return false
    
    return this.checkParams(this.params, this.rules)
      && this.isBetween(this.params.username, 2, 10)
      && this.isBetween(this.params.password, 6, 18)
  }

  checkAccountParam (): Boolean {
    const aRule = [
      'username|string|required',
      'password|string|required',
    ]
    return this.checkParams(this.params, aRule) && this.params.password.length >= 6
  }

  checkUpdate (): Boolean {
    return false
  }

  // check if username is valid
  checkUsername (): Boolean {
    const uRule = [
      'username|string|required',
    ]
    return this.checkParams(this.params, uRule)
  }

  checkInfo (): Boolean {
    const iRule = [
      'uid|number|required',
    ]
    return this.checkQuery(this.params, iRule)
  }

  goCheck (): Boolean {
    return this.checkParams(this.params, this.rules)
  }
}
