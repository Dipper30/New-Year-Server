const BaseValidator = require('./BaseValidator')
const { role } = require('../config/auth')
const validator = require('validator')

export default class CommentValidator extends BaseValidator {

  // type check
  rules = [
    'content|string|required',
    'gid|number|required',
    'root|number|required',
  ]

  constructor (params: any) {
    super()
    this.params = params
  }

  goCheck (): Boolean {
    return this.checkParams(this.params, this.rules)
      && this.isBetween(this.params.content, 1, 50)
      && this.params.root >= 0
  }

  checkLike (): Boolean {
    const lRule = [
      'gid|number|required',
    ]
    return this.checkParams(this.params, lRule)
  }

  checkDelete (): Boolean {
    const dRule = [
      'uid|number',
      'cid|number|required',
      'gid|number|required',
    ]
    return this.checkParams(this.params, dRule)
  }

}
