import{_ as l,c as s,a as e,d as t,b as a,w as i,e as o,r as d,o as r}from"./app.8159d57e.js";const Xe=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"Spoof Anticheat result","slug":"spoof-anticheat-result","link":"#spoof-anticheat-result","children":[]},{"level":3,"title":"Disable Protection","slug":"disable-protection","link":"#disable-protection","children":[]},{"level":3,"title":"Mute metrics output","slug":"mute-metrics-output","link":"#mute-metrics-output","children":[]},{"level":3,"title":"Language","slug":"language","link":"#language","children":[]},{"level":3,"title":"General","slug":"general","link":"#general","children":[]},{"level":3,"title":"Logging","slug":"logging","link":"#logging","children":[]},{"level":3,"title":"Status Window","slug":"status-window","link":"#status-window","children":[]},{"level":3,"title":"Info Window","slug":"info-window","link":"#info-window","children":[]},{"level":3,"title":"FPS indicator","slug":"fps-indicator","link":"#fps-indicator","children":[]},{"level":3,"title":"Show Notifications","slug":"show-notifications","link":"#show-notifications","children":[]},{"level":3,"title":"Fast Exit","slug":"fast-exit","link":"#fast-exit","children":[]},{"level":3,"title":"Interface Customization","slug":"interface-customization","link":"#interface-customization","children":[]},{"level":3,"title":"Account Switcher","slug":"account-switcher","link":"#account-switcher","children":[]},{"level":3,"title":"Block WindSeed","slug":"block-windseed","link":"#block-windseed","children":[]}],"relativePath":"en-US/cheat/bkebi-gc/08_settings.md","lastUpdated":null}'),h={name:"en-US/cheat/bkebi-gc/08_settings.md"},c=o(`<h1 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-hidden="true">#</a></h1><p>Configure the Bkebi-GC.</p><h3 id="spoof-anticheat-result" tabindex="-1">Spoof Anticheat result <a class="header-anchor" href="#spoof-anticheat-result" aria-hidden="true">#</a></h3><p>Give the WindSeedClientNotify anti-cheat a false normal report when it loads.</p><h3 id="disable-protection" tabindex="-1">Disable Protection <a class="header-anchor" href="#disable-protection" aria-hidden="true">#</a></h3><p>Disable Mhyprot2 Bypass.</p><ul><li><p>Changes will take effect after a game restart.</p></li><li><p>This feature cannot be turned off at this time.</p></li></ul><h3 id="mute-metrics-output" tabindex="-1">Mute metrics output <a class="header-anchor" href="#mute-metrics-output" aria-hidden="true">#</a></h3><p>Do not output metrics library spam in the console.</p><ul><li><p>Changes will take effect after a game restart.</p></li><li><p>Shield the Json information output by the console at startup.</p></li><li><p>Will output a prompt that can be ignored:</p></li></ul><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Failed to </span><span style="color:#89DDFF;">find</span><span style="color:#A6ACCD;"> MiHoYoMTRSDK.d11. Metrics logs cannot be muted :（ Note: you can ignore this message </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> MiHoYoMTRSDK.dll was removed/disabled by you or by game devs.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="language" tabindex="-1">Language <a class="header-anchor" href="#language" aria-hidden="true">#</a></h3><p>Set the language of Bkebi-GC.</p><ul><li><p>If there are translation or text errors, please go to <a href="https://github.com/Bkebi-Group/Bkebi-Language" target="_blank" rel="noreferrer">Bkebi-Language</a> and submit PR according to the regulations.</p></li><li><p>Available Options:</p><ul><li>English | EN</li><li>Indonesian | ID</li><li>Russian | RU</li><li>Simplified Chinese | ZH-CN</li><li>Traditional Chinese | ZH-TW</li><li>Vietnamese | VN</li><li>Debug</li></ul></li></ul><h3 id="general" tabindex="-1">General <a class="header-anchor" href="#general" aria-hidden="true">#</a></h3><p>General settings.</p><h4 id="show-cheat-menu-key" tabindex="-1">Show Cheat Menu Key <a class="header-anchor" href="#show-cheat-menu-key" aria-hidden="true">#</a></h4><p>Set the key to open the main menu of Bkebi-GC.</p><ul><li><p>Default Hotkeys: <code>F1</code></p></li><li><p>If you forget the hotkey, you need to search for <code>MenuKey</code> in the configuration file &quot;cfg.json&quot; in the root directory, find and delete <code>&quot;MenuKey&quot;: {num},</code> (<code>{num}</code> is any value) and then start the game and press <code>F1</code> to open the menu.</p></li><li><p>Or use <a href="https://github.com/Bkebi-Group/GhostClient-MenuHotKey" target="_blank" rel="noreferrer">GhostClient-MenuHotKey</a> .</p></li></ul><h4 id="initialization-delay" tabindex="-1">Initialization Delay <a class="header-anchor" href="#initialization-delay" aria-hidden="true">#</a></h4><p>Time to inject Bkebi-GC after starting the game.</p><ul><li>Only takes effect when started with the current <code>injector.exe</code> injector.</li></ul><h4 id="refresh" tabindex="-1">Refresh <a class="header-anchor" href="#refresh" aria-hidden="true">#</a></h4>`,23),u={href:"#initialization-delay"},_=e("strong",null,[e("code",null,"Initialization Delay")],-1),p=e("code",null,"cfg.ini",-1),f=e("h4",{id:"apply",tabindex:"-1"},[t("Apply "),e("a",{class:"header-anchor",href:"#apply","aria-hidden":"true"},"#")],-1),m={href:"#initialization-delay"},g=e("strong",null,[e("code",null,"Initialization Delay")],-1),b=e("h4",{id:"command-line-arguments",tabindex:"-1"},[t("command line arguments "),e("a",{class:"header-anchor",href:"#command-line-arguments","aria-hidden":"true"},"#")],-1),w=e("p",null,"Open the game with the specified command line parameters.",-1),y=e("ul",null,[e("li",null,[t("Only takes effect when started with the current "),e("code",null,"injector.exe"),t(" injector.")])],-1),x=e("h4",{id:"refresh-1",tabindex:"-1"},[t("Refresh "),e("a",{class:"header-anchor",href:"#refresh-1","aria-hidden":"true"},"#")],-1),S={href:"#command-line-arguments"},T=e("strong",null,[e("code",null,"command line arguments")],-1),k=e("code",null,"cfg.ini",-1),C=e("h4",{id:"apply-1",tabindex:"-1"},[t("Apply "),e("a",{class:"header-anchor",href:"#apply-1","aria-hidden":"true"},"#")],-1),A={href:"#command-line-arguments"},v=e("strong",null,[e("code",null,"command line arguments")],-1),I=o('<h4 id="list-of-unity-command-line-arguments" tabindex="-1">List of unity command line arguments <a class="header-anchor" href="#list-of-unity-command-line-arguments" aria-hidden="true">#</a></h4><p>Jump to <a href="https://docs.unity3d.com/Manual/PlayerCommandLineArguments.html" target="_blank" rel="noreferrer">Unity - Manual: Unity Standalone Player command line arguments</a> .</p><h4 id="additional-dll" tabindex="-1">Additional Dll <a class="header-anchor" href="#additional-dll" aria-hidden="true">#</a></h4><p>Inject another Dll at the same time when Bkebi-GC injects.</p><ul><li>Only takes effect when started with the current <code>injector.exe</code> injector.</li></ul><h4 id="refresh-2" tabindex="-1">Refresh <a class="header-anchor" href="#refresh-2" aria-hidden="true">#</a></h4>',6),D={href:"#Additional-dll"},P=e("strong",null,[e("code",null,"Additional Dll")],-1),N=e("code",null,"cfg.ini",-1),R=e("h4",{id:"apply-2",tabindex:"-1"},[t("Apply "),e("a",{class:"header-anchor",href:"#apply-2","aria-hidden":"true"},"#")],-1),F={href:"#Additional-dll"},E=e("strong",null,[e("code",null,"Additional Dll")],-1),V=e("h4",{id:"hotkeys-enabled",tabindex:"-1"},[t("Hotkeys Enabled "),e("a",{class:"header-anchor",href:"#hotkeys-enabled","aria-hidden":"true"},"#")],-1),W={href:"#show-cheat-menu-key"},B=e("strong",null,[e("code",null,"Show Cheat Menu Key")],-1),G=o('<h3 id="logging" tabindex="-1">Logging <a class="header-anchor" href="#logging" aria-hidden="true">#</a></h3><p>Record the relevant process and experience of Bkebi-GC operation.</p><ul><li>It is used for reporting errors, issues and other information that needs to be provided when necessary.</li></ul><h4 id="console-logging" tabindex="-1">Console Logging <a class="header-anchor" href="#console-logging" aria-hidden="true">#</a></h4><p>Startup will not close the console and display logs there.</p><ul><li><p>Only takes effect when started with the current <code>injector.exe</code> injector.</p></li><li><p>Changes will take effect after a game restart.</p></li></ul><h4 id="file-logging" tabindex="-1">File Logging <a class="header-anchor" href="#file-logging" aria-hidden="true">#</a></h4><p>Logs will be saved in the <code>./logs</code> folder.</p><ul><li>Changes will take effect after a game restart.</li></ul><h3 id="status-window" tabindex="-1">Status Window <a class="header-anchor" href="#status-window" aria-hidden="true">#</a></h3><p>For an introduction to this window, please go to <a href="./10_more_guis.html#status-window">Status Window</a> .</p><h4 id="show-status-window" tabindex="-1">Show Status Window <a class="header-anchor" href="#show-status-window" aria-hidden="true">#</a></h4>',12),M={href:"#status-window"},z=e("strong",null,[e("code",null,"Status Window")],-1),j=e("h4",{id:"move-status-window",tabindex:"-1"},[t("Move Status Window "),e("a",{class:"header-anchor",href:"#move-status-window","aria-hidden":"true"},"#")],-1),L={href:"#status-window"},O=e("strong",null,[e("code",null,"Status Window")],-1),H=e("code",null,"LMB",-1),K=o('<h3 id="info-window" tabindex="-1">Info Window <a class="header-anchor" href="#info-window" aria-hidden="true">#</a></h3><p>For an introduction to this window, please go to <a href="./10_more_guis.html#info-window">Info Window</a> .</p><h4 id="show-info-window" tabindex="-1">Show Info Window <a class="header-anchor" href="#show-info-window" aria-hidden="true">#</a></h4>',3),U={href:"#info-window"},q=e("strong",null,[e("code",null,"Info Window")],-1),Y=e("h4",{id:"move-info-window",tabindex:"-1"},[t("Move Info Window "),e("a",{class:"header-anchor",href:"#move-info-window","aria-hidden":"true"},"#")],-1),$={href:"#info-window"},J=e("strong",null,[e("code",null,"Info Window")],-1),Z=e("code",null,"LMB",-1),Q=o('<h3 id="fps-indicator" tabindex="-1">FPS indicator <a class="header-anchor" href="#fps-indicator" aria-hidden="true">#</a></h3><p>For an introduction to this window, please go to <a href="./10_more_guis.html#fps-indicator">FPS indicator</a> .</p><h4 id="show-fps-indicator" tabindex="-1">Show FPS Indicator <a class="header-anchor" href="#show-fps-indicator" aria-hidden="true">#</a></h4>',3),X={href:"#fps-indicator"},ee=e("strong",null,[e("code",null,"FPS indicator")],-1),te=e("h4",{id:"move-fps-indicator",tabindex:"-1"},[t("Move FPS Indicator "),e("a",{class:"header-anchor",href:"#move-fps-indicator","aria-hidden":"true"},"#")],-1),ne={href:"#fps-indicator"},ae=e("strong",null,[e("code",null,"FPS indicator")],-1),ie=e("code",null,"LMB",-1),oe=o('<h3 id="show-notifications" tabindex="-1">Show Notifications <a class="header-anchor" href="#show-notifications" aria-hidden="true">#</a></h3><p>For an introduction to this window, please go to <a href="./10_more_guis.html#notifications">Notifications</a> .</p><h4 id="show-notifications-1" tabindex="-1">Show Notifications <a class="header-anchor" href="#show-notifications-1" aria-hidden="true">#</a></h4><p>Set the time to display each notification. (ms)</p><p>Optional Range: <code>1 ~ 10000</code></p><h3 id="fast-exit" tabindex="-1">Fast Exit <a class="header-anchor" href="#fast-exit" aria-hidden="true">#</a></h3><p>Use the set hotkey to end the game with one click.</p><h4 id="enabled" tabindex="-1">Enabled <a class="header-anchor" href="#enabled" aria-hidden="true">#</a></h4>',8),le={href:"#fast-exit"},se=e("strong",null,[e("code",null,"Fast Exit")],-1),de=e("h4",{id:"hotkey",tabindex:"-1"},[t("Hotkey "),e("a",{class:"header-anchor",href:"#hotkey","aria-hidden":"true"},"#")],-1),re={href:"#fast-exit"},he=e("strong",null,[e("code",null,"Fast Exit")],-1),ce={href:"#show-cheat-menu-key"},ue=e("strong",null,[e("code",null,"Show Cheat Menu Key")],-1),_e={href:"#fast-exit"},pe=e("strong",null,[e("code",null,"Fast Exit")],-1),fe=e("strong",null,[e("code",null,"Display Bkebi menu button")],-1),me=e("code",null,'"FastExitEnable": true',-1),ge=e("code",null,"true",-1),be=e("code",null,"false",-1),we=e("code",null,"None",-1),ye={href:"#fast-exit"},xe=e("strong",null,[e("code",null,"Fast Exit")],-1),Se=o('<h3 id="interface-customization" tabindex="-1">Interface Customization <a class="header-anchor" href="#interface-customization" aria-hidden="true">#</a></h3><p>Interface-related settings of Bkebi-GC.</p><h4 id="font-size" tabindex="-1">Font Size <a class="header-anchor" href="#font-size" aria-hidden="true">#</a></h4><p>Set the font size of Bkebi-GC.</p><ul><li><p>Too large a value may cause the game to crash.</p></li><li><p>Optional Range: <code>8 ~ (Unknown)</code></p></li></ul><h4 id="theme-name" tabindex="-1">Theme Name <a class="header-anchor" href="#theme-name" aria-hidden="true">#</a></h4><p>Set the name under which the theme will be saved.</p><h4 id="save-theme" tabindex="-1">Save Theme <a class="header-anchor" href="#save-theme" aria-hidden="true">#</a></h4>',8),Te={href:"#theme-name"},ke=e("strong",null,[e("code",null,"Theme Name")],-1),Ce=e("code",null,"./themes",-1),Ae=o('<h4 id="replace-theme" tabindex="-1">Replace Theme <a class="header-anchor" href="#replace-theme" aria-hidden="true">#</a></h4><p>If there is a new theme with the same name in <code>./themes</code>, it will be replaced.</p><h4 id="theme-select" tabindex="-1">Theme Select <a class="header-anchor" href="#theme-select" aria-hidden="true">#</a></h4><p>Applies the saved settings theme.</p><h4 id="delete-theme" tabindex="-1">Delete Theme <a class="header-anchor" href="#delete-theme" aria-hidden="true">#</a></h4>',5),ve={href:"#theme-select"},Ie=e("strong",null,[e("code",null,"Theme Select")],-1),De=o(`<h4 id="show-theme-customization" tabindex="-1">Show Theme Customization <a class="header-anchor" href="#show-theme-customization" aria-hidden="true">#</a></h4><p>Whether to display the ImGui theme customization window. For an introduction to this window, please go to <a href="./10_more_guis.html#imgui">ImGui</a> .</p><h3 id="account-switcher" tabindex="-1">Account Switcher <a class="header-anchor" href="#account-switcher" aria-hidden="true">#</a></h3><p>Automatically log in with the set account status when starting the game.</p><ul><li>You need to use shortcut or command line to start <code>injector.exe</code> with the following command line parameters to start.</li></ul><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -account {Account Name}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,6),Pe={href:"#account-name"},Ne=e("strong",null,[e("code",null,"Account Name")],-1),Re=e("code",null,"Traveler",-1),Fe=e("code",null,"injector.exe",-1),Ee=e("code",null,"Properties",-1),Ve=e("code",null,"Target",-1),We=o(`<div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -account Traveler</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>When using the OS version of Genshin, you can give <code>injector.exe</code> the following command line parameters to replace the region after startup.</li></ul><div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -region {Region}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),Be={href:"#"},Ge=e("strong",null,[e("code",null,"Region")],-1),Me=e("code",null,"usa",-1),ze=e("code",null,"eu",-1),je=e("code",null,"asia",-1),Le=e("code",null,"thm",-1),Oe=e("li",null,[e("p",null,[t("The following command line parameters can be given to "),e("code",null,"injector.exe"),t(" to start multiple Bkebi-GC instances simultaneously.")])],-1),He=o(`<div class="language-bat line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> -i</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>You can also use the third-party tool <a href="https://discord.com/channels/1026295403282436097/1064953611056058479" target="_blank" rel="noreferrer">GenshinAccount</a> .</li></ul><h4 id="account-name" tabindex="-1">Account Name <a class="header-anchor" href="#account-name" aria-hidden="true">#</a></h4><p>Customize the nickname for the current account status.</p><h4 id="export" tabindex="-1">Export <a class="header-anchor" href="#export" aria-hidden="true">#</a></h4><p>Export the current account status to <code>accounts.ini</code>.</p><ul><li>If the export is successful, <code>Account successfully exported</code> will be notified.</li></ul><h3 id="block-windseed" tabindex="-1">Block WindSeed <a class="header-anchor" href="#block-windseed" aria-hidden="true">#</a></h3><p>Blocks WindSeed packets from malicious servers that could cause RCE. Only used on private servers.</p>`,9);function Ke(Ue,qe,Ye,$e,Je,Ze){const n=d("font");return r(),s("div",null,[c,e("p",null,[t("Re-read the "),e("a",u,[a(n,null,{default:i(()=>[_]),_:1})]),t(" in the "),p,t(" file.")]),f,e("p",null,[t("Apply this "),e("a",m,[a(n,null,{default:i(()=>[g]),_:1})]),t(".")]),b,w,y,x,e("p",null,[t("Re-read the "),e("a",S,[a(n,null,{default:i(()=>[T]),_:1})]),t(" in the "),k,t(" file.")]),C,e("p",null,[t("Apply this "),e("a",A,[a(n,null,{default:i(()=>[v]),_:1})]),t(".")]),I,e("p",null,[t("Re-read the "),e("a",D,[a(n,null,{default:i(()=>[P]),_:1})]),t(" in the "),N,t(" file.")]),R,e("p",null,[t("Apply this "),e("a",F,[a(n,null,{default:i(()=>[E]),_:1})]),t(".")]),V,e("p",null,[t("Whether to enable all Bkebi-GC hotkeys except "),e("a",W,[a(n,null,{default:i(()=>[B]),_:1})]),t(".")]),G,e("p",null,[t("Whether to display "),e("a",M,[a(n,null,{default:i(()=>[z]),_:1})]),t(".")]),j,e("p",null,[t("Allows to move "),e("a",L,[a(n,null,{default:i(()=>[O]),_:1})]),t(" with "),H,t(".")]),K,e("p",null,[t("Whether to display "),e("a",U,[a(n,null,{default:i(()=>[q]),_:1})]),t(".")]),Y,e("p",null,[t("Allows to move "),e("a",$,[a(n,null,{default:i(()=>[J]),_:1})]),t(" with "),Z,t(".")]),Q,e("p",null,[t("Whether to display "),e("a",X,[a(n,null,{default:i(()=>[ee]),_:1})]),t(".")]),te,e("p",null,[t("Allows to move "),e("a",ne,[a(n,null,{default:i(()=>[ae]),_:1})]),t(" with "),ie,t(".")]),oe,e("p",null,[t("Enables "),e("a",le,[a(n,null,{default:i(()=>[se]),_:1})]),t(".")]),de,e("p",null,[t("Set the hotkey for "),e("a",re,[a(n,null,{default:i(()=>[he]),_:1})]),t(".")]),e("ul",null,[e("li",null,[e("p",null,[t("Please do not set it to "),e("a",ce,[a(n,null,{default:i(()=>[ue]),_:1})]),t(", otherwise "),e("a",_e,[a(n,null,{default:i(()=>[pe]),_:1})]),t(" will be opened while opening the menu.")])]),e("li",null,[e("p",null,[t("If it is set to ["),a(n,null,{default:i(()=>[fe]),_:1}),t("](#Display bkebi menu button), you need to search "),me,t(' in the configuration file "cfg.json" in the root directory. Then find and change '),ge,t(" to "),be,t(", start the game and change the hotkey to other keys.")])]),e("li",null,[e("p",null,[t("When the set hotkey is "),we,t(" , "),e("a",ye,[a(n,null,{default:i(()=>[xe]),_:1})]),t(" will not take effect.")])])]),Se,e("p",null,[t("Save a current ImGui theme custom setting named "),e("a",Te,[a(n,null,{default:i(()=>[ke]),_:1})]),t(" to "),Ce,t(".")]),Ae,e("p",null,[t("Remove "),e("a",ve,[a(n,null,{default:i(()=>[Ie]),_:1})]),t(" and reset interface to default style.")]),De,e("ul",null,[e("li",null,[t("eg. When "),e("a",Pe,[a(n,null,{default:i(()=>[Ne]),_:1})]),t(" is "),Re,t(", create a shortcut of "),Fe,t(" in its "),Ee,t("-"),Ve,t(" Finally, add the following parameters and apply them, then start the shortcut to switch successfully.")])]),We,e("ul",null,[e("li",null,[e("p",null,[e("a",Be,[a(n,null,{default:i(()=>[Ge]),_:1})]),t("Available Options: "),Me,t(),ze,t(),je,t(),Le])]),Oe]),He])}const et=l(h,[["render",Ke]]);export{Xe as __pageData,et as default};
