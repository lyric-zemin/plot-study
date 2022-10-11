const path = require('path')

module.exports = (api, option) => {
  api.registerCommand(
    'plop',
    {
      description: '自动生成模板文件',
      usage: 'vue-cli-service plop'
    },
    () => {
      /** 绕过 Bypassing Prompts */
      process.argv = process.argv.slice(1)
      const { Plop, run } = require('plop')
      Plop.launch(
        {
          configPath: path.resolve(
            __dirname,
            './generator/template/generators/plopfile.js'
          )
        },
        run
      )
    }
  )
}
