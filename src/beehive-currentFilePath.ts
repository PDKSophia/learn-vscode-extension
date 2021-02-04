// demo2 事件注册回传uri
import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'beehive.getCurrentFilePath',
    (uri: any) => {
      vscode.window.showInformationMessage(
        `getCurrentFilePath：${uri ? uri.path : 'null'}`
      )
    }
  )

  context.subscriptions.push(disposable)
}
