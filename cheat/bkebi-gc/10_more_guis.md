---
title: Bkebi-GC
editLink: true
---

# 更多界面

主界面功能列表外的其他功能。

### 配置文件...

打开[<font>**`配置文件管理`**</font>](#配置文件管理)。

### 配置文件

设定当前使用的配置文件。

### 附加

附加当前的账号到选定的[<font>**`配置文件`**</font>](#配置文件)。

- 在使用当前账号登录时自动切换到当前选定的[<font>**`配置文件`**</font>](#配置文件)。

## 配置文件管理

 > 管理配置文件。

### 显示类型

设定账号的显示类型。

- 可作用于主菜单右上角。

- 可选择: `Pseudo` - 别名 | `UserID` - UID | `Nickname` - 昵称

### 别名 (重命名 (伪))

设定当前账号的别名。

### 重命名

更改此配置文件的昵称。

### 删除

删除此配置文件。

### 复制

复制此配置文件到列表中。

### +

附加当前的账号到此配置文件。

- 在使用当前账号登录时自动切换到此配置文件。

- 当前配置文件被附加的账号会显示在`账号`列。

### -

取消附加当前的账号到此配置文件。

### 账号列表

显示此配置文件被附加的账号。

## 自定义筛选器

> 根据对象类别来筛选透视对象。

### 新增筛选器

将要新建的筛选器相关设定。

### Display name

为此筛选器指定一个名称 

- 使用透视时 被筛选的对象会显示此昵称。

### Type

设定筛选实体的类别。

- 可选择: `无` `Avatar` `怪物` `Bullet` `AttackPhyisicalUnit` `AOE` `Camera` `EnviroArea` `Equip` `MonsterEquip` `Grass` `玩家等级` `NPC` `TransPointFirst` `TransPointFirstGadget` `TransPointSecond` `TransPointSecondGadget` `Dropltem` `FieId` `Gadget` `Water` `GatherPoint` `GatherObject` `AirflowField` `SpeedupFieId` `Gear` `宝箱` `EnergyBall` `ElemCrystal` `Timeline` `Worktop` `Team` `Platform` `AmberWind` `EnvAnimal` `SealGadget` `Tree` `Bush` `QuestGadget` `闪电` `RewardPoint` `RewardStatue` `MPLevel` `WindSeed` `MpPlayRewardPoint` `ViewPoint` `RemoteAvatar` `GeneralRewardPoint` `PlayTeam` `OfferingGadget` `EyePoint` `MiracleRing` `Foundation` `WidgetGadget` `Vehicle` `DangerZone` `EchoShell` `HomeGatherObject` `Projector` `Screen` `CustomTile` `FishPool` `FishRod` `CustomGadget` `RoguelikeOperatorGadget` `ActivityInteractGadget` `BlackMud` `SubEquip` `UllnteractGadget` `NightCrowGadget` `Partner` `DeshretObeliskGadget` `CoinCollectLevel` `GadgetPlaceHoldon`

### 解密

设定筛选实体是否为解密。

- 选定后将会检测此项 如果是解密将会检测解谜状态 使[<font>**`隐藏已完成的解密`**</font>](/cheat/bkebi-gc/04_esp#隐藏已完成的解密)生效。

### 名称

添加后将会通过名称筛选实体。

- 若不添加名称 则只通过类别直接筛选。

### 添加

添加设定的[<font>**`名称`**</font>](#名称)。

### Update name

替换选定项的[<font>**`名称`**</font>](#名称)。

### Cancel editing name

取消编辑选定项的[<font>**`名称`**</font>](#名称)。

- 会清除[<font>**`名称`**</font>](#名称)的编辑状态。

### 添加筛选器

添加的筛选器会在 [透视 - Custom filter](/cheat/bkebi-gc/04_esp#custom-filters) 中 需要自行启用。

### Calcel editing

取消编辑所选筛选器。

- 会清除[<font>**`Display name`**</font>](#display-name)、[<font>**`Type`**</font>](#type)和[<font>**`名称`**</font>](#名称)的编辑状态。

## 状态窗口

> 简单的显示目前的启用功能与其状态。

![Status_Window.png](image/Status_Window.png)

## 信息窗口

> 某些功能的状态显示。

目前会被显示的功能有 [传送 - 神瞳传送](/cheat/bkebi-gc/03_teleport#神瞳传送) 和 [传送 - 宝箱传送](/cheat/bkebi-gc/03_teleport#宝箱传送) 。

![Info_Window.png](image/Info_Window.png)

## FPS指示器

> 用于显示目前的游戏帧率。

![FPS_indicator.png](image/FPS_indicator.png)

## 通知

> 用于显示快捷键是否启用或关闭功能以及提示其他信息。

![Notifications.png](image/Notifications.png)

## ImGui

> 定制Bkebi-GC的个性化主题。

### 颜色 (Colors)

快速设定界面的主题颜色。

- 可选择: 
  - `Dark` 暗淡
  - `Light` 明亮
  - `Classic` 经典

### 字体 (Fonts)

选择界面的字体。

- 不能自定义添加字体 因为这需要更改源码自行编译。

### 框架圆角 (FrameRounding)

设定编辑框与按钮的圆角程度。

- 范围: `0 ~ 12`

### 窗体边框 (Window Border)

是否启用所有窗体的边框。

### 框架边框 (Frame Border)

是否启用整体框架的边框。

### 选择框边框 (Popup Border)

是否启用选项卡的边框。

### 保存配置 (Save Ref)

在本地非持续性的保存一次文件。

- 不会影响默认主题。

- 若需保存为长时间存储的文件 请使用 [设置 - 定制界面 -保存主题](/cheat/bkebi-gc/06_settings#保存主题) 。

### 恢复配置 (Revert Ref)

恢复上一次[<font>**`保存配置 (Save Ref)`**</font>](#保存配置-save-ref)时的主题。

### 大小 (Sizes)

与界面大小有关的调整。

#### 主要 (Main)

调整界面主要的内容。

- 可设定: 
  - `WindowPadding` 窗口边距(左边/上边)。
  - `FramePadding` 框架边距(水平/垂直)。
  - `CellPadding` 表格边距(水平/垂直)。
  - `ItemSpacing` 内容间隔(水平/垂直)。
  - `ItemInnerSpacing` 选择框间隔(水平/垂直)。
  - `TouchExtraPadding` 触摸额外填充(水平/垂直)。
  - `IndentSpacing` 缩进距离。
  - `ScrollbarSize` 滚动条宽度。
  - `GrabMinSize` 数值控制条最小宽度。

#### 边框 (Borders)

调整界面边框宽度。

- 可设定: 
  - `WindowBorderSize` 窗口的边框宽度。
  - `ChildBorderSize` 内边框的边框宽度。
  - `PopupBorderSize` 选择框的边框宽度。
  - `FrameBorderSize` 框架的边框宽度。
  - `TabBorderSize` 选项卡的边框宽度。

#### 圆角 (Rounding)

调整界面圆角程度。

- 可设定: 
  - `WindowRounding` 窗口的圆角程度。
  - `ChildRounding` 子窗口的圆角程度。
  - `FrameRounding` 框架的圆角程度。
  - `PopupRounding` 选择框的圆角程度。
  - `GrabRounding` 数值控制条的圆角程度。
  - `ScrollbarRounding` 滚动条的圆角程度。
  - `LogSliderDeadzone` 日志滑块间隔。
  - `TabRounding` 选项卡的圆角程度。

#### 对齐 (Alignment)

调整界面对齐。

- 可设定: 
  - `WindowTitleAlign` 窗口标题位置偏移。
  - `WindowMenuButtonPosition` 窗口折叠按钮位置。
    - `None` 禁用。
    - `Left` 左边。
    - `Right` 右边。
  - `ColorButtonPosition` 颜色按钮位置。
    - `Left` 左边。
    - `Right` 右边。
  - `ButtonTextAlign` 按钮文本偏移(水平/垂直)。
  - `SelectableTextAlign` 选择框文本对齐(水平/垂直)。

#### 安全区域边距 (Safe Area Padding)

  - `DisplaySafeAreaPadding` 显示安全区域边距(水平/垂直)。

### 颜色 (Colors)

设定界面的颜色。

- 可设定: 
  - `Text` 普通文本。
  - `TextDisabled` 已禁用文本。
  - `WindowBg` 窗口背景。
  - `ChildBg` 子窗口背景。
  - `PopupBg` 选择框背景。
  - `Border` 边框。
  - `BorderShadow` 边框阴影。
  - `FrameBg` 框架背景。
  - `FrameBgHovered` 框架颜色(鼠标悬停时)。
  - `FrameBgActive` 框架颜色(鼠标点按时)。
  - `TitleBg` 标题栏背景(处于后台窗口时)。
  - `TitleBgActive` 标题栏背景(处于前台窗口时)。
  - `TitleBgCollapsed` 标题栏背景(已折叠窗口时)。
  - `MenuBarBg` 菜单栏背景。
  - `ScrollbarBg` 滚动条背景。
  - `ScrollbarGrab` 滚动条填充。
  - `ScrollbarGrabHovered` 滚动条填充(鼠标悬停时)。
  - `ScrollbarGrabActive` 滚动条填充(鼠标点按时)。
  - `CheckMark` 复选标记。
  - `SliderGrab` 数值控制条的滑块。
  - `SliderGrabActive` 数值控制条的滑块(鼠标点按时)。
  - `Button` 按钮。
  - `ButtonHovered` 按钮(鼠标悬停时)。
  - `ButtonActive` 按钮(鼠标点按时)。
  - `Header` 主界面目录(已选择时)。
  - `HeaderHovered` 主界面目录选择颜色(鼠标悬停时)。
  - `HeaderActive` 主界面目录选择颜色(鼠标点按时)。
  - `Separator` 分隔线。
  - `SeparatorHovered` 分隔线(鼠标悬停时)。
  - `SeparatorActive` 分隔线(鼠标点按时)。
  - `Tab` 选项卡。
  - `TabHovered` 选项卡(鼠标悬停时)。
  - `TabActive` 选项卡(鼠标点按时)。
  - `TabUnfocused` 未选择的选项卡。
  - `TabUnfocusedActive` 未选择的选项卡(鼠标点按时)。
  - `DockingPreview` 对接预览。
  - `DockingEmptyBg` 对接空背景。
  - `PlotLines` 帧率曲线。
  - `PlotLinesHovered` 帧率曲线(鼠标悬停时)。
  - `PlotHistogram` 立方图。
  - `PlotHistogramHovered` 立方图(鼠标悬停时)。
  - `TableHeaderBg` 表格第一行背景。
  - `TableBorderStrong` 表格边框。
  - `TableBorderLight` 表格高亮边框。
  - `TableRowBg` 表行背景(奇数行)。
  - `TableRowBgAlt` 表行背景(偶数行)。
  - `TextSelectedBg` 文本选择背景。
  - `DragDropTarget` 拖动目标。
  - `NavHighlight` 导航高亮。
  - `NavWindowingHighlight` 导航窗口突出显示。
  - `NavWindowingDimBg` 导航窗口背景。
  - `ModalWindowDimBg` 模态窗口背景。
- `Save` - 保持颜色设置 | `Revert` 取消颜色更改
- `鼠标左键` - 点击颜色块更改颜色
- `鼠标右键` - 点击颜色块更改颜色编辑类型以及复制颜色代码

#### 导出 (Export)

以指定方式导出当前颜色。

- 可选择: `To Clipboard` - 到剪切板 | `To TTY` 到控制台

#### 仅导出颜色 (Only Modified Colors)

导出时仅导出颜色 而不会导出大小等。

#### 过滤颜色 (Filter colors)

通过关键词过滤颜色更改列表。

#### 不透明度 (Opaque)

仅不透明度的显示颜色。

#### 透明度 (Alpha)

仅透明度的显示颜色。

#### 两者 (Both)

使用不透明度(左)和透明度(右)显示颜色。

### 字体 (Fonts)

与界面字体相关的设定。

#### 设置为默认 (Set as default)

将所选字体设置为默认字体。

#### 窗口缩放 (window scale)

更改此窗口的文本、应用等项目的大小。

- 不建议使用此项 而是在[<font>**`大小`**</font>](#大小)中修改。

#### 全局缩放 (global scale)

更改全局的文本、应用等项目的大小。

- 不建议使用此项 而是在[<font>**`大小`**</font>](#大小)中修改。

### 渲染 (Rendering) 

界面渲染的相关设定。

#### 抗锯齿 (Anti-aliased lines)

是否启用抗锯齿。

#### 纹理抗锯齿 (Anti-aliased lines use texture)

是否启用纹理抗锯齿。

#### 填充抗锯齿 (Anti-aliased fill)

是否启用填充抗锯齿。

#### 曲线细节公差 (Curve Tessellation Tolerance)

设定曲线细节公差。

- 范围: `0.1 ~ 10`

#### 圆形细节最大误差 (Circle Tessellation Max Error)

设定圆形细节最大误差。

- 范围: `0.1 ~ 5`

#### 全局透明度 (Global Alpha)

设定全局透明度。

- 范围: `0.2 ~ 1`

#### 禁用透明度 (Disabled Alpha)

设定禁用透明度。

- 与原有透明度相乘。

- 范围: `0 ~ 1`

## 交互式地图

> 在地图上显示各种资源、宝箱已经见闻等点位。

### 设置

交互式地图的相关设置。

### 通用

通用设定。

#### 启用 <font size="2" color="#5FC3E4">&nbsp;<热键>&nbsp;</font>

是否启用[<font>**`交互式地图`**</font>](#交互式地图)。

![Interactive_map.png](image/Interactive_map.png)

#### 保存完成的点位

保存标记完成的点位至设定位置。

- 使用鼠标右键、[<font>**`收集物品检测`**</font>](#收集物品检测)或者[<font>**`手动完成`**</font>](#手动完成)标记完成。

- 可选择: `账号` `配置文件` `全局`

### 图标视图

图标相关的设定。

#### 图标大小

设定按`M`后的地图上的图标大小。

- 范围: `4 ~ 100`

#### 迷你地图大小

设定游戏中右上角的迷你地图上的图标大小。

- 范围: `4 ~ 100`

#### 动态大小

使图标随着地图的缩放的缩放。

#### 显示高清图标

将图标更换为高清图标。

### 未/已完成图标视图

设定与

#### 显示完成的

是否显示已标记完成的点位。

#### 完成点透明度

已标记完成的点位的图标透明度。

#### 显示未完成

是否显示未标记完成的点位。

#### 未完成点透明度

未标记完成的点位的图标透明度。

### 物品调整



#### 固定物品位置

根据物品在世界中位置来修复其在地图上的点位位置。

- 仅在[<font>**`检测范围`**</font>](#检测范围)中检测到的物品才会被[<font>**`固定物品位置`**</font>](#固定物品位置围)。

- 仅限支持在[<font>**`过滤器`**</font>](#过滤器)中有 <font color="#00ff00">绿色标记</font> 的点位类型。

#### 检测新物品

检测在交互式地图中没有数据的点位。

- 若[<font>**`检测范围`**</font>](#检测范围)内新物品在交互是地图中没有数据 则此物品会被检测为新物品。

- 仅限支持在[<font>**`过滤器`**</font>](#过滤器)中有 <font color="#00ff00">绿色标记</font> 的点位类型。

#### 仅检测显示的物品

仅检测过滤器中已勾选的点位类型。

#### 检测范围

设定[<font>**`固定物品位置`**</font>](#固定物品位置)与[<font>**`检测新物品`**</font>](#检测新物品)的范围。

#### 检测延迟(ms)

设定设定每一次检测之间的间隔。

- 检测物品会调整整体项目从而消耗性能 因此你需要指定每次检测物品之间的间隔。

### 收集物品检测

收集物品的检测相关设定。

#### 检测收集到的物品

检测某项物品是否被被收集 若被收集则会将点位标记为完成。

- 仅限支持在[<font>**`过滤器`**</font>](#过滤器)中有 <font color="#0000ff">蓝色标记</font> 的点位类型。

#### 检测范围

设定[<font>**`检测收集到的物品`**</font>](#检测收集到的物品)的范围。

### 手动完成

手动设定指定物品是否标记为完成。

#### 完成附近点位

标记完成距离角色最近的一个点位。

#### 恢复最近一次完成

取消标记上一次标记完成的点位。

- 根据已标记完成的点位标记顺序 从最后一项开始取消标记完成。

#### 仅完成已显示的点位

仅对[<font>**`过滤器`**</font>](#过滤器)中已勾选的点位类型有效

### 过滤器

筛选在地图上显示的点位。

### 升级材料过滤器

用于过滤其他界面指定的材料

#### 角色过滤器

在[<font>**`角色过滤器`**</font>](#角色过滤器)中已选角色的所需材料。

#### 武器过滤器

在[<font>**`武器过滤器`**</font>](#武器过滤器)中已选角色的所需材料。

### 搜索

使用关键词过滤以下项目。

- 仅支持英文关键词过滤 可在此处使用(Ctrl+F)中文搜索来定位指定物品。

### 锚点

- 可选择: `n/28 七天神像` `n/219 传送锚点` `n/47 秘境` `n/1 南十字·死兆星` `n/1 群玉阁`

### 特殊物品

- 可选择: `n/66 风神瞳` `n/131 岩神瞳` `n/80 绯红玉随` `n/9 老石` `n/181 雷神瞳` `n/1 键纹 II` `n/1 键纹 III` `n/1 键纹 IV` `n/45 旋曜玉帛` `n/235 草神瞳` `n/108 圣章石` `n/5 棋盘棋子` `n/6 神秘的石板` `n/7 「棋子」激活器件`

### 地方特产

- 可选择: `n/19 落落莓` `n/46 绝云椒椒` `n/54 嘟嘟莲` `n/138 清心` `n/77 小灯草` `n/209 琉璃袋` `n/38 塞西莉亚花` `n/14 霓裳花` `n/53 蒲公英种子` `n/39 琉璃百合` `n/53 慕风蘑菇` `n/161 石珀` `n/33 钩钩果` `n/52 夜泊石` `n/72 风车菊` `n/77 星螺` `n/154 海灵芝` `n/79 鬼兜虫` `n/129 鸣草` `n/55 血斛` `n/75 绯樱绣球` `n/66 晶化骨髓` `n/44 珊瑚珍珠` `n/95 天云草实` `n/71 幽灯蕈` `n/79 月莲` `n/66 劫波莲` `n/77 树王圣体菇` `n/68 帕蒂沙兰` `n/80 圣金虫` `n/96 赤念果` `n/74 沙脂蛹`

...

### 角色

选择的角色会将所需材料显示在[<font>**`角色过滤器`**</font>](#角色过滤器)中。

...

### 武器

选择的武器会将所需材料显示在[<font>**`武器过滤器`**</font>](#武器过滤器)中。

...