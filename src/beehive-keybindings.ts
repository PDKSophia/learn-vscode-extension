// demo4 快捷键事件注册
// 具体看 package.json 中的 contributes 和 keybindings
// when 设置在编辑器聚焦时才注册快捷键
import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'beehive.keybindings',
    () => {
      vscode.window.showInformationMessage('keybindings touched !')
    }
  )

  context.subscriptions.push(disposable)
}
