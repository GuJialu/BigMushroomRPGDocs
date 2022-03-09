# StoryBoard

## Keys
- `ctrl + scroll`: zoom
- `mouse mid button`: drag storyboard
- `right click`: new element menu
- `left click`: select
- `left click drag`: multiple selection
- `Ctrl + Z`: undo
- `Ctrl + Shift + Z` or `Ctrl + Y`: redo

## Resource Path
put images and audios resource in this folder.

## Hero Name
Name of the hero（require corresponding [Character](#character) on StoryBoard）

## StoryBoard Sheet

- Click "+" to create new.
- Drag to sort, the higher the sheet is, the higher [Act Priority](#Act-Priority) its [Acts](#Act) have.

## Search
- Search occurrence of certain text
- short cut，press `ctrl+f` after selecting text

<br>
<br>
<br>
<br>

# Act

The story consists of multiple acts, an act includes
- [Trigger](#trigger)
- [Condition](#condition)
- [Act element](#act-element)
- [Act Line connection slot](#act-line)

## Trigger
Includes talking to character, entering area, character HP=0, etc. If an act is triggered, it will play its act elements.

## Active State
- Acts are active when game start unless it is connected with an Act Line(see [Act Line](#act-line))
- Act will go to inactive state after being played, inactive acts cannot be triggered.

## Condition
- The condition required for the act to be triggered, includes self-defined condition, probability, counter≥, own item, own follower.
- self-defined condition can be activated by [Activate Condition](#activate-condition) and deactivated by [Deactivate Condition](#deactivate-condition).
- Check the NOT toggle to reverse the true/false of the condition.

## Act Elements
- The [act elements](#act-element) to be played when the act is triggered.
- [act elements](#act-element) are played from top to the bottom, drag to sort.

## Act Priority
- When multiple acts can be triggered at the same time, only the act with the highest priority get triggered.
- In a single [StoryBoard Sheet](#storyboard-sheet), the act with higher position has higher priority.
- If there are multiple [StoryBoard Sheets](#storyboard-sheet), the sheet with higher position has higher priority.

## Act Line
- Add act element [Activated Act](#activated-act) in act A.
- Drag a line from the arrow to the left slot of act B.
- The act B will be in inactive state(cannot be triggered) when game start. It will be activated once [Activated Act](#activated-Act) in act A is played.

## Act Loop
- Single act loop
  - Add act element [Activated Act](#activated-act) in act A.
  - Drag a line from the arrow to the left slot of act A itself.
  - Now act A can be triggered again and again.
- Multiple acts loop
  - Connect multiple acts with [Activated Act](#activated-act) to form a loop.
  - Create an entrance act c with [Activated Act](#activated-act) inside.
  - Connect the [Activated Act](#activated-act) in c to the start act of the loop.
  - Now the loop can be triggered from the entrance and played in a loop.

## Underlying Mechanism 
- When the player performs actions may trigger acts (ex: talk to character, enter an area). 
- The system scans all acts in order of [Act Priority](#act-priority).
- If  
  1. Has the right trigger type.
  2. The act is in [active state](#active-state).
  3. All of the act's conditions are meet.
- Play the act's act element.
- Set the act to be inactive.
- Stop scanning

<br>
<br>
<br>
<br>

# Act Element

## 激活条件
激活一个[条件](./act.html#条件)
| 参数 | 描述 |
| --- | ----------- |
| 条件名 | 条件的名字，制作者自定 |

## 激活剧目
激活一个[剧目](./act.html#剧目)，使其可以被激发
| 参数 | 描述 |
| --- | ----------- |
| 条件名 | 条件的名字，制作者自定 |

## 移除条件
移除一个[条件](./act.html#条件)
| 参数 | 描述 |
| --- | ----------- |
| 条件名 | 需要移除的条件的名字 |

## 增加计数
增加一个计数器的值，用于[条件](./act.html#条件)判断
| 参数 | 描述 |
| --- | ----------- |
| 计数名 | 计数器的名字 |
| 值 | 增加的值，可为负 |

## 选项
给玩家选择的选项
- `点击编辑`
- `点击“+”按钮添加选项`
- `输入选项内容`
- `使用箭头连接该选项激活的剧目`

## 传送人物
瞬间传送某个[人物](./character.html)到某个[地点](#地点)
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 移动人物的名字 |
| 地点名 | 目的地地点名 |

>可以通过传送主角实现地图间的切换

## 移动人物
移动某个[人物](./character.html)到某个[地点](#地点)
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 移动人物的名字 |
| 地点名 | 目的地地点名 |

>人物会随机移动到目的地地点范围内的某个点上，因此可以用目的地地点范围的大小来调节移动路径的随机性

## 人物跟随人物
某个[人物](./character.html)成为某个人物的随从
| 参数 | 描述 |
| --- | ----------- |
| 随从名 | 随从的名字 |
| 主人名 | 主人的名字 |

## 人物停止跟随人物
某个[人物](./character.html)停止成为某个人物的随从
| 参数 | 描述 |
| --- | ----------- |
| 随从名 | 随从的名字 |
| 主人名 | 主人的名字 |

## 改变人物立绘
某个[人物](./character.html)的立绘
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 人物的名字 |
| 图片文件名 | 新立绘图片文件名含后缀 |

## 对话
- `点击编辑`
- `点击“+”按钮添加对话`
- `输入说话人物名字`
- `输入说话内容`
- `输入配音音频文件名（可选）`
- `输入自动跳过时间（不填则为鼠标点击/空格跳过）`
- `输入特殊立绘图片名（可选）`

## 展示图片
| 参数 | 描述 |
| --- | ----------- |
| 图片文件名 | 展示的图片文件名（含后缀），图片文件需在[素材路径](#素材路径)下 |
| 展示时长 | 展示的时长（秒）不填或0则为鼠标点击跳过 |

## 展示背景
展示一张图片，只能被[移除背景](#移除背景)移除。主要用于在[对话](#对话)/[选项](#选项)中添加背景。
| 参数 | 描述 |
| --- | ----------- |
| 图片文件名 | 展示的图片文件名（含后缀），图片文件需在[素材路径](#素材路径)下 |

## 移除背景
移除当前展示的背景。

## 更换BGM
| 参数 | 描述 |
| --- | ----------- |
| 音频文件名 | 音频文件名，不填则为停止播放当前BGM |

## 交易
| 参数 | 描述 |
| --- | ----------- |
| 交易对象人物名 |  |
| 免费 | 免费交易不需要花钱 |

>交易中购买物品需支付等于物品价值的金钱，出售则获得物品价值80%的金钱

## 获得金钱
某个[人物](./character.html)获得金钱
| 参数 | 描述 |
| --- | ----------- |
| 人物名 |  |
| 金钱数 |  |

## 获得物品
某个[人物](./character.html)获得[物品](./item.html)
| 参数 | 描述 |
| --- | ----------- |
| 人物名 |  |
| 物品名 |  |

## 失去物品
某个[人物](./character.html)失去[物品](./item.html)
| 参数 | 描述 |
| --- | ----------- |
| 人物名 |  |
| 物品名 |  |

## 获得并装备物品
某个[人物](./character.html)获得并装备[物品](./item.html)，如果装备槽位已有装备，则旧装备放回背包中
| 参数 | 描述 |
| --- | ----------- |
| 人物名 |  |
| 物品名 |  |
| 装备槽位 | 包括衣，帽，武器一，武器二 |

## 停止装备物品
某个[人物](./character.html)停止装备[物品](./item.html)，并放回背包中
| 参数 | 描述 |
| --- | ----------- |
| 人物名 |  |
| 装备槽位 | 包括衣，帽，武器一，武器二 |

## 交付金钱物品
请求主角交付金钱或物品
| 参数 | 描述 |
| --- | ----------- |
| 金钱数 |  |
| 物品 |  |
|成功|连接交付成功将激活的[剧目](./act.html)|
|失败|连接交付失败将激活的[剧目](./act.html)|

## 战斗
展开[战斗](./combat.html)
| 参数 | 描述 |
| --- | ----------- |
| 敌方首领人物名 |  |
| 胜利箭头 | 连接战斗胜利将激活的[剧目](./act.html) |
| 失败箭头 | 连接战斗失败将激活的[剧目](./act.html) |
| 背景图 | 战斗背景图片名含后缀 |

## 脱离当前战斗
脱离当前进行中的战斗，定位到某一场具体战斗见[战斗中剧情](./act.html#战斗中剧情)

## 获得技能
| 参数 | 描述 |
| --- | ----------- |
| 人物名 |  |
| 技能名 |  |

## 失去技能
| 参数 | 描述 |
| --- | ----------- |
| 人物名 |  |
| 技能名 |  |

## 援兵
给当前进行中的战斗添加援兵，定位到某一场具体战斗见[战斗中剧情](./act.html#战斗中剧情)
| 参数 | 描述 |
| --- | ----------- |
| 援兵阵营 | 我方/敌方  |
| 援兵人物名 |  |

## 切换主角
将某个[人物](./character.html)切换为主角
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 切换为主角的人物的名字 |

>切换主角后注意保证主角相关剧目的正常触发，见[主角代号](./character.html#主角代号) 

## 杀死人物
杀死某个[人物](./character.html)
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 杀死人物的名字 |

## 复活人物
复活某个[人物](./character.html)
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 复活人物的名字 |

## 更换地图图片
更换地图的图片
| 参数 | 描述 |
| --- | ----------- |
| 图片文件名 | |

## 修改景物图片
| 参数 | 描述 |
| --- | ----------- |
| 景物名 | |
| 图片文件名 | 不填为移除当前景物的图片 |

## 激活障碍
| 参数 | 描述 |
| --- | ----------- |
| 障碍名 | |

## 禁用障碍
| 参数 | 描述 |
| --- | ----------- |
| 障碍名 | |

## 移动相机到地点
| 参数 | 描述 |
| --- | ----------- |
| 地点名 | |

## 复位相机
| 参数 | 描述 |
| --- | ----------- |
| | |

## 震动相机
| 参数 | 描述 |
| --- | ----------- |
| | |

## 轨迹特效
| 参数 | 描述 |
| --- | ----------- |
| 起点| |
| 终点| |
| 特效类型| |

## 特效
| 参数 | 描述 |
| --- | ----------- |
| 位置| |
| 特效类型| |

## 地图上展示图片
| 参数 | 描述 |
| --- | ----------- |
| 位置| |
| 图片名| |
| 放大速率| |
| 时长| |

## 抵近目标
| 参数 | 描述 |
| --- | ----------- |
| 移动的人物名| |
| 终点| |

## 抵近目标
| 参数 | 描述 |
| --- | ----------- |
| 移动的人物名| |
| 终点| |

## 显示队友
在主角位置显示队友
| 参数 | 描述 |
| --- | ----------- |
| 队友名| |

## 停止显示队友
停止在主角位置显示队友
| 参数 | 描述 |
| --- | ----------- |

<br>
<br>
<br>
<br>

# Character

## Creation
- `right click menu` -> `+Character`

## Parameters
| Parameter | Description |
| --- | ----------- |
| Title | character title |
| Name | character name. If the name contains "\*", the text after * will not be displayed in the game(see [Walk-on](#walk-on)) |
| Image file | relative path of image in the [Resource Path](#resource-path) |
| Hat | [item](#item) of type Hat the character equipping |
| Clothe | [item](#item) of type Clothe the character equipping |
| Weapon1 | [item](#item) of type Weapon the character equipping |
| Weapon1 | [item](#item) of type Weapon the character equipping |
| Item | item in the character's backpack |
| spell/passive | [spell](#spell) and [passive](#passive) of the character|
| follower | follower character |

## Follower
- Followers will join [combat](#combat) with their leader.
- Follower's follower is not supported to prevent dead loop.

## Walk-on
Some characters in the story don't have names，for example four guards of the city gate. Set their name to be

guard\*1, guard\*2, guard\*3, guard\*4

In the game，text behind\* will be hide, their names will all be "guard" 

## Hero code
In order to make sure hero related acts be triggered correctly after [Switch Hero](#switch-hero), you can use hero code `--hero--` to represent current hero in the game.

<br>
<br>
<br>
<br>

# Item

## Creation
- `Right click menu` -> `Item`

## 参数
| 参数 | 描述 |
| --- | ----------- |
| 名字 | 物品名字 |
| 图片文件 | 图片文件 |
| 物品描述 | 游戏中显示的物品描述 |
| 种类 | 物品的种类，包括衣，帽，武器，其他。作用见[人物](./character.html#参数) |
| 武器种类 | 当物品为武器时，用户可自定义武器的种类（刀剑，暗器等）。[技能](./spell.html#参数)可以设置需要装备某种种类的武器才可发动。 |
| 价值 | 在[交易](./act-element.html#交易)中购买此物品所需的金钱 |
| 技能/被动 | 此物品提供的[技能](./spell.html)/[被动](./passive.html)名字，如果物品为装备，只有在装备它时才能获得它提供的技能/被动|

>如有书信类的物品可直接把内容写在描述中便于玩家阅读

<br>
<br>
<br>
<br>

# 地图

## 创建
- `右键菜单` -> `+地图`
- `输入地图名字`
- `点击编辑`： 进入地图编辑器
- `输入地图图片文件名含后缀`： 加载地图图片
- `输入缩放比例（默认为1）`： 调整地图图片大小
- `+地点`： 放置地点
- `+障碍`： 放置[障碍物](#障碍物)
- `+障碍矮`： 放置[障碍物矮](#障碍物)
- `障碍橡皮擦`： 删除[障碍物](#障碍物)

## 地点

地点是地图上的圆形区域，当玩家进入地点时会显示所有在该地点的[人物](./character.html)。

| 参数 | 描述 |
| --- | ----------- |
| 名字 | 输入地点名字 |

## 景物
地图上的图片，可以在游戏过程中使用剧情元素：[修改景物图片](#修改景物图片)动态修改

## 人物
地图人物，放置后输入在故事板中定义的人物名。

## 物品
物品，分可拾取和不可拾取。

## 障碍物

障碍是阻止玩家移动和交互（对话，捡东西）的墙壁，“障碍矮”仅阻止移动不阻止交互。
- `+障碍`或`+障碍矮`：开始放置
- `鼠标左键`：开始拉线
- `鼠标左键`：放置
- `鼠标右键`：暂停拉线
- `Esc`：退出放置
- `点击放置好的障碍`：命名障碍，可以在游戏过程中使用[剧情元素](./act-element.html)：[激活障碍](./act-element.html#激活障碍)和[禁用障碍](./act-element.html#禁用障碍)禁用或激活, 障碍初始为激活状态

<br>
<br>
<br>
<br>

# 技能

## 创建
- `右键菜单` -> `+技能`

## 参数
| 参数 | 描述 |
| --- | ----------- |
| 名字 | 输入技能名字 |
| 技能描述 | 游戏中显示的技能描述 |
|远程| 是否为远程技能，发动远程技能时不会成为[前排](./combat.html#前排) |
| 武器种类 | 技能所需的武器种类，用户自定义。如不为空则该技能需装备对应种类的[物品](./item.html)才可发动。|
| 技能单元队列 | `点击+按钮添加技能单元`，技能效果由多个技能单元组成，拖动可排序。见[技能单元](./spell-unit.html) |

<br>
<br>
<br>
<br>

# 被动

## 创建
- `右键菜单` -> `+被动`

## 参数
| 参数 | 描述 |
| --- | ----------- |
| 名字 | 输入被动名字 |
| 被动描述 | 游戏中显示的被动描述 |
| 种类 | 被动的触发种类 |
| 技能单元队列 | `点击+按钮添加技能单元`，技能效果由多个技能单元组成，发动时由上往下依次发动，拖动可排序。见[技能单元](./spell-unit.html) |

<br>
<br>
<br>
<br>

# 技能单元
技能单元由作用对象+多个效果单元组成，由上往下依次发动，拖动可排序。

## 对象
- 自身
- 单体
- 己方群体
- 己方群体（除自身）
- 敌方群体
- 全体
- 全体（除自身）
- 伤害来源（仅存在于受攻击时触发的被动）
- 伤害目标（仅存在于攻击时触发的被动）

>群体类目标可设置最大目标数，如最大目标数<目标群体人数则随机从目标群体中抽取=最大目标数的单位作为目标

## 条件
条件决定了效果是否触发，如不满足则跳过此效果

|类型|参数|
| --- | ----------- |
|概率（独立）|触发的概率（小数），不填为0|
|概率（互斥）|触发的概率（小数），在此技能单元内，会于其他概率（互斥）条件互斥，例如：有50%互斥概率造成1伤害，50%互斥概率造成2伤害，则只会有两种结果，造成1伤害和造成2伤害|
|拥有被动|拥有的被动名字|
|护甲≥|护甲量|
|内力≥|内力量|

#### 对象
判定条件的对象，包括施法者，目标

#### NOT选项
选择之后条件判断会反着来，比如拥有被动a将变为不拥有被动a

## 效果
对目标造成的技能效果

>### 伤害类的技能效果可选择伤害类型
>- 物理伤害
>- 内力伤害
>- 真实伤害：没有随机波动，无视目标的护甲，也不会触发造成/受到伤害时触发的被动
>#### 无来源
>- 勾选后伤害没有来源，因此不会触发对伤害来源造成的效果
>### 轨迹特效，打击特效
>粒子特效，其中轨迹特效可以添加抛射物的图片（可以自己制作飞刀之类的图片加上去，图片上方为抛射方向）

## 例子
![技能](../../assets/spell.jpg)

<br>
<br>
<br>
<br>

# 战斗系统

## 流程
1. 主角和主角的[随从](./character#随从)，敌人和敌人的[随从](./character#随从)进入战斗
2. 敌方行动
3. 友方行动
4. 己方（玩家）行动

## 前排
- 前排为战斗中双方位置在前的单位。
- 当一个战斗单位发动非远程的[技能](./spell.html)时，会成为前排。
- 在敌方场上存在前排单位时，单体[技能](./spell.html)的目标只能是对方的前排。

<br>
<br>
<br>
<br>

# 战斗AI
战斗AI由多个行为单元组成，行动时由上往下依次检测，一旦条件符合就触发该行为定义的技能并停止向下检测，拖动可排序。

## 创建
- `右键菜单` -> `+战斗AI`

<br>
<br>
<br>
<br>

# 卡池
随机工具，可以用于随机人物，物品，技能， 地点。Roguelike玩法！

## 创建
- `右键菜单` -> `+卡池`
- 点击 +，添加文本-概率面板

## 参数
| 参数 | 描述 |
| --- | ----------- |
| 名字 | 输入卡池名字 |
| 文本-概率队列 |  |

## 文本-概率面板
- 卡池可能返回的文本和返回该名字的概率
- 概率请输入小数，所有概率的合应等于1。超过的部分将被忽略。

## 例子

### 随机物品奖励
- |卡池名字: 随机奖励|
  - |弯曲的皮甲  概率：0.99|
  - |豪华的皮甲  概率：0.01| 

- [剧情元素](./act-element.html)：[获得物品](./act-element.html#获得物品) “随机奖励”

  - 在执行该剧情元素有99%的概率获得弯曲的皮甲，1%的概率获得豪华的皮甲。

### 随机人物
- |卡池名字: 随机敌人|
  - |史莱姆  概率：0.99|
  - |史莱姆王  概率：0.01| 

- [剧情元素](./act-element.html)：[战斗](./act-element.html#战斗)， 敌方首领：“随机敌人”
  - 在执行该剧情元素有99%的概率和史莱姆战斗，1%的概率和史莱姆王战斗。

<br>
<br>
<br>
<br>

# 客制化与发布
更换游戏皮肤，屏蔽编辑器和剧本选择来客制化您的游戏便于发布

## 更换游戏主题图
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 将主题图片拖动至`BigMushroomRPG_Data/streamingAssets/config/`并重命名为cover(图片后缀不变)
- 重新启动游戏，游戏主页图片和加载图片会被替换为cover

>为确保主题图不变形，主题图宽高比需为 16:9

## 皮肤系统
大蘑菇RPG支持全部UI的皮肤替换

### 替换游戏UI图片
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/gameSkin`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 替换文件夹内的图片来更换皮肤(图片名字不变，后缀是jpg或png都可以)
- 重新启动游戏

>为确保不变形，皮肤图宽高比需和原图一致

>可以删除gameSkin下的所有UI图片，程序会使用一套默认的中世纪风格UI

#### UI对照表
| 图片文件名 | 描述 | 宽高比 |
| --------- | ---- | ----- |
| button | 通用按钮 | 4 : 1 |
| card | 物品卡/选项卡面板 | 2.5 : 3.5 |
| clothe | 衣服装备槽 | 2.5 : 3.5 |
| cover | 封面图/载入图 | 16 : 9 |
| dead | 死亡标记 | 1 : 2 |
| def | 防御图标 | 1 : 1 |
| dialog | 对话框 | 1920 : 240 |
| hat | 帽子装备槽 | 2.5 : 3.5 |
| label | 长标签 | 8 : 1 |
| mp | 法力图标 | 1 : 1 |
| panel | 通用面板 | 16 : 9 |
| passive | 被动技能按钮 | 4 : 1 |
| sack | 物品图标 | 1 : 1 |
| spell | 技能图标 | 1 : 1 |
| talk | 对话图标 | 1 : 1 |
| weapon | 武器装备槽 | 2.5 : 3.5 |

#### 设置游戏文字颜色
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 使用文本编辑器打开`config.json`
- 修改 "gameTextColor": [ R, G, B, A ]
    - R为红色，允许值[0, 1]
    - G为绿色，允许值[0, 1]
    - B为蓝色，允许值[0, 1]
    - A为透明度，允许值[0, 1]，0为全透明，1为不透明
    - 例："gameTextColor": [ 1, 0, 0, 0.5 ] 为半透明红色
- 重新启动游戏

### 替换剧本编辑器UI图片
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/editorSkin`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 替换文件夹内的图片来更换皮肤(图片名字不变，后缀是jpg或png都可以)
- 重新启动游戏

>可以删除editorSkin下的所有UI图片，程序会使用一套默认的深色风格UI

#### UI对照表
| 图片文件名 | 描述 | 尺寸/宽高比 |
| --------- | ---- | ----- |
| background | 背景 | 1 : 1 |
| button | 通用按钮 | 64px * 64px |
| cross | 叉 | 1 : 1 |
| panel | 面板 | 256px * 256px |

>通用按钮和面板这两个UI因为使用了border，为确保不变形，**像素高度和宽度**需和原图一致

>背景为重复平铺图片，尺寸越大重复密度越小

#### 设置剧本编辑器文字颜色
- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/config/`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 使用文本编辑器打开`config.json`
- 修改 "editorTextColor": [ R, G, B, A ]
    - R为红色，允许值[0, 1]
    - G为绿色，允许值[0, 1]
    - B为蓝色，允许值[0, 1]
    - A为透明度，允许值[0, 1]，0为全透明，1为不透明
    - 例："editorTextColor": [ 1, 0, 0, 0.5 ] 为半透明红色
- 重新启动游戏

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

<br>
<br>
<br>
<br>

# 官方模板剧本
官方提供的剧本案例，可以学习参考

- 进入进入程序文件夹内`BigMushroomRPG_Data/streamingAssets/template/`文件夹。（程序文件夹路径可在[素材路径](./storyboard.html#素材路径)中查看）
- 将其中的剧本复制到`BigMushroomRPG_Data/streamingAssets/myStories/`
- 重新启动游戏，剧本模板就可以编辑和游玩了
