# Mushroom Card RPG Manual

<br>

# Content
- [StroyBoard](#storyboard)
- [Act](#act)
- [Act Element](#act-element)
- [Act Condition region](#act-condition-region)
- [Marco](#Marco)
- [Character](#character)
- [Item](#item)
- [Map](#map)
- [Skill](#skill)
- [Passive](#passive)
- [Skill Element](#skill-element)
- [Combat system](#combat-system)
- [Combat ai](#combat-ai)
- [Deck](#deck)
- [Customize and Publish](#customize-and-publish)
- [Template Script](#template-script)

<br>
<br>
<br>
<br>

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

## && Switch
- Add act element [Activated Act](#activated-act) in act A.
- Drag a line from its arrow to the left slot of act C.
- Add act element [Activated Act](#activated-act) in act B.
- Drag a line from its arrow to the left slot of act C.
- Click act C's left slot to turn on the && switch.
- The act C will be in inactive state(cannot be triggered) when game start. It will be activated after both [Activated Acts](#activated-Act) in act A and B are played.
- Click act C's left slot again to turn off the && switch.
- Now the act will be activated after either [Activated Act](#activated-Act) in act A or B is played. 

## Act Loop
- Single act loop
  - Add act element [Activated Act](#activated-act) in act A.
  - Drag a line from the arrow to the left slot of act A itself.
  - Now act A can trigger again and again.
- Multiple acts loop
  - Connect multiple acts with [Activated Act](#activated-act) to form a loop.
  - Create an entrance act with [Activated Act](#activated-act) inside.
  - Connect the [Activated Act](#activated-act) in entrance act to the start act of the loop.
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

## Activate Self-defined Condition
Activate a [self-defined condition](#Condition)

## Deactivate Self-defined Condition
Deactivate a [self-defined condition](#Condition)

## Activate Act
Activate an [Act](./#Act) see [Active State](#active-state).
## ±Counter
± the value of a [counter](#condition)
## Set Counter
Set the value of a [counter](#condition)

## Options
Show options for player to choose
>Connect the option to the act it activates

## Teleport Character
Teleport a [Character](#character) to some [Area](#area)
>Teleport the hero to switch between maps

## Move Character
Move a [Character](#character) to some [Area](#area)
>Character will move to a random point inside the range of the area. Adjust the size of the area to add randomness for the movement.

## Character Follow Character
A [Character](#character) becomes another character's [Follower](#follower)

## Character Stop Following Character
A [Character](#character) stop being another character's [Follower](#follower)

## Change Character Image

## Dialogue
- Click to edit
- Click "+" to add new dialogue
- Enter speaker name
- Enter dialog content
- Enter dubbing audio file
- Enter auto skip countdown time (click/space to skip if empty)
- Special speaker image file (optional)
- Press "tab" to switch to next input fields
- Drag portraits to sort

## Show Image
Click to skip, or auto skip after seconds, or use [Remove Image](#remove-image) to remove.

## Remove Image

## Audio
If the audio is BGM, check the bgm toggle to make its volume controlled by BGM volume slider in the game.

## Stop Audio

## Transaction
>hero sales item with 80% original item value

## Gain Money
A [Character](#character) gain money
## Gain Item
A [Character](#character) gain [Item](#item)
## Loss Item
A [Character](#character) loss [Item](#item)
## Gain and equip item
A [Character](#character) gain and equip [Item](#item)
## Stop equip to item
A [Character](#character) stop to equip [Item](#item)
## Give Money/Item
Hero give out money/item to a character. Success and failing activates act respectively.
## Combat
see[Combat](#combat-system). Winning and losing activates act respectively.

## Quit current combat
## Gain Skill
## Loss Skill
## Reinforcement
Reinforcement for current combat.

## Switch Hero
Change the hero to be another character
>Make sure hero related acts trigger correctly after hero switching, see[Hero Code](#hero-code) 

## Kill Character
## Resurrect Character
## Change Map Image
## Change Scenery Image
Remove the scenery image if empty
## Enable obstacle
## Disable obstacle
## Move Camera to Area
## Restore Camera
## Shake Camera
## Trace Effect
## VFX
## Image on map
## Close to target

<br>
<br>
<br>
<br>

# Act Condition Region
All acts inside a condition region must satisfy the region's act conditions to execute. This is useful when you want the act to only be active during a quest.
## Creation
- right click -> Act Condition Region
- drag four corners to adjust the region.

<br>
<br>
<br>
<br>

# Marco
Marco is a set of act elements to be reused. It also accepts parameters. Use [Play Marco](#play-marco) to play the marco.

## Creation
- right click -> Marco

<br>
<br>
<br>
<br>

# Character

## Creation
- right click menu -> +Character

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
| skill/passive | [skill](#skill) and [passive](#passive) of the character|
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
- Right click menu -> Item

## Parameters
| Parameter | description|
| --- | ----------- |
| Name | Item name |
| Image file | relative path of image in the [Resource Path](#resource-path) |
| Description | Item description |
| Type | Including Hat, Clothe, Weapon |
| Weapon Type | If the item is of type weapon, you can define its weapon type for skill's weapon type requirement |
| Value | value of the item in a [Transaction](#transaction) |
| weight | weight in the backpack |
| Cannot be sold or thrown | for important quest item |
| Skill/Passive | [Skills](#skill)/[Passives](#passive) the item offers. If the item is equipment(hat/clothe/weapon), the character has to equip the item first to get the skill/passive.|

<br>
<br>
<br>
<br>

# Map

## Creation
- right click -> Map
- enter map name
- click edit button
- enter map image path
- set map scale
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
- click on an obstacle：give the obstacle a name to be used in act element "Disable Obstacle" and "Enable Obstacle"

<br>
<br>
<br>
<br>

# Skill

## Creation
- right click menu -> skill

## Parameters
| Parameter | description |
| --- | ----------- |
| name | skill name |
| description | description |
|ranged| If a skill is ranged, the caster won't go to front when casting it. |
| Required weapon type | If not empty, the character has to equip a weapon of this type to cast the skill|
|loop|The number of times the skill repeats|
| Skill unit list | see [Skill Element](#skill-element) |

<br>
<br>
<br>
<br>

# Passive

## Creation
- right click menu -> passive

## Parameters
| Parameter | description |
| --- | ----------- |
| name | passive name |
| description | description |
| Trigger type | including combat start, deal damage, etc |
| trap | passive mark as trap stop character acting in combat |
| critical hit rate | critical hit rate the passive provide to the character |
| damage multiplier | damage multiplier in decimal, positive is increasing and negative is decreasing |
|loop|The number of times the skill repeats|
| skill element list | see [Skill Element](#skill-element) |

<br>
<br>
<br>
<br>

# Skill Element
Skill element includes target, condition, and effect. Play from top to bottom. drag to sort

## Target
- Caster
- Mono
- Self team
- Self team (exclude self)
- Enemy team in front
- Enemy team
- All unit
- All unit (exclude self)
- Damage source (in passives triggered by damage)
- Damage target (in passives triggered by damage)

## Condition
If conditions are not meet, skip the effects below it

|Condition Type|Parameter|
| --- | ----------- |
|probability|probability(in decimal)|
|probability(exclusive)|probability(in decimal) exclusive with other probability(exclusive), ex: 0.5 probability(exclusive) to cause 1 damage, 0.5 probability(exclusive) to cause 2 damage, the skill will either cause 1 damage or cause 2 damage|
|has passive|passive name|
|posture≥|value|
|MP≥|value|
|Trapped(have passive skills with trap property)||
|is in front||

### Condition Target
The target for condition includes skill caster and skill target

#### NOT
Check the NOT toggle to reverse the true/false of the condition.

## Effect
skill effect

>### Damage type in damage effect
>- Physical
>- Magic
>- Real：real damage won't trigger passive skills
>#### No Source
>- Damage with no source won't trigger passives effects on damage source
>### Projectile in trace effect
>- Add your own image to be the projectile of the trace, the top of the image follows the flying direction.

<br>
<br>
<br>
<br>

# Combat system

## Flow
1. Hero and hero's [followers](#follower) enter combat, ally and ally's [followers](#follower) enter combat, enemy and enemy's [followers](#follower) enter combat
2. enemy action
3. ally action
4. hero action

## Ally
If there is an ally in the combat, the ally and its followers will join the hero team but not controlled by the player.

## Front
- When a character cast non-ranged skills, it will go to the front.
- Skills with target type "Mono" can only pick enemy in the front as target unless there is no enemy in the front.

## Posture
Character's posture will take same amount of damage as HP, When character posture reduces to 0, it retreats to the back and cannot action for 1 turn (turn count can be set in the script setting panel).

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

# Customize and Publish
Add you own skin to the game ui, hide editor, and script selection to publish your game

## Game Skin
- Go to `MushRoomCardRPG_Data/streamingAssets/config/gameSkin` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Replace the images inside to change skin(keep the image name same, image format can be both jpg and png)
- Restart the game

>Keep the aspect ratio of the image to prevent distortion

### UI Chart
| Image filename | description| width : height |
| --------- | ---- | ----- |
| button | button | 4 : 1 |
| card | card panel | 2.5 : 3.5 |
| clothe | clothe icon | 2.5 : 3.5 |
| cover | cover image | 16 : 9 |
| dead | death mark | 1 : 2 |
| dialog | dialog panel | 2160 : 240 |
| hat | hat icon | 2.5 : 3.5 |
| label | label | 8 : 1 |
| mp | MP icon | 1 : 1 |
| panel | panel | 16 : 9 |
| passive | passive skill button | 4 : 1 |
| skill | skill button | 4 : 1 |
| sack | item icon | 1 : 1 |
| talk | talk icon | 1 : 1 |
| weapon | weapon icon | 2.5 : 3.5 |

### Set Game Text Color
- Go to `MushRoomCardRPG_Data/streamingAssets/config/gameSkin` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Modify "gameTextColor": [ R, G, B, A ]
    - R, red, range[0, 1]
    - G, green, range[0, 1]
    - B, blue, range[0, 1]
    - A, transparency, range[0, 1], 0 is complete transparent, 1 is complete opaque
    - ex："gameTextColor": [ 1, 0, 0, 0.5 ] is semi-transparent red
- Restart the game

### Pixel Art
If the images used in game are in pixel style, set filter mode to prevent pixel smoothing out.
- Go to `MushRoomCardRPG_Data/streamingAssets/config/gameSkin` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Change "pointFilter": false to "pointFilter": true
- Restart the game

## Editor Skin
- Go to `MushRoomCardRPG_Data/streamingAssets/config/editorSkin` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Replace the images inside to change skin(keep the image name same, image format can be both jpg and png)
- Restart the game

### UI Chart
| Image filename | width : height |
| --------- | ----- |
| background | 1 : 1 |
| button | 64px * 64px |
| cross  | 1 : 1 |
| panel | 256px * 256px |

>Button and panel should have the same resolution with the original image to display the border correctly.

>Background should be seamless tiling texture

### Set Editor Text Color
- Go to `MushRoomCardRPG_Data/streamingAssets/config/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Modify "editorTextColor": [ R, G, B, A ]
    - R, red, range[0, 1]
    - G, green, range[0, 1]
    - B, blue, range[0, 1]
    - A, transparency, range[0, 1], 0 is complete transparent, 1 is complete opaque
    - ex："editorTextColor": [ 1, 0, 0, 0.5 ] is semi-transparent red
- Restart the game

## Hide Editor
- Go to `MushRoomCardRPG_Data/streamingAssets/config/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Change `"disableEditor": false` to `"disableEditor": true`
- Restart the game

## Hide Script Selection
If there is only one script in the game, you can hide it to let the player directly go to saving page.
- Go to `MushRoomCardRPG_Data/streamingAssets/config/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Use notepad to open `config.json`
- Change `"disableScriptPicking": false` to `"disableScriptPicking": true`
- Restart the game

## License
- Publishing game made with Mushroom Card RPG is free.

<br>
<br>
<br>
<br>

# Template Script
Official Script for Reference
- Go to `MushRoomCardRPG_Data/streamingAssets/template/` folder under game folder. (You can find its path in [Resource Path](#resource-path))
- Copy the scripts inside into `MushRoomCardRPG_Data/streamingAssets/myStories/`
