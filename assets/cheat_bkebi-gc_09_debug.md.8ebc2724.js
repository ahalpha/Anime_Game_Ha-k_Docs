import{_ as o,c as i,a as e,d as a,b as r,w as h,e as c,r as n,o as t}from"./app.ea351fc7.js";const l="/Anime_Game_Ha-k_Docs/assets/FPS_Graph.4232cead.png",R=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"实体管理器","slug":"实体管理器","link":"#实体管理器","children":[]},{"level":3,"title":"坐标位置","slug":"坐标位置","link":"#坐标位置","children":[]},{"level":3,"title":"地图管理器","slug":"地图管理器","link":"#地图管理器","children":[]},{"level":3,"title":"帧率曲线","slug":"帧率曲线","link":"#帧率曲线","children":[]},{"level":3,"title":"Lua执行器","slug":"lua执行器","link":"#lua执行器","children":[]}],"relativePath":"cheat/bkebi-gc/09_debug.md","lastUpdated":null}'),s={name:"cheat/bkebi-gc/09_debug.md"},u=c('<h1 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-hidden="true">#</a></h1><p>开发者选项。</p><h3 id="实体管理器" tabindex="-1">实体管理器 <a class="header-anchor" href="#实体管理器" aria-hidden="true">#</a></h3><p>实体管理器。</p><h4 id="实体数量" tabindex="-1">实体数量 <a class="header-anchor" href="#实体数量" aria-hidden="true">#</a></h4><p>当前已加载实体的数量。</p><hr><h4 id="筛选器" tabindex="-1">筛选器 <a class="header-anchor" href="#筛选器" aria-hidden="true">#</a></h4>',8),p={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},_=e("strong",null,[e("code",null,"实体列表")],-1),f=e("h4",{id:"实体名称筛选器",tabindex:"-1"},[a("实体名称筛选器 "),e("a",{class:"header-anchor",href:"#实体名称筛选器","aria-hidden":"true"},"#")],-1),b={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},g=e("strong",null,[e("code",null,"实体列表")],-1),x=e("h4",{id:"按半径过滤",tabindex:"-1"},[a("按半径过滤 "),e("a",{class:"header-anchor",href:"#按半径过滤","aria-hidden":"true"},"#")],-1),E={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},m=e("strong",null,[e("code",null,"实体列表")],-1),A=c('<h4 id="半径" tabindex="-1">半径 <a class="header-anchor" href="#半径" aria-hidden="true">#</a></h4><p>设定过滤半径。</p><ul><li>范围: <code>0 ~ 100</code></li></ul><hr><h4 id="实体生成器" tabindex="-1">实体生成器 <a class="header-anchor" href="#实体生成器" aria-hidden="true">#</a></h4><p>生成工具或生物。</p><ul><li><p>大多数工具不能交互 生物无法被击杀。</p></li><li><p>多人游戏下 仅自己可见。</p></li></ul><h4 id="生成-gadget" tabindex="-1">生成 Gadget <a class="header-anchor" href="#生成-gadget" aria-hidden="true">#</a></h4><p>使用指定<code>Gadget ID</code>生成工具。</p><ul><li>可在 <a href="/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html">GM表</a> 中获取<code>Gadget ID</code>。</li></ul><h4 id="生成-npc-spawn-npc" tabindex="-1">生成 NPC (Spawn NPC) <a class="header-anchor" href="#生成-npc-spawn-npc" aria-hidden="true">#</a></h4><p>使用指定<code>NPC ID</code>生成NPC。</p><ul><li>可在 <a href="/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html">GM表</a> 中获取<code>NPC ID</code>。</li></ul><h4 id="生成怪物" tabindex="-1">生成怪物 <a class="header-anchor" href="#生成怪物" aria-hidden="true">#</a></h4><p>使用指定<code>生物ID</code>生成工具。</p><ul><li>可在 <a href="/Anime_Game_Ha-k_Docs/hack/resources/GM_Handbook.html">GM表</a> 中获取<code>生物ID</code>。</li></ul><hr><h4 id="类型筛选器" tabindex="-1">类型筛选器 <a class="header-anchor" href="#类型筛选器" aria-hidden="true">#</a></h4>',18),G={href:"#%E5%AE%9E%E4%BD%93%E5%88%97%E8%A1%A8"},P=e("strong",null,[e("code",null,"实体列表")],-1),C=c('<ul><li>可选择: <code>AOE</code> <code>ActivityInteractGadget</code> <code>AirflowField</code> <code>AmberWind</code> <code>AttackPhyisicalUnit</code> <code>Avatar</code> <code>BlackMud</code> <code>Bullet</code> <code>Bush</code> <code>Camera</code> <code>Chest</code> <code>CoinCollectLevelGadget</code> <code>CustomGadget</code> <code>CustomTile</code> <code>DangerZone</code> <code>DeshretObeliskGadget</code> <code>DropItem</code> <code>EchoShell</code> <code>ElemCrystal</code> <code>EnergyBall</code> <code>EnvAnimal</code> <code>EnviroArea</code> <code>Equip</code> <code>EyePoint</code> <code>Field</code> <code>FishPool</code> <code>FishRod</code> <code>Foundation</code> <code>Gadget</code> <code>GatherObject</code> <code>GatherPoint</code> <code>Gear</code> <code>GeneralRewardPoint</code> <code>Grass</code> <code>HomeGatherObject</code> <code>Level</code> <code>Lightning</code> <code>MPLevel</code> <code>MiracleRing</code> <code>Monster</code> <code>MonsterEquip</code> <code>MpPlayRewardPoint</code> <code>NPC</code> <code>NightCrowGadget</code> <code>None</code> <code>OfferingGadget</code> <code>Partner</code> <code>PlaceHolder</code> <code>Platform</code> <code>PlayTeam</code> <code>Projector</code> <code>QuestGadget</code> <code>RemoteAvatar</code> <code>RewardPoint</code> <code>RewardStatue</code> <code>RoguelikeOperatorGadget</code> <code>Screen</code> <code>SealGadget</code> <code>SpeedupField</code> <code>SubEquip</code> <code>Team</code> <code>Timeline</code> <code>TransPointFirst</code> <code>TransPointFirstGadget</code> <code>TransPointSecond</code> <code>TransPointSecondGadget</code> <code>Tree</code> <code>UllnteractGadget</code> <code>Vehicle</code> <code>ViewPoint</code> <code>Water</code> <code>WidgetGadget</code> <code>WindSeed</code> <code>Worktop</code></li></ul><h4 id="列数" tabindex="-1">列数 <a class="header-anchor" href="#列数" aria-hidden="true">#</a></h4>',2),T={href:"#%E7%B1%BB%E5%9E%8B%E7%AD%9B%E9%80%89%E5%99%A8"},k=e("strong",null,[e("code",null,"类型筛选器")],-1),S=c('<ul><li>范围: <code>2 ~ 5</code></li></ul><hr><h4 id="实体列表" tabindex="-1">实体列表 <a class="header-anchor" href="#实体列表" aria-hidden="true">#</a></h4><p>列出已加载的所有实体。</p><h4 id="按类型分组" tabindex="-1">按类型分组 <a class="header-anchor" href="#按类型分组" aria-hidden="true">#</a></h4><p>是否按类型分类 而不是一页显示所有。</p><h4 id="显示空类型" tabindex="-1">显示空类型 <a class="header-anchor" href="#显示空类型" aria-hidden="true">#</a></h4><p>是否显示没有实体的分类。</p><h4 id="仅显示神瞳" tabindex="-1">仅显示神瞳 <a class="header-anchor" href="#仅显示神瞳" aria-hidden="true">#</a></h4><p>仅显示神瞳。</p><h4 id="传送-最近的" tabindex="-1">传送: 最近的 <a class="header-anchor" href="#传送-最近的" aria-hidden="true">#</a></h4><p>传送到最近的实体。</p><h4 id="传送-最远的" tabindex="-1">传送: 最远的 <a class="header-anchor" href="#传送-最远的" aria-hidden="true">#</a></h4><p>传送到最远的实体。</p><h4 id="召唤所有" tabindex="-1">召唤所有 <a class="header-anchor" href="#召唤所有" aria-hidden="true">#</a></h4><p>将所有实体传送至自己。</p><h4 id="逐回所有" tabindex="-1">逐回所有 <a class="header-anchor" href="#逐回所有" aria-hidden="true">#</a></h4><p>将所有实体逐回至<code>y=0</code>。</p><h4 id="复制所有详细信息" tabindex="-1">复制所有详细信息 <a class="header-anchor" href="#复制所有详细信息" aria-hidden="true">#</a></h4><p>复制所有实体的信息。</p><h4 id="csv兼容-csv-friendly" tabindex="-1">CSV兼容 (CSV Friendly) <a class="header-anchor" href="#csv兼容-csv-friendly" aria-hidden="true">#</a></h4><p>复制的信息将会用逗号分隔 并删除坐标。</p><h4 id="包含头文件-include-headers" tabindex="-1">包含头文件 (Include Headers) <a class="header-anchor" href="#包含头文件-include-headers" aria-hidden="true">#</a></h4><p>是否包含头文件。</p><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><p>传送到当前实体。</p><h4 id="s" tabindex="-1">S <a class="header-anchor" href="#s" aria-hidden="true">#</a></h4><p>将当前实体传送至自己。</p><h4 id="b" tabindex="-1">B <a class="header-anchor" href="#b" aria-hidden="true">#</a></h4><p>将当前实体放逐至<code>y=0</code>。</p><h4 id="c" tabindex="-1">C <a class="header-anchor" href="#c" aria-hidden="true">#</a></h4><p>复制当前实体信息。</p><h4 id="e" tabindex="-1">E <a class="header-anchor" href="#e" aria-hidden="true">#</a></h4><p>复制到ESP <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/10_more_guis.html#自定义筛选器">自定义筛选器</a> 。</p><h4 id="c-1" tabindex="-1">C <a class="header-anchor" href="#c-1" aria-hidden="true">#</a></h4><p>复制ConfigID。</p><h4 id="c-2" tabindex="-1">C <a class="header-anchor" href="#c-2" aria-hidden="true">#</a></h4><p>复制RuntimeID。</p><hr><h3 id="坐标位置" tabindex="-1">坐标位置 <a class="header-anchor" href="#坐标位置" aria-hidden="true">#</a></h3><p>坐标位置。</p><ul><li>使用此功能可能会出现严重的闪退。</li></ul><h4 id="玩家场景id" tabindex="-1">玩家场景id <a class="header-anchor" href="#玩家场景id" aria-hidden="true">#</a></h4><p>玩家场景ID。</p><h4 id="地图场景id" tabindex="-1">地图场景id <a class="header-anchor" href="#地图场景id" aria-hidden="true">#</a></h4><p>地图场景ID。</p><h4 id="角色坐标" tabindex="-1">角色坐标 <a class="header-anchor" href="#角色坐标" aria-hidden="true">#</a></h4><p>角色坐标。</p><h4 id="相对坐标" tabindex="-1">相对坐标 <a class="header-anchor" href="#相对坐标" aria-hidden="true">#</a></h4><p>相对坐标。</p><h4 id="水平坐标-level-position" tabindex="-1">水平坐标 (Level position) <a class="header-anchor" href="#水平坐标-level-position" aria-hidden="true">#</a></h4><p>水平坐标。</p><hr><h4 id="传送坐标" tabindex="-1">传送坐标 <a class="header-anchor" href="#传送坐标" aria-hidden="true">#</a></h4><p>设定将要传送到的位置。</p><h4 id="地图传送" tabindex="-1">地图传送 <a class="header-anchor" href="#地图传送" aria-hidden="true">#</a></h4><p>使用地图传送 将玩家传送至指定位置的地面。</p><h4 id="世界传送" tabindex="-1">世界传送 <a class="header-anchor" href="#世界传送" aria-hidden="true">#</a></h4><p>使玩家直接移动至指定区域。</p><ul><li>现版本 此功能无法生效。</li></ul><hr><h4 id="地面坐标信息" tabindex="-1">地面坐标信息 <a class="header-anchor" href="#地面坐标信息" aria-hidden="true">#</a></h4><p>地面位置信息。</p><h4 id="一般地面-ground-normal" tabindex="-1">一般地面 (Ground normal) <a class="header-anchor" href="#一般地面-ground-normal" aria-hidden="true">#</a></h4><p>玩家相当于一般地面的位置。</p><h4 id="检测位置-checked-pos" tabindex="-1">检测位置 (Checked pos) <a class="header-anchor" href="#检测位置-checked-pos" aria-hidden="true">#</a></h4><p>检测角色当前位置。</p><ul><li>不能检测<code>y</code>值。</li></ul><h4 id="检测长度-raycast-length" tabindex="-1">检测长度 (Raycast length) <a class="header-anchor" href="#检测长度-raycast-length" aria-hidden="true">#</a></h4><p>设定检测长度。</p><h4 id="全部" tabindex="-1">全部 <a class="header-anchor" href="#全部" aria-hidden="true">#</a></h4><p>全部。</p><hr><h4 id="复制坐标" tabindex="-1">复制坐标 <a class="header-anchor" href="#复制坐标" aria-hidden="true">#</a></h4><p>复制角色坐标。</p><h4 id="复制全部信息" tabindex="-1">复制全部信息 <a class="header-anchor" href="#复制全部信息" aria-hidden="true">#</a></h4><p>复制全部位置信息。</p><h4 id="复制为json" tabindex="-1">复制为Json <a class="header-anchor" href="#复制为json" aria-hidden="true">#</a></h4><p>复制包含随机名称的Json位置信息。</p><hr><h3 id="地图管理器" tabindex="-1">地图管理器 <a class="header-anchor" href="#地图管理器" aria-hidden="true">#</a></h3><p>地图管理器。</p><h4 id="地标-waypoints" tabindex="-1">地标 (Waypoints) <a class="header-anchor" href="#地标-waypoints" aria-hidden="true">#</a></h4><p>地标信息。</p><hr><h3 id="帧率曲线" tabindex="-1">帧率曲线 <a class="header-anchor" href="#帧率曲线" aria-hidden="true">#</a></h3><p>帧率曲线。</p><ul><li><code>(avg)</code> 为平均值。</li></ul><p><img src="'+l+'" alt="FPS_Graph.png"></p><h3 id="lua执行器" tabindex="-1">Lua执行器 <a class="header-anchor" href="#lua执行器" aria-hidden="true">#</a></h3><p>Lua执行器。</p><h4 id="lua文件路径" tabindex="-1">Lua文件路径 <a class="header-anchor" href="#lua文件路径" aria-hidden="true">#</a></h4><p>设定需要执行的Lua文件的路径。</p><ul><li>Lua例子: <a href="https://discord.com/channels/1065348698197991605/1065452338426417233/1080355460353368085" target="_blank" rel="noreferrer">BoobsChanger.lua</a></li></ul><h4 id="执行" tabindex="-1">执行 <a class="header-anchor" href="#执行" aria-hidden="true">#</a></h4><p>执行设定的Lua文件。</p>',96);function D(v,I,B,y,N,V){const d=n("font");return t(),i("div",null,[u,e("p",null,[a("用于过滤"),e("a",p,[r(d,null,{default:h(()=>[_]),_:1})]),a("。")]),f,e("p",null,[a("按实体名称过滤"),e("a",b,[r(d,null,{default:h(()=>[g]),_:1})]),a("。")]),x,e("p",null,[a("按实体与玩家的距离过滤"),e("a",E,[r(d,null,{default:h(()=>[m]),_:1})]),a("。")]),A,e("p",null,[a("按实体类型过滤"),e("a",G,[r(d,null,{default:h(()=>[P]),_:1})]),a("。")]),C,e("p",null,[a("设定"),e("a",T,[r(d,null,{default:h(()=>[k]),_:1})]),a("显示列数。")]),S])}const L=o(s,[["render",D]]);export{R as __pageData,L as default};
