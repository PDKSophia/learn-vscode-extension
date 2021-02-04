// demo3 自定义显示页
// 具体看 package.json 中的 configuration 和 commands
import * as vscode from 'vscode'
import * as fs from 'fs'
import * as path from 'path'

module.exports = function (context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'beehive.customWelcome',
    () => {
      const panel = vscode.window.createWebviewPanel(
        'welcome',
        '自定义欢迎页',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      )

      const htmlPath = path.join(
        context.extensionPath,
        'src/customWelcome.html'
      )
      let html = fs.readFileSync(htmlPath, 'utf-8')
      panel.webview.html = html
    }
  )

  context.subscriptions.push(disposable)
}
