# 剧情元素
![剧情元素](../../assets/t.jpg)

## 激活条件
激活一个[条件](./act.html#条件)
| 参数 | 描述 |
| --- | ----------- |
| 条件名 | 条件的名字，制作者自定 |

## 移除条件
移除一个[条件](./act.html#条件)
| 参数 | 描述 |
| --- | ----------- |
| 条件名 | 需要移除的条件的名字 |

## 选项
给玩家选择的选项
- `点击编辑`
- `点击“+”按钮添加选项`
- `输入选项内容`
- <code>输入该选项被选后将激活的[条件](./act.html#条件)</code>

## 移动人物
移动某个[人物](./character.html)到某个[地点](./map.html#地点)
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 移动人物的名字 |
| 地点名 | 目的地地点名 |

::: tip
- 如果移动的是主角，游戏会自动加载地图，移动游戏内主角人物
- [随从人物](./character.html#随从人物)会跟随主人移动
:::

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
::: tip
- 停止跟随后，原[随从人物](./character.html#随从人物)会留在停止跟随时主人所在的地点
:::

## 改变人物立绘
某个[人物](./character.html)的立绘
| 参数 | 描述 |
| --- | ----------- |
| 人物名 | 人物的名字 |
| 图片文件名 | 新立绘图片文件名含后缀 |

## 对话
- `点击编辑`
- `点击“+”按钮添加对话`
- <code>输入说话[人物](./character.html)名字</code>
- `输入说话内容`

## 展示图片
| 参数 | 描述 |
| --- | ----------- |
| 图片文件名 | 展示的图片文件名（含后缀），图片文件需在[素材路径](./storyboard.html#素材路径)下 |
| 展示时长 | 展示的时长（秒）不填或0则为鼠标点击跳过 |

## 更换BGM
| 参数 | 描述 |
| --- | ----------- |
| 音频文件名 | 音频文件名，不填则为停止播放当前BGM |

## 交易
| 参数 | 描述 |
| --- | ----------- |
| 交易对象人物名 |  |
:::tip
交易中购买物品需支付等于物品价值的金钱，出售则获得物品价值80%的金钱
:::

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

## 战斗
展开[战斗](./combat.html)
| 参数 | 描述 |
| --- | ----------- |
| 敌方首领人物名 |  |
| 死斗 | 战斗是否为[死斗](./combat.html#死斗) |

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

::: tip
切换主角后注意保证主角相关剧目的正常触发，见[主角代号](./character.html#主角代号) 
:::

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