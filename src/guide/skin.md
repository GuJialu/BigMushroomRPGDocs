# 皮肤系统
大蘑菇RPG支持全部UI的皮肤替换

## 替换游戏UI图片
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/gameSkin`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 替换文件夹内的图片来更换皮肤(图片名字不变，后缀是jpg或png都可以)
:::tip
为确保不变形，皮肤图宽高比需和原图一致
:::
- 重新启动游戏

:::tip
可以删除gameSkin下的所有UI图片，程序会使用一套默认的中世纪风格UI
:::

### UI对照表
| 图片文件名 | 描述 | 宽高比 |
| --------- | ---- | ----- |
| button | 通用按钮 | 4 : 1 |
| card | 物品卡/选项卡面板 | 2.5 : 3.5 |
| character | 人物卡面板 | 1 : 2 |
| clothe | 衣服装备槽 | 2.5 : 3.5 |
| cover | 封面图/载入图 | 16 : 9 |
| dead | 死亡标记 | 1 : 2 |
| def | 防御图标 | 1 : 1 |
| dialog | 对话框 | 1920 : 280 |
| hat | 帽子装备槽 | 2.5 : 3.5 |
| hp | 生命图标 | 1 : 1 |
| label | 长标签 | 8 : 1 |
| mp | 法力图标 | 1 : 1 |
| panel | 通用面板 | 16 : 9 |
| passive | 被动技能按钮 | 4 : 1 |
| sack | 物品图标 | 1 : 1 |
| spell | 技能图标 | 1 : 1 |
| talk | 对话图标 | 1 : 1 |
| weapon | 武器装备槽 | 2.5 : 3.5 |

### 设置游戏文字颜色
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 使用文本编辑器打开`config.json`
- 修改 "gameTextColor": [ R, G, B, A ]
    - R为红色，允许值[0, 1]
    - G为绿色，允许值[0, 1]
    - B为蓝色，允许值[0, 1]
    - A为透明度，允许值[0, 1]，0为全透明，1为不透明
    - 例："gameTextColor": [ 1, 0, 0, 0.5 ] 为半透明红色
- 重新启动游戏

## 替换剧本编辑器UI图片
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/editorSkin`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 替换文件夹内的图片来更换皮肤(图片名字不变，后缀是jpg或png都可以)
- 重新启动游戏

:::tip
可以删除editorSkin下的所有UI图片，程序会使用一套默认的深色风格UI
:::

### UI对照表
| 图片文件名 | 描述 | 尺寸/宽高比 |
| --------- | ---- | ----- |
| background | 背景 | 1 : 1 |
| button | 通用按钮 | 64px * 64px |
| cross | 叉 | 1 : 1 |
| panel | 面板 | 256px * 256px |

:::tip
通用按钮和面板这两个UI因为使用了border，为确保不变形，**像素高度和宽度**需和原图一致

背景为重复平铺图片，尺寸越大重复密度越小
:::

### 设置剧本编辑器文字颜色
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 使用文本编辑器打开`config.json`
- 修改 "editorTextColor": [ R, G, B, A ]
    - R为红色，允许值[0, 1]
    - G为绿色，允许值[0, 1]
    - B为蓝色，允许值[0, 1]
    - A为透明度，允许值[0, 1]，0为全透明，1为不透明
    - 例："editorTextColor": [ 1, 0, 0, 0.5 ] 为半透明红色
- 重新启动游戏