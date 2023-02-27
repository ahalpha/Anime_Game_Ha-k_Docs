---
title: Bkebi-GC
editLink: true
---

# 调试

开发者选项。

### 防止屏幕截图

使截取的屏幕中游戏窗口消失。

- 在 Windows 1903 以下的版本表现为画面黑屏的状态。

### 实体管理器

实体管理器。

#### 实体数量 (Entity Count) 

目前已加载实体的数量。

#### 过滤 (Entity Name Filter) 

过滤[<font>**`实体列表`**</font>](#实体列表)。

#### 实体名称过滤器 (Entity Name Filter) 

按实体名称过滤[<font>**`实体列表`**</font>](#实体列表)。

#### 半径过滤 (Filter by Radius) 

按实体与玩家的距离过滤[<font>**`实体列表`**</font>](#实体列表)。

#### 半径 (Radius)

设定过滤半径。

- 范围: `0 ~ 100`

#### 生成 (Spawner)

生成工具或生物。

- 大多数工具不能交互 生物无法被击杀。

- 多人游戏下 仅自己可见。

#### 工具ID (Gadget ID)

设定[<font>**`工具ID`**</font>](#工具id)。

- 可在 [GM表](/hack/resources/GM_Handbook) 中获取[<font>**`工具ID`**</font>](#工具id)。

#### 生成工具 (Spawn Gadget)

使用指定[<font>**`工具ID`**</font>](#工具id)生成工具。

#### 怪物ID (Monster ID)

设定`生物ID`。

- 可在 [GM表](/hack/resources/GM_Handbook) 中获取`生物ID`。

#### 生成怪物 (Spawn Monster)

使用指定`生物ID`生成工具。

#### 类型过滤 (Type Filter)

按实体类型过滤[<font>**`实体列表`**</font>](#实体列表)。

- 可选择: `AOE` `ActivityInteractGadget` `AirflowField` `AmberWind` `AttackPhyisicalUnit` `Avatar` `BlackMud` `Bullet` `Bush` `Camera` `Chest` `CoinCollectLevelGadget` `CustomGadget` `CustomTile` `DangerZone` `DeshretObeliskGadget` `DropItem` `EchoShell` `ElemCrystal` `EnergyBall` `EnvAnimal` `EnviroArea` `Equip` `EyePoint` `Field` `FishPool` `FishRod` `Foundation` `Gadget` `GatherObject` `GatherPoint` `Gear` `GeneralRewardPoint` `Grass` `HomeGatherObject` `Level` `Lightning` `MPLevel` `MiracleRing` `Monster` `MonsterEquip` `MpPlayRewardPoint` `NPC` `NightCrowGadget` `None` `OfferingGadget` `Partner` `PlaceHolder` `Platform` `PlayTeam` `Projector` `QuestGadget` `RemoteAvatar` `RewardPoint` `RewardStatue` `RoguelikeOperatorGadget` `Screen` `SealGadget` `SpeedupField` `SubEquip` `Team` `Timeline` `TransPointFirst` `TransPointFirstGadget` `TransPointSecond` `TransPointSecondGadget` `Tree` `UllnteractGadget` `Vehicle` `ViewPoint` `Water` `WidgetGadget` `WindSeed` `Worktop`

#### 列数 (No. of Columns)

设定列数。

- 范围: `2 ~ 5`

#### 实体列表 (Entity List)

已加载的所有实体。

#### 按类型分类 (Group by Type)

是否按类型分类 而不是一页显示所有。

#### 显示空的分类 (Show Empty Types)

是否显示没有实体的分类。

#### 仅显示Oculi (Show Only Oculi)

仅显示Oculi。

#### 传送: 最近 (Teleport: Closest)

传送到最近的实体。

#### 传送: 最远 (Teleport: Farthest)

传送到最远的实体。

#### 召唤所有 (Summon All) 

将所有实体传送至自己。

#### 放逐所有 (Banish All)

将所有实体放逐至`y=0`。

#### 复制所有信息 (Copy All Details)

复制所有实体的信息。

#### CSV兼容 (CSV Friendly) 

复制的信息将会用逗号分隔 并在复制时删除坐标。

#### 包含头文件 (Include Headers)

是否包含头文件。

#### T

传送到当前实体。

#### S

将当前实体传送至自己。

#### B

将当前实体放逐至`y=0`。

#### C

复制当前实体信息。

#### E

复制到ESP [自定义筛选器](/cheat/bkebi-gc/10_more_guis#自定义筛选器) 。

### 坐标位置

坐标位置。

- 使用此功能可能会出现严重的闪退。

#### 玩家场景ID (Player scene id)

玩家场景ID。

#### 地图场景ID (Map scene id)

地图场景ID。

#### 角色位置 (Avatar position)

角色位置。

#### 相对位置 (Relative position)

相对位置。

#### 水平位置 (Level position)

水平位置。

#### 传送位置 (Teleport position)

设定将要传送到的位置。

#### 地图传送 (Map teleport)

使用地图传送 将玩家传送至指定位置的地面。

#### 世界传送 (World teleport)

使玩家直接移动至指定区域。

- 现版本 此功能无法生效。

#### 地面位置信息 (Ground pos info)

地面位置信息。

#### 一般地面 (Ground normal)

玩家相当于一般地面的位置。

#### 检测位置 (Checked pos)

检测角色当前位置。

- 不能检测`y`值。

#### 检测长度 (Raycast length)

设定检测长度。

#### 所有 (All)

所有。

#### 复制位置 (Copy Position)

复制角色位置。

#### 复制所有信息 (Cocy All Info)

复制所有位置信息。

#### 复制为Json (Copy as json)

复制包含随机名称的Json位置信息。

### 地图管理器

地图管理器。

#### 地标 (Waypoints)

地标信息。 

### 帧率曲线

帧率曲线。

- `(avg)` 为平均值。

![FPS_Graph.png](image/FPS_Graph.png)

### Lua执行器

???<font color=ffffff>Lua执行器。???</font>