import{_ as t,c,a as e,d as a,b as o,w as i,e as r,r as n,o as h}from"./app.962a1369.js";const l="/Anime_Game_Ha-k_Docs/assets/FPS_Graph.4232cead.png",$=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"实体管理器","slug":"实体管理器","link":"#实体管理器","children":[]},{"level":3,"title":"坐标位置","slug":"坐标位置","link":"#坐标位置","children":[]},{"level":3,"title":"地图管理器","slug":"地图管理器","link":"#地图管理器","children":[]},{"level":3,"title":"帧率曲线","slug":"帧率曲线","link":"#帧率曲线","children":[]},{"level":3,"title":"Lua执行器","slug":"lua执行器","link":"#lua执行器","children":[]}],"relativePath":"cheat/bkebi-gc/09_debug.md","lastUpdated":null}'),s={name:"cheat/bkebi-gc/09_debug.md"},p=r('<h1 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-hidden="true">#</a></h1><p>开发者选项。</p><h3 id="实体管理器" tabindex="-1">实体管理器 <a class="header-anchor" href="#实体管理器" aria-hidden="true">#</a></h3><p>实体管理器。</p><h4 id="实体数量-entity-count" tabindex="-1">实体数量 (Entity Count) <a class="header-anchor" href="#实体数量-entity-count" aria-hidden="true">#</a></h4><p>目前已加载实体的数量。</p><h4 id="过滤-entity-name-filter" tabindex="-1">过滤 (Entity Name Filter) <a class="header-anchor" href="#过滤-entity-name-filter" aria-hidden="true">#</a></h4>',7),u={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},_=e("strong",null,[e("code",null,"实体列表")],-1),f=e("h4",{id:"实体名称过滤器-entity-name-filter",tabindex:"-1"},[a("实体名称过滤器 (Entity Name Filter) "),e("a",{class:"header-anchor",href:"#实体名称过滤器-entity-name-filter","aria-hidden":"true"},"#")],-1),b={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},y=e("strong",null,[e("code",null,"实体列表")],-1),g=e("h4",{id:"半径过滤-filter-by-radius",tabindex:"-1"},[a("半径过滤 (Filter by Radius) "),e("a",{class:"header-anchor",href:"#半径过滤-filter-by-radius","aria-hidden":"true"},"#")],-1),m={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},x=e("strong",null,[e("code",null,"实体列表")],-1),E=r('<h4 id="半径-radius" tabindex="-1">半径 (Radius) <a class="header-anchor" href="#半径-radius" aria-hidden="true">#</a></h4><p>设定过滤半径。</p><ul><li>范围: <code>0 ~ 100</code></li></ul><h4 id="生成-spawner" tabindex="-1">生成 (Spawner) <a class="header-anchor" href="#生成-spawner" aria-hidden="true">#</a></h4><p>生成工具或生物。</p><ul><li><p>大多数工具不能交互 生物无法被击杀。</p></li><li><p>多人游戏下 仅自己可见。</p></li></ul><h4 id="工具id-gadget-id" tabindex="-1">工具ID (Gadget ID) <a class="header-anchor" href="#工具id-gadget-id" aria-hidden="true">#</a></h4>',7),A={href:"#%E5%B7%A5%E5%85%B7id"},T=e("strong",null,[e("code",null,"工具ID")],-1),G=e("a",{href:"/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html"},"GM表",-1),S={href:"#%E5%B7%A5%E5%85%B7id"},P=e("strong",null,[e("code",null,"工具ID")],-1),C=e("h4",{id:"生成工具-spawn-gadget",tabindex:"-1"},[a("生成工具 (Spawn Gadget) "),e("a",{class:"header-anchor",href:"#生成工具-spawn-gadget","aria-hidden":"true"},"#")],-1),D={href:"#%E5%B7%A5%E5%85%B7id"},v=e("strong",null,[e("code",null,"工具ID")],-1),k=r('<h4 id="怪物id-monster-id" tabindex="-1">怪物ID (Monster ID) <a class="header-anchor" href="#怪物id-monster-id" aria-hidden="true">#</a></h4><p>设定<code>生物ID</code>。</p><ul><li>可在 <a href="/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html">GM表</a> 中获取<code>生物ID</code>。</li></ul><h4 id="生成怪物-spawn-monster" tabindex="-1">生成怪物 (Spawn Monster) <a class="header-anchor" href="#生成怪物-spawn-monster" aria-hidden="true">#</a></h4><p>使用指定<code>生物ID</code>生成工具。</p><h4 id="类型过滤-type-filter" tabindex="-1">类型过滤 (Type Filter) <a class="header-anchor" href="#类型过滤-type-filter" aria-hidden="true">#</a></h4>',6),w={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},I=e("strong",null,[e("code",null,"实体列表")],-1),B=r('<ul><li>可选择: <code>AOE</code> <code>ActivityInteractGadget</code> <code>AirflowField</code> <code>AmberWind</code> <code>AttackPhyisicalUnit</code> <code>Avatar</code> <code>BlackMud</code> <code>Bullet</code> <code>Bush</code> <code>Camera</code> <code>Chest</code> <code>CoinCollectLevelGadget</code> <code>CustomGadget</code> <code>CustomTile</code> <code>DangerZone</code> <code>DeshretObeliskGadget</code> <code>DropItem</code> <code>EchoShell</code> <code>ElemCrystal</code> <code>EnergyBall</code> <code>EnvAnimal</code> <code>EnviroArea</code> <code>Equip</code> <code>EyePoint</code> <code>Field</code> <code>FishPool</code> <code>FishRod</code> <code>Foundation</code> <code>Gadget</code> <code>GatherObject</code> <code>GatherPoint</code> <code>Gear</code> <code>GeneralRewardPoint</code> <code>Grass</code> <code>HomeGatherObject</code> <code>Level</code> <code>Lightning</code> <code>MPLevel</code> <code>MiracleRing</code> <code>Monster</code> <code>MonsterEquip</code> <code>MpPlayRewardPoint</code> <code>NPC</code> <code>NightCrowGadget</code> <code>None</code> <code>OfferingGadget</code> <code>Partner</code> <code>PlaceHolder</code> <code>Platform</code> <code>PlayTeam</code> <code>Projector</code> <code>QuestGadget</code> <code>RemoteAvatar</code> <code>RewardPoint</code> <code>RewardStatue</code> <code>RoguelikeOperatorGadget</code> <code>Screen</code> <code>SealGadget</code> <code>SpeedupField</code> <code>SubEquip</code> <code>Team</code> <code>Timeline</code> <code>TransPointFirst</code> <code>TransPointFirstGadget</code> <code>TransPointSecond</code> <code>TransPointSecondGadget</code> <code>Tree</code> <code>UllnteractGadget</code> <code>Vehicle</code> <code>ViewPoint</code> <code>Water</code> <code>WidgetGadget</code> <code>WindSeed</code> <code>Worktop</code></li></ul><h4 id="列数-no-of-columns" tabindex="-1">列数 (No. of Columns) <a class="header-anchor" href="#列数-no-of-columns" aria-hidden="true">#</a></h4><p>设定列数。</p><ul><li>范围: <code>2 ~ 5</code></li></ul><h4 id="实体列表-entity-list" tabindex="-1">实体列表 (Entity List) <a class="header-anchor" href="#实体列表-entity-list" aria-hidden="true">#</a></h4><p>已加载的所有实体。</p><h4 id="按类型分类-group-by-type" tabindex="-1">按类型分类 (Group by Type) <a class="header-anchor" href="#按类型分类-group-by-type" aria-hidden="true">#</a></h4><p>是否按类型分类 而不是一页显示所有。</p><h4 id="显示空的分类-show-empty-types" tabindex="-1">显示空的分类 (Show Empty Types) <a class="header-anchor" href="#显示空的分类-show-empty-types" aria-hidden="true">#</a></h4><p>是否显示没有实体的分类。</p><h4 id="仅显示oculi-show-only-oculi" tabindex="-1">仅显示Oculi (Show Only Oculi) <a class="header-anchor" href="#仅显示oculi-show-only-oculi" aria-hidden="true">#</a></h4><p>仅显示Oculi。</p><h4 id="传送-最近-teleport-closest" tabindex="-1">传送: 最近 (Teleport: Closest) <a class="header-anchor" href="#传送-最近-teleport-closest" aria-hidden="true">#</a></h4><p>传送到最近的实体。</p><h4 id="传送-最远-teleport-farthest" tabindex="-1">传送: 最远 (Teleport: Farthest) <a class="header-anchor" href="#传送-最远-teleport-farthest" aria-hidden="true">#</a></h4><p>传送到最远的实体。</p><h4 id="召唤所有-summon-all" tabindex="-1">召唤所有 (Summon All) <a class="header-anchor" href="#召唤所有-summon-all" aria-hidden="true">#</a></h4><p>将所有实体传送至自己。</p><h4 id="放逐所有-banish-all" tabindex="-1">放逐所有 (Banish All) <a class="header-anchor" href="#放逐所有-banish-all" aria-hidden="true">#</a></h4><p>将所有实体放逐至<code>y=0</code>。</p><h4 id="复制所有信息-copy-all-details" tabindex="-1">复制所有信息 (Copy All Details) <a class="header-anchor" href="#复制所有信息-copy-all-details" aria-hidden="true">#</a></h4><p>复制所有实体的信息。</p><h4 id="csv兼容-csv-friendly" tabindex="-1">CSV兼容 (CSV Friendly) <a class="header-anchor" href="#csv兼容-csv-friendly" aria-hidden="true">#</a></h4><p>复制的信息将会用逗号分隔 并在复制时删除坐标。</p><h4 id="包含头文件-include-headers" tabindex="-1">包含头文件 (Include Headers) <a class="header-anchor" href="#包含头文件-include-headers" aria-hidden="true">#</a></h4><p>是否包含头文件。</p><h4 id="t" tabindex="-1">T <a class="header-anchor" href="#t" aria-hidden="true">#</a></h4><p>传送到当前实体。</p><h4 id="s" tabindex="-1">S <a class="header-anchor" href="#s" aria-hidden="true">#</a></h4><p>将当前实体传送至自己。</p><h4 id="b" tabindex="-1">B <a class="header-anchor" href="#b" aria-hidden="true">#</a></h4><p>将当前实体放逐至<code>y=0</code>。</p><h4 id="c" tabindex="-1">C <a class="header-anchor" href="#c" aria-hidden="true">#</a></h4><p>复制当前实体信息。</p><h4 id="e" tabindex="-1">E <a class="header-anchor" href="#e" aria-hidden="true">#</a></h4><p>复制到ESP <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/10_more_guis.html#自定义筛选器">自定义筛选器</a> 。</p><h3 id="坐标位置" tabindex="-1">坐标位置 <a class="header-anchor" href="#坐标位置" aria-hidden="true">#</a></h3><p>坐标位置。</p><ul><li>使用此功能可能会出现严重的闪退。</li></ul><h4 id="玩家场景id-player-scene-id" tabindex="-1">玩家场景ID (Player scene id) <a class="header-anchor" href="#玩家场景id-player-scene-id" aria-hidden="true">#</a></h4><p>玩家场景ID。</p><h4 id="地图场景id-map-scene-id" tabindex="-1">地图场景ID (Map scene id) <a class="header-anchor" href="#地图场景id-map-scene-id" aria-hidden="true">#</a></h4><p>地图场景ID。</p><h4 id="角色位置-avatar-position" tabindex="-1">角色位置 (Avatar position) <a class="header-anchor" href="#角色位置-avatar-position" aria-hidden="true">#</a></h4><p>角色位置。</p><h4 id="相对位置-relative-position" tabindex="-1">相对位置 (Relative position) <a class="header-anchor" href="#相对位置-relative-position" aria-hidden="true">#</a></h4><p>相对位置。</p><h4 id="水平位置-level-position" tabindex="-1">水平位置 (Level position) <a class="header-anchor" href="#水平位置-level-position" aria-hidden="true">#</a></h4><p>水平位置。</p><h4 id="传送位置-teleport-position" tabindex="-1">传送位置 (Teleport position) <a class="header-anchor" href="#传送位置-teleport-position" aria-hidden="true">#</a></h4><p>设定将要传送到的位置。</p><h4 id="地图传送-map-teleport" tabindex="-1">地图传送 (Map teleport) <a class="header-anchor" href="#地图传送-map-teleport" aria-hidden="true">#</a></h4><p>使用地图传送 将玩家传送至指定位置的地面。</p><h4 id="世界传送-world-teleport" tabindex="-1">世界传送 (World teleport) <a class="header-anchor" href="#世界传送-world-teleport" aria-hidden="true">#</a></h4><p>使玩家直接移动至指定区域。</p><ul><li>现版本 此功能无法生效。</li></ul><h4 id="地面位置信息-ground-pos-info" tabindex="-1">地面位置信息 (Ground pos info) <a class="header-anchor" href="#地面位置信息-ground-pos-info" aria-hidden="true">#</a></h4><p>地面位置信息。</p><h4 id="一般地面-ground-normal" tabindex="-1">一般地面 (Ground normal) <a class="header-anchor" href="#一般地面-ground-normal" aria-hidden="true">#</a></h4><p>玩家相当于一般地面的位置。</p><h4 id="检测位置-checked-pos" tabindex="-1">检测位置 (Checked pos) <a class="header-anchor" href="#检测位置-checked-pos" aria-hidden="true">#</a></h4><p>检测角色当前位置。</p><ul><li>不能检测<code>y</code>值。</li></ul><h4 id="检测长度-raycast-length" tabindex="-1">检测长度 (Raycast length) <a class="header-anchor" href="#检测长度-raycast-length" aria-hidden="true">#</a></h4><p>设定检测长度。</p><h4 id="所有-all" tabindex="-1">所有 (All) <a class="header-anchor" href="#所有-all" aria-hidden="true">#</a></h4><p>所有。</p><h4 id="复制位置-copy-position" tabindex="-1">复制位置 (Copy Position) <a class="header-anchor" href="#复制位置-copy-position" aria-hidden="true">#</a></h4><p>复制角色位置。</p><h4 id="复制所有信息-cocy-all-info" tabindex="-1">复制所有信息 (Cocy All Info) <a class="header-anchor" href="#复制所有信息-cocy-all-info" aria-hidden="true">#</a></h4><p>复制所有位置信息。</p><h4 id="复制为json-copy-as-json" tabindex="-1">复制为Json (Copy as json) <a class="header-anchor" href="#复制为json-copy-as-json" aria-hidden="true">#</a></h4><p>复制包含随机名称的Json位置信息。</p><h3 id="地图管理器" tabindex="-1">地图管理器 <a class="header-anchor" href="#地图管理器" aria-hidden="true">#</a></h3><p>地图管理器。</p><h4 id="地标-waypoints" tabindex="-1">地标 (Waypoints) <a class="header-anchor" href="#地标-waypoints" aria-hidden="true">#</a></h4><p>地标信息。</p><h3 id="帧率曲线" tabindex="-1">帧率曲线 <a class="header-anchor" href="#帧率曲线" aria-hidden="true">#</a></h3><p>帧率曲线。</p><ul><li><code>(avg)</code> 为平均值。</li></ul><p><img src="'+l+'" alt="FPS_Graph.png"></p><h3 id="lua执行器" tabindex="-1">Lua执行器 <a class="header-anchor" href="#lua执行器" aria-hidden="true">#</a></h3>',82),F=e("h4",{id:"lua文件路径",tabindex:"-1"},[a("Lua文件路径 "),e("a",{class:"header-anchor",href:"#lua文件路径","aria-hidden":"true"},"#")],-1),R=e("h4",{id:"执行",tabindex:"-1"},[a("执行 "),e("a",{class:"header-anchor",href:"#执行","aria-hidden":"true"},"#")],-1);function V(N,M,L,O,H,j){const d=n("font");return h(),c("div",null,[p,e("p",null,[a("过滤"),e("a",u,[o(d,null,{default:i(()=>[_]),_:1})]),a("。")]),f,e("p",null,[a("按实体名称过滤"),e("a",b,[o(d,null,{default:i(()=>[y]),_:1})]),a("。")]),g,e("p",null,[a("按实体与玩家的距离过滤"),e("a",m,[o(d,null,{default:i(()=>[x]),_:1})]),a("。")]),E,e("p",null,[a("设定"),e("a",A,[o(d,null,{default:i(()=>[T]),_:1})]),a("。")]),e("ul",null,[e("li",null,[a("可在 "),G,a(" 中获取"),e("a",S,[o(d,null,{default:i(()=>[P]),_:1})]),a("。")])]),C,e("p",null,[a("使用指定"),e("a",D,[o(d,null,{default:i(()=>[v]),_:1})]),a("生成工具。")]),k,e("p",null,[a("按实体类型过滤"),e("a",w,[o(d,null,{default:i(()=>[I]),_:1})]),a("。")]),B,e("p",null,[a("???"),o(d,{color:"ffffff"},{default:i(()=>[a("Lua执行器。???")]),_:1})]),F,e("p",null,[a("???"),o(d,{color:"ffffff"},{default:i(()=>[a("设定需要执行的Lua文件的路径。???")]),_:1})]),R,e("p",null,[a("???"),o(d,{color:"ffffff"},{default:i(()=>[a("执行设定的Lua文件。???")]),_:1})])])}const q=t(s,[["render",V]]);export{$ as __pageData,q as default};
