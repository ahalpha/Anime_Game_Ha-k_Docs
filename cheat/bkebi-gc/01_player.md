---
title: Bkebi-GC
editLink: true
---

# 玩家

与角色有关的各种属性。

## 攻击效果

> 调整角色攻击的伤害效果。

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

是否启用[<font>**`倍攻模式`**</font>](#倍攻模式-热键)、[<font>**`普攻范围`**</font>](#普攻范围-热键)以及[<font>**`多重动画`**</font>](#多重动画-热键)。

---

### 倍攻模式 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使一次攻击造成多次伤害。

- 一共有三种模式: [<font>**`倍率`**</font>](#倍率)、[<font>**`秒杀模式`**</font>](#秒杀模式)以及[<font>**`随机倍攻`**</font>](#随机倍攻-热键)。

- 需要上面的[<font>**`启用`**</font>](#启用-热键)按钮处于勾选状态才会生效。

### 倍率

更改一次攻击能造成几次伤害。

- 仅在[<font>**`秒杀模式`**</font>](#秒杀模式)和[<font>**`随机倍攻`**</font>](#随机倍攻-热键)关闭的情况下生效。
  
  范围: `2 ~ 1000`

![Muliti-Hit_Mode.gif](image/Muliti-Hit_Mode.gif)

### 秒杀模式

根据使怪物能够倒下的血量 决定一次攻击造成的几次伤害。

- 会覆盖上面的[<font>**`倍率`**</font>](#倍率)。

- 会覆盖下面的[<font>**`随机倍攻`**</font>](#随机倍攻-热键)。

- 一次攻击最大200倍率。

![One-Punch_Mode.gif](image/One-Punch_Mode.gif)

### 随机倍攻 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

更改一次攻击能造成随机的几次伤害。

- 会覆盖上面的[<font>**`倍率`**</font>](#倍率)。

- 仅在[<font>**`秒杀模式`**</font>](#秒杀模式)关闭的情况下生效。

#### 倍功最小值

调整随机倍攻的最小值。

- 范围: `1 ~ 1000`

#### 倍功最大值

调整随机倍攻的最大值。

- 范围: `2 ~ 1000`

![Randomize_Mulitiplier.gif](image/Randomize_Mulitiplier.gif)

---

### 普攻范围 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使周围的生物承受被攻击生物受到的伤害。

- 伤害仅会显示在被攻击生物的身上。

- 类似于ID伤害。

#### 范围 (米)

设定[<font>**`普攻范围`**</font>](#普攻范围-热键)的生效范围 (米) 。

- 范围: `5 ~ 50`

![Multi-Target.gif](image/Multi-Target.gif)

---

### 多重动画 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使全局攻击等动画重复播放 并能造成多次伤害。

- 可以作用于生物。

- 多人游戏下仅限成为[<font>**`联机主要者`**</font>](/hack/resources/CO-OP_Master)时对一定范围内的生物有效。

- 使用此功能可能会面临风险。

#### 多重动画倍率

设定 多重动画 每次攻击重复的次数。

- 范围: `1 ~ 150`

#### 仅玩家

使[<font>**`多重动画`**</font>](#多重动画-热键)仅对角色生效 而不会生效于生物。

![Multi-Animation.gif](image/Multi-Animation.gif)

---

### 攻击速度 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

角色在攻击时加快角色的速度。

- 如果在角色攻击时关闭 则角色会一直保持攻击时的速度。

#### 速度倍率

- 范围: `1 ~ 5`

![Attack_Speed.gif](image/Attack_Speed.gif)

---

### 自定义元素 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使角色造成的所有伤害为指定元素。

- 一共有三种模式: [<font>**`随机元素类型`**</font>](#随机元素类型)、[<font>**`元素类型`**</font>](#元素类型)以及[<font>**`元素队列模式`**</font>](#元素队列模式-热键)。

- 若要关闭此功能则需切换场景。

### 随机元素类型

随机选择造成伤害的元素类型。

- 会覆盖下面的[<font>**`元素类型`**</font>](#元素类型)。

- 随机选择11种: `火` `水` `风` `雷` `草` `冰` `岩` `冰封` `免疫` `枫丹小艇反冻结` `未知`

![RandomElementType.gif](image/RandomElementType.gif)

### 元素类型

指定造成伤害的元素类型。

- 可指定12种: `无元素` `火` `水` `风` `雷` `草` `冰` `岩` `冰封` `免疫` `枫丹小艇反冻结` `未知`

![ElementType.png](image/ElementType.png)

### 元素队列模式 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

自定义造成伤害的元素类型的顺序。

- 会覆盖上面的[<font>**`元素类型`**</font>](#元素类型)。

#### 添加

添加[<font>**`元素类型`**</font>](#元素类型)选择的元素至列表最后。

#### 清除

删除列表所有项。

#### 移除最后一个

删除列表中最后一项。

![Queued_Element.gif](image/Queued_Element.gif)

### 无攻击时自动重置队列 (ms)

经过设定的时间没有角色造成伤害后 下一次攻击将从第一项元素开始。

范围: `1000 ~ 600000`

### 延迟切换元素 (ms)

一次切换元素后需要经过设定的时间才能进行下一次切换。

范围: `1 ~ 1000`

---

### 自动弱点

使某些生物承受弓箭角色的攻击时都在主要位置上。

- 现版本 此功能无法生效。

---

### 刀刀暴击

使每一次攻击都能造成暴击。

- 不能对心海等负暴击率的角色生效。

- 目前会导致某些角色无法造成伤害。

![CritcalHit.gif](image/CritcalHit.gif)

---

### 武器附魔 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使单手剑、双手剑以及长柄武器角色的武器附魔指定元素。

- 联机状态下 武器附魔特效仅自己可见。

- 有效果但没有颜色的附魔: `草` `岩` `冰封` `免疫` `枫丹小艇反冻结` `未知`

### 随机元素类型

随机选择造成伤害的元素类型。

- 会覆盖下面的[<font>**`元素类型`**</font>](#元素类型-1)。

- 随机选择11种: `火` `水` `风` `雷` `草` `冰` `岩` `冰封` `免疫` `枫丹小艇反冻结` `未知`

#### 元素类型

指定[<font>**`武器附魔`**</font>](#武器附魔-热键)的元素类型。

- 可指定12种: `无元素` `火` `水` `风` `雷` `草` `冰` `岩` `冰封` `免疫` `枫丹小艇反冻结` `未知`

![Weapon_Infusion.gif](image/Weapon_Infusion.gif)

## 自动奔跑

> 自动以相机的视角方向移动。

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

是否启用[<font>**`自动奔跑`**</font>](#自动奔跑)。

- 启用时 角色的行走、奔跑以及跳跃等动作会出现异常。

### 速度

调整[<font>**`自动奔跑`**</font>](#自动奔跑)的速度。

- 范围: `0.01 ~ 1000`

![Auto_Run.gif](image/Auto_Run.gif)

## 命座修改器

> ???<font color=ffffff>激活所选角色的所有命座。???</font>

:::info
至Bkebi-1.0.2起 此功能仅Debug构建。
:::

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

???<font color=ffffff>是否启用 命座修改器 。???</font>

- ???<font color=ffffff>可能需要在队伍配置让角色重新上场或者切换地图以生效。???</font>

- ???<font color=ffffff>仅少数命座有效果 生效的命座可参考至: (@Strigger) [Info] Working Constellations 。???</font>

### 自定义命座数

???

- ???<font color=ffffff>使用此功能可能会面临风险。???</font>

### 命座

???<font color=ffffff>选择角色以使其所有命座激活。???</font>

- ???<font color=ffffff>可选择: 神里绫华 琴 丽莎 芭芭拉 凯亚 迪卢克 雷泽 安柏 温迪 香菱 北斗 行秋 魈 凝光 可莉 钟离 菲谢尔 班尼特 达达利亚 诺艾尔 七七 重云 甘雨 阿贝多 迪奥娜 莫娜 刻晴 砂糖 辛焱 罗莎莉亚 胡桃 枫原万叶 烟绯 宵宫 托马 优拉 雷电将军 早柚 珊瑚宫心海 五郎 九条裟罗 荒泷一斗 八重神子 鹿野院平藏 夜兰 埃洛伊 申鹤 云董 久岐忍 神里绫人 柯莱 多莉 提纳里 妮露 赛诺 坎蒂丝 纳西妲 莱依拉 流浪者 珐露珊 瑶瑶 艾尔海森 迪希雅 米卡 ???</font>

## 冷却效果

> 调整与冷却有关(如技能、蓄力等)的冷却效果。

### 满元素爆发能量 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使元素爆发不再需要能量。

- 依旧不会处于一直满能量状态 可以积攒能量且使用元素爆发后会清空能量。

- 右侧将会显示所有角色的满能量状态 某些时候不会满能量而会显示已充能状态。

![Max_Burst_Energy.png](image/Max_Burst_Energy.png)

### 减少 战技/爆发 冷却时间 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使元素战技/元素爆发的冷却时间为`所设定的数值`-1(秒)。

- 范围: `1 ~ 6`

![Reduce_Skill-Burst_Cooldown.gif](image/Reduce_Skill-Burst_Cooldown.gif)

### 无冲刺冷却时间 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使角色可以无限连续冲刺。

![No_Sprint_Cooldown.gif](image/No_Sprint_Cooldown.gif)

### 弓箭瞬间蓄力 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使弓箭角色的元素蓄力瞬间完成。

- 某些弓箭角色需要等待举弓时的一段瞬间开始蓄力。

- 目前会导致菲谢尔无法射出箭矢。

- 若有角色瞬间蓄力无效 请在 [此Discord频道](https://discord.com/channels/1026295403282436097/1073216872931151922) 上提供反馈。

![Instant_Bow_Charge.gif](image/Instant_Bow_Charge.gif)

### 技能日志[调试]

全局技能记录。

- 仅记录最近的50条。

## 移动增强

> 增强角色移动相关的机制。

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

是否启用[<font>**`移动增强`**</font>](#移动增强)。

---

### 超级跳 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

提高角色的跳跃高度。

- 会影响角色的下坠速度。

#### 空中可用

在展开风之翼时可以使用 `Space` 提升角色的高度。

#### 垂直速度

角色跳跃、上升以及坠落的速度。

- 范围: `1 ~ 100`

---

### 闪现

使用快捷键立即向屏幕前方移动一定的距离 也可以按 `W` `S` `A` `D` 指定移动的方向。

- 设定[<font>**`闪现热键`**</font>](#闪现热键)以启用此功能。

- 角色在地面、展开风之翼时有效。

- 多人游戏下 其他玩家不能看到你频繁闪现的行为。

#### 闪现热键

设定使用[<font>**`闪现`**</font>](#闪现)的热键。

- 默认按键: `Home`

#### 实体目标

将可以闪现到[<font>**`默认目标`**</font>](#默认目标)和[<font>**`透视中的目标`**</font>](#透视中的目标)身边。

#### 闪现距离

设定一次[<font>**`闪现`**</font>](#闪现)的最大距离。

- 范围: `1 ~ 10`

#### 检测范围

设定对[<font>**`实体目标`**</font>](#实体闪现)的有效范围。

- 范围: `1 ~ 40`

#### 手动目标热键

闪现到实体身边的快捷键。

- 设定的快捷键不为 `None` 时 将会用[<font>**`手动目标热键`**</font>](#手动目标热键)闪现到实体身旁 而不是与普通位移同时使用[<font>**`闪现热键`**</font>](#闪现热键)。

- 设定的快捷键为 `None` 时 将会与普通位移同时用[<font>**`闪现热键`**</font>](#闪现热键)对实体进行闪现。

#### 透视中的目标

是否将透视的物品或生物等设置为闪现目标。

#### 超距

对[<font>**`实体目标`**</font>](#实体目标)时 将无视[<font>**`闪现距离`**</font>](#闪现距离)。

- 使用此功能可能会面临风险。

#### 默认目标

将会闪现到列表中存在的类型的目标身边。

#### 添加

添加一项类型在[<font>**`默认目标`**</font>](#默认目标)列表中。

- 可选择: `无` `Avatar` `怪物` `Bullet` `AttackPhyisicalUnit` `AOE` `Camera` `EnviroArea` `Equip` `MonsterEquip` `草` `等级` `NPC` `TransPointFirst` `TransPointFirstGadget` `TransPointSecond` `TransPointSecondGadget` `DropItem` `Field` `Gadget` `Water` `GatherPoint` `GatherObject` `AirflowField` `SpeedupField` `Gear` `宝箱` `EnergyBall` `ElemCrystal` `Timeline` `Worktop` `Team` `Platform` `AmberWind` `EnvAnimal` `SealGadget` `Tree` `Bush` `QuestGadget` `闪电` `RewardPoint` `RewardStatue` `MPLevel` `WindSeed` `MpPlayRewardPoint` `ViewPoint` `RemoteAvatar` `GeneralRewardPoint` `PlayTeam` `OfferingGadget` `EyePoint` `MiracleRing` `Foundation` `WidgetGadget` `Vehicle` `DangerZone` `EchoShell` `HomeGatherObject` `Projector` `Screen` `CustomTile` `FishPool` `FishRod` `CustomGadget` `RoguelikeOperatorGadget` `ActivitylnteractGadget` `BlackMud` `SubEquip` `UllnteractGadget` `NightCrowGadget` `Partner` `DeshretObeliskGadget` `CoinCollectLevelGadget` `PlaceHolder`

#### 移除

移除此项。

#### 目标指示器

设定目标指示器。

#### 显示十字准星

向最近的实体显示一个十字准星。

#### 颜色

设定十字准星的颜色。

#### 半径

设定十字准星的线条长度。

#### 不透明度

设定十字准星的不透明度。

#### 宽度

设定十字准星的线条宽度。

#### 使用自定义方向键

是否使用自定义按键控制[<font>**`闪现`**</font>](#闪现)的方向。

- 可指定: 向前热键 | 向后热键 | 向左热键 | 向右热键

## 坠落控制

> 使角色坠落时可以使用 `W` `S` `A` `D` 水平运动。

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

是否启用[<font>**`坠落控制`**</font>](#坠落控制)。

### 速度

设定角色坠落时的水平运动速度。

- 范围: `0 ~ 100`

![Fall-Control.gif](image/Fall-Control.gif)

## 攻击队友

> ???<font color=ffffff>使你可以伤害其他玩家。???</font>

:::info
此功能仅Debug构建。
:::

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

???<font color=ffffff>是否启用 攻击队友 。???</font>

- ???<font color=ffffff>属于实体伤害。???</font>

### 初始化

???<font color=ffffff>加载其他玩家的实体。???</font>

### 重置

???<font color=ffffff>重置实体。???</font>

## 无敌模式

> 使角色不会受到任何伤害。

### 无敌模式 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使角色不会受到来自生物、坠落以及环境的任何伤害。

- 至Bkebi-1.0.3起 此功能无法免疫摔落伤害。

![God_Mode.gif](image/God_Mode.gif)

#### 触发条件

设定启用[<font>**`无敌模式`**</font>](#无敌模式-热键)的前置条件。

#### 最小生命值

设定百分比超过上场角色生命值百分比时才可触发[<font>**`无敌模式`**</font>](#无敌模式-热键)。

- 范围: `0.1 ~ 100`

![Minimum_Health.png](image/Minimum_Health.png)

#### 攻击闪避率

设定值触发[<font>**`无敌模式`**</font>](#无敌模式-热键)的百分比概率。

- 范围: `0 ~ 100`

### 不死 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

免疫环境伤害，并闪避所有大于角色当前血量的数值伤害。

### 无摔落 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

免疫摔落伤害。

![No_Fall.gif](image/No_Fall.gif)

## 无限体力

> 使角色的体力不再减少。

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使冲刺、攀爬、游泳、飞行不再消耗体力。

- 有可能造成无法冲刺、攀爬、飞行等 需要重启游戏以恢复。

![Infinite_Stamina.png](image/Infinite_Stamina.png)

#### 阻止上传模式(更安全)

会拦截冲刺、攀爬、飞行等体力消耗动作的服务器数据包。

- 联机时队友会看到你的角色行为异常 如抽搐、水中行走等。

## 自由移动

> 替换原有移动机制 使角色可以在世界中自由移动。

### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

是否启用[<font>**`自由移动`**</font>](#自由移动)。

- 联机时自己会看到队友异常移动。

- 队友可能不能看到你在空中飞行 而只是在地上行走。

- 默认按键: `W` - 向前移动 | `S` - 向后移动 | `A` - 向左移动 | `D` - 向右移动 | `Space` - 向上移动(相对角色) | `LCtrl` - 向下移动(相对角色)

![No-Clip.gif](image/No-Clip.gif)

### 允许在空中释放技能 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

使角色启用自由移动后可以一直保持如站立、坠落、游泳、飞行等动作状态。

- ~~(使角色在空中可以保持站立状态而不会进入坠落状态。)~~

- 需要在站立状态下启用[<font>**`自由移动`**</font>](#自由移动)才可以在空中释放技能。

![No_Animation.png](image/No_Animation.png)

### 速度

设定自由移动的速度。

- 范围: `2 ~ 100`

### 相对相机方向移动

使用 `W` `S` `A` `D` 或 [<font>**`自定义按键`**</font>](#使用自定义按键) 控制时相对于相机方向 而不是角色朝向。

### 备用自由移动

按住 `LCtrl` 或 [<font>**`自定义按键`**</font>](#使用自定义按键) 使用[<font>**`自由移动`**</font>](#自由移动)时不会使用上面的[<font>**`速度`**</font>](#速度-2)而是改用下面的[<font>**`变速`**</font>](#变速)。

### 变速

设定备用自由移动速度。

- 范围: `2 ~ 100`

### 加速度模式(暂) <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

给角色增加重力以模拟真实的行走方式 解决部分行走穿模问题。

- 可以解决在不启用[<font>**`允许在空中释放技能`**</font>](#允许在空中释放技能-热键)和[<font>**`相对相机方向移动`**</font>](#相对相机方向移动)时不能向角色其他方向移动的问题。

### 自由飞行模式 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

不移除碰撞体。

- 在速度过慢时 你可能无法穿过部分地形。

![Freeflight_mode.gif](image/Freeflight_mode.gif)

### 使用自定义按键

设定[<font>**`自由移动`**</font>](#自由移动)的按键。

可设定: 向前热键 | 向左热键 | 后退热键 | 向右热键 | 升高热键 | 降低热键 | 变速键

### 防拉回 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

在运动过快时 使用原地传送防止服务器拉回。

## 远程工具

> 远程执行某些特殊的请求。

### 制造

在没有合成台的情况下执行合成请求。

#### 合成浓缩树脂

快速合成一次浓缩树脂。

- 合成成功会直接进入背包 不会有任何提示。

#### 生成合成台

立即在前方生成一座合成台。

![Spawn_Alchemy_Table.png](image/Spawn_Alchemy_Table.png)

#### 热键

设定[<font>**`制造`**</font>](#制造)的相关按键。

可设定: 合成浓缩树脂 | 生成合成台

#### 自定义合成

自定义合成请求。

#### 合成ID

使用指定[<font>**`合成ID`**</font>](#合成ID)执行合成。

- 可在 [合成表](/hack/resources/CombineExcelConfigData) 中的`combineId`列 获取[<font>**`合成ID`**</font>](#合成ID)。

#### 数量

指定执行合成的数量。

- 范围: `1 ~ 100`

#### 合成

执行一次指定[<font>**`数量`**</font>](#数量)和[<font>**`合成ID`**</font>](#合成ID)的合成请求。

- 合成成功会直接进入背包 不会有任何提示。

---

### 召唤 NPC

生成NPC。

#### 凯瑟琳

生成凯瑟琳。

#### 瓦格纳

生成瓦格纳(蒙德铁匠)。

#### 「小王子」

生成「小王子」(猫尾酒馆老板)。

#### 热键

设定[<font>**`召唤 NPC`**</font>](#召唤-npc)的相关按键。

可设定: 凯瑟琳 | 瓦格纳 | 「小王子」

---

### 打开页面

直接显示某些功能界面。

#### 打开派蒙菜单

显示派蒙菜单。

#### 打开烹饪界面

显示烹饪界面。

#### 热键

设定[<font>**`打开页面`**</font>](#打开界面)的相关按键。

可设定: 打开派蒙菜单 | 打开烹饪界面

---

### 进入秘境

???<font color=ffffff>快速进入秘境。???</font>

- ???<font color=ffffff>使用此功能可能会面临风险。???</font>

#### 秘境ID

???<font color=ffffff>设定秘境ID。???</font>

#### 进入

???<font color=ffffff>进入秘境。???</font>

---

### 供奉神像

在不依靠神像的情况下供奉神瞳。

#### 神瞳类型

设定需要供奉的神瞳。

- 可选择: `风神瞳` `岩神瞳` `雷神瞳` `草神瞳`

#### 供奉

供奉选定类型的神瞳[<font>**`数量`**</font>](#数量-1)数量个。

- 供奉成功后会消耗神瞳数 不会有任何提示。

#### 数量

将要供奉的数量。

- 范围: `1 ~ 666`

---

### 修改旅行者元素

在不依靠神像的情况下使旅行者快速共鸣指定元素。

- 无法在秘境、渊下宫以及层岩巨渊: 地下矿区进行共鸣。

#### 元素类型 (共鸣!)

设定共鸣的元素类型。

- 可选择: `风` `岩` `雷` `草`

#### 热键

使用按键快速共鸣指定元素类型。

- 可设定: 与风元素共鸣 | 与岩元素共鸣 | 与雷元素共鸣 | 与草元素共鸣

![Change_Traveler_Element.gif](image/Change_Traveler_Element.gif)