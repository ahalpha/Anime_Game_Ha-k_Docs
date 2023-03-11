import{_ as c}from"./chunks/FPS_Graph.f4ee2426.js";import{_ as o,c as n,a as e,d as a,b as r,w as h,e as i,r as t,o as l}from"./app.c9455bbf.js";const L=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"實體管理器","slug":"實體管理器","link":"#實體管理器","children":[]},{"level":3,"title":"座標位置","slug":"座標位置","link":"#座標位置","children":[]},{"level":3,"title":"地圖管理員","slug":"地圖管理員","link":"#地圖管理員","children":[]},{"level":3,"title":"幀率曲線","slug":"幀率曲線","link":"#幀率曲線","children":[]},{"level":3,"title":"Lua執行器","slug":"lua執行器","link":"#lua執行器","children":[]},{"level":2,"title":"抓包工具","slug":"抓包工具","link":"#抓包工具","children":[{"level":3,"title":"管道名","slug":"管道名","link":"#管道名","children":[]},{"level":3,"title":"捕獲","slug":"捕獲","link":"#捕獲","children":[]},{"level":3,"title":"操縱(暫)","slug":"操縱-暫","link":"#操縱-暫","children":[]}]}],"relativePath":"zh-TW/cheat/bkebi-gc/09_debug.md","lastUpdated":null}'),s={name:"zh-TW/cheat/bkebi-gc/09_debug.md"},u=i('<h1 id="調試" tabindex="-1">調試 <a class="header-anchor" href="#調試" aria-hidden="true">#</a></h1><p>開發者選項。</p><h3 id="實體管理器" tabindex="-1">實體管理器 <a class="header-anchor" href="#實體管理器" aria-hidden="true">#</a></h3><p>實體管理員。</p><h4 id="實體數量" tabindex="-1">實體數量 <a class="header-anchor" href="#實體數量" aria-hidden="true">#</a></h4><p>當前已載入實體的數量。</p><hr><h4 id="篩選器" tabindex="-1">篩選器 <a class="header-anchor" href="#篩選器" aria-hidden="true">#</a></h4>',8),p={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},_=e("strong",null,[e("code",null,"實體清單")],-1),f=e("h4",{id:"實體名稱篩選器",tabindex:"-1"},[a("實體名稱篩選器 "),e("a",{class:"header-anchor",href:"#實體名稱篩選器","aria-hidden":"true"},"#")],-1),b={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},g=e("strong",null,[e("code",null,"實體清單")],-1),x=e("h4",{id:"按半徑過濾",tabindex:"-1"},[a("按半徑過濾 "),e("a",{class:"header-anchor",href:"#按半徑過濾","aria-hidden":"true"},"#")],-1),m={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},k=e("strong",null,[e("code",null,"實體清單")],-1),E=i('<h4 id="半徑" tabindex="-1">半徑 <a class="header-anchor" href="#半徑" aria-hidden="true">#</a></h4><p>設定過濾半徑。</p><ul><li>範圍: <code>0 ~ 100</code></li></ul><hr><h4 id="實體生成器" tabindex="-1">實體生成器 <a class="header-anchor" href="#實體生成器" aria-hidden="true">#</a></h4><p>生成工具或生物。</p><ul><li><p>大多數工具不能交互 生物無法被擊殺。</p></li><li><p>多人遊戲下 僅自己可見。</p></li></ul><h4 id="生成-gadget" tabindex="-1">生成 Gadget <a class="header-anchor" href="#生成-gadget" aria-hidden="true">#</a></h4><p>使用指定『Gadget ID』產生工具。</p><ul><li>可在 <a href="/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html">GM表</a> 中獲取<code>Gadget ID</code>。</li></ul><h4 id="生成-npc-spawn-npc" tabindex="-1">生成 NPC (Spawn NPC) <a class="header-anchor" href="#生成-npc-spawn-npc" aria-hidden="true">#</a></h4><p>使用指定『NPC ID』生成NPC。</p><ul><li>可在 <a href="/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html">GM表</a> 中獲取<code>NPC ID</code>。</li></ul><h4 id="生成怪物" tabindex="-1">生成怪物 <a class="header-anchor" href="#生成怪物" aria-hidden="true">#</a></h4><p>使用指定『生物ID』產生工具。</p><ul><li>可在 <a href="/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html">GM表</a> 中獲取<code>生物ID</code>。</li></ul><hr><h4 id="類型篩選器" tabindex="-1">類型篩選器 <a class="header-anchor" href="#類型篩選器" aria-hidden="true">#</a></h4>',18),A={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},P=e("strong",null,[e("code",null,"實體清單")],-1),G=i('<ul><li>可選擇: <code>AOE</code> <code>ActivityInteractGadget</code> <code>AirflowField</code> <code>AmberWind</code> <code>AttackPhyisicalUnit</code> <code>Avatar</code> <code> BlackMud</code> <code>Bullet</code> <code>Bush</code> <code>Camera</code> <code>Chest</code> <code>CoinCollectLevelGadget</code> <code>CustomGadget</code> <code>CustomTile</code> <code> DangerZone</code> <code>DeshretObeliskGadget</code> <code>DropItem</code> <code>EchoShell</code> <code>ElemCrystal </code> <code>EnergyBall</code> <code>EnvAnimal</code> <code>EnviroArea</code> <code>Equip</code> <code>EyePoint</code> <code>Field</code> <code> FishPool</code> <code>FishRod</code> <code>Foundation</code> <code>Gadget</code> <code>GatherObject</code> <code>GatherPoint</code> <code>Gear</code> <code> GeneralRewardPoint</code> <code>Grass</code> <code>HomeGatherObject</code> <code>Level</code> <code>Lightning</code> <code>MPLevel</code> <code>MiracleRing</code> <code> Monster</code> <code>MonsterEquip</code> <code>MpPlayRewardPoint</code> <code>NPC</code> <code>NightCrowGadget</code> <code>None</code> <code>OfferingGadget </code> <code>Partner</code> <code>PlaceHolder</code> <code>Platform</code> <code>PlayTeam</code> <code>Projector</code> <code>QuestGadget</code> <code> RemoteAvatar</code> <code>RewardPoint</code> <code>RewardStatue</code> <code>RoguelikeOperatorGadget</code> <code>Screen</code> <code> SealGadget</code> <code>SpeedupField</code> <code>SubEquip</code> <code>Team</code> <code>Timeline</code> <code>TransPointFirst</code> <code> TransPointFirstGadget</code> <code>TransPointSecond</code> <code>TransPointSecondGadget</code> <code>Tree</code> <code>UllnteractGadget</code> <code> Vehicle</code> <code>ViewPoint</code> <code>Water</code> <code>WidgetGadget</code> <code>WindSeed</code> <code>Worktop</code></li></ul><h4 id="列數" tabindex="-1">列數 <a class="header-anchor" href="#列數" aria-hidden="true">#</a></h4>',2),T={href:"#%E7%B1%BB%E5%9E%8B%E7%AD%9B%E9%80%89%E5%99%A8"},C=e("strong",null,[e("code",null,"類型篩選器")],-1),S=i('<ul><li>範圍: <code>2 ~ 5</code></li></ul><hr><h4 id="實體清單" tabindex="-1">實體清單 <a class="header-anchor" href="#實體清單" aria-hidden="true">#</a></h4><p>列出已載入的所有實體。</p><h4 id="按類型分組" tabindex="-1">按類型分組 <a class="header-anchor" href="#按類型分組" aria-hidden="true">#</a></h4><p>是否按類型分類 而不是一頁顯示所有。</p><h4 id="顯示空類型" tabindex="-1">顯示空類型 <a class="header-anchor" href="#顯示空類型" aria-hidden="true">#</a></h4><p>是否顯示沒有實體的分類。</p><h4 id="僅顯示神瞳" tabindex="-1">僅顯示神瞳 <a class="header-anchor" href="#僅顯示神瞳" aria-hidden="true">#</a></h4><p>僅顯示神瞳。</p><h4 id="傳送-最近的" tabindex="-1">傳送: 最近的 <a class="header-anchor" href="#傳送-最近的" aria-hidden="true">#</a></h4><p>傳送到最近的實體。</p><h4 id="傳送-最遠的" tabindex="-1">傳送: 最遠的 <a class="header-anchor" href="#傳送-最遠的" aria-hidden="true">#</a></h4><p>傳送到最遠的實體。</p><h4 id="召喚所有" tabindex="-1">召喚所有 <a class="header-anchor" href="#召喚所有" aria-hidden="true">#</a></h4><p>將所有實體傳送至自己。</p><h4 id="逐回所有" tabindex="-1">逐回所有 <a class="header-anchor" href="#逐回所有" aria-hidden="true">#</a></h4><p>將所有實體逐回至『y=0』。</p><h4 id="複製所有詳細資訊" tabindex="-1">複製所有詳細資訊 <a class="header-anchor" href="#複製所有詳細資訊" aria-hidden="true">#</a></h4><p>複製所有實體的資訊。</p><h4 id="csv兼容-csv-friendly" tabindex="-1">CSV兼容 (CSV Friendly) <a class="header-anchor" href="#csv兼容-csv-friendly" aria-hidden="true">#</a></h4><p>複製的資訊將會用逗號分隔 並刪除座標。</p><h4 id="包含頭文件-include-headers" tabindex="-1">包含頭文件 (Include Headers) <a class="header-anchor" href="#包含頭文件-include-headers" aria-hidden="true">#</a></h4><p>是否包含頭檔。</p><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><p>傳送到當前實體。</p><h4 id="s" tabindex="-1">S <a class="header-anchor" href="#s" aria-hidden="true">#</a></h4><p>將當前實體傳送至自己。</p><h4 id="b" tabindex="-1">B <a class="header-anchor" href="#b" aria-hidden="true">#</a></h4><p>將當前實體放逐至『y=0』。</p><h4 id="c" tabindex="-1">C <a class="header-anchor" href="#c" aria-hidden="true">#</a></h4><p>複製當前實體資訊。</p><h4 id="e" tabindex="-1">E <a class="header-anchor" href="#e" aria-hidden="true">#</a></h4><p>複製到ESP<a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/10_more_guis.html#自訂篩選器">自訂篩選器</a> 。</p><h4 id="c-1" tabindex="-1">C <a class="header-anchor" href="#c-1" aria-hidden="true">#</a></h4><p>複製ConfigID。</p><h4 id="c-2" tabindex="-1">C <a class="header-anchor" href="#c-2" aria-hidden="true">#</a></h4><p>複製RuntimeID。</p><hr><h3 id="座標位置" tabindex="-1">座標位置 <a class="header-anchor" href="#座標位置" aria-hidden="true">#</a></h3><p>座標位置。</p><ul><li>使用此功能可能會出現嚴重的閃退。</li></ul><h4 id="玩家場景id" tabindex="-1">玩家場景id <a class="header-anchor" href="#玩家場景id" aria-hidden="true">#</a></h4><p>玩家場景ID。</p><h4 id="地圖場景id" tabindex="-1">地圖場景id <a class="header-anchor" href="#地圖場景id" aria-hidden="true">#</a></h4><p>地圖場景ID。</p><h4 id="角色座標" tabindex="-1">角色座標 <a class="header-anchor" href="#角色座標" aria-hidden="true">#</a></h4><p>角色座標。</p><h4 id="相對座標" tabindex="-1">相對座標 <a class="header-anchor" href="#相對座標" aria-hidden="true">#</a></h4><p>相對座標。</p><h4 id="水準座標-level-position" tabindex="-1">水準座標 (Level position) <a class="header-anchor" href="#水準座標-level-position" aria-hidden="true">#</a></h4><p>水準座標。</p><hr><h4 id="傳送座標" tabindex="-1">傳送座標 <a class="header-anchor" href="#傳送座標" aria-hidden="true">#</a></h4><p>設定將要傳送到的位置。</p><h4 id="地圖傳送" tabindex="-1">地圖傳送 <a class="header-anchor" href="#地圖傳送" aria-hidden="true">#</a></h4><p>使用地圖傳送 將玩家傳送至指定位置的地面。</p><h4 id="世界傳送" tabindex="-1">世界傳送 <a class="header-anchor" href="#世界傳送" aria-hidden="true">#</a></h4><p>使玩家直接移動至指定區域。</p><ul><li>現版本 此功能無法生效。</li></ul><hr><h4 id="地面座標資訊" tabindex="-1">地面座標資訊 <a class="header-anchor" href="#地面座標資訊" aria-hidden="true">#</a></h4><p>地面位置資訊。</p><h4 id="一般地面-ground-normal" tabindex="-1">一般地面 (Ground normal) <a class="header-anchor" href="#一般地面-ground-normal" aria-hidden="true">#</a></h4><p>玩家相當於一般地面的位置。</p><h4 id="檢測位置-checked-pos" tabindex="-1">檢測位置 (Checked pos) <a class="header-anchor" href="#檢測位置-checked-pos" aria-hidden="true">#</a></h4><p>檢測角色當前位置。</p><ul><li>不能檢測『y』值。</li></ul><h4 id="檢測長度-raycast-length" tabindex="-1">檢測長度 (Raycast length) <a class="header-anchor" href="#檢測長度-raycast-length" aria-hidden="true">#</a></h4><p>設定檢測長度。</p><h4 id="全部" tabindex="-1">全部 <a class="header-anchor" href="#全部" aria-hidden="true">#</a></h4><p>全部。</p><hr><h4 id="複製座標" tabindex="-1">複製座標 <a class="header-anchor" href="#複製座標" aria-hidden="true">#</a></h4><p>複製角色座標。</p><h4 id="複製全部資訊" tabindex="-1">複製全部資訊 <a class="header-anchor" href="#複製全部資訊" aria-hidden="true">#</a></h4><p>複製全部位置資訊。</p><h4 id="複製為json" tabindex="-1">複製為Json <a class="header-anchor" href="#複製為json" aria-hidden="true">#</a></h4><p>複製包含隨機名稱的Json位置資訊。</p><hr><h3 id="地圖管理員" tabindex="-1">地圖管理員 <a class="header-anchor" href="#地圖管理員" aria-hidden="true">#</a></h3><p>地圖管理員。</p><h4 id="地標-waypoints" tabindex="-1">地標 (Waypoints) <a class="header-anchor" href="#地標-waypoints" aria-hidden="true">#</a></h4><p>地標資訊。</p><hr><h3 id="幀率曲線" tabindex="-1">幀率曲線 <a class="header-anchor" href="#幀率曲線" aria-hidden="true">#</a></h3><p>幀率曲線。</p><ul><li><code>(avg)</code> 為平均值。</li></ul><p><img src="'+c+'" alt="FPS_Graph.png"></p><h3 id="lua執行器" tabindex="-1">Lua執行器 <a class="header-anchor" href="#lua執行器" aria-hidden="true">#</a></h3><p>Lua執行器。</p><h4 id="lua檔路徑" tabindex="-1">Lua檔路徑 <a class="header-anchor" href="#lua檔路徑" aria-hidden="true">#</a></h4><p>設定需要執行的Lua檔的路徑。</p><ul><li>Lua例子: <a href="https://discord.com/channels/1065348698197991605/1065452338426417233/1080355460353368085" target="_blank" rel="noreferrer">BoobsChanger.lua</a></li></ul><h4 id="執行" tabindex="-1">執行 <a class="header-anchor" href="#執行" aria-hidden="true">#</a></h4><p>執行設定的Lua檔。</p><h2 id="抓包工具" tabindex="-1">抓包工具 <a class="header-anchor" href="#抓包工具" aria-hidden="true">#</a></h2><blockquote><p>配置內置的抓包工具。</p></blockquote><h3 id="管道名" tabindex="-1">管道名 <a class="header-anchor" href="#管道名" aria-hidden="true">#</a></h3><p>設定管道名稱 用於與另一管道名稱相同的進程進行數據交換。</p><ul><li><p>如果使用 <a href="https://github.com/Akebi-Group/Akebi-PacketSniffer" target="_blank" rel="noreferrer">PacketSniffer</a> 則為預設值<code>genshin_packet_pipe</code>。</p></li><li><p>有關詳細使用方法 請查看 <a href="/Anime_Game_Ha-k_Docs/hack/resources/PacketSniffer.html">PacketSniffer</a> 。</p></li></ul><h3 id="捕獲" tabindex="-1">捕獲 <a class="header-anchor" href="#捕獲" aria-hidden="true">#</a></h3><p>是否啟用捕獲遊戲數據包資訊併發送到管道。</p><h3 id="操縱-暫" tabindex="-1">操縱(暫) <a class="header-anchor" href="#操縱-暫" aria-hidden="true">#</a></h3><p>是否可以通過管道修改數據包併發送到遊戲。</p><ul><li>可能會導致遊戲延遲升高。</li></ul>',106);function v(D,I,B,y,N,V){const d=t("font");return l(),n("div",null,[u,e("p",null,[a("用於過濾"),e("a",p,[r(d,null,{default:h(()=>[_]),_:1})]),a("。")]),f,e("p",null,[a("按實體名稱過濾"),e("a",b,[r(d,null,{default:h(()=>[g]),_:1})]),a("。")]),x,e("p",null,[a("按實體與玩家的距離過濾"),e("a",m,[r(d,null,{default:h(()=>[k]),_:1})]),a("。")]),E,e("p",null,[a("按實體類型過濾"),e("a",A,[r(d,null,{default:h(()=>[P]),_:1})]),a("。")]),G,e("p",null,[a("設定"),e("a",T,[r(d,null,{default:h(()=>[C]),_:1})]),a("顯示列數。")]),S])}const M=o(s,[["render",v]]);export{L as __pageData,M as default};
