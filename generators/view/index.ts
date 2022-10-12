import { PlopGeneratorConfig, ActionType } from 'node-plop'
import { pathExists, baseGeneratorPath } from '../util'

export enum ViewtProptNames {
  viewName = 'viewName',
  path = 'path',
  cssPreprocessor = 'cssPreprocessor'
}

type Answers = { [P in ViewtProptNames]: string }

export const viewGenerator: PlopGeneratorConfig = {
  description: '新增一个页面',
  prompts: [
    {
      type: 'input',
      name: ViewtProptNames.viewName,
      message: '页面名称'
    },
    {
      type: 'directory',
      name: ViewtProptNames.path,
      message: '页面位置?',
      // @ts-ignore
      basePath: `${baseGeneratorPath}`
    },
    {
      type: 'list',
      name: ViewtProptNames.cssPreprocessor,
      default: 'css',
      message: 'css预处理器?',
      choices: ['css', 'scss', 'sass', 'less', 'stylus']
    }
  ],
  actions: (answers: Answers) => {
    const viewPath = `${answers.viewName}/index.vue`
    const fullViewtPath = `${baseGeneratorPath}/${answers.path}/${viewPath}`

    if (pathExists(fullViewtPath)) {
      throw new Error(`页面 '${viewPath}' 已存在`)
    }

    const actions: ActionType[] = [
      {
        type: 'add',
        path: fullViewtPath,
        templateFile: './view/index.tsx.hbs',
        abortOnFail: true
      }
    ]

    return actions
  }
}
