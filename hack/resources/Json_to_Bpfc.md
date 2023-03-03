---
title: JSON转BPFC
editLink: true
---

# JSON转BPFC

Json转换为Bpfc的相关方法。

## 前言

自Bkebi-1.1.0起 将不再支持Json传送文件 需要使用 [Teleport converter](https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104) 将旧版文件转换为支持的Bpfc加密文件。

## 简易步骤

### 转移旧版本BK的传送文件至新版本BK

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

**02** 将以下命令中的`{指定文件夹}`替换为含有Json传送文件的目录 `{名称}`需要自己指定 并在命令提示符中输入命令并回车: 

```bat
tp_converter -i "{指定文件夹}" -o "./tp_files/{名称}"
```

**03** 在新版BK中`刷新文件`后 文件列表选择`{名称}`即可开始使用。

有关自定义传送的相关配置 请移步至 [自定义传送 Pro](/cheat/bkebi-gc/03_teleport.html#自定义传送-pro) 。


## CVT

### 参数帮助

```
Teleport converter 帮助:
必须:
    -i <Input Dir> [String] 转换前的Json传送文件的目录
    -o <Output File> [String] 转换后的Bpfc传送文件
可选:
    -m <Map Id> [Integer] 默认值为3, 3=提瓦特, 5=渊下宫, 6=层岩巨渊: 地下矿区
    -n <Name> [String] 默认为输出文件名
    -d <Description> [String] 默认为空
其他:
    --h 显示这条帮助
例子:
    tp_converter -i "./MyTeleportFileDir" -o "./NewTeleportFile" -m 3 -n "MyTeleport" -d "This is my teleport file."
```