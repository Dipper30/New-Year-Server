import { role } from '../config/auth'
import { Account } from '../types/common'
// import { User, HomeCustomer, Admin, BusinessCustomer } from '../types/User'
import BaseService from './BaseService'
import { encryptMD5, getTS, omitFields } from '../utils/tools'
import fs from 'fs'
import { FileException } from '../exception'
import { errCode } from '../config'

const models = require('../../db/models/index.js')
const { sequelize } = require('../../db/models')
const {
  User: UserModel,
  Home_Customer: Home_Customer,
  Business_Customer: Business_Customer,
  Admin: AdminModel,
  Access: AccessModel,
} = models

// const Op = Sequelize.Op

class File extends BaseService {
  constructor () {
    super()
  } 

  async writeProductImage (files: any, id: number): Promise<any> {
    try {
      let removed = false
      if (!Array.isArray(files)) files = [files]
      let len = files.length
      for (let i = 0; i < len; i++) {
        const file = files[i]
        const { mimetype, data, name } = file
        const fileName = name.split('.')[0]
        const basePath = `file/img/product/${id}`
        const fileType = mimetype.split('/')[1]
        const ts = getTS()
        const url = `${basePath}/${ts}_${fileName}.${fileType}`
        if (!removed) {
          const rm = await this.delDirRecursive(url)
          if (!rm) throw new FileException(errCode.DIR_BUILD_ERROR)
          removed = true
        }
        await this.writeFile(url, data)
        if (i == len - 1) return true
      }
      
    } catch (error) {
      return error
    }
  }

  async writeFile (url: string, f: any) {
    try {
      const dir = await this.mkDirRecursive(url)
      if (!dir) throw new FileException(errCode.DIR_BUILD_ERROR)

      return fs.writeFile(url, f, (err: any) => {
        if (err) {
          return false
        } else {
          return true
        }
      })
      
    } catch (error) {
      return error
    }
  }

  async mkDirRecursive (path: string) {
    try {
      const ps = path.split('/')
      ps.pop() // pop file name
      let [currentPath, ...rest] = ps
      if (!fs.existsSync(currentPath)) fs.mkdirSync(currentPath)
      for (let p of rest) {
        currentPath += `/${p}`
        if (!fs.existsSync(currentPath)) fs.mkdirSync(currentPath)
      }
      return true
    } catch (error) {
      return false
    }
  }

  // remove directory recursively
  async delDirRecursive (path: string){
    try {
      let dirArr = path.split('/')
      dirArr.pop()
      const dir = dirArr.join('/')
      let files = []
      if (fs.existsSync(dir)) {
        files = fs.readdirSync(dir)
        files.forEach((file, index) => {
          const curPath = dir + '/' + file
          if (fs.statSync(curPath).isDirectory()) {
            this.delDirRecursive(curPath) // remove dir recursively
          } else {
            fs.unlinkSync(curPath) // remove file
          }
        })
        return true
        // fs.rmdirSync(path) // delete dir itself
      } else return true
    } catch (error) {
      return false
    }
  }

  async readProductImage (id: number) {
    try {
      const dir = `file/img/product/${id}`
      if (!fs.existsSync(dir)) throw new FileException(errCode.DIR_NOT_EXISTS)
      const files = fs.readdirSync(dir)
      const res: any[] = []
      files.forEach((item, index) => {
        const path = dir + '/' + item
        const type = item.split('.')[1]
        const base64data = fs.readFileSync(path, { encoding: 'base64' })
        res.push({ type, data: base64data })
      })
      return res
    } catch (error) {
      return false
    }
  
  }

}

export default new File()