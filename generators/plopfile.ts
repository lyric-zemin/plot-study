import * as inquirer from 'inquirer'
import { componentGenerator } from './component'
import { viewGenerator } from './view'
import type { NodePlopAPI } from 'plop'

inquirer.registerPrompt('directory', require('inquirer-directory'))

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('view', viewGenerator)
}
