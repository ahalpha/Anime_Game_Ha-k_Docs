---
title: JSON轉BPFC
editLink: true
---

# JSON轉BPFC

Json轉換為Bpfc的相關方法。

## 前言

自Bkebi-1.1.0起 將不再支持Json傳送文件 需要使用 [Teleport converter](https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104) 將舊版文件轉換為支持的Bpfc加密文件。

## 簡易步驟

Bpfc傳送文件支持包含多個點位 所以轉換時 會將整個文件夾中的Json傳送文件 轉換進一個Bpfc傳送文件中。

### 轉移舊版本BK的傳送文件至新版本BK

English Tutorial: [Custom TP 2.0 Tutorial](https://discord.com/channels/1026295403282436097/1081373779084714157)

**00** 此步驟僅適用於覆蓋安裝的新版BK 否則請使用[<font>**`轉移指定文件夾的傳送文件至新版本BK`**</font>](#轉移指定文件夾的傳送文件至新版本BK)的步驟。

**01** 下載 [Teleport converter](https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104) 並將其中的所有文件解壓至`Bkebi-GC的根目錄`。

![tp_cvt_01.png](/hack/resources/image/tp_cvt_01.png)

**02** 若目錄中沒有`tp_files`文件夾 則需要自行創建一個。

![tp_cvt_02.png](/hack/resources/image/tp_cvt_02.png)

**03** 在`地址欄`輸入`cmd`並回車 以打開命令提示符。

![tp_cvt_03.png](/hack/resources/image/tp_cvt_03.png)

**04** 在命令提示符中輸入以下命令並回車: 

```bat
tp_converter -i "./teleports" -o "./tp_files/Old_Teleport"
```

**05** 在新版BK中`刷新文件`後 文件列表選擇`Old_Teleport`即可開始使用。

### 轉移指定文件夾的傳送文件至新版本BK

**01** 同上面的第 **01** **02** **03** 步驟。

**02** 將以下命令中的`{指定文件夾}`替換為含有Json傳送文件的目錄 `{名稱}`需要自己指定一個非中文的顯示暱稱 並在命令提示符中輸入命令並回車: 

```bat
tp_converter -i "{指定文件夾}" -o "./tp_files/{名稱}"
```

**03** 在新版BK中`刷新文件`後 文件列表選擇`{名稱}`即可開始使用。

有關自定義傳送的相關配置 請移步至 [自定義傳送 Pro](/cheat/bkebi-gc/03_teleport.html#自定義傳送-pro) 。

## 自定義轉換命令

### 示例命令

```bat
tp_converter -i "./MyTeleportFileDir" -o "./NewTeleportFile" -m 3 -n "MyTeleport" -d "This is my teleport file."
```

可以自行替換以下內容後在轉換器根目錄中執行命令。

- `./MyTeleportFileDir`可替換為轉換前的Json傳送文件的目錄。

- `./NewTeleportFile`可替換為轉換後的Bpfc傳送文件。

- `3`可替換為點位的地圖id `3`為提瓦特 `5`為淵下宮 `6`為層岩巨淵: 地下礦區。

- `MyTeleport`可替換為轉換後傳送文件在Bkebi-GC中的顯示暱稱 最好不要使用中文 否則可能會出現彈窗。

- `This is my teleport file.`可替換為轉換後傳送文件在Bkebi-GC中的描述 最好不要使用中文 否則可能會出現彈窗。

### 轉換器的所有參數

```
Teleport converter 幫助:
必須:
    -i <輸入的文件夾> [字符] 轉換前的Json傳送文件的目錄
    -o <輸出的文件> [字符] 轉換後的Bpfc傳送文件
可選:
    -m <地圖 Id> [整數] 默認值為3, 3=提瓦特, 5=淵下宮, 6=層岩巨淵: 地下礦區
    -n <名稱> [字符] 默認為輸出文件名
    -d <描述> [字符] 默認為空
其他:
    --h 顯示這條幫助
例子:
    tp_converter -i "./MyTeleportFileDir" -o "./NewTeleportFile" -m 3 -n "MyTeleport" -d "This is my teleport file."
```