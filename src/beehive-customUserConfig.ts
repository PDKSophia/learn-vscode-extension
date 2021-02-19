import * as vscode from 'vscode'

module.exports = function (context: vscode.ExtensionContext) {
  //注册命令
  vscode.commands.registerCommand('beehive.customUserConfig', () => {
    // 获取用户配置的版本设置
    const matchConfig = vscode.workspace
      .getConfiguration()
      .get('sugar-demo-vscode.matchConfig')
    if (matchConfig === 'lowMatch') {
      console.log('低配')
    } else if (matchConfig === 'middleMatch') {
      console.log('中配')
    } else if (matchConfig === 'highMatch') {
      console.log('高配')
    } else {
      vscode.window.showErrorMessage(`unknown error`)
    }
  })
}
