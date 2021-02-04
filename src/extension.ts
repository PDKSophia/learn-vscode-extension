import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('your extension "sugar-demo-vscode" is now active!')
  require('./beehive-inputName')(context) // demo1 输入Input内容
  require('./beehive-currentFilePath')(context) // demo2 得到命令参数
  require('./beehive-customWelcome')(context) // demo3 加载自定义WebView欢迎页
  require('./beehive-keybindings')(context) // demo4 快捷键事件注册
  require('./beehive-customMenu')(context) // demo5 自定义菜单
  require('./beehive-hoverTips')(context) // demo6 悬停提示
}

export function deactivate() {}
