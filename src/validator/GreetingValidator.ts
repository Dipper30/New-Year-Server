const BaseValidator = require('./BaseValidator')
const { role } = require('../config/auth')
const validator = require('validator')

export default class GreetingValidator extends BaseValidator {

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

  checkGet (): Boolean {
    const gRule = [
      'gid|number',
    ]
    return this.checkQuery(this.params, gRule)
  }

  checkLike (): Boolean {
    const lRule = [
      'gid|number|required',
      'negative|boolean',
    ]
    return this.checkParams(this.params, lRule)
  }

  checkReport (): Boolean {
    const rRule = [
      'gid|number|required',
      'type|number',
      'reason|string',
      'negative|boolean',
    ]
    return this.checkParams(this.params, rRule)
  }

}
