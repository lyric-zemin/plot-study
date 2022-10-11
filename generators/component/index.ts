/**
 * Component Generator
 */

import { ActionType } from 'plop'
import * as inquirer from 'inquirer'
import * as path from 'path'
import * as fs from 'fs'

inquirer.registerPrompt('directory', require('inquirer-directory'))

const baseGeneratorPath = path.join(process.cwd(), './src')
const pathExists = (path: string) => fs.existsSync(path)
const properCase = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1)

export enum ComponentProptNames {
  componentName = 'componentName',
  path = 'path',
  preprocessorCss = 'preprocessorCss'
}

type Answers = { [P in ComponentProptNames]: string }

export const componentGenerator = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.componentName,
      message: 'What should it be called?'
    },
    {
      type: 'directory',
      name: ComponentProptNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`
    },
    {
      type: 'list',
      name: ComponentProptNames.preprocessorCss,
      default: 'scss',
      message: '选择css预处理器',
      choices: ['scss', 'sass', 'less']
    }
  ],
  actions: data => {
    const answers = data as Answers

    const componentPath = `${baseGeneratorPath}/${answers.path}/${properCase(
      answers.componentName
    )}.vue`

    if (pathExists(componentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`)
    }
    const actions: ActionType[] = [
      {
        type: 'add',
        path: componentPath,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true
      }
    ]

    return actions
  }
}
