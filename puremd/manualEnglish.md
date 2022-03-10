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
## Trigger
Includes talking to character, entering area, character HP=0, etc. If an act is triggered, it will play its act elements.

## Active State
- Acts are active when game start unless it is connected with an Act Line(see [Act Line](#act-line))
- Act will go to inactive state after being played, inactive acts cannot be triggered.

## Condition
- The condition required for the act to trigger, includes self-defined condition, probability, counter≥, own item, own follower.
- self-defined condition can be activated by [Activate Condition](#activate-condition) and deactivated by [Deactivate Condition](#deactivate-condition).
- Check the NOT toggle to reverse the true/false of the condition.

## Act Elements
- The [act elements](#act-element) to play when the act is triggered.
- [Act elements](#act-element) play from top to the bottom, drag to sort.

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
  - Now act A can trigger again and again.
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
激活一个[自定义条件](#条件)

## 移除条件
移除一个[条件](#条件)

## 激活剧目
激活一个[剧目](./#剧目)，使其进入可激发态
## 增加计数
增加一个计数器的值，用于[条件](./act.html#条件)判断

## 选项
给玩家选择的选项
- `点击编辑`
- `点击“+”按钮添加选项`
- `输入选项内容`
- `使用箭头连接该选项激活的剧目`

## 传送人物
瞬间传送某个[人物](./character.html)到某个[地点](#地点)
>可通过传送主角实现地图间的切换

## 移动人物
移动某个[人物](./character.html)到某个[地点](#地点)，人物和地点需在同一张地图上。
>人物会随机移动到目的地地点范围内的某个点上，因此可以用目的地地点范围的大小来调节移动路径的随机性

## 人物跟随人物
某个[人物](./character.html)成为某个人物的[随从](#随从)

## 人物停止跟随人物
某个[人物](./character.html)停止成为某个人物的[随从](#随从)

## 改变人物立绘

## 对话
- `点击编辑`
- `点击“+”按钮添加对话`
- `输入说话人物名字`
- `输入说话内容`
- `输入配音音频文件名（可选）`
- `输入自动跳过时间（不填则为鼠标点击/空格跳过）`
- `输入特殊立绘图片名（可选）`

## 展示图片
展示图片，点击跳过

## 展示背景
展示一张图片，只能被[移除背景](#移除背景)移除。

## 移除背景
移除当前展示的背景。

## 更换BGM
不填为停止播放当前BGM

## 交易
>交易中购买物品需支付等于物品价值的金钱，出售则获得物品价值80%的金钱

## 获得金钱
某个[人物](./character.html)获得金钱
## 获得物品
某个[人物](./character.html)获得[物品](./item.html)
## 失去物品
某个[人物](./character.html)失去[物品](./item.html)
## 获得并装备物品
某个[人物](./character.html)获得并装备[物品](./item.html)，如果装备槽位已有装备，则旧装备放回背包中
## 停止装备物品
某个[人物](./character.html)停止装备[物品](./item.html)，并放回背包中
## 交付金钱物品
请求主角交付金钱或物品
## 战斗
展开[战斗](./combat.html)
## 脱离当前战斗
## 获得技能
## 失去技能
## 援兵
给当前进行中的战斗添加援兵

## 切换主角
将某个[人物](./character.html)切换为主角
>切换主角后注意保证主角相关剧目的正常触发，见[主角代号](./character.html#主角代号) 

## 杀死人物
## 复活人物
## 更换地图图片
## 修改景物图片
不填为移除景物当前的图片
## 激活障碍
## 禁用障碍
## 移动相机到地点
## 复位相机
## 震动相机
## 轨迹特效
## 特效
## 地图上展示图片
## 抵近目标
## 显示队友
在主角位置显示队友
## 停止显示队友
停止在主角位置显示队友

<br>
<br>
<br>
<br>

# Marco
Marco is a set of act elements to be reused. It also accepts parameters. Use [Play Marco](#play-marco) to play the marco.

## Creation
- `right click` -> `Marco`

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
To make sure hero related acts trigger correctly after [Switch Hero](#switch-hero), you can use hero code `--hero--` to represent current hero in the game.

<br>
<br>
<br>
<br>

# Item

## Creation
- `Right click menu` -> `Item`

## Parameters
| Parameter | description|
| --- | ----------- |
| Name | Item name |
| Image file | relative path of image in the [Resource Path](#resource-path) |
| Description | Item description |
| Type | Including Hat, Clothe, Weapon |
| Weapon Type | If the item is of type weapon, you can define its weapon type for spell's weapon type requirement |
| Value | value of the item in a [Transaction](#transaction) |
| weight | weight in the backpack |
| Cannot be sold or thrown | for important quest item |
| Spell/Passive | [Spells](#spell)/[Passives](#passive) the item offers. If the item is equipment(hat/clothe/weapon), the character has to equip the item first to get the spell/passive.|

<br>
<br>
<br>
<br>

# Map

## Creation
- `right click` -> `Map`
- `enter map name`
- `click edit button`
- `enter map image path`
- `set map scale`
- place character, area, scenery, obstacle, and item
- check layer toggles to hide/show layers

## Area

## Scenery
Extra images on map，can be modified by act element [Change Scenery](#change-scenery)

## Character
Character on map

## Item
Including pickable and non-pickable

## Obstacle
- Obstacle stops character moving and interaction(talk to character, pick item) on the map. Short obstacle only stops moving.
- `click on an obstacle`：give the obstacle a name to be used in act element "Disable Obstacle" and "Enable Obstacle"

<br>
<br>
<br>
<br>

# Spell

## Creation
- `right click menu` -> `spell`

## Parameters
| Parameter | description |
| --- | ----------- |
| name | spell name |
| description | description |
|long-range| If a spell is long-range, the caster won't go to front when casting it. |
| Required weapon type | If not empty, the character has to equip a weapon of this type to cast the spell|
| Spell unit list | see [Spell Element](#spell-element), drag to sort. |

<br>
<br>
<br>
<br>

# Passive

## Creation
- `right click menu` -> `passive`

## Parameters
| Parameter | description |
| --- | ----------- |
| name | passive name |
| description | description |
| Trigger type | including combat start, deal damage, etc |
| trap | passive mark as trap stop character acting in combat |
| Extra critical hit rate | Extra critical hit rate the passive provide to the character |
| damage multiplier | damage multiplier in decimal |
| Spell unit list | see [Spell Unit](#spell-element), drag to sort. |

<br>
<br>
<br>
<br>

# Spell Element
Spell element includes target, condition, and effect. Play from top to bottom. drag to sort

## Target
- Caster
- Mono
- Self team
- Self team (exclude self)
- Enemy team in front
- Enemy team
- All unit
- All unit (exclude self)
- Damage source (in passive triggered be deal damage)
- Damage target (in passive triggered be deal damage)

## Condition
If conditions are not meet, skip the effects below it

|Condition Type|Parameter|
| --- | ----------- |
|probability|probability(in decimal)|
|probability(exclusive)|probability(in decimal)，exclusive with other probability(exclusive), ex: 0.5 probability(exclusive) to cause 1 damage, 0.5 probability(exclusive) to cause 2 damage, the spell will either cause 1 damage or cause 2 damage|
|has passive|passive name|
|armor≥|value|
|MP≥|value|

### Condition Target
The target for condition including caster and the target of the spell

#### NOT
Check the NOT toggle to reverse the true/false of the condition.

## Effect
spell effect

>### Damage type in damage effect
>- Physical
>- Magical
>- Real：real damage won't trigger passives triggered by damage
>#### No Source
>- Damage with no source won't trigger passives effects on damage source
>### Projectile in trace effect
>- Add your own image to be the projectile of the trace, the top of the image follows the flying direction.

## Example
![技能](../../assets/spell.jpg)

<br>
<br>
<br>
<br>

# Combat system

## Flow
1. hero and hero's [followers](#follower) enter combat, ally and ally's [followers](#follower) enter combat, enemy and enemy's [followers](#follower) enter combat
2. enemy action
3. ally action
4. hero action

## Ally
If there is an ally in the combat, the ally and its followers will join the hero team but not controlled by the player.

## Front
- When a character cast non-long-range spells, it will go to the front.
- Spell with target type of Mono can only pick enemy in the front as target unless there is no enemy in the front.

## Armor Breaking
When character armor reduces to 0, it stops action for 2 turns then recovers armor to default armor value

<br>
<br>
<br>
<br>

# Combat AI
- Consists of ai behaviors.
- Scans from top to bottom, once triggered, stops scanning. 
- Drag to sort.

## Creation
- `right click menu` -> `Combat AI`

<br>
<br>
<br>
<br>

# Deck
Random Deck of character/area/item, refer it by deck name.

## Creation
- `right click menu` -> `Deck`
- click +，add character/area/item name and corresponding probability(in decimal)

## Example

### Random prize
- |Deck name: prize|
  - |crappy sword  probability: 0.99|
  - |luxury sword  probability: 0.01| 

- [act element](#act-element)：[Gain Item](#gain-item) "prize"
  - When executing this act element, there is 99% probability to get a crappy sword and 1% probability to get a luxury sword

### Random Enemy
- |Deck name: random enemy|
  - |slime  probability: 0.99|
  - |king slime  probability: 0.01|

- [Act Element](#act-element)：[Combat](#Combat) enemy: random enemy
  - When executing this act element, there is 99% probability to combat with a slime and 1% probability to combat with a king slime

<br>
<br>
<br>
<br>

# Customize and Publish
Add you own skin to the game ui, hide editor, and script selection to publish your game

## Skin system

### Game Skin
- Go to `BigMushroomRPG_Data/streamingAssets/config/gameSkin` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Replace the images inside to change skin(keep the image name same, image format can be both jpg and png)
- Restart the game

>Keep the aspect ratio of the image to prevent distortion

#### UI Chart
| Image filename | description| width : height |
| --------- | ---- | ----- |
| button | button | 4 : 1 |
| card | card panel | 2.5 : 3.5 |
| clothe | clothe icon | 2.5 : 3.5 |
| cover | cover image | 16 : 9 |
| dead | death mark | 1 : 2 |
| def | armor icon | 1 : 1 |
| dialog | dialog panel | 1920 : 240 |
| hat | hat icon | 2.5 : 3.5 |
| label | label | 8 : 1 |
| mp | MP icon | 1 : 1 |
| panel | panel | 16 : 9 |
| passive | passive button | 4 : 1 |
| sack | item icon | 1 : 1 |
| spell | passive button | 1 : 1 |
| talk | talk icon | 1 : 1 |
| weapon | weapon icon | 2.5 : 3.5 |

#### Set Game Text Color
- Go to `BigMushroomRPG_Data/streamingAssets/config/gameSkin` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Modify "gameTextColor": [ R, G, B, A ]
    - R, red, range[0, 1]
    - G, green, range[0, 1]
    - B, blue, range[0, 1]
    - A, transparency, range[0, 1], 0 is complete transparent, 1 is complete opaque
    - ex："gameTextColor": [ 1, 0, 0, 0.5 ] is semi-transparent red
- Restart the game

### Editor Skin
- Go to `BigMushroomRPG_Data/streamingAssets/config/editorSkin` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Replace the images inside to change skin(keep the image name same, image format can be both jpg and png)
- Restart the game

#### UI Chart
| Image filename | width : height |
| --------- | ----- |
| background | 1 : 1 |
| button | 64px * 64px |
| cross | cross | 1 : 1 |
| panel | 256px * 256px |

>button and panel should have the same resolution with the original image to display the border correctly.

>background should be seamless texture

#### Set Editor Text Color
- Go to `BigMushroomRPG_Data/streamingAssets/config/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Modify "editorTextColor": [ R, G, B, A ]
    - R, red, range[0, 1]
    - G, green, range[0, 1]
    - B, blue, range[0, 1]
    - A, transparency, range[0, 1], 0 is complete transparent, 1 is complete opaque
    - ex："editorTextColor": [ 1, 0, 0, 0.5 ] is semi-transparent red
- Restart the game

## Hide Editor
- Go to `BigMushroomRPG_Data/streamingAssets/config/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Modify `disableEditor` to be 1
- Restart the game

## Hide Script Selection
If there is only one script in the game, you can hide it to let the player directly select saving.
- Go to `BigMushroomRPG_Data/streamingAssets/config/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Modify `disableScriptPicking` to be 1
- Restart the game

## Copyright
- You don't need to pay any fee for publishing game made with Mushroom Card RPG. Mushroom Card RPG doesn't claim copyright of games made with it.

<br>
<br>
<br>
<br>

# Template Script
Official Script for Reference
- Go to `BigMushroomRPG_Data/streamingAssets/template/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Copy the scripts inside into `BigMushroomRPG_Data/streamingAssets/myStories/`
