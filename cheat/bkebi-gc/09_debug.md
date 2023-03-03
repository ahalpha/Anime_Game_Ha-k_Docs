---
title: Bkebi-GC
editLink: true
---

# 调试

开发者选项。

### 实体管理器

实体管理器。

#### 实体数量

当前已加载实体的数量。

---

#### 筛选器 

用于过滤[<font>**`实体列表`**</font>](#实体列表)。

#### 实体名称筛选器

按实体名称过滤[<font>**`实体列表`**</font>](#实体列表)。

#### 按半径过滤

按实体与玩家的距离过滤[<font>**`实体列表`**</font>](#实体列表)。

#### 半径

设定过滤半径。

- 范围: `0 ~ 100`

---

#### 实体生成器

生成工具或生物。

- 大多数工具不能交互 生物无法被击杀。

- 多人游戏下 仅自己可见。

#### 生成 Gadget

使用指定`Gadget ID`生成工具。

- 可在 [GM表](/hack/resources/GM_Handbook) 中获取`Gadget ID`。

#### 生成 NPC (Spawn NPC)

使用指定`NPC ID`生成NPC。

- 可在 [GM表](/hack/resources/GM_Handbook) 中获取`NPC ID`。

#### 生成怪物

使用指定`生物ID`生成工具。

- 可在 [GM表](/hack/resources/GM_Handbook) 中获取`生物ID`。

---

#### 类型筛选器

按实体类型过滤[<font>**`实体列表`**</font>](#实体列表)。

- 可选择: `AOE` `ActivityInteractGadget` `AirflowField` `AmberWind` `AttackPhyisicalUnit` `Avatar` `BlackMud` `Bullet` `Bush` `Camera` `Chest` `CoinCollectLevelGadget` `CustomGadget` `CustomTile` `DangerZone` `DeshretObeliskGadget` `DropItem` `EchoShell` `ElemCrystal` `EnergyBall` `EnvAnimal` `EnviroArea` `Equip` `EyePoint` `Field` `FishPool` `FishRod` `Foundation` `Gadget` `GatherObject` `GatherPoint` `Gear` `GeneralRewardPoint` `Grass` `HomeGatherObject` `Level` `Lightning` `MPLevel` `MiracleRing` `Monster` `MonsterEquip` `MpPlayRewardPoint` `NPC` `NightCrowGadget` `None` `OfferingGadget` `Partner` `PlaceHolder` `Platform` `PlayTeam` `Projector` `QuestGadget` `RemoteAvatar` `RewardPoint` `RewardStatue` `RoguelikeOperatorGadget` `Screen` `SealGadget` `SpeedupField` `SubEquip` `Team` `Timeline` `TransPointFirst` `TransPointFirstGadget` `TransPointSecond` `TransPointSecondGadget` `Tree` `UllnteractGadget` `Vehicle` `ViewPoint` `Water` `WidgetGadget` `WindSeed` `Worktop`

#### 列数

设定[<font>**`类型筛选器`**</font>](#类型筛选器)显示列数。

- 范围: `2 ~ 5`

---

#### 实体列表

列出已加载的所有实体。

#### 按类型分组

是否按类型分类 而不是一页显示所有。

#### 显示空类型

是否显示没有实体的分类。

#### 仅显示神瞳

仅显示神瞳。

#### 传送: 最近的

传送到最近的实体。

#### 传送: 最远的

传送到最远的实体。

#### 召唤所有

将所有实体传送至自己。

#### 逐回所有

将所有实体逐回至`y=0`。

#### 复制所有详细信息

复制所有实体的信息。

#### CSV兼容 (CSV Friendly) 

复制的信息将会用逗号分隔 并删除坐标。

#### 包含头文件 (Include Headers)

是否包含头文件。

#### 

传送到当前实体。

#### S

将当前实体传送至自己。

#### B

将当前实体放逐至`y=0`。

#### C

复制当前实体信息。

#### E

复制到ESP [自定义筛选器](/cheat/bkebi-gc/10_more_guis#自定义筛选器) 。

#### C

复制ConfigID。

#### C

复制RuntimeID。

---

### 坐标位置

坐标位置。

- 使用此功能可能会出现严重的闪退。

#### 玩家场景id

玩家场景ID。

#### 地图场景id

地图场景ID。

#### 角色坐标

角色坐标。

#### 相对坐标

相对坐标。

#### 水平坐标 (Level position)

水平坐标。

---

#### 传送坐标

设定将要传送到的位置。

#### 地图传送

使用地图传送 将玩家传送至指定位置的地面。

#### 世界传送

使玩家直接移动至指定区域。

- 现版本 此功能无法生效。

---

#### 地面坐标信息

地面位置信息。

#### 一般地面 (Ground normal)

玩家相当于一般地面的位置。

#### 检测位置 (Checked pos)

检测角色当前位置。

- 不能检测`y`值。

#### 检测长度 (Raycast length)

设定检测长度。

#### 全部

全部。

---

#### 复制坐标

复制角色坐标。

#### 复制全部信息

复制全部位置信息。

#### 复制为Json

复制包含随机名称的Json位置信息。

---

### 地图管理器

地图管理器。

#### 地标 (Waypoints)

地标信息。 

---

### 帧率曲线

帧率曲线。

- `(avg)` 为平均值。

![FPS_Graph.png](image/FPS_Graph.png)

### Lua执行器

Lua执行器。

#### Lua文件路径

设定需要执行的Lua文件的路径。

- Lua例子: [BoobsChanger.lua](https://discord.com/channels/1065348698197991605/1065452338426417233/1080355460353368085)

#### 执行

执行设定的Lua文件。