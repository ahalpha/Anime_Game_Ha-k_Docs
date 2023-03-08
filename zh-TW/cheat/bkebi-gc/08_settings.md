---
title: Bkebi-GC
editLink: true
---

# 設定

配置學習環境。

### 欺騙反作弊結果

在WindSeedClientNotify反作弊載入時 給予其虛假的正常報告。 

### 關閉保護

禁用Mhyprot2 Bypass。 

### 遮罩指標輸出

不在控制台中輸出指標庫的垃圾資訊。

- 遮罩啟動時控制台輸出的Json資訊。

- 會輸出一條可以無視提示: `Failed to find MiHoYoMTRSDK.d11. Metrics logs cannot be muted :( Note: you can ignore this message if MiHoYoMTRSDK.dll was removed/disabled by you or by game devs.`

- 更改將在遊戲重新啟動後生效。

### 語言

設定Bkebi-GC所有介面的語言。 

- 如有翻譯或者文字錯誤 請前往 [Bkebi-Language](https://github.com/Bkebi-Group/Bkebi-Language) 遵循規定提交PR。

- 選擇: 
  - English | EN (DEBUG)
  - Indonesian | ID
  - Russian | RU
  - Simplified Chinese | ZH-CN
  - Traditional Chinese | ZH-TW
  - Vietnamese | VN
  - English | EN

### 通用

一般設置。

#### 顯示Bkebi功能表按鍵

設定打開Bkebi-GC主介面的按鍵。 

- 預設按鍵為: `F1`

- 如果忘記了按鍵 則需要去根目錄配置檔"cfg.json"里搜索`MenuKey` 然後找到並刪除`"MenuKey": {num}，`(`{num}`為任意數值) 之後啟動遊戲 按 `F1` 即可打開功能表。

- 或者使用小工具 [GhostClient-MenuHotKey](https://github.com/Bkebi-Group/GhostClient-MenuHotKey) 。

#### 命令行參數

使用設定的命令行參數來打開遊戲。

#### 刷新

若你設置過 則會顯示之前設定的[<font>**`命令行參數`**</font>](#命令行参数)。 

#### 應用

應用此[<font>**`命令行參數`**</font>](#命令行参数)。 

#### unity命令行參數列表

跳轉到 [Unity - Manual: Unity Standalone Player command line arguments](https://docs.unity3d.com/Manual/PlayerCommandLineArguments.html) 。 

#### 添加的Dll

與Bkebi Dll注入的同時注入另外的一個DII。 

- 僅在使用『injector.exe』注入器啟動時生效。

#### 刷新

若你之前設置過 則會重新顯示啟用狀態和已經應用的Dll。 

#### 應用

應用此Dll。 

#### 啟動熱鍵

是否啟用除[<font>**`顯示Bkebi功能表按鍵`**</font>](#显示bkebi菜单按键)外的所有Bkebi-GC快捷鍵。 

### 日誌

記錄Bkebi-GC運行的相關過程與經歷。 

- 用於必要時反饋報錯、問題等需要提供的資料。

#### 主控台日誌

啟動時將不會關閉主控台 並在其中顯示紀錄。 

- 僅在使用『injector.exe』注入器啟動時生效。

- 更改將在遊戲重新啟動後生效。

#### 檔案日誌

將會在『./logs』資料夾保存紀錄。 

- 更改將在遊戲重新啟動後生效。

### 狀態視窗

有關此視窗的相關介紹 請前往 [狀態視窗](/cheat/bkebi-gc/10_more_guis#狀態視窗) 。 

#### 顯示狀態視窗

是否顯示[<font>**`狀態視窗`**</font>](#状态窗口)。 

#### 移動狀態視窗

允許使用 『滑鼠左鍵』 拖動[<font>**`狀態視窗`**</font>](#状态窗口)。 

### 資訊視窗

有關此視窗的相關介紹 請前往 [信息視窗](/cheat/bkebi-gc/10_more_guis#信息視窗) 。 

#### 顯示信息視窗

是否顯示[<font>**`信息視窗`**</font>](#信息窗口)。 

#### 移動資訊視窗

允許使用 『滑鼠左鍵』 拖動[<font>**`信息視窗`**</font>](#信息窗口)。 

### FPS指示器

有關此視窗的相關介紹 請前往 [FPS指示器](/cheat/bkebi-gc/10_more_guis#fps指示器) 。 

#### 顯示FPS指示器

是否顯示[<font>**`FPS指示器`**</font>](#fps指示器)。 

#### 移動FPS指示器

允許使用 『滑鼠左鍵』 拖動[<font>**`FPS指示器`**</font>](#fps指示器)。 

### 顯示通知

有關此視窗的相關介紹 請前往 [通知](/cheat/bkebi-gc/10_more_guis#通知) 。 

#### 通知延遲

每條通知顯示的時間。 (毫秒)

範圍: `1 ~ 10000`

### 快速退出

使用設定的按鍵一鍵結束遊戲。

#### 啟用

是否啟用[<font>**`快速退出`**</font>](#快速退出)。 

#### 熱鍵

設定[<font>**`快速退出`**</font>](#快速退出)的快捷鍵。 

- 請勿設定為[<font>**`顯示Bkebi功能表按鍵`**</font>](#显示bkebi菜单按键) 否則會在打開功能表的同時[<font>**`快速退出`**</font>](#快速退出)。 

- 若設定為[<font>**`顯示Bkebi功能表按鍵`**</font>](#显示bkebi功能表按鍵) 則需要去根目錄配置檔"cfg.json"里搜索`"FastExitEnable ": true` 然後找到並將其中的`true`改為`false` 之後啟動遊戲 將快捷鍵改為其他按鍵。 

- 若設定為 `None` 則[<font>**`快速退出`**</font>](#快速退出)將不會生效。

### 定製介面

Bkebi-GC的介面相關設定。

#### 字體大小

設定Bkebi-GC所有介面的字體大小。 

- 數值過大有可能導致遊戲崩潰。

- 範圍: `8 ~ (未知)`

#### 主題名稱

設定將要[<font>**`保存主題`**</font>](#保存主题)的名稱。 

#### 保存主題

保存一個名為[<font>**`主題名稱`**</font>](#主题名称)的當前ImGui主題定製設定到`./themes`。 

#### 替換主題 (Replace Theme) 

若『./themes』中有與新建主題相同的名稱，則會進行替換。 

#### 選擇主題

應用保存的指定主題。

#### 刪除主題

刪除[<font>**`選擇主題`**</font>](#选择主题) 並將介面重置為默認樣式。 

#### 顯示ImGui主題定製

是否顯示ImGui主題定製視窗 有關此視窗的相關介紹 請前往 [ImGui](/cheat/bkebi-gc/10_more_guis#imgui) 。 

### 帳號切換器

啟動遊戲時使用指定賬號狀態自動登錄。

- 需要使用快捷方式或命令行等啟動方法給予『injector.exe』以下命令行參數來啟動。

```bat
 -account {帳號名稱}
```

- 例: 在[<font>**`帳號名稱`**</font>](#账号名称)為`Traveler`時 創建`injector.exe`的快捷方式 在其`屬性`-`目標`的最後添加以下參數並應用 之後啟動快捷方式即可成功切換。

```bat
 -account Traveler
```

- 在使用國際版原神時 可以給予『injector.exe』以下命令行參數來更換啟動后的區域。

```bat
 -region {區域}
```

- [<font>**`區域`**</font>](#)可選擇: `usa` - 美服 | `eu` - 歐服 | `asia` - 亞服 | `thm` - 港澳臺服

- 可以給予『injector.exe』以下命令行參數來同時啟動多個Bkebi-GC實例。

```bat
 -i
```

- 也可以使用第三方工具 [GenshinAccount](https://discord.com/channels/1026295403282436097/1064953611056058479) 。

#### 帳號名稱

自訂設定當前賬號狀態的暱稱。

#### 匯出

將當前賬號狀態導出至『accounts.ini』。 

- 若導出成功 則會通知『Account successfully exported』。

### 攔截WindSeed

阻止來自惡意伺服器可能導致RCE的WindSeed數據包 僅在私服使用。 
