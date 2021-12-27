// import { access, errCode } from '../config'
// import { ParameterException, ConfigException, FileException } from '../exception'
// import BaseController from './BaseController'
// import { ConfigService, FileService, TokenService } from '../service'
// import { FileValidator } from '../validator'
// import { isError } from '../utils/tools'
// const B = require('../validator/BaseValidator')
// const BaseValidator = new B()
// const multiparty = require('multiparty')
// const fs = require('fs')

// class Config extends BaseController {

//   constructor () {
//     super()
//   }

//   async getStates (req: any, res: any, next: any): Promise<any> {
//     try {
//       let { region_id } = req.query
//       let getStatesFn: Function

//       if (!region_id && region_id != 0) getStatesFn = ConfigService.getStates
//       else {
//         region_id = parseInt(region_id)
//         if (!BaseValidator.isPositiveInteger(region_id)) throw new ParameterException(errCode.PARAMETER_ERROR, 'Wrong ID')
//         getStatesFn = ConfigService.getStatesInRegion
//       }

//       const states = await getStatesFn(region_id)
//       if (!states) throw new ConfigException(errCode.STATES_ERROR)
    
//       res.json({
//         code: 200,
//         data: states,
//       })
//     } catch (error) {
//       next(error)
//     }
//   }

//   async getBusinessTypes (req: any, res: any, next: any): Promise<any> {
//     try {
//       const bts = await ConfigService.getBusinessTypes()
//       if (!bts) throw new ConfigException(errCode.BUSINESS_ERROR)
    
//       res.json({
//         code: 200,
//         data: bts,
//       })
//     } catch (error) {
//       next(error)
//     }
//   }

//   async getRegions (req: any, res: any, next: any): Promise<any> {
//     try {
//       const regions = await ConfigService.getRegions()
//       if (!regions) throw new ConfigException(errCode.REGION_ERROR)
    
//       res.json({
//         code: 200,
//         data: regions,
//       })
//     } catch (error) {
//       next(error)
//     }
//   }

//   async getCategories (req: any, res: any, next: any): Promise<any> {
//     try {
//       const categories = await ConfigService.getCategories()
//       if (isError(categories)) throw categories
    
//       res.json({
//         code: 200,
//         data: categories,
//       })
//     } catch (error) {
//       next(error)
//     }
//   }

//   async getTypes (req: any, res: any, next: any): Promise<any> {
//     try {
//       const { query } = req
//       const code = Number(query.cate_code)
//       if (code && typeof code != 'number') throw new ParameterException()
//       const types = await ConfigService.getTypes(code)
//       if (isError(types)) throw types
    
//       res.json({
//         code: 200,
//         data: types,
//       })
//     } catch (error) {
//       next(error)
//     }
//   }

//   async upload (req: any, res: any, next: any): Promise<any> {
//     try {
//       const { files } = req
//       if (!files) throw new FileException(errCode.NO_FILE_UPLOADED)
      
//       if (Array.isArray(files.file)) {
//         // multiple files
//         const imgList: any[] = files.file
//         const valid = new FileValidator(imgList)
//         if (!valid.checkType()) throw new FileException(errCode.FILE_TYPE_ERROR, 'Only .jpeg .jpg .png are accepted.')
        
//       } else {
//         // single file
//         const img = files.file
//         const valid = new FileValidator(img)
//         if (!valid.checkType()) throw new FileException(errCode.FILE_TYPE_ERROR, 'Only .jpeg .jpg .png are accepted.')
//       }

//       let { id } = req.body
//       if (!id) throw new FileException(errCode.FILE_ERROR, 'Require Product ID.')
      
//       id = parseInt(id)
//       const uploaded = await FileService.writeProductImage(files.file, id)
//       if(isError(uploaded)) throw uploaded

//       if (uploaded) {
//         res.json({
//           code: 201,
//           msg: 'uploaded',
//         })
//       }
//     } catch (error) {
//       next(error)
//     }
//   }

//   async getProfitByRegion (req: any, res: any, next: any): Promise<any> {
//     try {
//       const Token = new TokenService(req.headers.token)
//       const { userID, auth } = Token.verifyToken()
//       if (!auth?.includes(access.LOG_IN_MAIN)) throw new ConfigException(errCode.ACCESS_ERROR)
      
//       const profits = await ConfigService.getRegionalProfit()
//       if(isError(profits)) throw profits

//       res.json({
//         code: 200,
//         data: profits,
//       })
//     } catch (error) {
//       next(error)
//     }
//   }

//   async getConsumptionOfUsers (req: any, res: any, next: any): Promise<any> {
//     try {
//       const Token = new TokenService(req.headers.token)
//       const { userID, auth } = Token.verifyToken()
//       if (!auth?.includes(access.LOG_IN_MAIN)) throw new ConfigException(errCode.ACCESS_ERROR)
      
//       const users = await ConfigService.getConsumptionOfUsers()
//       if(isError(users)) throw users

//       res.json({
//         code: 200,
//         data: users,
//       })
//     } catch (error) {
//       next(error)
//     }
//   }

// }

// export default new Config()