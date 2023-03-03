---
title: Bkebi-GC
editLink: true
---

# 设置

配置学习环境。

### 欺骗反作弊结果

在WindSeedClientNotify反作弊加载时 给予其虚假的正常报告。

### 关闭保护

禁用Mhyprot2 Bypass。

### 屏蔽指标输出

不在控制台中输出指标库的垃圾信息。

- 更改将在游戏重新启动后生效。

### 语言

设定Bkebi-GC所有界面的语言。

- 如有翻译或者文字错误 请前往 [Bkebi-Language](https://github.com/Bkebi-Group/Bkebi-Language) 遵循规定提交PR。

- 可选择: 
  - English | EN (DEBUG)
  - Indonesian | ID
  - Russian | RU
  - Simplified Chinese | ZH-CN
  - Traditional Chinese | ZH-TW
  - English | EN

### 通用

一般设置。

#### 显示Bkebi菜单按键

设定打开Bkebi-GC主界面的按键。

- 默认按键为: `F1`

- 如果忘记了按键 则需要去根目录配置文件"cfg.json"里搜索`MenuKey` 然后找到并删除`"MenuKey": {num},`(`{num}`为任意数值) 之后启动游戏 按 `F1` 即可打开菜单。

- 或者使用小工具 [GhostClient-MenuHotKey](https://github.com/Bkebi-Group/GhostClient-MenuHotKey) 。

#### 命令行参数

使用设定的命令行参数来打开游戏。

#### 刷新

若你设置过 则会显示之前设定的[<font>**`命令行参数`**</font>](#命令行参数)。

#### 应用

应用此[<font>**`命令行参数`**</font>](#命令行参数)。

#### unity命令行参数列表

跳转到 [Unity - Manual: Unity Standalone Player command line arguments](https://docs.unity3d.com/Manual/PlayerCommandLineArguments.html) 。

#### 添加的Dll

与Bkebi Dll注入的同时注入另外的一个DII。

- 仅在使用`injector.exe`注入器启动时生效。

#### 刷新

若你之前设置过 则会重新显示启用状态和已经应用的Dll。

#### 应用

应用此Dll。

#### 启动热键

是否启用除[<font>**`显示Bkebi菜单按键`**</font>](#显示bkebi菜单按键)外的所有Bkebi-GC快捷键。

### 日志

记录Bkebi-GC运行的相关过程与经历。

- 用于必要时反馈报错、问题等需要提供的资料。

#### 控制台日志

启动时将不会关闭控制台 并在其中显示日志。

- 仅在使用`injector.exe`注入器启动时生效。

- 更改将在游戏重新启动后生效。

#### 文件日志

将会在`./logs`文件夹保存日志。

- 更改将在游戏重新启动后生效。

### 状态窗口

有关此窗口的相关介绍 请前往 [状态窗口](/cheat/bkebi-gc/10_more_guis#状态窗口) 。

#### 显示状态窗口

是否显示[<font>**`状态窗口`**</font>](#状态窗口)。

#### 移动状态窗口

允许使用 `鼠标左键` 拖动[<font>**`状态窗口`**</font>](#状态窗口)。

### 信息窗口

有关此窗口的相关介绍 请前往 [信息窗口](/cheat/bkebi-gc/10_more_guis#信息窗口) 。

#### 显示信息窗口

是否显示[<font>**`信息窗口`**</font>](#信息窗口)。

#### 移动信息窗口

允许使用 `鼠标左键` 拖动[<font>**`信息窗口`**</font>](#信息窗口)。

### FPS指示器

有关此窗口的相关介绍 请前往 [FPS指示器](/cheat/bkebi-gc/10_more_guis#fps指示器) 。

#### 显示FPS指示器

是否显示[<font>**`FPS指示器`**</font>](#fps指示器)。

#### 移动FPS指示器

允许使用 `鼠标左键` 拖动[<font>**`FPS指示器`**</font>](#fps指示器)。

### 显示通知

有关此窗口的相关介绍 请前往 [通知](/cheat/bkebi-gc/10_more_guis#通知) 。

#### 通知延迟

每条通知显示的时间。(毫秒)

范围: `1 ~ 10000`

### 快速退出

使用设定的按键一键结束游戏。

#### 启用

是否启用[<font>**`快速退出`**</font>](#快速退出)。

#### 热键

设定[<font>**`快速退出`**</font>](#快速退出)的快捷键。

- 请勿设定为[<font>**`显示Bkebi菜单按键`**</font>](#显示bkebi菜单按键) 否则会在打开菜单的同时[<font>**`快速退出`**</font>](#快速退出)。

- 若设定为[<font>**`显示Bkebi菜单按键`**</font>](#显示bkebi菜单按键) 则需要去根目录配置文件"cfg.json"里搜索`"FastExitEnable": true` 然后找到并将其中的`true`改为`false` 之后启动游戏 将快捷键改为其他按键。

- 若设定为 `None` 则[<font>**`快速退出`**</font>](#快速退出)将不会生效。

### 定制界面

Bkebi-GC的界面相关设定。

#### 字体大小

设定Bkebi-GC所有界面的字体大小。

- 数值过大有可能导致游戏崩溃。

- 范围: `8 ~ (未知)`

#### 主题名称

设定将要[<font>**`保存主题`**</font>](#保存主题)的名称。

#### 保存主题

保存一个名为[<font>**`主题名称`**</font>](#主题名称)的当前ImGui主题定制设定到`./themes`。

#### 替换主题 (Replace Theme) 

若`./themes`中有与新建主题相同的名称，则会进行替换。

#### 选择主题

应用保存的指定主题。

#### 删除主题

删除[<font>**`选择主题`**</font>](#选择主题) 并将界面重置为默认样式。

#### 显示ImGui主题定制

是否显示ImGui主题定制窗口 有关此窗口的相关介绍 请前往 [ImGui](/cheat/bkebi-gc/10_more_guis#imgui) 。

### 账号切换器

启动游戏时使用指定账号状态自动登录。

- 需要使用快捷方式或命令行等启动方法给予`injector.exe`以下命令行参数来启动。

```bat
 -account {账号名称}
```

- 例: 在[<font>**`账号名称`**</font>](#账号名称)为`Traveler`时 创建`injector.exe`的快捷方式 在其`属性`-`目标`的最后添加以下参数并应用 之后启动快捷方式即可成功切换。

```bat
 -account Traveler
```

- 在使用国际版原神时 可以给予`injector.exe`以下命令行参数来更换启动后的区域。

```bat
 -region {区域}
```

- [<font>**`区域`**</font>](#)可选择: `usa` - 美服 | `eu` - 欧服 | `asia` - 亚服 | `thm` - 港澳台服

- 可以给予`injector.exe`以下命令行参数来同时启动多个Bkebi-GC实例。

```bat
 -i
```

- 也可以使用 [GenshinAccount](https://discord.com/channels/1026295403282436097/1064953611056058479/1080166591012012152) 快速切换账号。

#### 账号名称

自定义设定当前账号状态的昵称。

#### 导出

将当前账号状态导出至`accounts.ini`。

- 若导出成功 则会通知`Account successfully exported`。

### 拦截WindSeed

阻止来自恶意服务器可能导致RCE的WindSeed数据包 仅在私服使用。

## 抓包工具

> 配置内置的抓包工具。

### 管道名

设定管道名称 用于与另一管道名称相同的进程进行数据交换。

- 如果使用 [PacketSniffer](https://github.com/Akebi-Group/Akebi-PacketSniffer) 则为默认值`genshin_packet_pipe`。

- 有关详细使用方法 请查看 [PacketSniffer](/hack/resources/PacketSniffer) 。

### 捕获

是否启用捕获游戏数据包信息并发送到管道。

### 操纵(暂)

是否可以通过管道修改数据包并发送到游戏。

- 可能会导致游戏延迟升高。

## RSA补丁

> 快速更改RSA以连接到连接非官方服务端。

### 启用 RSA补丁 <font size="2" color="#1ea4ed">&nbsp;<热键>&nbsp;</font>

是否启用[<font>**`RSA补丁`**</font>](#rsa补丁)。

### 自定义公钥

设定连接到服务端的公钥。

- 若选项未勾选 则使用Grasscutter公钥。

### 自定义私钥

设定连接到服务端的私钥。

- 若选项未勾选 则不更改私钥。

- 连接Grasscutter服务端不需要更改私钥。