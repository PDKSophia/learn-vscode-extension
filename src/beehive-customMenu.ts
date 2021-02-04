// demo5 自定义菜单
// 注意看 package.json 中的 menus
import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('beehive.customMenu', () => {
    vscode.window.showInformationMessage("I' am custom menu !")
  })

  context.subscriptions.push(disposable)
}
