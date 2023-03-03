import{_ as s,c as e,o as n,e as a}from"./app.124a7176.js";const t="/Anime_Game_Ha-k_Docs/assets/tp_cvt_01.54f2e9d9.png",l="/Anime_Game_Ha-k_Docs/assets/tp_cvt_02.2823ad31.png",p="/Anime_Game_Ha-k_Docs/assets/tp_cvt_03.ee0687ad.png",C=JSON.parse('{"title":"JSON转BPFC","description":"","frontmatter":{"title":"JSON转BPFC","editLink":true},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"简易步骤","slug":"简易步骤","link":"#简易步骤","children":[{"level":3,"title":"转移旧版本BK的传送文件至新版本BK","slug":"转移旧版本bk的传送文件至新版本bk","link":"#转移旧版本bk的传送文件至新版本bk","children":[]},{"level":3,"title":"转移指定文件夹的传送文件至新版本BK","slug":"转移指定文件夹的传送文件至新版本bk","link":"#转移指定文件夹的传送文件至新版本bk","children":[]}]},{"level":2,"title":"CVT","slug":"cvt","link":"#cvt","children":[{"level":3,"title":"参数帮助","slug":"参数帮助","link":"#参数帮助","children":[]}]}],"relativePath":"hack/resources/Json_to_Bpfc.md","lastUpdated":null}'),r={name:"hack/resources/Json_to_Bpfc.md"},o=a('<h1 id="json转bpfc" tabindex="-1">JSON转BPFC <a class="header-anchor" href="#json转bpfc" aria-hidden="true">#</a></h1><p>Json转换为Bpfc的相关方法。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>自Bkebi-1.1.0起 将不再支持Json传送文件 需要使用 <a href="https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104" target="_blank" rel="noreferrer">Teleport converter</a> 将旧版文件转换为支持的Bpfc加密文件。</p><h2 id="简易步骤" tabindex="-1">简易步骤 <a class="header-anchor" href="#简易步骤" aria-hidden="true">#</a></h2><h3 id="转移旧版本bk的传送文件至新版本bk" tabindex="-1">转移旧版本BK的传送文件至新版本BK <a class="header-anchor" href="#转移旧版本bk的传送文件至新版本bk" aria-hidden="true">#</a></h3><p><strong>01</strong> 下载 <a href="https://discord.com/channels/1026295403282436097/1072831171639115796/1080399740254040104" target="_blank" rel="noreferrer">Teleport converter</a> 并将其中的所有文件解压至<code>Bkebi-GC的根目录</code>。</p><p><img src="'+t+'" alt="tp_cvt_01.png"></p><p><strong>02</strong> 若目录中没有<code>tp_files</code>文件夹 则需要自行创建一个。</p><p><img src="'+l+'" alt="tp_cvt_02.png"></p><p><strong>03</strong> 在<code>地址栏</code>输入<code>cmd</code>并回车 以打开命令提示符。</p><p><img src="'+p+`" alt="tp_cvt_03.png"></p><p><strong>04</strong> 在命令提示符中输入以下命令并回车:</p><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tp_converter -i </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./teleports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -o </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./tp_files/Old_Teleport</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>05</strong> 在新版BK中<code>刷新文件</code>后 文件列表选择<code>Old_Teleport</code>即可开始使用。</p><h3 id="转移指定文件夹的传送文件至新版本bk" tabindex="-1">转移指定文件夹的传送文件至新版本BK <a class="header-anchor" href="#转移指定文件夹的传送文件至新版本bk" aria-hidden="true">#</a></h3><p><strong>01</strong> 同上面的第 <strong>01</strong> <strong>02</strong> <strong>03</strong> 步骤。</p><p><strong>02</strong> 将以下命令中的<code>{指定文件夹}</code>替换为含有Json传送文件的目录 <code>{名称}</code>需要自己指定 并在命令提示符中输入命令并回车:</p><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tp_converter -i </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{指定文件夹}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -o </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./tp_files/{名称}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>03</strong> 在新版BK中<code>刷新文件</code>后 文件列表选择<code>{名称}</code>即可开始使用。</p><p>有关自定义传送的相关配置 请移步至 <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/03_teleport.html#自定义传送-pro">自定义传送 Pro</a> 。</p><h2 id="cvt" tabindex="-1">CVT <a class="header-anchor" href="#cvt" aria-hidden="true">#</a></h2><h3 id="参数帮助" tabindex="-1">参数帮助 <a class="header-anchor" href="#参数帮助" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Teleport converter 帮助:</span></span>
<span class="line"><span style="color:#A6ACCD;">必须:</span></span>
<span class="line"><span style="color:#A6ACCD;">    -i &lt;Input Dir&gt; [String] 转换前的Json传送文件的目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    -o &lt;Output File&gt; [String] 转换后的Bpfc传送文件</span></span>
<span class="line"><span style="color:#A6ACCD;">可选:</span></span>
<span class="line"><span style="color:#A6ACCD;">    -m &lt;Map Id&gt; [Integer] 默认值为3, 3=提瓦特, 5=渊下宫, 6=层岩巨渊: 地下矿区</span></span>
<span class="line"><span style="color:#A6ACCD;">    -n &lt;Name&gt; [String] 默认为输出文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">    -d &lt;Description&gt; [String] 默认为空</span></span>
<span class="line"><span style="color:#A6ACCD;">其他:</span></span>
<span class="line"><span style="color:#A6ACCD;">    --h 显示这条帮助</span></span>
<span class="line"><span style="color:#A6ACCD;">例子:</span></span>
<span class="line"><span style="color:#A6ACCD;">    tp_converter -i &quot;./MyTeleportFileDir&quot; -o &quot;./NewTeleportFile&quot; -m 3 -n &quot;MyTeleport&quot; -d &quot;This is my teleport file.&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,24),c=[o];function i(d,h,b,_,u,g){return n(),e("div",null,c)}const D=s(r,[["render",i]]);export{C as __pageData,D as default};
