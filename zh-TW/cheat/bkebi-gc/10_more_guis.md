---
title: Bkebi-GC
editLink: true
---

# 更多介面

主介面功能清單外的其他功能。

### 附加

附加當前的帳號到選定的[<font>**`配置文件`**</font>](#配置文件)。 

- 在使用當前賬號登錄時自動切換到當前選定的[<font>**`配置文件`**</font>](#配置文件)。

### 配置文件...

打開[<font>**`配置文件管理`**</font>](#配置文件管理)。 

- 在此按鈕右側選定目前的使用的設定文件。

## 配置文件管理

 > 管理配置文件。

### 顯示類型

設定帳號的顯示類型。

- 可作用於主功能表右上角。

- 可選擇: `Pseudo` - 別名 | `UserID` - UID | `Nickname` - 昵稱

### 別名 (重命名 (偽))

設定當前帳號的別名。

### 重命名

更改此配置文件的昵稱。

### 刪除

刪除此配置文件。

### 複製

複製此設定文件到清單中。

### +

附加當前的帳號到此配置文件。

- 在使用目前帳號登錄時自動切換到此設定文件。

- 當前配置文件被附加的帳號會顯示在『帳號』列。

### -

取消附加當前的帳號到此配置文件。

### 帳號清單

顯示此配置文件被附加的帳號。

## 自定義篩選器

> 根據物件類別來篩選透視物件。

### 新增篩選器

將要新建的篩選器相關設定。

### Display name

為此篩選器指定一個名稱

- 使用透視時 被篩選的對象會顯示此昵稱。

### Type

設定篩選實體的類別。

- 可選擇: `無` `Avatar` `怪物` `Bullet` `AttackPhyisicalUnit` `AOE` `Camera` `EnviroArea` `Equip` `MonsterEquip` `Grass` `玩家等級` `NPC` ` TransPointFirst` `TransPointFirstGadget` `TransPointSecond` `TransPointSecondGadget` ` Dropltem` `FieId` `Gadget` `Water` `GatherPoint` `GatherObject` ` AirflowField` `SpeedupFieId` `Gear` `寶箱` `EnergyBall` `ElemCrystal` `Timeline` `Worktop` `Team` ` Platform` `AmberWind` `EnvAnimal` `SealGadget` `Tree` `Bush` `QuestGadget`  `閃電` `RewardPoint` `RewardStatue` `MPLevel` `WindSeed` ` MpPlayRewardPoint` `ViewPoint` `RemoteAvatar` `GeneralRewardPoint` `PlayTeam ` `OfferingGadget` `EyePoint` `MiracleRing` `Foundation` `WidgetGadget` ` Vehicle` `DangerZone` `EchoShell` `HomeGatherObject` `Projector` `Screen` `CustomTile ` `FishPool` `FishRod` `CustomGadget` `RoguelikeOperatorGadget` ` ActivityInteractGadget` `BlackMud` `SubEquip` `UllnteractGadget` `NightCrowGadget ` `Partner` `DeshretObeliskGadget` `CoinCollectLevel` `GadgetPlaceHoldon`

### 解密

設定篩選實體是否為解密。

- 選定后將會檢測此項 如果是解密將會檢測解謎狀態 使[<font>**`隱藏已完成的解密`**</font>](/cheat/bkebi-gc/04_esp#隱藏已完成的解密)生效。

### 名稱

添加後將會通過名稱篩選實體。

- 若不添加名稱 則只通過類別直接篩選。

### 添加

添加設定的[<font>**`名稱`**</font>](#名称)。 

### Update name

替換選定項的[<font>**`名稱`**</font>](#名称)。 

### Cancel editing name

取消編輯選定項的[<font>**`名稱`**</font>](#名称)。 

- 會清除[<font>**`名稱`**</font>](#名称)的編輯狀態。

### 添加篩選器

添加的篩選器會在 [透視 - Custom filter](/cheat/bkebi-gc/04_esp#custom-filters) 中 需要自行啟用。 

### Calcel editing

取消編輯所選取篩選器。

- 會清除[<font>**`Display name`**</font>](#display-name)、[<font>**`Type`**</font>](#type)和[<font>**`名稱`**</font>](#名称)的編輯狀態。

## 狀態視窗

> 簡單的顯示目前的啟用功能與其狀態。

![Status_Window.png](/cheat/bkebi-gc/image/Status_Window.png)

## 信息視窗

> 某些功能的狀態顯示。

### 傳送

與 [傳送](/cheat/bkebi-gc/03_teleport#) 關聯。

#### 寶箱

與 [傳送 - 寶箱傳送](/cheat/bkebi-gc/03_teleport#寶箱傳送) 關聯。

- 第一條信息: 若周圍檢測到有效寶箱 則會顯示玩家與寶箱間的距離(此時可以使用就近傳送) 否則會顯示`未找到`(此時無法使用就近傳送)

- 第二條信息: `CR1` - 普通寶箱 | `CR2` - 精緻寶箱 | `CR3` - 珍貴寶箱 | `CR4` - 華麗寶箱 | `CR5` - 奇饋寶箱 | `INV` - 調查 | `BPG` - 書頁 | `BGM` - 唱片 | `FLO` 地脈之花 | `CRU` - 未知

#### 自定義傳送

???<font color=ffffff>與 傳送 - 自定義傳送 Pro 關聯。 ???</font>

- `當前`: ???<font color=ffffff>當前使用的傳送文件???</font>

- `進度`: ???<font color=ffffff>顯示當前文件已傳送的節點進度 顏色會依據進度由紅至綠???</font>

#### 神瞳

與 [傳送 - 神瞳傳送](/cheat/bkebi-gc/03_teleport#神瞳傳送) 關聯。

- 第一條信息: 若周圍檢測到有效寶箱 則會顯示玩家與寶箱間的距離(此時可以使用就近傳送) 否則會顯示`未找到`(此時無法使用就近傳送)

![Info_Window.png](/cheat/bkebi-gc/image/Info_Window.png)

## FPS指示器

> 用於顯示目前的遊戲幀率。

![FPS_indicator.png](/cheat/bkebi-gc/image/FPS_indicator.png)

## 通知

> 用於顯示快捷鍵是否啟用或關閉功能以及提示其他資訊。

![Notifications.png](/cheat/bkebi-gc/image/Notifications.png)

## ImGui

> 定製Bkebi-GC的個人化主題。

### 顏色 (Colors)

快速設定介面的主題顏色。

- 選擇: 
  - `Dark` 暗淡
  - `Light` 明亮
  - `Classic` 經典

### 字體 (Fonts)

選擇介面的字體。

- 不能自定義添加字體 因為這需要更改源碼自行編譯。

### 框架圓角 (FrameRounding)

設定編輯框與按鈕的圓角程度。

- 範圍: `0 ~ 12`

### 窗體邊框 (Window Border)

是否啟用所有表單的邊框。

### 框架邊框 (Frame Border)

是否啟用整體框架的邊框。

### 選擇框邊框 (Popup Border)

是否啟用選項卡的邊框。

### 保存配置 (Save Ref)

在本地非持續性的保存一次文件。

- 不會影響預設主題。

- 若需儲存為長時間儲存的文件案 請使用 [設置 - 定製介面 -保存主題](/cheat/bkebi-gc/08_settings#保存主題) 。 

### 恢復配置 (Revert Ref)

恢復上一次[<font>**`保存配置 (Save Ref)`**</font>](#保存配置-save-ref)時的主題。 

### 大小 (Sizes)

與介面大小有關的調整。

#### 主要 (Main)

調整介面主要的內容。

- 可設定: 
  - `WindowPadding` 視窗邊距(左邊/上邊)。 
  - `FramePadding` 框架邊距(水平/垂直)。 
  - `CellPadding` 表格邊距(水平/垂直)。 
  - `ItemSpacing` 內容間隔(水平/垂直)。 
  - `ItemInnerSpacing` 選擇框間隔(水平/垂直)。 
  - `TouchExtraPadding` 觸摸額外填充(水平/垂直)。 
  - `IndentSpacing` 縮進距離。 
  - `ScrollbarSize` 滾動條寬度。 
  - `GrabMinSize` 數值控制條最小寬度。 

#### 邊框 (Borders)

調整介面邊框寬度。

- 可設定: 
  - `WindowBorderSize` 視窗的邊框寬度。 
  - `ChildBorderSize` 內邊框的邊框寬度。 
  - `PopupBorderSize` 選擇框的邊框寬度。 
  - `FrameBorderSize` 框架的邊框寬度。 
  - `TabBorderSize` 選項卡的邊框寬度。 

#### 圓角 (Rounding)

調整介面圓角程度。

- 可設定: 
  - `WindowRounding` 視窗的圓角程度。 
  - `ChildRounding` 子視窗的圓角程度。 
  - `FrameRounding` 框架的圓角程度。 
  - `PopupRounding` 選擇框的圓角程度。 
  - `GrabRounding` 數值控制條的圓角程度。 
  - `ScrollbarRounding` 滾動條的圓角程度。 
  - `LogSliderDeadzone` 日誌滑塊間隔。 
  - `TabRounding` 選項卡的圓角程度。 

#### 對齊 (Alignment)

調整界面對齊。

- 可設定: 
  - `WindowTitleAlign` 視窗標題位置偏移。 
  - `WindowMenuButtonPosition` 視窗摺疊按鈕位置。 
    - `None` 禁用。
    - `Left` 左邊。
    - `Right` 右邊。
  - `ColorButtonPosition` 顏色按鈕位置。 
    - `Left` 左邊。
    - `Right` 右邊。
  - `ButtonTextAlign` 按鈕文本偏移(水平/垂直)。 
  - `SelectableTextAlign` 選擇框文本對齊(水平/垂直)。 

#### 安全區域邊距 (Safe Area Padding)

  - `DisplaySafeAreaPadding` 顯示安全區域邊距(水平/垂直)。 

### 顏色 (Colors)

設定介面的顏色。

- 可設定: 
  - `Text` 普通文本。
  - `TextDisabled` 已禁用文本。 
  - `WindowBg` 視窗背景。 
  - `ChildBg` 子視窗背景。 
  - `PopupBg` 選擇框背景。 
  - `Border` 邊框。
  - `BorderShadow` 邊框陰影。 
  - `FrameBg` 框架背景。 
  - `FrameBgHovered` 框架顏色(滑鼠懸停時)。 
  - `FrameBgActive` 框架顏色(滑鼠點按時)。 
  - `TitleBg` 標題列背景(處於後台視窗時)。 
  - `TitleBgActive` 標題列背景(處於前台視窗時)。 
  - `TitleBgCollapsed` 標題列背景(已摺疊視窗時)。 
  - `MenuBarBg` 功能表欄背景。 
  - `ScrollbarBg` 滾動條背景。 
  - `ScrollbarGrab` 滾動條填充。 
  - `ScrollbarGrabHovered` 滾動條填充(滑鼠懸停時)。 
  - `ScrollbarGrabActive` 滾動條填充(滑鼠點按時)。 
  - `CheckMark` 複選標記。 
  - `SliderGrab` 數值控制條的滑塊。 
  - `SliderGrabActive` 數值控制條的滑塊(滑鼠點按時)。 
  - `Button` 按鈕。
  - `ButtonHovered` 按鈕(滑鼠懸停時)。 
  - `ButtonActive` 按鈕(滑鼠點按時)。 
  - `Header` 主介面目錄(已選擇時)。
  - `HeaderHovered` 主介面目錄選擇顏色(滑鼠懸停時)。 
  - `HeaderActive` 主介面目錄選擇顏色(滑鼠點按時)。 
  - `Separator` 分隔線。
  - `SeparatorHovered` 分隔線(滑鼠懸停時)。 
  - `SeparatorActive` 分隔線(滑鼠點按時)。 
  - `Tab` 選項卡。
  - `TabHovered` 選項卡(滑鼠懸停時)。 
  - `TabActive` 選項卡(滑鼠點按時)。 
  - `TabUnfocused` 未選擇的選項卡。 
  - `TabUnfocusedActive` 未選擇的選項卡(滑鼠點按時)。 
  - `DockingPreview` 對接預覽。 
  - `DockingEmptyBg` 對接空背景。 
  - `PlotLines` 幀率曲線。 
  - `PlotLinesHovered` 幀率曲線(滑鼠懸停時)。 
  - `PlotHistogram` 立方圖。 
  - `PlotHistogramHovered` 立方圖(滑鼠懸停時)。 
  - `TableHeaderBg` 表格第一行背景。 
  - `TableBorderStrong` 表格邊框。 
  - `TableBorderLight` 表格高亮邊框。 
  - `TableRowBg` 表行背景(奇數行)。 
  - `TableRowBgAlt` 表行背景(偶數行)。 
  - `TextSelectedBg` 文字選擇背景。 
  - `DragDropTarget` 拖動目標。 
  - `NavHighlight` 導航高亮。 
  - `NavWindowingHighlight` 導航視窗突出顯示。 
  - `NavWindowingDimBg` 導航視窗背景。
  - `ModalWindowDimBg` 模態視窗背景。
- `Save` - 保持顏色設置 | `Revert` 取消顏色更改
- `滑鼠左鍵` - 點擊顏色塊更改顏色
- `滑鼠右鍵` - 點擊顏色塊更改顏色編輯類型以及複製顏色代碼

#### 匯出 (Export)

以指定方式匯出當前顏色。

- 可選擇: `To Clipboard` - 到剪切板 | `To TTY` 到控制台

#### 僅匯出顏色 (Only Modified Colors)

匯出時僅匯出顏色 而不會匯出大小等。 

#### 過濾顏色 (Filter colors)

通過關鍵字過濾顏色更改清單。

#### 不透明度 (Opaque)

僅不透明度的顯示顏色。

#### 透明度 (Alpha)

僅透明度的顯示顏色。

#### 兩者 (Both)

使用不透明度(左)和透明度(右)顯示顏色。 

### 字體 (Fonts)

與介面字體相關的設定。

#### 設定為預設 (Set as default)

將所選取字型設定為預設字型。

#### 視窗縮放 (window scale)

更改此視窗的文字、應用等專案的大小。

- 不建議使用此項 而是在[<font>**`大小`**</font>](#大小)中修改。

#### 全域縮放 (global scale)

更改全域的文本、應用等專案的大小。

- 不建議使用此項 而是在[<font>**`大小`**</font>](#大小)中修改。

### 渲染 (Rendering) 

介面渲染的相關設定。

#### 抗鋸齒 (Anti-aliased lines)

是否啟用抗鋸齒。

#### 紋理抗鋸齒 (Anti-aliased lines use texture)

是否啟用紋理抗鋸齒。

#### 填充抗鋸齒 (Anti-aliased fill)

是否啟用填充抗鋸齒。

#### 曲線細節公差 (Curve Tessellation Tolerance)

設定曲線細節公差。

- 範圍: `0.1 ~ 10`

#### 圓形細節最大誤差 (Circle Tessellation Max Error)

設定圓形細節最大誤差。

- 範圍: `0.1 ~ 5`

#### 全域透明度 (Global Alpha)

設定全域透明度。

- 範圍: `0.2 ~ 1`

#### 禁用透明度 (Disabled Alpha)

設定禁用透明度。

- 與原有透明度相乘。

- 範圍: `0 ~ 1`

## 互動式地圖

> 在地圖上顯示各種資源、寶箱已經見聞等點位。

### 設置

互動式地圖的相關設置。

### 通用

通用設定。

#### 啟用 <font size="2" color="#5FC3E4">&nbsp; <熱鍵>&nbsp; </font>

是否啟用[<font>**`互動式地圖`**</font>](#交互式地图)。 

![Interactive_map.png](/cheat/bkebi-gc/image/Interactive_map.png)

#### 保存完成的點位

保存標記完成的點位至設定位置。

- 使用滑鼠右鍵、[<font>**`收集物品檢測`**</font>](#收集物品检测)或者[<font>**`手動完成`**</font>](#手动完成)標記完成。

- 可選擇: `帳號` `配置文件` `全域`

### 圖示檢視

圖示相關的設定。

#### 圖示大小

設定按『M』後的地圖上的圖示大小。 

- 範圍: `4 ~ 100`

#### 迷你地圖大小

設定遊戲中右上角的迷你地圖上的圖示大小。

- 範圍: `4 ~ 100`

#### 動態大小

使圖示隨著地圖的縮放的縮放。

#### 顯示高清圖示

將圖示更換為高清圖示。

### 未/已完成圖示視圖

設定與

#### 顯示完成的

是否顯示已標記完成的點位。

#### 完成點透明度

已標記完成的點位的圖示透明度。

#### 顯示未完成

是否顯示未標記完成的點位。

#### 未完成點透明度

未標記完成的點位的圖示透明度。

### 物品調整

物品調整相關。

#### 固定物品位置

根據物品在世界中位置來調整其點位在互動式地圖上的位置。

- 僅在[<font>**`檢測範圍`**</font>](#检测范围)中檢測到的物品才會被[<font>**`固定物品位置`**</font>](#固定物品位置围)。

- 僅限支援在[<font>**`過濾器`**</font>](#过滤器)中有 <font color="#00ff00">綠色標記</font> 的點位類型。

#### 檢測新物品

檢測在互動式地圖中沒有數據的點位。

- 若[<font>**`檢測範圍`**</font>](#检测范围)內新物品在交互是地圖中沒有數據 則此物品會被檢測為新物品。

- 僅限支援在[<font>**`過濾器`**</font>](#过滤器)中有 <font color="#00ff00">綠色標記</font> 的點位類型。

#### 僅檢測顯示的物品

僅檢測過濾器中已勾選的點位類型。

#### 檢測範圍

設定[<font>**`固定物品位置`**</font>](#固定物品位置)與[<font>**`檢測新物品`**</font>](#检测新物品)的範圍。 

#### 檢測延遲(ms)

設定設定每一次檢測之間的間隔。

- 檢測物品會調整整體項目從而消耗性能 因此你需要指定每次檢測物品之間的間隔。

### 收集物品檢測

收集物品的檢測相關設定。

#### 檢測收集到的物品

檢測某項物品是否被被收集 若被收集則會將點位標記為完成。 

- 僅限支援在[<font>**`過濾器`**</font>](#过滤器)中有 <font color="#0000ff">藍色標記</font> 的點位類型。

- 僅限適用於啟用後檢測範圍內收集的點位。

- 若在檢測範圍內收集了某個點位 則會在控制台輸出`Complete point at ?.`。
<!--
- 若在範圍內檢測到已完成的未標記點位 則會在控制台輸出『Failed to find uncomoleted point for this object.』。 
-->
#### 檢測範圍

設定[<font>**`檢測收集到的物品`**</font>](#检测收集到的物品)的範圍。 

### 手動完成

手動設定指定物品是否標記為完成。

#### 完成附近點位

標記完成距離角色最近的一個點位。

#### 恢復最近一次完成

取消標記上一次標記完成的點位。

- 根據已標記完成的點位標記順序 從最後一項開始取消標記完成。

#### 僅完成已顯示的點位

僅對[<font>**`過濾器`**</font>](#过滤器)中已勾選的點位類型有效

---

### 過濾器

篩選在地圖上顯示的點位。

### 升級材料過濾器

用於過濾其他介面指定的材料

#### 角色過濾器

在[<font>**`角色過濾器`**</font>](#角色过滤器)中已選角色的所需材料。 

#### 武器篩檢程式

在[<font>**`武器過濾器`**</font>](#武器过滤器)中已選角色的所需材料。 

### 搜索

使用關鍵字過濾以下專案。

- 僅支援英文關鍵詞過濾 可在此處使用(Ctrl+F)中文搜索來定位指定物品。

### 錨點

- 可選擇: `n/28 七天神像` `n/219 傳送錨點` `n/47 秘境` `n/1 南十字·死兆星` `n/1 群玉閣`

### 特殊物品

- 可選擇: `n/66 風神瞳` `n/131 岩神瞳` `n/80 緋紅玉隨` `n/9 老石` `n/181 雷神瞳` `n/1 鍵紋 II` `n/1 鍵紋 III` `n/1 鍵紋 IV` `n/45 旋曜玉帛` `n/235 草神瞳` `n/108 聖章石` `n/5 棋盤棋子` `n/6 神秘的石板` `n/7 「棋子」啟動器件`

### 地方特產

- 可選擇: `n/19 落落莓` `n/46 絕雲椒椒` `n/54 嘟嘟蓮` `n/138 清心` `n/77 小燈草` `n/209 琉璃袋` `n/38 塞西莉亞花` `n/14 霓裳花` `n/53 蒲公英種子` `n/39 琉璃百合` `n/53 慕風蘑菇` `n/161 石珀` `n/33 鉤鉤果` `n/52 夜泊石` `n/72 風車菊` `n/77 星螺` `n/154 海靈芝` ` n/79 鬼兜蟲` `n/129 鳴草` `n/55 血斛` `n/75 緋櫻繡球` `n/66 晶化骨髓` `n/44 珊瑚珍珠` `n/95 天雲草實` `n/71 幽 燈蕈` `n/79 月蓮` `n/66 劫波蓮` `n/77 樹王聖體菇` `n/68 帕蒂沙蘭` `n/80 聖金蟲` `n/96 赤念果` `n/74 沙脂蛹`

### 礦物

- 可選擇: `n/613 白鐵塊` `n/495 水晶礦` `n/181 魔晶塊` `n/75 星銀礦石` `n/62 深赤之石` `n/740 鐵礦` `n/268 紫晶礦` `n/122 礦物`

### 開放世界寶箱

- 可選擇: `n/987 普通的寶箱` `n/542 精緻的寶箱` `n/186 珍貴的寶箱` `n/87 華麗的寶箱` `n/140 奇饋寶箱`

### 解密

- 可選擇: `n/1 神秘的氣泡`

### 敵人

- 可選擇: `n/90 深淵法師` `n/20 債務處理人` `n/38 瑩術士` `n/13 遺跡獵手` `n/26 幼岩龍蜥` `n/161 愚人眾先遣隊` `n/409 丘丘射手` `n/42 遺跡守衛` `n/193 騙騙花` `n/280 盜寶團` `n/1 無相之風` `n/26 丘丘領袖大殿` `n/807 丘丘人` `n/184 丘丘薩滿` `n/772 史萊姆` `n/1 急凍樹` `n/1 北風的王狼、奔狼的領主` `n/1 無相之雷` `n/1 純水精靈` `n/1 無相之岩` `n/11 遺跡重機` `n/1 古岩龍蜥` `n/1 無相之冰` `n/1 無相之火 ` `n/246 武士` `n/123 遺跡機兵` `n/124 飄浮靈` `n/1 無相之水` `n/34 獸境之狼` `n/40 遺跡龍獸` `n/1 掣電樹` `n/1 兆載永劫龍獸` `n/ 117 元能構裝體` `n/1 爆炎樹` `n/187 丘丘暴徒` `n/1 「大雪豬王」` `n/10 岩龍蜥` `n/1 魔偶劍鬼` `n/1 恆常機關陣列` `n/30 藏鏡仕女` `n/786 蕈獸` `n /5 狂風之核` `n/1 雷音權現` `n/1 黃金王獸` `n/639 鍍金旅團` `n/1 翠翎恐蕈` `n/1 半永恆統轄矩陣` `n/1 無相之草` `n/14 聖骸赤鹫` ` n/1 風蝕沙蟲`

### 經歷

- 可選擇: `n/244 世界任務` `n/93 觀景點` `n/14 奇怪的丘丘人` `n/28 食譜` `n/172 書籍` `n/502 聖遺物` `n/211 摩拉` `n/244 木箱子` `n/21 鍋` `n/36 遺跡之燭` `n/130 岩之印` `n/441 烹調材料` `n/72 營火/火把` `n/30 仙靈座` `n/17 雪山大冰礦` `n/3 三個箱子` `n/ 171 雷種子` `n/73 相位之門` `n/62「雷石」` `n/212 交互獎勵` `n/1 鍵紋鎖 V` `n/430 岩石堆` `n/12 蘭那羅` `n/280 彈彈菇` `n/87 草石塊` `n/8 八塊石板` `n/64 商人` `n/90 武器` `n/18 妖狸` `n/7 神秘的刻像` `n/1 鍵紋鎖` `n/1 鍵紋鎖 III.` `n/10 安柏`(封印石珀) `n/202 草種子` `n/116 眾葉覺蕊` `n/85 三相眾物` `n/64 蘭那羅` `n/134 鬆散的沙堆`

- 因為『安柏』與封印石珀同名 無法修復 請將其當作為封印石珀。

### 庫存 / 材料

- 可選擇: `n/186 冰霧花` `n/272 烈焰花` `n/274 電氣水晶` `n/20 竹筍` `n/22 鰍鰍寶玉` `n/174 蝴蝶翅膀` `n/343 晶核` `n/98 金魚草` `n /29 馬尾` `n/117 青蛙` `n/85 蜥蜴尾巴` `n/622 獸肉` `n/498 禽肉` `n/311 松果` `n/4 奇異的「牙齒」` `n/366 螃蟹` `n/298 魚肉`  `n/124 松茸` `n/220 鳥蛋` `n/14 冷鮮肉` `n/1535 甜甜花` `n/654 蘑菇 ` `n/182 日落果` `n/1514 薄荷` `n/345 樹莓` `n/49 蘋果` `n/94 蓮蓬` `n/26 白蘿蔔` `n/100 堇瓜` `n/122 觸肉` `n/1057 須彌薔薇 ` n/159 香辛果` `n/25 胡蘿蔔` `n/41 發光髓` `n/335 海草` `n/258 星蕈` `n/120 墩墩桃` `n/36「毗波耶」` `n/73 棗椰` `n/61 神秘的肉』

### 樹

- 可選擇: `n/295 杉木` `n/122 松木` `n/59 竹節` `n/628 卻砂木` `n/219 樺木` `n/162 萃華木` `n/156 垂香木` `n/370 御伽 木` `n/47 楓木` `n/145 孔雀木` `n/70 夢見木` `n/785 證悟木` `n/44 輝木` `n/31 業果木` `n/87 刺葵木` `n/168 梠木箱`

### 解密寶箱

- 可選擇: `n/10 蒙德地靈龛` `n/10 璃月地靈龕` `n/310 仙靈` `n/12 風車` `n/37 壓力石板` `n/71 掩埋的寶箱` `n/75 火炬解謎` `n/17 小石 碓` `n/138 封印的寶箱` `n/144 迷你拼圖` `n/19 風屏障` `n/81 雷靈` `n/53 解謎魔方` `n/4 丹迪` `n/4 發光的地板解謎` `n/9 劍柄` `n/23 奇特的岩石` `n/65 須彌解密` `n/17 石柱封印` `n/8 能量提取裝置` `n/9 須彌地靈龛` `n/5 神秘的壁畫` `n/34 元能火種` `n/30 風化的碑石` `n/295 限時挑戰` `n/19 風史萊姆` `n/56 蓬蓬果` `n/136 元素方碑` `n/97 大岩石` `n/16 可收穫的植物` `n/23 岩種子` `n/40 敵人(初勝)` `n/33 溫暖仙靈` `n/10 稻妻地靈龛` `n/8 鯨井小弟` `n/37 電氣傳導` `n/19 雷霆探針` `n/13 壁畫` `n/52 死域` `n/12 荒 野中的苗圃` `n/12 幻夢之門` `n/5 三乘種子` `n/18 元能尖碑` `n/25 恆光元件` `n/12 元能沙鍾` `n/7 風之厄靈` `n/9 蓄水階池`

### 釣魚

- 可選擇: `n/20 花鳉` `n/6 琉璃花鳉` `n/8 甜甜花鳉` `n/7 藍染花鳉` `n/16 擒霞客` `n/7 肺棘魚` `n/6 鸩棘魚` `n/13 水晶宴` `n/8 鬥棘魚` `n/9 赤魔王` `n/1 雪中君` `n/5 請假龍` `n/5 金赤假龍` `n/8 流紋褐蝶魚` `n/6 流紋京紫蝶魚` `n/7 流紋茶碟魚` `n/1 長生仙` `n/5炮鲀` `n/39 垂釣點` `n/1 沉波蜜桃` `n/1 雷鳴仙` `n/5 苦炮鲀` `n/5 真果角鲀` `n/5 吹沙角鲀` `n/7 暮雲角鲀` `n/6 青金斧槍魚` `n/6 翡玉斧槍魚`

### 動物

- 可選擇: `n/50 白鴿` `n/62 薄紅蟹` `n/15 碧團雀` `n/20 赤鰷陸鰻鰻` `n/1 赤脅鴿` `n/37 海藍蟹` `n/59 紅狐` `n/5 紅尾鰱` `n/15 黃金蟹` `n/4 灰羽鴿` `n/3 金鰍鰍` `n/94 童鸚` `n/31 藍角蜥` `n/37 雷晶蝶` `n/5 落日鰍鰍` `n/19 泥蛙` `n/4 晴天鰍鳅` `n/30 松鼠` `n/30  藤紋陸鰻鰻` `n/3 雪狐` `n/9 雪隱鰱` `n/16 烏鴉` `n/32 蕈豬` `n/91 暝彩鳥 ` `n/43 流沙鰻鰻` `n/19 冰晶蝶` `n/106 赤團雀` `n/29 風晶蝶` `n/22 紅角蜥` `n/8 黑王鴿` `n/6 狐狸` `n/8 灰雪貓` `n/50 將軍蟹` `n/28 金團雀` `n/4 藍寶石` `n/9 藍蛙` `n/6 璃冠鴿` `n/16 綠角蜥` `n/97 青蛙` `n/4 嗜髓蜥` `n/14 太陽蟹` `n/5 靴子鼬` `n/27 雪團雀` `n/ 14 雪豬` `n/55 岩晶蝶` `n/114 草晶蝶` `n/120 沙狐` `n/19 赤尾蜥` `n/19 面具鼬`

### 地表

- 可選擇: `n/1 忍冬之樹` `n/22 浪船錨點(不能傳送)` `n/1 神櫻樹` `n/115 洞穴` `n/1 夢之樹`

---

### 角色

選擇的角色會將所需材料顯示在[<font>**`角色過濾器`**</font>](#角色过滤器)中。 

### 火

- 可選擇: `迪盧克` `安柏` `香菱` `可莉` `班尼特` `辛焱` `胡桃` `煙緋` `宵宮` `托馬` `迪希雅`

### 風

- 可選擇: `琴` `旅行者` `旅行者` `溫迪` `魈` `砂糖` `楓原萬葉` `早柚` `鹿野院平藏` `流浪者` `琺露珊`

### 岩

- 可選擇: `旅行者` `旅行者` `凝光` `鍾離` `諾艾爾` `阿貝多` `五郎` `荒泷一斗` `雲堇`

### 草

- 可選擇: `旅行者` `旅行者` `柯萊` `提納里` `納西妲` `瑤瑤` `艾爾海森`

### 雷

- 可選擇: `旅行者` `麗莎` `旅行者` `雷澤` `北鬥` `菲謝爾` `刻晴` `雷電將軍` `九條裟羅` `八重神子` `久岐忍` `多莉` `賽諾`

### 水

- 可選擇: `芭芭拉` `行秋` `達達利亞` `莫娜` `珊瑚宮心海` `夜蘭` `神裡綾人` `妮露` `坎蒂絲`

### 冰

- 可選擇: `神里綾華` `凱亞` `七七` `重雲` `甘雨` `迪奧娜` `羅莎莉亞` `優拉` `埃洛伊` `申鶴` `萊依拉`

---

### 武器

選擇的武器會將所需材料顯示在[<font>**`武器過濾器`**</font>](#武器过滤器)中。 

### 劍

- 可選擇: `無鋒劍` `銀劍` `冷刃` `黎明神劍` `旅行劍` `暗鐵劍` `吃虎魚刀` `飛天御劍` `西風劍` `笛劍` `祭禮劍` `宗室長劍` `匣裡龍吟` `試作斬岩` `鐵蜂刺` `黑岩長劍` `黑劍` `暗巷閃光` `腐殖之劍` `天目影打刀` `辰砂之紡錘` `籠釣瓶一心` `原木刀` `西福斯的月光` `風鷹劍` `天空之刃` `蒼古自由之誓` `斫峰之刃` ` 磐岩結綠` `霧切之迴光` `波亂月白經津` `聖顯之鑰` `裁葉萃光`

### 法器

- 可選擇: `學徒筆記` `口袋魔導書` `魔導緒論` `討龍英傑譚` `異世界行記` `翡玉法球` `甲級寶珏` `西風秘典` `流浪樂章` `祭禮殘章` `宗室秘法錄` `匣裡日月` `試作金珀` `萬國諸海圖譜` `黑岩緋玉` `昭心` `暗巷的酒與詩` `忍冬之果` `嘟嘟可故事集` `白辰之環` `證誓之明瞳` `流浪的晚星` `盈滿之實` `天空之卷` `四風原典` ` 塵世之鎖` `不滅月華` `神樂之真意` `千夜浮夢` `圖萊杜拉的回憶`

### 雙手劍

- 可選擇: `訓練大劍` `傭兵重劍` `鐵影闊劍` `沐浴龍血的劍` `白鐵大劍` `以理服人` `飛天大御劍` `西風大劍` `鍾劍` `祭禮大劍` `宗室大劍` `雨裁` `試作古華` `白影劍` `黑岩斬 刀` `螭骨劍` `千岩古劍` `雪葬的星銀` `銜珠海皇` `桂木斬長正` `瑪海拉的水色` `惡王丸` `森林王器` `天空之傲` `狼的末路` `松籟響起之時` ` 無工之劍` `赤角石漬杵` `Beacon of the Reed Sea`

### 弓

- 可選擇: `獵弓` `歷練的獵弓` `鴉羽弓` `神射手之誓` `反曲弓` `彈弓` `信使` `西風獵弓` `絕弦` `察禮弓` `宗室長弓` `弓藏` `試作澹月` `鋼輪弓` `黑岩戰弓` `蒼翠獵弓 ` `暗巷獵手` `落霞` `幽夜華爾茲` `風花之頌` `破魔之弓` `掠食者` `曚雲之月` `王下近侍` `竭澤` `天空之翼` `阿莫斯之弓` `終末嗟嘆之詩` `冬極白星` ` 若水` `飛雷之弦振` `獵人之徑`

### 原胚

- 可選擇: `新手長槍` `鐵尖槍` `白缨槍` `钺矛` `黑缨槍` `匣裡滅辰` `試作星镰` `流月針` `黑岩刺槍` `決鬥之槍` `千岩長槍` `西風長槍` `宗室長槍` `龍脊長槍` `喜多院十文字` `「漁獲」` `斷浪長鳍` `貫月矢` `風信之鋒` `護摩之杖` `天空之脊` `貫虹之槊` `和璞鸢` `息災` `薙草之稻光` `赤沙之杖`

## 控制台

與外部控制台相關的。

### 新的驗證機制

自Bkebi-1.1.0起 採用了新的驗證機制

#### 新版本Bkebi-GC的驗證與使用步驟: 

**00** 需要在 [Bkebi Discord 伺服器](https://discord.gg/bkebi) 中 **擁有`Member`身份組** **(請自行認真閱讀完<u>公告</u>與<u>標註的消息</u>並根據指明的流程獲取)**。 

![LIC_01.png](/cheat/bkebi-gc/image/Lic_01.png)

**01** **下載 [**最新版本的Bkebi-GC**](https://github.com/Bkebi-Group/Bkebi-GC-Release/releases/latest) 並將其解壓** 至 `舊版本的Bkebi-GC根目錄 `或 `其他固定位置` 。

![LIC_02.png](/cheat/bkebi-gc/image/Lic_02.png)

**02** 找到解壓後的位置 **啟動`injector.exe`** 等待第二個控制台窗口啟動 若啟動則會有一個錯誤彈窗 **請無視它** 。

![LIC_03.png](/cheat/bkebi-gc/image/Lic_03.png)

**03** 在第二個控制台視窗中 **找到`This is your HWID: [{HWID}]`** 記住 **中括弧** 內的 **`{HWID}`** 。

![LIC_04.png](/cheat/bkebi-gc/image/Lic_04.png)

**04** 在 [Bkebi Discord 伺服器](https://discord.gg/bkebi) 的 **#keygen频道** 中使用 **`/generate free Bkebi 3.5.0 {HWID}`** 從Bot中生成密鑰文件。 

![LIC_05.png](/cheat/bkebi-gc/image/Lic_05.png)

**05** **下載`BKEBI-ISFREE-NOT4SALE. LIC`** 並將其 **放置在`Bkebi-GC根目錄`** 中。 

![LIC_06.png](/cheat/bkebi-gc/image/Lic_06.png)

**06** **點擊Retry** 或以任何方式重新啟動`injector.exe` 即可開始全新的Bkebi-GC之旅。 

![LIC_07.png](/cheat/bkebi-gc/image/Lic_07.png)
