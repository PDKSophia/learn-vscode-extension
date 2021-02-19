import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('your extension "sugar-demo-vscode" is now active!')
  require('./beehive-inputName')(context) // demo1 输入Input内容
  require('./beehive-currentFilePath')(context) // demo2 得到命令参数
  require('./beehive-customWelcome')(context) // demo3 加载自定义WebView欢迎页
  require('./beehive-keybindings')(context) // demo4 快捷键事件注册
  require('./beehive-customMenu')(context) // demo5 自定义菜单
  require('./beehive-hoverTips')(context) // demo6 悬停提示
  require('./beehive-sidebar')(context) // demo8 自定义侧边栏入口和面板
  require('./beehive-customUserConfig')(context) // demo10 自定义首选项设置
}

export function deactivate() {}
