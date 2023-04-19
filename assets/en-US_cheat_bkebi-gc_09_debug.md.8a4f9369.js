import{_ as r}from"./chunks/FPS_Graph.f4ee2426.js";import{_ as n,c as h,a as e,d as a,b as i,w as o,e as d,r as c,o as l}from"./app.4748b611.js";const O=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"Entity Manager","slug":"entity-manager","link":"#entity-manager","children":[]},{"level":3,"title":"Position","slug":"position","link":"#position","children":[]},{"level":3,"title":"Map Manager","slug":"map-manager","link":"#map-manager","children":[]},{"level":3,"title":"FPS Graph","slug":"fps-graph","link":"#fps-graph","children":[]},{"level":3,"title":"Lua Executor","slug":"lua-executor","link":"#lua-executor","children":[]},{"level":2,"title":"Packet Sniffer","slug":"packet-sniffer","link":"#packet-sniffer","children":[{"level":3,"title":"Pipe name","slug":"pipe-name","link":"#pipe-name","children":[]},{"level":3,"title":"Capturing","slug":"capturing","link":"#capturing","children":[]},{"level":3,"title":"Manipulation","slug":"manipulation","link":"#manipulation","children":[]}]}],"relativePath":"en-US/cheat/bkebi-gc/09_debug.md","lastUpdated":null}'),s={name:"en-US/cheat/bkebi-gc/09_debug.md"},p=d('<h1 id="debug" tabindex="-1">Debug <a class="header-anchor" href="#debug" aria-hidden="true">#</a></h1><p>Debug options.</p><h3 id="entity-manager" tabindex="-1">Entity Manager <a class="header-anchor" href="#entity-manager" aria-hidden="true">#</a></h3><p>Entity Manager.</p><h4 id="entity-count" tabindex="-1">Entity Count <a class="header-anchor" href="#entity-count" aria-hidden="true">#</a></h4><p>The current number of loaded entities.</p><hr><h4 id="filter" tabindex="-1">Filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h4>',8),u={href:"#entity-list"},f=e("strong",null,[e("code",null,"Entity List")],-1),_=e("h4",{id:"entity-name-filter",tabindex:"-1"},[a("Entity Name Filter "),e("a",{class:"header-anchor",href:"#entity-name-filter","aria-hidden":"true"},"#")],-1),g={href:"#entity-list"},m=e("strong",null,[e("code",null,"Entity List")],-1),b=e("h4",{id:"filter-by-radius-radius",tabindex:"-1"},[a("Filter by Radius (Radius) "),e("a",{class:"header-anchor",href:"#filter-by-radius-radius","aria-hidden":"true"},"#")],-1),y={href:"#entity-list"},x=e("strong",null,[e("code",null,"Entity List")],-1),k=d('<p>Sets the filter radius.</p><ul><li>Optional Range: <code>0 ~ 100</code></li></ul><hr><h4 id="spawner" tabindex="-1">Spawner <a class="header-anchor" href="#spawner" aria-hidden="true">#</a></h4><p>Spawn tools or mobs.</p><ul><li><p>Most tools cannot interact and mobs cannot be killed.</p></li><li><p>In CO-OP Mode, only visible to you.</p></li></ul><h4 id="spawn-gadget" tabindex="-1">Spawn Gadget <a class="header-anchor" href="#spawn-gadget" aria-hidden="true">#</a></h4><p>Use the set <code>ID</code> to spawn the gadget.</p><ul><li>The <code>ID</code> can be obtained from the <code>Items</code> item in <a href="/Anime_Game_Ha-k_Docs/en-US/hack/resources/GM_Handbook.html">GM Handbook</a> .</li></ul><h4 id="spawn-npc" tabindex="-1">Spawn NPC <a class="header-anchor" href="#spawn-npc" aria-hidden="true">#</a></h4><p>Use the set <code>ID</code> to spawn the gadget.</p><ul><li>The <code>ID</code> can be obtained from the <code>Items</code> item in <a href="/Anime_Game_Ha-k_Docs/en-US/hack/resources/GM_Handbook.html">GM Handbook</a> .</li></ul><h4 id="spawn-monster" tabindex="-1">Spawn Monster <a class="header-anchor" href="#spawn-monster" aria-hidden="true">#</a></h4><p>Use the set <code>ID</code> to spawn the gadget.</p><ul><li>The <code>ID</code> can be obtained from the <code>Monsters</code> item in <a href="/Anime_Game_Ha-k_Docs/en-US/hack/resources/GM_Handbook.html">GM Handbook</a> .</li></ul><hr><h4 id="type-filter" tabindex="-1">Type Filter <a class="header-anchor" href="#type-filter" aria-hidden="true">#</a></h4>',17),S={href:"#entity-list"},T=e("strong",null,[e("code",null,"Entity List")],-1),P=d('<ul><li>Available Options: <code>AOE</code> <code>ActivityInteractGadget</code> <code>AirflowField</code> <code>AmberWind</code> <code>AttackPhyisicalUnit</code> <code>Avatar</code> <code>BlackMud</code> <code>Bullet</code> <code>Bush</code> <code>Camera</code> <code>Chest</code> <code>CoinCollectLevelGadget</code> <code>CustomGadget</code> <code>CustomTile</code> <code>DangerZone</code> <code>DeshretObeliskGadget</code> <code>DropItem</code> <code>EchoShell</code> <code>ElemCrystal</code> <code>EnergyBall</code> <code>EnvAnimal</code> <code>EnviroArea</code> <code>Equip</code> <code>EyePoint</code> <code>Field</code> <code>FishPool</code> <code>FishRod</code> <code>Foundation</code> <code>Gadget</code> <code>GatherObject</code> <code>GatherPoint</code> <code>Gear</code> <code>GeneralRewardPoint</code> <code>Grass</code> <code>HomeGatherObject</code> <code>Level</code> <code>Lightning</code> <code>MPLevel</code> <code>MiracleRing</code> <code>Monster</code> <code>MonsterEquip</code> <code>MpPlayRewardPoint</code> <code>NPC</code> <code>NightCrowGadget</code> <code>None</code> <code>OfferingGadget</code> <code>Partner</code> <code>PlaceHolder</code> <code>Platform</code> <code>PlayTeam</code> <code>Projector</code> <code>QuestGadget</code> <code>RemoteAvatar</code> <code>RewardPoint</code> <code>RewardStatue</code> <code>RoguelikeOperatorGadget</code> <code>Screen</code> <code>SealGadget</code> <code>SpeedupField</code> <code>SubEquip</code> <code>Team</code> <code>Timeline</code> <code>TransPointFirst</code> <code>TransPointFirstGadget</code> <code>TransPointSecond</code> <code>TransPointSecondGadget</code> <code>Tree</code> <code>UllnteractGadget</code> <code>Vehicle</code> <code>ViewPoint</code> <code>Water</code> <code>WidgetGadget</code> <code>WindSeed</code> <code>Worktop</code></li></ul><h4 id="columns" tabindex="-1">Columns <a class="header-anchor" href="#columns" aria-hidden="true">#</a></h4>',2),C={href:"#type-filter"},v=e("strong",null,[e("code",null,"Type Filter")],-1),w=d('<ul><li>Optional Range: <code>2 ~ 5</code></li></ul><hr><h4 id="entity-list" tabindex="-1">Entity List <a class="header-anchor" href="#entity-list" aria-hidden="true">#</a></h4><p>List all entities that have been loaded.</p><h4 id="group-by-type" tabindex="-1">Group by Type <a class="header-anchor" href="#group-by-type" aria-hidden="true">#</a></h4><p>Whether to sort by type instead of displaying all on one page.</p><h4 id="show-empty-types" tabindex="-1">Show Empty Types <a class="header-anchor" href="#show-empty-types" aria-hidden="true">#</a></h4><p>Whether to show some types without entities.</p><h4 id="show-only-oculi" tabindex="-1">Show Only Oculi <a class="header-anchor" href="#show-only-oculi" aria-hidden="true">#</a></h4><p>Show only Oculi.</p><h4 id="teleport-closest" tabindex="-1">Teleport: Closest <a class="header-anchor" href="#teleport-closest" aria-hidden="true">#</a></h4><p>Teleports to the closest entity.</p><h4 id="teleport-farthest" tabindex="-1">Teleport: Farthest <a class="header-anchor" href="#teleport-farthest" aria-hidden="true">#</a></h4><p>Teleports to the farthest entity.</p><h4 id="summon-all" tabindex="-1">Summon All <a class="header-anchor" href="#summon-all" aria-hidden="true">#</a></h4><p>Teleports all entities to self.</p><h4 id="banish-all" tabindex="-1">Banish All <a class="header-anchor" href="#banish-all" aria-hidden="true">#</a></h4><p>Banish all entities to <code>y=0</code>.</p><h4 id="copy-all-details" tabindex="-1">Copy All Details <a class="header-anchor" href="#copy-all-details" aria-hidden="true">#</a></h4><p>Copy all entity details.</p><h4 id="csv-friendly" tabindex="-1">CSV Friendly <a class="header-anchor" href="#csv-friendly" aria-hidden="true">#</a></h4><p>The copied details will be comma separated and coordinates removed, as a csv format.</p><h4 id="include-headers" tabindex="-1">Include Headers <a class="header-anchor" href="#include-headers" aria-hidden="true">#</a></h4><p>Whether to include headers.</p><h4 id="t" tabindex="-1">T <a class="header-anchor" href="#t" aria-hidden="true">#</a></h4><p>Teleport to this entity.</p><h4 id="s" tabindex="-1">S <a class="header-anchor" href="#s" aria-hidden="true">#</a></h4><p>Teleports this entity to self.</p><h4 id="b" tabindex="-1">B <a class="header-anchor" href="#b" aria-hidden="true">#</a></h4><p>Banish this entity to <code>y=0</code>.</p><h4 id="c" tabindex="-1">C <a class="header-anchor" href="#c" aria-hidden="true">#</a></h4><p>Copy this entity details.</p><h4 id="e" tabindex="-1">E <a class="header-anchor" href="#e" aria-hidden="true">#</a></h4><p>Copy to ESP <a href="./10_more_guis.html#custom-filter">Custom Filter</a> .</p><h4 id="c-1" tabindex="-1">C <a class="header-anchor" href="#c-1" aria-hidden="true">#</a></h4><p>Copy the ConfigID.</p><h4 id="c-2" tabindex="-1">C <a class="header-anchor" href="#c-2" aria-hidden="true">#</a></h4><p>Copy the RuntimeID.</p><hr><h3 id="position" tabindex="-1">Position <a class="header-anchor" href="#position" aria-hidden="true">#</a></h3><p>Position.</p><ul><li>Serious crashes may occur when using this feature.</li></ul><h4 id="player-scene-id" tabindex="-1">Player scene id <a class="header-anchor" href="#player-scene-id" aria-hidden="true">#</a></h4><p>Player scene id.</p><h4 id="map-scene-id" tabindex="-1">Map scene id <a class="header-anchor" href="#map-scene-id" aria-hidden="true">#</a></h4><p>Map scene id.</p><h4 id="avatar-position" tabindex="-1">Avatar position <a class="header-anchor" href="#avatar-position" aria-hidden="true">#</a></h4><p>Avatar position.</p><h4 id="relative-position" tabindex="-1">Relative position <a class="header-anchor" href="#relative-position" aria-hidden="true">#</a></h4><p>Relative position.</p><h4 id="level-position" tabindex="-1">Level position <a class="header-anchor" href="#level-position" aria-hidden="true">#</a></h4><p>Level position.</p><hr><h4 id="teleport-position" tabindex="-1">Teleport position <a class="header-anchor" href="#teleport-position" aria-hidden="true">#</a></h4><p>Set the location to teleport to.</p><h4 id="map-teleport" tabindex="-1">Map teleport <a class="header-anchor" href="#map-teleport" aria-hidden="true">#</a></h4><p>Teleport using map Teleports the player to the ground at the specified location.</p><h4 id="world-teleport" tabindex="-1">World teleport <a class="header-anchor" href="#world-teleport" aria-hidden="true">#</a></h4><p>Makes the player move directly to the designated area.</p><ul><li>In the current version, this function does not work.</li></ul><hr><h4 id="ground-pos-info" tabindex="-1">Ground pos info <a class="header-anchor" href="#ground-pos-info" aria-hidden="true">#</a></h4><p>Ground position info.</p><h4 id="ground-normal" tabindex="-1">Ground normal <a class="header-anchor" href="#ground-normal" aria-hidden="true">#</a></h4><p>The position of the player is equivalent to the general ground.</p><h4 id="checked-pos" tabindex="-1">Checked pos <a class="header-anchor" href="#checked-pos" aria-hidden="true">#</a></h4><p>Check the character&#39;s current position.</p><ul><li>Cannot detect <code>y</code> values.</li></ul><h4 id="raycast-length" tabindex="-1">Raycast length <a class="header-anchor" href="#raycast-length" aria-hidden="true">#</a></h4><p>Set the raycast length.</p><h4 id="all" tabindex="-1">All <a class="header-anchor" href="#all" aria-hidden="true">#</a></h4><p>All.</p><hr><h4 id="copy-position" tabindex="-1">Copy Position <a class="header-anchor" href="#copy-position" aria-hidden="true">#</a></h4><p>avatar position.</p><h4 id="copy-all-info" tabindex="-1">Copy All Info <a class="header-anchor" href="#copy-all-info" aria-hidden="true">#</a></h4><p>Copy all position info.</p><h4 id="copy-as-json" tabindex="-1">Copy as json <a class="header-anchor" href="#copy-as-json" aria-hidden="true">#</a></h4><p>Copy the Json position info containing the random name.</p><hr><h3 id="map-manager" tabindex="-1">Map Manager <a class="header-anchor" href="#map-manager" aria-hidden="true">#</a></h3><p>Map Manager.</p><h4 id="waypoints" tabindex="-1">Waypoints <a class="header-anchor" href="#waypoints" aria-hidden="true">#</a></h4><p>Waypoints info.</p><hr><h3 id="fps-graph" tabindex="-1">FPS Graph <a class="header-anchor" href="#fps-graph" aria-hidden="true">#</a></h3><p>FPS Graph.</p><ul><li><code>(avg)</code> is the average FPS.</li></ul><p><img src="'+r+'" alt="FPS_Graph.png"></p><h3 id="lua-executor" tabindex="-1">Lua Executor <a class="header-anchor" href="#lua-executor" aria-hidden="true">#</a></h3><p>Lua Executor.</p><h4 id="lua-file-path" tabindex="-1">Lua File Path <a class="header-anchor" href="#lua-file-path" aria-hidden="true">#</a></h4><p>Set the path of the Lua file to be executed.</p><h4 id="execute" tabindex="-1">Execute <a class="header-anchor" href="#execute" aria-hidden="true">#</a></h4><p>Execute the set Lua file.</p><h2 id="packet-sniffer" tabindex="-1">Packet Sniffer <a class="header-anchor" href="#packet-sniffer" aria-hidden="true">#</a></h2><blockquote><p>Configure the built-in packet capture tool.</p></blockquote><h3 id="pipe-name" tabindex="-1">Pipe name <a class="header-anchor" href="#pipe-name" aria-hidden="true">#</a></h3><p>Set the pipe name for data exchange with another process with the same pipe name.</p><ul><li><p>If using <a href="https://github.com/Akebi-Group/Akebi-PacketSniffer" target="_blank" rel="noreferrer">PacketSniffer</a> , use the default <code>genshin_packet_pipe</code>.</p></li><li><p>For detailed usage, please see <a href="/Anime_Game_Ha-k_Docs/en-US/hack/resources/PacketSniffer.html">PacketSniffer</a> .</p></li></ul><h3 id="capturing" tabindex="-1">Capturing <a class="header-anchor" href="#capturing" aria-hidden="true">#</a></h3><p>Enables capturing game packet information and sending to pipe.</p><h3 id="manipulation" tabindex="-1">Manipulation <a class="header-anchor" href="#manipulation" aria-hidden="true">#</a></h3><p>The packets are modified and sent to the game through the pipe.</p><ul><li>May cause increased game lag.</li></ul>',105);function G(A,E,M,F,I,D){const t=c("font");return l(),h("div",null,[p,e("p",null,[a("Filter "),e("a",u,[i(t,null,{default:o(()=>[f]),_:1})]),a(" with the following options.")]),_,e("p",null,[a("Filter "),e("a",g,[i(t,null,{default:o(()=>[m]),_:1})]),a(" by entity name.")]),b,e("p",null,[a("Filter "),e("a",y,[i(t,null,{default:o(()=>[x]),_:1})]),a(" by entity distance from player.")]),k,e("p",null,[a("Filter "),e("a",S,[i(t,null,{default:o(()=>[T]),_:1})]),a(" by entity type.")]),P,e("p",null,[a("Sets the number of columns to display for "),e("a",C,[i(t,null,{default:o(()=>[v]),_:1})]),a(".")]),w])}const V=n(s,[["render",G]]);export{O as __pageData,V as default};
