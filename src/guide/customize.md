# 发布与客制化
更换游戏主页图片和加载图片，屏蔽编辑器和剧本选择来客制化您的游戏便于发布

## 更换游戏主题图
- 进入`streamingAssets/config/`文件夹
- 将主题图片拖动至`streamingAssets/config/`并重命名为cover(图片后缀不变)
- 重新启动游戏，游戏主页图片和加载图片会被替换为cover

:::tip
为确保主题图不变形，主题图宽高比需为 16:9
:::

## 屏蔽编辑器
- 进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/`文件夹
- 使用文本编辑器打开`config.json`
- 将`disableEditor`值改为1
- 重新启动游戏，编辑器将不再显示

## 屏蔽剧本选择
如果游戏只有一个剧本，可以屏蔽剧本选择让玩家直接进入存档选择
- 把多余的剧本删掉只留下一个需要的剧本
- 进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/`文件夹
- 使用文本编辑器打开`config.json`
- 将`disableScriptPicking`值改为1
- 重新启动游戏，点击开始游戏将直接进入存档选择

## 费用和版权
发布使用大蘑菇RPG制作的游戏是免费的，大蘑菇RPG只是制作工具，不占有使用其制作的游戏的版权