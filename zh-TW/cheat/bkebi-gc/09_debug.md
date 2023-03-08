---
title: Bkebi-GC
editLink: true
---

# 調試

開發者選項。

### 實體管理器

實體管理員。

#### 實體數量

當前已載入實體的數量。

---

#### 篩選器 

用於過濾[<font>**`實體清單`**</font>](#实体列表)。 

#### 實體名稱篩選器

按實體名稱過濾[<font>**`實體清單`**</font>](#实体列表)。 

#### 按半徑過濾

按實體與玩家的距離過濾[<font>**`實體清單`**</font>](#实体列表)。 

#### 半徑

設定過濾半徑。

- 範圍: `0 ~ 100`

---

#### 實體生成器

生成工具或生物。

- 大多數工具不能交互 生物無法被擊殺。

- 多人遊戲下 僅自己可見。

#### 生成 Gadget

使用指定『Gadget ID』產生工具。 

- 可在 [GM表](/hack/resources/GM_Handbook) 中獲取`Gadget ID`。 

#### 生成 NPC (Spawn NPC)

使用指定『NPC ID』生成NPC。 

- 可在 [GM表](/hack/resources/GM_Handbook) 中獲取`NPC ID`。 

#### 生成怪物

使用指定『生物ID』產生工具。 

- 可在 [GM表](/hack/resources/GM_Handbook) 中獲取`生物ID`。 

---

#### 類型篩選器

按實體類型過濾[<font>**`實體清單`**</font>](#实体列表)。 

- 可選擇: `AOE` `ActivityInteractGadget` `AirflowField` `AmberWind` `AttackPhyisicalUnit` `Avatar` ` BlackMud` `Bullet` `Bush` `Camera` `Chest` `CoinCollectLevelGadget` `CustomGadget` `CustomTile` ` DangerZone` `DeshretObeliskGadget` `DropItem` `EchoShell` `ElemCrystal ` `EnergyBall` `EnvAnimal` `EnviroArea` `Equip` `EyePoint` `Field` ` FishPool` `FishRod` `Foundation` `Gadget` `GatherObject` `GatherPoint` `Gear` ` GeneralRewardPoint` `Grass` `HomeGatherObject` `Level` `Lightning` `MPLevel` `MiracleRing` ` Monster` `MonsterEquip` `MpPlayRewardPoint` `NPC` `NightCrowGadget` `None` `OfferingGadget ` `Partner` `PlaceHolder` `Platform` `PlayTeam` `Projector` `QuestGadget` ` RemoteAvatar` `RewardPoint` `RewardStatue` `RoguelikeOperatorGadget` `Screen` ` SealGadget` `SpeedupField` `SubEquip` `Team` `Timeline` `TransPointFirst` ` TransPointFirstGadget` `TransPointSecond` `TransPointSecondGadget` `Tree` `UllnteractGadget` ` Vehicle` `ViewPoint` `Water` `WidgetGadget` `WindSeed` `Worktop`

#### 列數

設定[<font>**`類型篩選器`**</font>](#类型筛选器)顯示列數。 

- 範圍: `2 ~ 5`

---

#### 實體清單

列出已載入的所有實體。

#### 按類型分組

是否按類型分類 而不是一頁顯示所有。 

#### 顯示空類型

是否顯示沒有實體的分類。

#### 僅顯示神瞳

僅顯示神瞳。

#### 傳送: 最近的

傳送到最近的實體。

#### 傳送: 最遠的

傳送到最遠的實體。

#### 召喚所有

將所有實體傳送至自己。

#### 逐回所有

將所有實體逐回至『y=0』。 

#### 複製所有詳細資訊

複製所有實體的資訊。

#### CSV兼容 (CSV Friendly) 

複製的資訊將會用逗號分隔 並刪除座標。 

#### 包含頭文件 (Include Headers)

是否包含頭檔。

#### 

傳送到當前實體。

#### S

將當前實體傳送至自己。

#### B

將當前實體放逐至『y=0』。 

#### C

複製當前實體資訊。

#### E

複製到ESP[自訂篩選器](/cheat/bkebi-gc/10_more_guis#自訂篩選器) 。 

#### C

複製ConfigID。 

#### C

複製RuntimeID。 

---

### 座標位置

座標位置。

- 使用此功能可能會出現嚴重的閃退。

#### 玩家場景id

玩家場景ID。 

#### 地圖場景id

地圖場景ID。 

#### 角色座標

角色座標。

#### 相對座標

相對座標。

#### 水準座標 (Level position)

水準座標。

---

#### 傳送座標

設定將要傳送到的位置。

#### 地圖傳送

使用地圖傳送 將玩家傳送至指定位置的地面。 

#### 世界傳送

使玩家直接移動至指定區域。

- 現版本 此功能無法生效。

---

#### 地面座標資訊

地面位置資訊。

#### 一般地面 (Ground normal)

玩家相當於一般地面的位置。

#### 檢測位置 (Checked pos)

檢測角色當前位置。

- 不能檢測『y』值。

#### 檢測長度 (Raycast length)

設定檢測長度。

#### 全部

全部。

---

#### 複製座標

複製角色座標。

#### 複製全部資訊

複製全部位置資訊。

#### 複製為Json

複製包含隨機名稱的Json位置資訊。 

---

### 地圖管理員

地圖管理員。

#### 地標 (Waypoints)

地標資訊。

---

### 幀率曲線

幀率曲線。

- `(avg)` 為平均值。

![FPS_Graph.png](/cheat/bkebi-gc/image/FPS_Graph.png)

### Lua執行器

Lua執行器。

#### Lua檔路徑

設定需要執行的Lua檔的路徑。 

- Lua例子: [BoobsChanger.lua](https://discord.com/channels/1065348698197991605/1065452338426417233/1080355460353368085)

#### 執行

執行設定的Lua檔。 

## 抓包工具

> 配置內置的抓包工具。

### 管道名

設定管道名稱 用於與另一管道名稱相同的進程進行數據交換。 

- 如果使用 [PacketSniffer](https://github.com/Akebi-Group/Akebi-PacketSniffer) 則為預設值`genshin_packet_pipe`。 

- 有關詳細使用方法 請查看 [PacketSniffer](/hack/resources/PacketSniffer) 。 

### 捕獲

是否啟用捕獲遊戲數據包資訊併發送到管道。

### 操縱(暫)

是否可以通過管道修改數據包併發送到遊戲。

- 可能會導致遊戲延遲升高。
