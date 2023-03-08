---
title: JSON转BPFC
editLink: true
---

# JSON转BPFC

Json转换为Bpfc的相关方法。

## 前言

自Bkebi-1.1.0起 将不再支持Json传送文件 需要使用 [Teleport converter](https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104) 将旧版文件转换为支持的Bpfc加密文件。

## 简易步骤

Bpfc传送文件支持包含多个点位 所以转换时 会将整个文件夹中的Json传送文件 转换进一个Bpfc传送文件中。

### 转移旧版本BK的传送文件至新版本BK

English Tutorial: [Custom TP 2.0 Tutorial](https://discord.com/channels/1026295403282436097/1081373779084714157)

**00** 此步骤仅适用于覆盖安装的新版BK 否则请使用[<font>**`转移指定文件夹的传送文件至新版本BK`**</font>](#转移指定文件夹的传送文件至新版本BK)的步骤。

**01** 下载 [Teleport converter](https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104) 并将其中的所有文件解压至`Bkebi-GC的根目录`。

![tp_cvt_01.png](image/tp_cvt_01.png)

**02** 若目录中没有`tp_files`文件夹 则需要自行创建一个。

![tp_cvt_02.png](image/tp_cvt_02.png)

**03** 在`地址栏`输入`cmd`并回车 以打开命令提示符。

![tp_cvt_03.png](image/tp_cvt_03.png)

**04** 在命令提示符中输入以下命令并回车: 

```bat
tp_converter -i "./teleports" -o "./tp_files/Old_Teleport"
```

**05** 在新版BK中`刷新文件`后 文件列表选择`Old_Teleport`即可开始使用。

### 转移指定文件夹的传送文件至新版本BK

**01** 同上面的第 **01** **02** **03** 步骤。

**02** 将以下命令中的`{指定文件夹}`替换为含有Json传送文件的目录 `{名称}`需要自己指定一个非中文的显示昵称 并在命令提示符中输入命令并回车: 

```bat
tp_converter -i "{指定文件夹}" -o "./tp_files/{名称}"
```

**03** 在新版BK中`刷新文件`后 文件列表选择`{名称}`即可开始使用。

有关自定义传送的相关配置 请移步至 [自定义传送 Pro](/cheat/bkebi-gc/03_teleport.html#自定义传送-pro) 。

## 自定义转换命令

### 示例命令

```bat
tp_converter -i "./MyTeleportFileDir" -o "./NewTeleportFile" -m 3 -n "MyTeleport" -d "This is my teleport file."
```

可以自行替换以下内容后在转换器根目录中执行命令。

- `./MyTeleportFileDir`可替换为转换前的Json传送文件的目录。

- `./NewTeleportFile`可替换为转换后的Bpfc传送文件。

- `3`可替换为点位的地图id `3`为提瓦特 `5`为渊下宫 `6`为层岩巨渊: 地下矿区。

- `MyTeleport`可替换为转换后传送文件在Bkebi-GC中的显示昵称 最好不要使用中文 否则可能会出现弹窗。

- `This is my teleport file.`可替换为转换后传送文件在Bkebi-GC中的描述 最好不要使用中文 否则可能会出现弹窗。

### 转换器的所有参数

```
Teleport converter 帮助:
必须:
    -i <输入的文件夹> [字符] 转换前的Json传送文件的目录
    -o <输出的文件> [字符] 转换后的Bpfc传送文件
可选:
    -m <地图 Id> [整数] 默认值为3, 3=提瓦特, 5=渊下宫, 6=层岩巨渊: 地下矿区
    -n <名称> [字符] 默认为输出文件名
    -d <描述> [字符] 默认为空
其他:
    --h 显示这条帮助
例子:
    tp_converter -i "./MyTeleportFileDir" -o "./NewTeleportFile" -m 3 -n "MyTeleport" -d "This is my teleport file."
```