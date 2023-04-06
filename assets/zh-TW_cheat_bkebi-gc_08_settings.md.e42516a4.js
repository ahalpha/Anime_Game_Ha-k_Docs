import{_ as t,c as d,a as e,d as l,b as n,w as i,e as s,r as o,o as h}from"./app.8159d57e.js";const el=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"欺騙反作弊結果","slug":"欺騙反作弊結果","link":"#欺騙反作弊結果","children":[]},{"level":3,"title":"關閉保護","slug":"關閉保護","link":"#關閉保護","children":[]},{"level":3,"title":"屏蔽指標輸出","slug":"屏蔽指標輸出","link":"#屏蔽指標輸出","children":[]},{"level":3,"title":"語言","slug":"語言","link":"#語言","children":[]},{"level":3,"title":"通用","slug":"通用","link":"#通用","children":[]},{"level":3,"title":"日誌","slug":"日誌","link":"#日誌","children":[]},{"level":3,"title":"狀態視窗","slug":"狀態視窗","link":"#狀態視窗","children":[]},{"level":3,"title":"資訊視窗","slug":"資訊視窗","link":"#資訊視窗","children":[]},{"level":3,"title":"FPS指示器","slug":"fps指示器","link":"#fps指示器","children":[]},{"level":3,"title":"顯示通知","slug":"顯示通知","link":"#顯示通知","children":[]},{"level":3,"title":"快速退出","slug":"快速退出","link":"#快速退出","children":[]},{"level":3,"title":"定製介面","slug":"定製介面","link":"#定製介面","children":[]},{"level":3,"title":"帳號切換器","slug":"帳號切換器","link":"#帳號切換器","children":[]},{"level":3,"title":"攔截WindSeed","slug":"攔截windseed","link":"#攔截windseed","children":[]}],"relativePath":"zh-TW/cheat/bkebi-gc/08_settings.md","lastUpdated":null}'),r={name:"zh-TW/cheat/bkebi-gc/08_settings.md"},c=s(`<h1 id="設定" tabindex="-1">設定 <a class="header-anchor" href="#設定" aria-hidden="true">#</a></h1><p>配置學習環境。</p><h3 id="欺騙反作弊結果" tabindex="-1">欺騙反作弊結果 <a class="header-anchor" href="#欺騙反作弊結果" aria-hidden="true">#</a></h3><p>在WindSeedClientNotify反作弊載入時 給予其虛假的正常報告。</p><h3 id="關閉保護" tabindex="-1">關閉保護 <a class="header-anchor" href="#關閉保護" aria-hidden="true">#</a></h3><p>禁用Mhyprot2 Bypass。</p><ul><li><p>更改將在遊戲重新啟動後生效。</p></li><li><p>目前無法關閉。</p></li></ul><h3 id="屏蔽指標輸出" tabindex="-1">屏蔽指標輸出 <a class="header-anchor" href="#屏蔽指標輸出" aria-hidden="true">#</a></h3><p>不在控制台中輸出指標庫的垃圾信息。</p><ul><li><p>更改將在遊戲重新啟動後生效。</p></li><li><p>遮罩啟動時控制台輸出的Json資訊。</p></li><li><p>會輸出一條可以無視的提示:</p></li></ul><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Failed to </span><span style="color:#89DDFF;">find</span><span style="color:#A6ACCD;"> MiHoYoMTRSDK.d11. Metrics logs cannot be muted :</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> Note: you can ignore this message </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> MiHoYoMTRSDK.dll was removed/disabled by you or by game devs.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="語言" tabindex="-1">語言 <a class="header-anchor" href="#語言" aria-hidden="true">#</a></h3><p>設定Bkebi-GC所有介面的語言。</p><ul><li><p>如有翻譯或者文字錯誤 請前往 <a href="https://github.com/Bkebi-Group/Bkebi-Language" target="_blank" rel="noreferrer">Bkebi-Language</a> 遵循規定提交PR。</p></li><li><p>選擇:</p><ul><li>English | EN</li><li>Indonesian | ID</li><li>Russian | RU</li><li>Simplified Chinese | ZH-CN</li><li>Traditional Chinese | ZH-TW</li><li>Vietnamese | VN</li><li>調試</li></ul></li></ul><h3 id="通用" tabindex="-1">通用 <a class="header-anchor" href="#通用" aria-hidden="true">#</a></h3><p>一般設置。</p><h4 id="顯示bkebi功能表按鍵" tabindex="-1">顯示Bkebi功能表按鍵 <a class="header-anchor" href="#顯示bkebi功能表按鍵" aria-hidden="true">#</a></h4><p>設定打開Bkebi-GC主介面的按鍵。</p><ul><li><p>預設按鍵: <code>F1</code></p></li><li><p>如果忘記了按鍵 則需要去根目錄配置檔&quot;cfg.json&quot;里搜索<code>MenuKey</code> 然後找到並刪除<code>&quot;MenuKey&quot;: {num}，</code>(<code>{num}</code>為任意數值) 之後啟動遊戲 按 <code>F1</code> 即可打開功能表。</p></li><li><p>或者使用小工具 <a href="https://github.com/Bkebi-Group/GhostClient-MenuHotKey" target="_blank" rel="noreferrer">GhostClient-MenuHotKey</a> 。</p></li></ul><h4 id="啟動延遲" tabindex="-1">啟動延遲 <a class="header-anchor" href="#啟動延遲" aria-hidden="true">#</a></h4><p>啟動遊戲後注入Bkebi-GC的時間。</p><ul><li>僅在使用當前<code>injector.exe</code>注入器啟動時生效。</li></ul><h4 id="刷新" tabindex="-1">刷新 <a class="header-anchor" href="#刷新" aria-hidden="true">#</a></h4>`,23),_=e("code",null,"cfg.ini",-1),u={href:"#%E5%95%9F%E5%8B%95%E5%BB%B6%E9%81%B2"},p=e("strong",null,[e("code",null,"啟動延遲")],-1),f=e("h4",{id:"應用",tabindex:"-1"},[l("應用 "),e("a",{class:"header-anchor",href:"#應用","aria-hidden":"true"},"#")],-1),b={href:"#%E5%95%9F%E5%8B%95%E5%BB%B6%E9%81%B2"},E=e("strong",null,[e("code",null,"啟動延遲")],-1),A=e("h4",{id:"命令行參數",tabindex:"-1"},[l("命令行參數 "),e("a",{class:"header-anchor",href:"#命令行參數","aria-hidden":"true"},"#")],-1),g=e("p",null,"使用設定的命令行參數來打開遊戲。",-1),B=e("ul",null,[e("li",null,[l("僅在使用當前"),e("code",null,"injector.exe"),l("注入器啟動時生效。")])],-1),m=e("h4",{id:"刷新-1",tabindex:"-1"},[l("刷新 "),e("a",{class:"header-anchor",href:"#刷新-1","aria-hidden":"true"},"#")],-1),C=e("code",null,"cfg.ini",-1),T={href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%83%E6%95%B8"},x=e("strong",null,[e("code",null,"命令行參數")],-1),k=e("h4",{id:"應用-1",tabindex:"-1"},[l("應用 "),e("a",{class:"header-anchor",href:"#應用-1","aria-hidden":"true"},"#")],-1),S={href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%83%E6%95%B8"},D=e("strong",null,[e("code",null,"命令行參數")],-1),y=s('<h4 id="unity命令行參數列表" tabindex="-1">unity命令行參數列表 <a class="header-anchor" href="#unity命令行參數列表" aria-hidden="true">#</a></h4><p>跳轉到 <a href="https://docs.unity3d.com/Manual/PlayerCommandLineArguments.html" target="_blank" rel="noreferrer">Unity - Manual: Unity Standalone Player command line arguments</a> 。</p><h4 id="添加的dll" tabindex="-1">添加的Dll <a class="header-anchor" href="#添加的dll" aria-hidden="true">#</a></h4><p>在Bkebi-GC注入時 同時注入另外的一個Dll。</p><ul><li>僅在使用當前<code>injector.exe</code>注入器啟動時生效。</li></ul><h4 id="刷新-2" tabindex="-1">刷新 <a class="header-anchor" href="#刷新-2" aria-hidden="true">#</a></h4>',6),F=e("code",null,"cfg.ini",-1),v={href:"#%E6%B7%BB%E5%8A%A0%E7%9A%84dll"},P=e("strong",null,[e("code",null,"添加的Dll")],-1),I=e("h4",{id:"應用-2",tabindex:"-1"},[l("應用 "),e("a",{class:"header-anchor",href:"#應用-2","aria-hidden":"true"},"#")],-1),V={href:"#%E6%B7%BB%E5%8A%A0%E7%9A%84dll"},N=e("strong",null,[e("code",null,"添加的Dll")],-1),G=e("h4",{id:"啟動熱鍵",tabindex:"-1"},[l("啟動熱鍵 "),e("a",{class:"header-anchor",href:"#啟動熱鍵","aria-hidden":"true"},"#")],-1),R={href:"#%E6%98%BE%E7%A4%BAbkebi%E8%8F%9C%E5%8D%95%E6%8C%89%E9%94%AE"},w=e("strong",null,[e("code",null,"顯示Bkebi功能表按鍵")],-1),M=s('<h3 id="日誌" tabindex="-1">日誌 <a class="header-anchor" href="#日誌" aria-hidden="true">#</a></h3><p>記錄Bkebi-GC運行的相關過程與經歷。</p><ul><li>用於必要時反饋報錯、問題等需要提供的資料。</li></ul><h4 id="主控台日誌" tabindex="-1">主控台日誌 <a class="header-anchor" href="#主控台日誌" aria-hidden="true">#</a></h4><p>啟動時將不會關閉主控台 並在其中顯示紀錄。</p><ul><li><p>僅在使用『injector.exe』注入器啟動時生效。</p></li><li><p>更改將在遊戲重新啟動後生效。</p></li></ul><h4 id="檔案日誌" tabindex="-1">檔案日誌 <a class="header-anchor" href="#檔案日誌" aria-hidden="true">#</a></h4><p>將會在『./logs』資料夾保存紀錄。</p><ul><li>更改將在遊戲重新啟動後生效。</li></ul><h3 id="狀態視窗" tabindex="-1">狀態視窗 <a class="header-anchor" href="#狀態視窗" aria-hidden="true">#</a></h3><p>有關此視窗的相關介紹 請前往 <a href="./10_more_guis.html#狀態視窗">狀態視窗</a> 。</p><h4 id="顯示狀態視窗" tabindex="-1">顯示狀態視窗 <a class="header-anchor" href="#顯示狀態視窗" aria-hidden="true">#</a></h4>',12),j={href:"#%E7%8A%B6%E6%80%81%E7%AA%97%E5%8F%A3"},W=e("strong",null,[e("code",null,"狀態視窗")],-1),H=e("h4",{id:"移動狀態視窗",tabindex:"-1"},[l("移動狀態視窗 "),e("a",{class:"header-anchor",href:"#移動狀態視窗","aria-hidden":"true"},"#")],-1),K={href:"#%E7%8A%B6%E6%80%81%E7%AA%97%E5%8F%A3"},q=e("strong",null,[e("code",null,"狀態視窗")],-1),L=s('<h3 id="資訊視窗" tabindex="-1">資訊視窗 <a class="header-anchor" href="#資訊視窗" aria-hidden="true">#</a></h3><p>有關此視窗的相關介紹 請前往 <a href="./10_more_guis.html#信息視窗">信息視窗</a> 。</p><h4 id="顯示信息視窗" tabindex="-1">顯示信息視窗 <a class="header-anchor" href="#顯示信息視窗" aria-hidden="true">#</a></h4>',3),U={href:"#%E4%BF%A1%E6%81%AF%E7%AA%97%E5%8F%A3"},$=e("strong",null,[e("code",null,"信息視窗")],-1),z=e("h4",{id:"移動資訊視窗",tabindex:"-1"},[l("移動資訊視窗 "),e("a",{class:"header-anchor",href:"#移動資訊視窗","aria-hidden":"true"},"#")],-1),J={href:"#%E4%BF%A1%E6%81%AF%E7%AA%97%E5%8F%A3"},Y=e("strong",null,[e("code",null,"信息視窗")],-1),Z=s('<h3 id="fps指示器" tabindex="-1">FPS指示器 <a class="header-anchor" href="#fps指示器" aria-hidden="true">#</a></h3><p>有關此視窗的相關介紹 請前往 <a href="./10_more_guis.html#fps指示器">FPS指示器</a> 。</p><h4 id="顯示fps指示器" tabindex="-1">顯示FPS指示器 <a class="header-anchor" href="#顯示fps指示器" aria-hidden="true">#</a></h4>',3),O={href:"#fps%E6%8C%87%E7%A4%BA%E5%99%A8"},Q=e("strong",null,[e("code",null,"FPS指示器")],-1),X=e("h4",{id:"移動fps指示器",tabindex:"-1"},[l("移動FPS指示器 "),e("a",{class:"header-anchor",href:"#移動fps指示器","aria-hidden":"true"},"#")],-1),ee={href:"#fps%E6%8C%87%E7%A4%BA%E5%99%A8"},le=e("strong",null,[e("code",null,"FPS指示器")],-1),ae=s('<h3 id="顯示通知" tabindex="-1">顯示通知 <a class="header-anchor" href="#顯示通知" aria-hidden="true">#</a></h3><p>有關此視窗的相關介紹 請前往 <a href="./10_more_guis.html#通知">通知</a> 。</p><h4 id="通知延遲" tabindex="-1">通知延遲 <a class="header-anchor" href="#通知延遲" aria-hidden="true">#</a></h4><p>每條通知顯示的時間。 (毫秒)</p><p>範圍: <code>1 ~ 10000</code></p><h3 id="快速退出" tabindex="-1">快速退出 <a class="header-anchor" href="#快速退出" aria-hidden="true">#</a></h3><p>使用設定的按鍵一鍵結束遊戲。</p><h4 id="啟用" tabindex="-1">啟用 <a class="header-anchor" href="#啟用" aria-hidden="true">#</a></h4>',8),ne={href:"#%E5%BF%AB%E9%80%9F%E9%80%80%E5%87%BA"},ie=e("strong",null,[e("code",null,"快速退出")],-1),se=e("h4",{id:"熱鍵",tabindex:"-1"},[l("熱鍵 "),e("a",{class:"header-anchor",href:"#熱鍵","aria-hidden":"true"},"#")],-1),te={href:"#%E5%BF%AB%E9%80%9F%E9%80%80%E5%87%BA"},de=e("strong",null,[e("code",null,"快速退出")],-1),oe={href:"#%E6%98%BE%E7%A4%BAbkebi%E8%8F%9C%E5%8D%95%E6%8C%89%E9%94%AE"},he=e("strong",null,[e("code",null,"顯示Bkebi功能表按鍵")],-1),re={href:"#%E5%BF%AB%E9%80%9F%E9%80%80%E5%87%BA"},ce=e("strong",null,[e("code",null,"快速退出")],-1),_e={href:"#%E6%98%BE%E7%A4%BAbkebi%E5%8A%9F%E8%83%BD%E8%A1%A8%E6%8C%89%E9%8D%B5"},ue=e("strong",null,[e("code",null,"顯示Bkebi功能表按鍵")],-1),pe=e("code",null,'"FastExitEnable ": true',-1),fe=e("code",null,"true",-1),be=e("code",null,"false",-1),Ee=e("code",null,"None",-1),Ae={href:"#%E5%BF%AB%E9%80%9F%E9%80%80%E5%87%BA"},ge=e("strong",null,[e("code",null,"快速退出")],-1),Be=s('<h3 id="定製介面" tabindex="-1">定製介面 <a class="header-anchor" href="#定製介面" aria-hidden="true">#</a></h3><p>Bkebi-GC的介面相關設定。</p><h4 id="字體大小" tabindex="-1">字體大小 <a class="header-anchor" href="#字體大小" aria-hidden="true">#</a></h4><p>設定Bkebi-GC所有介面的字體大小。</p><ul><li><p>數值過大有可能導致遊戲崩潰。</p></li><li><p>範圍: <code>8 ~ (未知)</code></p></li></ul><h4 id="主題名稱" tabindex="-1">主題名稱 <a class="header-anchor" href="#主題名稱" aria-hidden="true">#</a></h4>',6),me={href:"#%E4%BF%9D%E5%AD%98%E4%B8%BB%E9%A2%98"},Ce=e("strong",null,[e("code",null,"保存主題")],-1),Te=e("h4",{id:"保存主題",tabindex:"-1"},[l("保存主題 "),e("a",{class:"header-anchor",href:"#保存主題","aria-hidden":"true"},"#")],-1),xe={href:"#%E4%B8%BB%E9%A2%98%E5%90%8D%E7%A7%B0"},ke=e("strong",null,[e("code",null,"主題名稱")],-1),Se=e("code",null,"./themes",-1),De=s('<h4 id="替換主題-replace-theme" tabindex="-1">替換主題 (Replace Theme) <a class="header-anchor" href="#替換主題-replace-theme" aria-hidden="true">#</a></h4><p>若『./themes』中有與新建主題相同的名稱，則會進行替換。</p><h4 id="選擇主題" tabindex="-1">選擇主題 <a class="header-anchor" href="#選擇主題" aria-hidden="true">#</a></h4><p>應用保存的指定主題。</p><h4 id="刪除主題" tabindex="-1">刪除主題 <a class="header-anchor" href="#刪除主題" aria-hidden="true">#</a></h4>',5),ye={href:"#%E9%80%89%E6%8B%A9%E4%B8%BB%E9%A2%98"},Fe=e("strong",null,[e("code",null,"選擇主題")],-1),ve=s(`<h4 id="顯示imgui主題定製" tabindex="-1">顯示ImGui主題定製 <a class="header-anchor" href="#顯示imgui主題定製" aria-hidden="true">#</a></h4><p>是否顯示ImGui主題定製視窗 有關此視窗的相關介紹 請前往 <a href="./10_more_guis.html#imgui">ImGui</a> 。</p><h3 id="帳號切換器" tabindex="-1">帳號切換器 <a class="header-anchor" href="#帳號切換器" aria-hidden="true">#</a></h3><p>啟動遊戲時使用指定賬號狀態自動登錄。</p><ul><li>需要使用快捷方式或命令行等啟動方法給予『injector.exe』以下命令行參數來啟動。</li></ul><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -account {帳號名稱}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6),Pe={href:"#%E8%B4%A6%E5%8F%B7%E5%90%8D%E7%A7%B0"},Ie=e("strong",null,[e("code",null,"帳號名稱")],-1),Ve=e("code",null,"Traveler",-1),Ne=e("code",null,"injector.exe",-1),Ge=e("code",null,"屬性",-1),Re=e("code",null,"目標",-1),we=s(`<div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -account Traveler</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>在使用國際版原神時 可以給予『injector.exe』以下命令行參數來更換啟動后的區域。</li></ul><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -region {區域}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),Me={href:"#"},je=e("strong",null,[e("code",null,"區域")],-1),We=e("code",null,"usa",-1),He=e("code",null,"eu",-1),Ke=e("code",null,"asia",-1),qe=e("code",null,"thm",-1),Le=e("li",null,[e("p",null,"可以給予『injector.exe』以下命令行參數來同時啟動多個Bkebi-GC實例。")],-1),Ue=s(`<div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -i</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>也可以使用第三方工具 <a href="https://discord.com/channels/1026295403282436097/1064953611056058479" target="_blank" rel="noreferrer">GenshinAccount</a> 。</li></ul><h4 id="帳號名稱" tabindex="-1">帳號名稱 <a class="header-anchor" href="#帳號名稱" aria-hidden="true">#</a></h4><p>自訂設定當前賬號狀態的暱稱。</p><h4 id="匯出" tabindex="-1">匯出 <a class="header-anchor" href="#匯出" aria-hidden="true">#</a></h4><p>將當前賬號狀態導出至『accounts.ini』。</p><ul><li>若導出成功 則會通知『Account successfully exported』。</li></ul><h3 id="攔截windseed" tabindex="-1">攔截WindSeed <a class="header-anchor" href="#攔截windseed" aria-hidden="true">#</a></h3><p>阻止來自惡意伺服器可能導致RCE的WindSeed數據包 僅在私服使用。</p>`,9);function $e(ze,Je,Ye,Ze,Oe,Qe){const a=o("font");return h(),d("div",null,[c,e("p",null,[l("重新讀取"),_,l("文件中的"),e("a",u,[n(a,null,{default:i(()=>[p]),_:1})]),l("。")]),f,e("p",null,[l("應用此"),e("a",b,[n(a,null,{default:i(()=>[E]),_:1})]),l("。")]),A,g,B,m,e("p",null,[l("重新讀取"),C,l("文件中的"),e("a",T,[n(a,null,{default:i(()=>[x]),_:1})]),l("。")]),k,e("p",null,[l("應用此"),e("a",S,[n(a,null,{default:i(()=>[D]),_:1})]),l("。")]),y,e("p",null,[l("重新讀取"),F,l("文件中的"),e("a",v,[n(a,null,{default:i(()=>[P]),_:1})]),l("。")]),I,e("p",null,[l("應用此"),e("a",V,[n(a,null,{default:i(()=>[N]),_:1})]),l("。")]),G,e("p",null,[l("是否啟用除"),e("a",R,[n(a,null,{default:i(()=>[w]),_:1})]),l("外的所有Bkebi-GC快捷鍵。")]),M,e("p",null,[l("是否顯示"),e("a",j,[n(a,null,{default:i(()=>[W]),_:1})]),l("。")]),H,e("p",null,[l("允許使用 『滑鼠左鍵』 拖動"),e("a",K,[n(a,null,{default:i(()=>[q]),_:1})]),l("。")]),L,e("p",null,[l("是否顯示"),e("a",U,[n(a,null,{default:i(()=>[$]),_:1})]),l("。")]),z,e("p",null,[l("允許使用 『滑鼠左鍵』 拖動"),e("a",J,[n(a,null,{default:i(()=>[Y]),_:1})]),l("。")]),Z,e("p",null,[l("是否顯示"),e("a",O,[n(a,null,{default:i(()=>[Q]),_:1})]),l("。")]),X,e("p",null,[l("允許使用 『滑鼠左鍵』 拖動"),e("a",ee,[n(a,null,{default:i(()=>[le]),_:1})]),l("。")]),ae,e("p",null,[l("是否啟用"),e("a",ne,[n(a,null,{default:i(()=>[ie]),_:1})]),l("。")]),se,e("p",null,[l("設定"),e("a",te,[n(a,null,{default:i(()=>[de]),_:1})]),l("的快捷鍵。")]),e("ul",null,[e("li",null,[e("p",null,[l("請勿設定為"),e("a",oe,[n(a,null,{default:i(()=>[he]),_:1})]),l(" 否則會在打開功能表的同時"),e("a",re,[n(a,null,{default:i(()=>[ce]),_:1})]),l("。")])]),e("li",null,[e("p",null,[l("若設定為"),e("a",_e,[n(a,null,{default:i(()=>[ue]),_:1})]),l(' 則需要去根目錄配置檔"cfg.json"里搜索'),pe,l(" 然後找到並將其中的"),fe,l("改為"),be,l(" 之後啟動遊戲 將快捷鍵改為其他按鍵。")])]),e("li",null,[e("p",null,[l("若設定為 "),Ee,l(" 則"),e("a",Ae,[n(a,null,{default:i(()=>[ge]),_:1})]),l("將不會生效。")])])]),Be,e("p",null,[l("設定將要"),e("a",me,[n(a,null,{default:i(()=>[Ce]),_:1})]),l("的名稱。")]),Te,e("p",null,[l("保存一個名為"),e("a",xe,[n(a,null,{default:i(()=>[ke]),_:1})]),l("的當前ImGui主題定製設定到"),Se,l("。")]),De,e("p",null,[l("刪除"),e("a",ye,[n(a,null,{default:i(()=>[Fe]),_:1})]),l(" 並將介面重置為默認樣式。")]),ve,e("ul",null,[e("li",null,[l("例: 在"),e("a",Pe,[n(a,null,{default:i(()=>[Ie]),_:1})]),l("為"),Ve,l("時 創建"),Ne,l("的快捷方式 在其"),Ge,l("-"),Re,l("的最後添加以下參數並應用 之後啟動快捷方式即可成功切換。")])]),we,e("ul",null,[e("li",null,[e("p",null,[e("a",Me,[n(a,null,{default:i(()=>[je]),_:1})]),l("可選擇: "),We,l(" - 美服 | "),He,l(" - 歐服 | "),Ke,l(" - 亞服 | "),qe,l(" - 港澳臺服")])]),Le]),Ue])}const ll=t(r,[["render",$e]]);export{el as __pageData,ll as default};
