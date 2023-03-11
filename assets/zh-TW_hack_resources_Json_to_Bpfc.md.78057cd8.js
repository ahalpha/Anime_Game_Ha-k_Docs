import{_ as l,a as o,b as t}from"./chunks/tp_cvt_03.23fd6a24.js";import{_ as p,c as r,a as s,d as e,b as c,w as i,e as n,r as d,o as h}from"./app.c9455bbf.js";const E=JSON.parse('{"title":"JSON轉BPFC","description":"","frontmatter":{"title":"JSON轉BPFC","editLink":true},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"簡易步驟","slug":"簡易步驟","link":"#簡易步驟","children":[{"level":3,"title":"轉移舊版本BK的傳送文件至新版本BK","slug":"轉移舊版本bk的傳送文件至新版本bk","link":"#轉移舊版本bk的傳送文件至新版本bk","children":[]},{"level":3,"title":"轉移指定文件夾的傳送文件至新版本BK","slug":"轉移指定文件夾的傳送文件至新版本bk","link":"#轉移指定文件夾的傳送文件至新版本bk","children":[]}]},{"level":2,"title":"自定義轉換命令","slug":"自定義轉換命令","link":"#自定義轉換命令","children":[{"level":3,"title":"示例命令","slug":"示例命令","link":"#示例命令","children":[]},{"level":3,"title":"轉換器的所有參數","slug":"轉換器的所有參數","link":"#轉換器的所有參數","children":[]}]}],"relativePath":"zh-TW/hack/resources/Json_to_Bpfc.md","lastUpdated":null}'),u={name:"zh-TW/hack/resources/Json_to_Bpfc.md"},b=n('<h1 id="json轉bpfc" tabindex="-1">JSON轉BPFC <a class="header-anchor" href="#json轉bpfc" aria-hidden="true">#</a></h1><p>Json轉換為Bpfc的相關方法。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>自Bkebi-1.1.0起 將不再支持Json傳送文件 需要使用 <a href="https://discord.com/channels/1026295403282436097/1072831171639115796/1083433717172817971" target="_blank" rel="noreferrer">Teleport converter</a> 將舊版文件轉換為支持的Bpfc加密文件。</p><h2 id="簡易步驟" tabindex="-1">簡易步驟 <a class="header-anchor" href="#簡易步驟" aria-hidden="true">#</a></h2><p>Bpfc傳送文件支持包含多個點位 所以轉換時 會將整個文件夾中的Json傳送文件 轉換進一個Bpfc傳送文件中。</p><h3 id="轉移舊版本bk的傳送文件至新版本bk" tabindex="-1">轉移舊版本BK的傳送文件至新版本BK <a class="header-anchor" href="#轉移舊版本bk的傳送文件至新版本bk" aria-hidden="true">#</a></h3><p>English Tutorial: <a href="https://discord.com/channels/1026295403282436097/1081373779084714157" target="_blank" rel="noreferrer">Custom TP 2.0 Tutorial</a></p>',8),_=s("strong",null,"00",-1),C={href:"#%E8%BD%89%E7%A7%BB%E6%8C%87%E5%AE%9A%E6%96%87%E4%BB%B6%E5%A4%BE%E7%9A%84%E5%82%B3%E9%80%81%E6%96%87%E4%BB%B6%E8%87%B3%E6%96%B0%E7%89%88%E6%9C%ACBK"},D=s("strong",null,[s("code",null,"轉移指定文件夾的傳送文件至新版本BK")],-1),m=n('<p><strong>01</strong> 下載 <a href="https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104" target="_blank" rel="noreferrer">Teleport converter</a> 並將其中的所有文件解壓至<code>Bkebi-GC的根目錄</code>。</p><p><img src="'+l+'" alt="tp_cvt_01.png"></p><p><strong>02</strong> 若目錄中沒有<code>tp_files</code>文件夾 則需要自行創建一個。</p><p><img src="'+o+'" alt="tp_cvt_02.png"></p><p><strong>03</strong> 在<code>地址欄</code>輸入<code>cmd</code>並回車 以打開命令提示符。</p><p><img src="'+t+`" alt="tp_cvt_03.png"></p><p><strong>04</strong> 在命令提示符中輸入以下命令並回車:</p><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tp_converter -i </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./teleports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -o </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./tp_files/Old_Teleport</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>05</strong> 在新版BK中<code>刷新文件</code>後 文件列表選擇<code>Old_Teleport</code>即可開始使用。</p><h3 id="轉移指定文件夾的傳送文件至新版本bk" tabindex="-1">轉移指定文件夾的傳送文件至新版本BK <a class="header-anchor" href="#轉移指定文件夾的傳送文件至新版本bk" aria-hidden="true">#</a></h3><p><strong>01</strong> 同上面的第 <strong>01</strong> <strong>02</strong> <strong>03</strong> 步驟。</p><p><strong>02</strong> 將以下命令中的<code>{指定文件夾}</code>替換為含有Json傳送文件的目錄 <code>{名稱}</code>需要自己指定一個非中文的顯示暱稱 並在命令提示符中輸入命令並回車:</p><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tp_converter -i </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{指定文件夾}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -o </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./tp_files/{名稱}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>03</strong> 在新版BK中<code>刷新文件</code>後 文件列表選擇<code>{名稱}</code>即可開始使用。</p><p>有關自定義傳送的相關配置 請移步至 <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/03_teleport.html#自定義傳送-pro">自定義傳送 Pro</a> 。</p><h2 id="自定義轉換命令" tabindex="-1">自定義轉換命令 <a class="header-anchor" href="#自定義轉換命令" aria-hidden="true">#</a></h2><h3 id="示例命令" tabindex="-1">示例命令 <a class="header-anchor" href="#示例命令" aria-hidden="true">#</a></h3><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tp_converter -i </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./MyTeleportFileDir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -o </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./NewTeleportFile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -m </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> -n </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MyTeleport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -d </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is my teleport file.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以自行替換以下內容後在轉換器根目錄中執行命令。</p><ul><li><p><code>./MyTeleportFileDir</code>可替換為轉換前的Json傳送文件的目錄。</p></li><li><p><code>./NewTeleportFile</code>可替換為轉換後的Bpfc傳送文件。</p></li><li><p><code>3</code>可替換為點位的地圖id <code>3</code>為提瓦特 <code>5</code>為淵下宮 <code>6</code>為層岩巨淵: 地下礦區。</p></li><li><p><code>MyTeleport</code>可替換為轉換後傳送文件在Bkebi-GC中的顯示暱稱 最好不要使用中文 否則可能會出現彈窗。</p></li><li><p><code>This is my teleport file.</code>可替換為轉換後傳送文件在Bkebi-GC中的描述 最好不要使用中文 否則可能會出現彈窗。</p></li></ul><h3 id="轉換器的所有參數" tabindex="-1">轉換器的所有參數 <a class="header-anchor" href="#轉換器的所有參數" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Teleport converter 幫助:</span></span>
<span class="line"><span style="color:#A6ACCD;">必須:</span></span>
<span class="line"><span style="color:#A6ACCD;">    -i &lt;輸入的文件夾&gt; [字符] 轉換前的Json傳送文件的目錄</span></span>
<span class="line"><span style="color:#A6ACCD;">    -o &lt;輸出的文件&gt; [字符] 轉換後的Bpfc傳送文件</span></span>
<span class="line"><span style="color:#A6ACCD;">可選:</span></span>
<span class="line"><span style="color:#A6ACCD;">    -m &lt;地圖 Id&gt; [整數] 默認值為3, 3=提瓦特, 5=淵下宮, 6=層岩巨淵: 地下礦區</span></span>
<span class="line"><span style="color:#A6ACCD;">    -n &lt;名稱&gt; [字符] 默認為輸出文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">    -d &lt;描述&gt; [字符] 默認為空</span></span>
<span class="line"><span style="color:#A6ACCD;">其他:</span></span>
<span class="line"><span style="color:#A6ACCD;">    --h 顯示這條幫助</span></span>
<span class="line"><span style="color:#A6ACCD;">例子:</span></span>
<span class="line"><span style="color:#A6ACCD;">    tp_converter -i &quot;./MyTeleportFileDir&quot; -o &quot;./NewTeleportFile&quot; -m 3 -n &quot;MyTeleport&quot; -d &quot;This is my teleport file.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,22);function g(y,A,f,B,F,k){const a=d("font");return h(),r("div",null,[b,s("p",null,[_,e(" 此步驟僅適用於覆蓋安裝的新版BK 否則請使用"),s("a",C,[c(a,null,{default:i(()=>[D]),_:1})]),e("的步驟。")]),m])}const q=p(u,[["render",g]]);export{E as __pageData,q as default};
