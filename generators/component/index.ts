/**
 * Component Generator
 */

import { PlopGeneratorConfig, ActionType } from 'node-plop'
import { pathExists, properCase, baseGeneratorPath } from '../util'

export enum ComponentProptNames {
  componentName = 'componentName',
  path = 'path',
  cssPreprocessor = 'cssPreprocessor'
}

type Answers = { [P in ComponentProptNames]: string }

export const componentGenerator: PlopGeneratorConfig = {
  description: '新增一个组件',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.componentName,
      message: '组件名?'
    },
    {
      type: 'directory',
      name: ComponentProptNames.path,
      message: '组件位置?',
      // @ts-ignore
      basePath: `${baseGeneratorPath}`
    },
    {
      type: 'list',
      name: ComponentProptNames.cssPreprocessor,
      default: 'css',
      message: 'css预处理器?',
      choices: ['css', 'scss', 'sass', 'less', 'stylus']
    }
  ],
  actions: data => {
    const answers = data as Answers
    const fullComponentName = `${properCase(answers.componentName)}.vue`
    const componentPath = `${baseGeneratorPath}/${answers.path}/${fullComponentName}`

    if (pathExists(componentPath)) {
      throw new Error(`组件 '${fullComponentName}' 已存在`)
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
