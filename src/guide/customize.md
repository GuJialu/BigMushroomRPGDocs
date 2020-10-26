# 客制化
更换游戏主页图片和加载图片，屏蔽编辑器来客制化您的游戏便于发布

## 更换游戏主题图
- 进入`streamingAssets/config/`文件夹
- 将主题图片拖动至`streamingAssets/config/`并重命名为cover(图片后缀不变)
- 重新启动游戏，游戏主页图片和加载图片会被替换为cover

:::tip
为确保主题图不变形，主题图宽高比需为 16:9
:::

## 屏蔽编辑器
- 进入`streamingAssets/config/`文件夹
- 使用文本编辑器打开`config.json`
- 将`disableEditor`值改为1
- 重新启动游戏，编辑器将不再显示