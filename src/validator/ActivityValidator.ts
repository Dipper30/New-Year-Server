const BaseValidator = require('./BaseValidator')

export default class ActivityValidator extends BaseValidator {

  // type check
  rules = [
    'id|number',
    'title|string|required',
    'desc|string',
    'startsAt|string|required',
    'expiresAt|string|required',
  ]

  constructor (params: any) {
    super()
    this.params = params
  }

  goCheck (): Boolean {
    return this.checkParams(this.params, this.rules)
      && (!this.params?.id || this.isPositiveInteger(this.params.id))
      && this.isBetween(this.params.title, 3, 20)
      && this.stringIsNumeric(this.params.startsAt)
      && this.stringIsNumeric(this.params.expiresAt)
  }

  checkDelete () : Boolean {
    const dRule = [
      'aid|number|required',
    ]
    return this.checkParams(this.params, dRule)
      && this.isPositiveInteger(this.params.aid)
  }

  checkParticipation (): Boolean {
    const pRule = [
      'uid|number',
      'aid|number|required',
      'config|string',
    ]
    return this.checkParams(this.params, pRule)

  }

}
