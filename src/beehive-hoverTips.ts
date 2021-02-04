// demo6 对package.json中的author进行悬停提示
import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
  let disposable = vscode.languages.registerHoverProvider('json', {
    provideHover(document, position, token) {
      const fileName = document.fileName
      const word = document.getText(document.getWordRangeAtPosition(position))
      if (/\/package\.json$/.test(fileName) && /\bauthor\b/.test(word)) {
        return new vscode.Hover('悬停提示: 彭道宽牛逼!')
      }
      return undefined
    },
  })

  context.subscriptions.push(disposable)
}
