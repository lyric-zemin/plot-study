import * as fs from 'fs'
import * as path from 'path'

/** 基础生成路径 */
export const baseGeneratorPath = path.join(process.cwd(), './src')
export const pathExists = (path: string) => fs.existsSync(path)
export const properCase = (str: string) =>
  str.slice(0, 1).toUpperCase() + str.slice(1)
