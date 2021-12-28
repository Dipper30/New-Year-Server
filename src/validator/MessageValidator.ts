const BaseValidator = require('./BaseValidator')
const { role } = require('../config/auth')
const validator = require('validator')

export default class MessageValidator extends BaseValidator {

  // type check
  rules = [
    'content|string|required',
  ]

  constructor (params: any) {
    super()
    this.params = params
  }

  goCheck (): Boolean {
    return this.checkParams(this.params, this.rules) && this.isBetween(this.params.content, 3, 150)
  }

  checkGet (): any {
    const gRule = [
      'lastCheck|number',
    ]
    return this.checkQuery(this.params, gRule)
  }

  checkLast (): Boolean {
    const lRule = [
      'lastCheck|number',
    ]
    return this.checkParams(this.params, lRule)
  }

  checkFeedback (): Boolean {
    const fRule = [
      'title|string|required',
      'content|string|required',
    ]
    return this.checkParams(this.params, fRule)
  }

}
