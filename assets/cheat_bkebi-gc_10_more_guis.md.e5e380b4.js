import{_ as n,c,a as e,d,b as i,w as a,e as o,r,o as t}from"./app.962a1369.js";const h="/Anime_Game_Ha-k_Docs/assets/Status_Window.412ae5d4.png",s="/Anime_Game_Ha-k_Docs/assets/Info_Window.4288a3f7.png",u="/Anime_Game_Ha-k_Docs/assets/FPS_indicator.852c05ab.png",_="/Anime_Game_Ha-k_Docs/assets/Notifications.4dce33db.png",p="/Anime_Game_Ha-k_Docs/assets/Interactive_map.1a5db775.png",Ed=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"配置文件...","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"配置文件","slug":"配置文件-1","link":"#配置文件-1","children":[]},{"level":3,"title":"附加","slug":"附加","link":"#附加","children":[]},{"level":2,"title":"配置文件管理","slug":"配置文件管理","link":"#配置文件管理","children":[{"level":3,"title":"显示类型","slug":"显示类型","link":"#显示类型","children":[]},{"level":3,"title":"别名 (重命名 (伪))","slug":"别名-重命名-伪","link":"#别名-重命名-伪","children":[]},{"level":3,"title":"重命名","slug":"重命名","link":"#重命名","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":3,"title":"复制","slug":"复制","link":"#复制","children":[]},{"level":3,"title":"+","slug":"","link":"#","children":[]},{"level":3,"title":"-","slug":"-1","link":"#-1","children":[]},{"level":3,"title":"账号列表","slug":"账号列表","link":"#账号列表","children":[]}]},{"level":2,"title":"自定义筛选器","slug":"自定义筛选器","link":"#自定义筛选器","children":[{"level":3,"title":"新增筛选器","slug":"新增筛选器","link":"#新增筛选器","children":[]},{"level":3,"title":"Display name","slug":"display-name","link":"#display-name","children":[]},{"level":3,"title":"Type","slug":"type","link":"#type","children":[]},{"level":3,"title":"解密","slug":"解密","link":"#解密","children":[]},{"level":3,"title":"名称","slug":"名称","link":"#名称","children":[]},{"level":3,"title":"添加","slug":"添加","link":"#添加","children":[]},{"level":3,"title":"Update name","slug":"update-name","link":"#update-name","children":[]},{"level":3,"title":"Cancel editing name","slug":"cancel-editing-name","link":"#cancel-editing-name","children":[]},{"level":3,"title":"添加筛选器","slug":"添加筛选器","link":"#添加筛选器","children":[]},{"level":3,"title":"Calcel editing","slug":"calcel-editing","link":"#calcel-editing","children":[]}]},{"level":2,"title":"状态窗口","slug":"状态窗口","link":"#状态窗口","children":[]},{"level":2,"title":"信息窗口","slug":"信息窗口","link":"#信息窗口","children":[]},{"level":2,"title":"FPS指示器","slug":"fps指示器","link":"#fps指示器","children":[]},{"level":2,"title":"通知","slug":"通知","link":"#通知","children":[]},{"level":2,"title":"ImGui","slug":"imgui","link":"#imgui","children":[{"level":3,"title":"颜色 (Colors)","slug":"颜色-colors","link":"#颜色-colors","children":[]},{"level":3,"title":"字体 (Fonts)","slug":"字体-fonts","link":"#字体-fonts","children":[]},{"level":3,"title":"框架圆角 (FrameRounding)","slug":"框架圆角-framerounding","link":"#框架圆角-framerounding","children":[]},{"level":3,"title":"窗体边框 (Window Border)","slug":"窗体边框-window-border","link":"#窗体边框-window-border","children":[]},{"level":3,"title":"框架边框 (Frame Border)","slug":"框架边框-frame-border","link":"#框架边框-frame-border","children":[]},{"level":3,"title":"选择框边框 (Popup Border)","slug":"选择框边框-popup-border","link":"#选择框边框-popup-border","children":[]},{"level":3,"title":"保存配置 (Save Ref)","slug":"保存配置-save-ref","link":"#保存配置-save-ref","children":[]},{"level":3,"title":"恢复配置 (Revert Ref)","slug":"恢复配置-revert-ref","link":"#恢复配置-revert-ref","children":[]},{"level":3,"title":"大小 (Sizes)","slug":"大小-sizes","link":"#大小-sizes","children":[]},{"level":3,"title":"颜色 (Colors)","slug":"颜色-colors-1","link":"#颜色-colors-1","children":[]},{"level":3,"title":"字体 (Fonts)","slug":"字体-fonts-1","link":"#字体-fonts-1","children":[]},{"level":3,"title":"渲染 (Rendering)","slug":"渲染-rendering","link":"#渲染-rendering","children":[]}]},{"level":2,"title":"交互式地图","slug":"交互式地图","link":"#交互式地图","children":[{"level":3,"title":"设置","slug":"设置","link":"#设置","children":[]},{"level":3,"title":"通用","slug":"通用","link":"#通用","children":[]},{"level":3,"title":"图标视图","slug":"图标视图","link":"#图标视图","children":[]},{"level":3,"title":"未/已完成图标视图","slug":"未-已完成图标视图","link":"#未-已完成图标视图","children":[]},{"level":3,"title":"物品调整","slug":"物品调整","link":"#物品调整","children":[]},{"level":3,"title":"收集物品检测","slug":"收集物品检测","link":"#收集物品检测","children":[]},{"level":3,"title":"手动完成","slug":"手动完成","link":"#手动完成","children":[]},{"level":3,"title":"过滤器","slug":"过滤器","link":"#过滤器","children":[]},{"level":3,"title":"升级材料过滤器","slug":"升级材料过滤器","link":"#升级材料过滤器","children":[]},{"level":3,"title":"搜索","slug":"搜索","link":"#搜索","children":[]},{"level":3,"title":"锚点","slug":"锚点","link":"#锚点","children":[]},{"level":3,"title":"特殊物品","slug":"特殊物品","link":"#特殊物品","children":[]},{"level":3,"title":"地方特产","slug":"地方特产","link":"#地方特产","children":[]},{"level":3,"title":"角色","slug":"角色","link":"#角色","children":[]},{"level":3,"title":"武器","slug":"武器","link":"#武器","children":[]}]}],"relativePath":"cheat/bkebi-gc/10_more_guis.md","lastUpdated":null}'),f={name:"cheat/bkebi-gc/10_more_guis.md"},g=e("h1",{id:"更多界面",tabindex:"-1"},[d("更多界面 "),e("a",{class:"header-anchor",href:"#更多界面","aria-hidden":"true"},"#")],-1),b=e("p",null,"主界面功能列表外的其他功能。",-1),E=e("h3",{id:"配置文件",tabindex:"-1"},[d("配置文件... "),e("a",{class:"header-anchor",href:"#配置文件","aria-hidden":"true"},"#")],-1),A={href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},B=e("strong",null,[e("code",null,"配置文件管理")],-1),m=e("h3",{id:"配置文件-1",tabindex:"-1"},[d("配置文件 "),e("a",{class:"header-anchor",href:"#配置文件-1","aria-hidden":"true"},"#")],-1),x=e("p",null,"设定当前使用的配置文件。",-1),v=e("h3",{id:"附加",tabindex:"-1"},[d("附加 "),e("a",{class:"header-anchor",href:"#附加","aria-hidden":"true"},"#")],-1),k={href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},T=e("strong",null,[e("code",null,"配置文件")],-1),S={href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},P=e("strong",null,[e("code",null,"配置文件")],-1),D=o('<h2 id="配置文件管理" tabindex="-1">配置文件管理 <a class="header-anchor" href="#配置文件管理" aria-hidden="true">#</a></h2><blockquote><p>管理配置文件。</p></blockquote><h3 id="显示类型" tabindex="-1">显示类型 <a class="header-anchor" href="#显示类型" aria-hidden="true">#</a></h3><p>设定账号的显示类型。</p><ul><li><p>可作用于主菜单右上角。</p></li><li><p>可选择: <code>Pseudo</code> - 别名 | <code>UserID</code> - UID | <code>Nickname</code> - 昵称</p></li></ul><h3 id="别名-重命名-伪" tabindex="-1">别名 (重命名 (伪)) <a class="header-anchor" href="#别名-重命名-伪" aria-hidden="true">#</a></h3><p>设定当前账号的别名。</p><h3 id="重命名" tabindex="-1">重命名 <a class="header-anchor" href="#重命名" aria-hidden="true">#</a></h3><p>更改此配置文件的昵称。</p><h3 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-hidden="true">#</a></h3><p>删除此配置文件。</p><h3 id="复制" tabindex="-1">复制 <a class="header-anchor" href="#复制" aria-hidden="true">#</a></h3><p>复制此配置文件到列表中。</p><h3 id="" tabindex="-1">+ <a class="header-anchor" href="#" aria-hidden="true">#</a></h3><p>附加当前的账号到此配置文件。</p><ul><li><p>在使用当前账号登录时自动切换到此配置文件。</p></li><li><p>当前配置文件被附加的账号会显示在<code>账号</code>列。</p></li></ul><h3 id="-1" tabindex="-1">- <a class="header-anchor" href="#-1" aria-hidden="true">#</a></h3><p>取消附加当前的账号到此配置文件。</p><h3 id="账号列表" tabindex="-1">账号列表 <a class="header-anchor" href="#账号列表" aria-hidden="true">#</a></h3><p>显示此配置文件被附加的账号。</p><h2 id="自定义筛选器" tabindex="-1">自定义筛选器 <a class="header-anchor" href="#自定义筛选器" aria-hidden="true">#</a></h2><blockquote><p>根据对象类别来筛选透视对象。</p></blockquote><h3 id="新增筛选器" tabindex="-1">新增筛选器 <a class="header-anchor" href="#新增筛选器" aria-hidden="true">#</a></h3><p>将要新建的筛选器相关设定。</p><h3 id="display-name" tabindex="-1">Display name <a class="header-anchor" href="#display-name" aria-hidden="true">#</a></h3><p>为此筛选器指定一个名称</p><ul><li>使用透视时 被筛选的对象会显示此昵称。</li></ul><h3 id="type" tabindex="-1">Type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h3><p>设定筛选实体的类别。</p><ul><li>可选择: <code>无</code> <code>Avatar</code> <code>怪物</code> <code>Bullet</code> <code>AttackPhyisicalUnit</code> <code>AOE</code> <code>Camera</code> <code>EnviroArea</code> <code>Equip</code> <code>MonsterEquip</code> <code>Grass</code> <code>玩家等级</code> <code>NPC</code> <code>TransPointFirst</code> <code>TransPointFirstGadget</code> <code>TransPointSecond</code> <code>TransPointSecondGadget</code> <code>Dropltem</code> <code>FieId</code> <code>Gadget</code> <code>Water</code> <code>GatherPoint</code> <code>GatherObject</code> <code>AirflowField</code> <code>SpeedupFieId</code> <code>Gear</code> <code>宝箱</code> <code>EnergyBall</code> <code>ElemCrystal</code> <code>Timeline</code> <code>Worktop</code> <code>Team</code> <code>Platform</code> <code>AmberWind</code> <code>EnvAnimal</code> <code>SealGadget</code> <code>Tree</code> <code>Bush</code> <code>QuestGadget</code> <code>闪电</code> <code>RewardPoint</code> <code>RewardStatue</code> <code>MPLevel</code> <code>WindSeed</code> <code>MpPlayRewardPoint</code> <code>ViewPoint</code> <code>RemoteAvatar</code> <code>GeneralRewardPoint</code> <code>PlayTeam</code> <code>OfferingGadget</code> <code>EyePoint</code> <code>MiracleRing</code> <code>Foundation</code> <code>WidgetGadget</code> <code>Vehicle</code> <code>DangerZone</code> <code>EchoShell</code> <code>HomeGatherObject</code> <code>Projector</code> <code>Screen</code> <code>CustomTile</code> <code>FishPool</code> <code>FishRod</code> <code>CustomGadget</code> <code>RoguelikeOperatorGadget</code> <code>ActivityInteractGadget</code> <code>BlackMud</code> <code>SubEquip</code> <code>UllnteractGadget</code> <code>NightCrowGadget</code> <code>Partner</code> <code>DeshretObeliskGadget</code> <code>CoinCollectLevel</code> <code>GadgetPlaceHoldon</code></li></ul><h3 id="解密" tabindex="-1">解密 <a class="header-anchor" href="#解密" aria-hidden="true">#</a></h3><p>设定筛选实体是否为解密。</p>',32),C={href:"/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/04_esp.html#隐藏已完成的解密"},G=e("strong",null,[e("code",null,"隐藏已完成的解密")],-1),w=e("h3",{id:"名称",tabindex:"-1"},[d("名称 "),e("a",{class:"header-anchor",href:"#名称","aria-hidden":"true"},"#")],-1),R=e("p",null,"添加后将会通过名称筛选实体。",-1),F=e("ul",null,[e("li",null,"若不添加名称 则只通过类别直接筛选。")],-1),I=e("h3",{id:"添加",tabindex:"-1"},[d("添加 "),e("a",{class:"header-anchor",href:"#添加","aria-hidden":"true"},"#")],-1),y={href:"#%E5%90%8D%E7%A7%B0"},H=e("strong",null,[e("code",null,"名称")],-1),V=e("h3",{id:"update-name",tabindex:"-1"},[d("Update name "),e("a",{class:"header-anchor",href:"#update-name","aria-hidden":"true"},"#")],-1),N={href:"#%E5%90%8D%E7%A7%B0"},q=e("strong",null,[e("code",null,"名称")],-1),W=e("h3",{id:"cancel-editing-name",tabindex:"-1"},[d("Cancel editing name "),e("a",{class:"header-anchor",href:"#cancel-editing-name","aria-hidden":"true"},"#")],-1),z={href:"#%E5%90%8D%E7%A7%B0"},M=e("strong",null,[e("code",null,"名称")],-1),L={href:"#%E5%90%8D%E7%A7%B0"},O=e("strong",null,[e("code",null,"名称")],-1),U=o('<h3 id="添加筛选器" tabindex="-1">添加筛选器 <a class="header-anchor" href="#添加筛选器" aria-hidden="true">#</a></h3><p>添加的筛选器会在 <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/04_esp.html#custom-filters">透视 - Custom filter</a> 中 需要自行启用。</p><h3 id="calcel-editing" tabindex="-1">Calcel editing <a class="header-anchor" href="#calcel-editing" aria-hidden="true">#</a></h3><p>取消编辑所选筛选器。</p>',4),$={href:"#display-name"},j=e("strong",null,[e("code",null,"Display name")],-1),J={href:"#type"},Q=e("strong",null,[e("code",null,"Type")],-1),Y={href:"#%E5%90%8D%E7%A7%B0"},Z=e("strong",null,[e("code",null,"名称")],-1),K=o('<h2 id="状态窗口" tabindex="-1">状态窗口 <a class="header-anchor" href="#状态窗口" aria-hidden="true">#</a></h2><blockquote><p>简单的显示目前的启用功能与其状态。</p></blockquote><p><img src="'+h+'" alt="Status_Window.png"></p><h2 id="信息窗口" tabindex="-1">信息窗口 <a class="header-anchor" href="#信息窗口" aria-hidden="true">#</a></h2><blockquote><p>某些功能的状态显示。</p></blockquote><p>目前会被显示的功能有 <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/03_teleport.html#神瞳传送">传送 - 神瞳传送</a> 和 <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/03_teleport.html#宝箱传送">传送 - 宝箱传送</a> 。</p><p><img src="'+s+'" alt="Info_Window.png"></p><h2 id="fps指示器" tabindex="-1">FPS指示器 <a class="header-anchor" href="#fps指示器" aria-hidden="true">#</a></h2><blockquote><p>用于显示目前的游戏帧率。</p></blockquote><p><img src="'+u+'" alt="FPS_indicator.png"></p><h2 id="通知" tabindex="-1">通知 <a class="header-anchor" href="#通知" aria-hidden="true">#</a></h2><blockquote><p>用于显示快捷键是否启用或关闭功能以及提示其他信息。</p></blockquote><p><img src="'+_+'" alt="Notifications.png"></p><h2 id="imgui" tabindex="-1">ImGui <a class="header-anchor" href="#imgui" aria-hidden="true">#</a></h2><blockquote><p>定制Bkebi-GC的个性化主题。</p></blockquote><h3 id="颜色-colors" tabindex="-1">颜色 (Colors) <a class="header-anchor" href="#颜色-colors" aria-hidden="true">#</a></h3><p>快速设定界面的主题颜色。</p><ul><li>可选择: <ul><li><code>Dark</code> 暗淡</li><li><code>Light</code> 明亮</li><li><code>Classic</code> 经典</li></ul></li></ul><h3 id="字体-fonts" tabindex="-1">字体 (Fonts) <a class="header-anchor" href="#字体-fonts" aria-hidden="true">#</a></h3><p>选择界面的字体。</p><ul><li>不能自定义添加字体 因为这需要更改源码自行编译。</li></ul><h3 id="框架圆角-framerounding" tabindex="-1">框架圆角 (FrameRounding) <a class="header-anchor" href="#框架圆角-framerounding" aria-hidden="true">#</a></h3><p>设定编辑框与按钮的圆角程度。</p><ul><li>范围: <code>0 ~ 12</code></li></ul><h3 id="窗体边框-window-border" tabindex="-1">窗体边框 (Window Border) <a class="header-anchor" href="#窗体边框-window-border" aria-hidden="true">#</a></h3><p>是否启用所有窗体的边框。</p><h3 id="框架边框-frame-border" tabindex="-1">框架边框 (Frame Border) <a class="header-anchor" href="#框架边框-frame-border" aria-hidden="true">#</a></h3><p>是否启用整体框架的边框。</p><h3 id="选择框边框-popup-border" tabindex="-1">选择框边框 (Popup Border) <a class="header-anchor" href="#选择框边框-popup-border" aria-hidden="true">#</a></h3><p>是否启用选项卡的边框。</p><h3 id="保存配置-save-ref" tabindex="-1">保存配置 (Save Ref) <a class="header-anchor" href="#保存配置-save-ref" aria-hidden="true">#</a></h3><p>在本地非持续性的保存一次文件。</p><ul><li><p>不会影响默认主题。</p></li><li><p>若需保存为长时间存储的文件 请使用 <a href="/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/06_settings.html#保存主题">设置 - 定制界面 -保存主题</a> 。</p></li></ul><h3 id="恢复配置-revert-ref" tabindex="-1">恢复配置 (Revert Ref) <a class="header-anchor" href="#恢复配置-revert-ref" aria-hidden="true">#</a></h3>',34),X={href:"#%E4%BF%9D%E5%AD%98%E9%85%8D%E7%BD%AE-save-ref"},ee=e("strong",null,[e("code",null,"保存配置 (Save Ref)")],-1),de=o('<h3 id="大小-sizes" tabindex="-1">大小 (Sizes) <a class="header-anchor" href="#大小-sizes" aria-hidden="true">#</a></h3><p>与界面大小有关的调整。</p><h4 id="主要-main" tabindex="-1">主要 (Main) <a class="header-anchor" href="#主要-main" aria-hidden="true">#</a></h4><p>调整界面主要的内容。</p><ul><li>可设定: <ul><li><code>WindowPadding</code> 窗口边距(左边/上边)。</li><li><code>FramePadding</code> 框架边距(水平/垂直)。</li><li><code>CellPadding</code> 表格边距(水平/垂直)。</li><li><code>ItemSpacing</code> 内容间隔(水平/垂直)。</li><li><code>ItemInnerSpacing</code> 选择框间隔(水平/垂直)。</li><li><code>TouchExtraPadding</code> 触摸额外填充(水平/垂直)。</li><li><code>IndentSpacing</code> 缩进距离。</li><li><code>ScrollbarSize</code> 滚动条宽度。</li><li><code>GrabMinSize</code> 数值控制条最小宽度。</li></ul></li></ul><h4 id="边框-borders" tabindex="-1">边框 (Borders) <a class="header-anchor" href="#边框-borders" aria-hidden="true">#</a></h4><p>调整界面边框宽度。</p><ul><li>可设定: <ul><li><code>WindowBorderSize</code> 窗口的边框宽度。</li><li><code>ChildBorderSize</code> 内边框的边框宽度。</li><li><code>PopupBorderSize</code> 选择框的边框宽度。</li><li><code>FrameBorderSize</code> 框架的边框宽度。</li><li><code>TabBorderSize</code> 选项卡的边框宽度。</li></ul></li></ul><h4 id="圆角-rounding" tabindex="-1">圆角 (Rounding) <a class="header-anchor" href="#圆角-rounding" aria-hidden="true">#</a></h4><p>调整界面圆角程度。</p><ul><li>可设定: <ul><li><code>WindowRounding</code> 窗口的圆角程度。</li><li><code>ChildRounding</code> 子窗口的圆角程度。</li><li><code>FrameRounding</code> 框架的圆角程度。</li><li><code>PopupRounding</code> 选择框的圆角程度。</li><li><code>GrabRounding</code> 数值控制条的圆角程度。</li><li><code>ScrollbarRounding</code> 滚动条的圆角程度。</li><li><code>LogSliderDeadzone</code> 日志滑块间隔。</li><li><code>TabRounding</code> 选项卡的圆角程度。</li></ul></li></ul><h4 id="对齐-alignment" tabindex="-1">对齐 (Alignment) <a class="header-anchor" href="#对齐-alignment" aria-hidden="true">#</a></h4><p>调整界面对齐。</p><ul><li>可设定: <ul><li><code>WindowTitleAlign</code> 窗口标题位置偏移。</li><li><code>WindowMenuButtonPosition</code> 窗口折叠按钮位置。 <ul><li><code>None</code> 禁用。</li><li><code>Left</code> 左边。</li><li><code>Right</code> 右边。</li></ul></li><li><code>ColorButtonPosition</code> 颜色按钮位置。 <ul><li><code>Left</code> 左边。</li><li><code>Right</code> 右边。</li></ul></li><li><code>ButtonTextAlign</code> 按钮文本偏移(水平/垂直)。</li><li><code>SelectableTextAlign</code> 选择框文本对齐(水平/垂直)。</li></ul></li></ul><h4 id="安全区域边距-safe-area-padding" tabindex="-1">安全区域边距 (Safe Area Padding) <a class="header-anchor" href="#安全区域边距-safe-area-padding" aria-hidden="true">#</a></h4><ul><li><code>DisplaySafeAreaPadding</code> 显示安全区域边距(水平/垂直)。</li></ul><h3 id="颜色-colors-1" tabindex="-1">颜色 (Colors) <a class="header-anchor" href="#颜色-colors-1" aria-hidden="true">#</a></h3><p>设定界面的颜色。</p><ul><li>可设定: <ul><li><code>Text</code> 普通文本。</li><li><code>TextDisabled</code> 已禁用文本。</li><li><code>WindowBg</code> 窗口背景。</li><li><code>ChildBg</code> 子窗口背景。</li><li><code>PopupBg</code> 选择框背景。</li><li><code>Border</code> 边框。</li><li><code>BorderShadow</code> 边框阴影。</li><li><code>FrameBg</code> 框架背景。</li><li><code>FrameBgHovered</code> 框架颜色(鼠标悬停时)。</li><li><code>FrameBgActive</code> 框架颜色(鼠标点按时)。</li><li><code>TitleBg</code> 标题栏背景(处于后台窗口时)。</li><li><code>TitleBgActive</code> 标题栏背景(处于前台窗口时)。</li><li><code>TitleBgCollapsed</code> 标题栏背景(已折叠窗口时)。</li><li><code>MenuBarBg</code> 菜单栏背景。</li><li><code>ScrollbarBg</code> 滚动条背景。</li><li><code>ScrollbarGrab</code> 滚动条填充。</li><li><code>ScrollbarGrabHovered</code> 滚动条填充(鼠标悬停时)。</li><li><code>ScrollbarGrabActive</code> 滚动条填充(鼠标点按时)。</li><li><code>CheckMark</code> 复选标记。</li><li><code>SliderGrab</code> 数值控制条的滑块。</li><li><code>SliderGrabActive</code> 数值控制条的滑块(鼠标点按时)。</li><li><code>Button</code> 按钮。</li><li><code>ButtonHovered</code> 按钮(鼠标悬停时)。</li><li><code>ButtonActive</code> 按钮(鼠标点按时)。</li><li><code>Header</code> 主界面目录(已选择时)。</li><li><code>HeaderHovered</code> 主界面目录选择颜色(鼠标悬停时)。</li><li><code>HeaderActive</code> 主界面目录选择颜色(鼠标点按时)。</li><li><code>Separator</code> 分隔线。</li><li><code>SeparatorHovered</code> 分隔线(鼠标悬停时)。</li><li><code>SeparatorActive</code> 分隔线(鼠标点按时)。</li><li><code>Tab</code> 选项卡。</li><li><code>TabHovered</code> 选项卡(鼠标悬停时)。</li><li><code>TabActive</code> 选项卡(鼠标点按时)。</li><li><code>TabUnfocused</code> 未选择的选项卡。</li><li><code>TabUnfocusedActive</code> 未选择的选项卡(鼠标点按时)。</li><li><code>DockingPreview</code> 对接预览。</li><li><code>DockingEmptyBg</code> 对接空背景。</li><li><code>PlotLines</code> 帧率曲线。</li><li><code>PlotLinesHovered</code> 帧率曲线(鼠标悬停时)。</li><li><code>PlotHistogram</code> 立方图。</li><li><code>PlotHistogramHovered</code> 立方图(鼠标悬停时)。</li><li><code>TableHeaderBg</code> 表格第一行背景。</li><li><code>TableBorderStrong</code> 表格边框。</li><li><code>TableBorderLight</code> 表格高亮边框。</li><li><code>TableRowBg</code> 表行背景(奇数行)。</li><li><code>TableRowBgAlt</code> 表行背景(偶数行)。</li><li><code>TextSelectedBg</code> 文本选择背景。</li><li><code>DragDropTarget</code> 拖动目标。</li><li><code>NavHighlight</code> 导航高亮。</li><li><code>NavWindowingHighlight</code> 导航窗口突出显示。</li><li><code>NavWindowingDimBg</code> 导航窗口背景。</li><li><code>ModalWindowDimBg</code> 模态窗口背景。</li></ul></li><li><code>Save</code> - 保持颜色设置 | <code>Revert</code> 取消颜色更改</li><li><code>鼠标左键</code> - 点击颜色块更改颜色</li><li><code>鼠标右键</code> - 点击颜色块更改颜色编辑类型以及复制颜色代码</li></ul><h4 id="导出-export" tabindex="-1">导出 (Export) <a class="header-anchor" href="#导出-export" aria-hidden="true">#</a></h4><p>以指定方式导出当前颜色。</p><ul><li>可选择: <code>To Clipboard</code> - 到剪切板 | <code>To TTY</code> 到控制台</li></ul><h4 id="仅导出颜色-only-modified-colors" tabindex="-1">仅导出颜色 (Only Modified Colors) <a class="header-anchor" href="#仅导出颜色-only-modified-colors" aria-hidden="true">#</a></h4><p>导出时仅导出颜色 而不会导出大小等。</p><h4 id="过滤颜色-filter-colors" tabindex="-1">过滤颜色 (Filter colors) <a class="header-anchor" href="#过滤颜色-filter-colors" aria-hidden="true">#</a></h4><p>通过关键词过滤颜色更改列表。</p><h4 id="不透明度-opaque" tabindex="-1">不透明度 (Opaque) <a class="header-anchor" href="#不透明度-opaque" aria-hidden="true">#</a></h4><p>仅不透明度的显示颜色。</p><h4 id="透明度-alpha" tabindex="-1">透明度 (Alpha) <a class="header-anchor" href="#透明度-alpha" aria-hidden="true">#</a></h4><p>仅透明度的显示颜色。</p><h4 id="两者-both" tabindex="-1">两者 (Both) <a class="header-anchor" href="#两者-both" aria-hidden="true">#</a></h4><p>使用不透明度(左)和透明度(右)显示颜色。</p><h3 id="字体-fonts-1" tabindex="-1">字体 (Fonts) <a class="header-anchor" href="#字体-fonts-1" aria-hidden="true">#</a></h3><p>与界面字体相关的设定。</p><h4 id="设置为默认-set-as-default" tabindex="-1">设置为默认 (Set as default) <a class="header-anchor" href="#设置为默认-set-as-default" aria-hidden="true">#</a></h4><p>将所选字体设置为默认字体。</p><h4 id="窗口缩放-window-scale" tabindex="-1">窗口缩放 (window scale) <a class="header-anchor" href="#窗口缩放-window-scale" aria-hidden="true">#</a></h4><p>更改此窗口的文本、应用等项目的大小。</p>',38),le={href:"#%E5%A4%A7%E5%B0%8F"},ie=e("strong",null,[e("code",null,"大小")],-1),ae=e("h4",{id:"全局缩放-global-scale",tabindex:"-1"},[d("全局缩放 (global scale) "),e("a",{class:"header-anchor",href:"#全局缩放-global-scale","aria-hidden":"true"},"#")],-1),oe=e("p",null,"更改全局的文本、应用等项目的大小。",-1),ne={href:"#%E5%A4%A7%E5%B0%8F"},ce=e("strong",null,[e("code",null,"大小")],-1),re=o('<h3 id="渲染-rendering" tabindex="-1">渲染 (Rendering) <a class="header-anchor" href="#渲染-rendering" aria-hidden="true">#</a></h3><p>界面渲染的相关设定。</p><h4 id="抗锯齿-anti-aliased-lines" tabindex="-1">抗锯齿 (Anti-aliased lines) <a class="header-anchor" href="#抗锯齿-anti-aliased-lines" aria-hidden="true">#</a></h4><p>是否启用抗锯齿。</p><h4 id="纹理抗锯齿-anti-aliased-lines-use-texture" tabindex="-1">纹理抗锯齿 (Anti-aliased lines use texture) <a class="header-anchor" href="#纹理抗锯齿-anti-aliased-lines-use-texture" aria-hidden="true">#</a></h4><p>是否启用纹理抗锯齿。</p><h4 id="填充抗锯齿-anti-aliased-fill" tabindex="-1">填充抗锯齿 (Anti-aliased fill) <a class="header-anchor" href="#填充抗锯齿-anti-aliased-fill" aria-hidden="true">#</a></h4><p>是否启用填充抗锯齿。</p><h4 id="曲线细节公差-curve-tessellation-tolerance" tabindex="-1">曲线细节公差 (Curve Tessellation Tolerance) <a class="header-anchor" href="#曲线细节公差-curve-tessellation-tolerance" aria-hidden="true">#</a></h4><p>设定曲线细节公差。</p><ul><li>范围: <code>0.1 ~ 10</code></li></ul><h4 id="圆形细节最大误差-circle-tessellation-max-error" tabindex="-1">圆形细节最大误差 (Circle Tessellation Max Error) <a class="header-anchor" href="#圆形细节最大误差-circle-tessellation-max-error" aria-hidden="true">#</a></h4><p>设定圆形细节最大误差。</p><ul><li>范围: <code>0.1 ~ 5</code></li></ul><h4 id="全局透明度-global-alpha" tabindex="-1">全局透明度 (Global Alpha) <a class="header-anchor" href="#全局透明度-global-alpha" aria-hidden="true">#</a></h4><p>设定全局透明度。</p><ul><li>范围: <code>0.2 ~ 1</code></li></ul><h4 id="禁用透明度-disabled-alpha" tabindex="-1">禁用透明度 (Disabled Alpha) <a class="header-anchor" href="#禁用透明度-disabled-alpha" aria-hidden="true">#</a></h4><p>设定禁用透明度。</p><ul><li><p>与原有透明度相乘。</p></li><li><p>范围: <code>0 ~ 1</code></p></li></ul><h2 id="交互式地图" tabindex="-1">交互式地图 <a class="header-anchor" href="#交互式地图" aria-hidden="true">#</a></h2><blockquote><p>在地图上显示各种资源、宝箱已经见闻等点位。</p></blockquote><h3 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-hidden="true">#</a></h3><p>交互式地图的相关设置。</p><h3 id="通用" tabindex="-1">通用 <a class="header-anchor" href="#通用" aria-hidden="true">#</a></h3><p>通用设定。</p>',26),te={id:"启用-热键",tabindex:"-1"},he=e("a",{class:"header-anchor",href:"#启用-热键","aria-hidden":"true"},"#",-1),se={href:"#%E4%BA%A4%E4%BA%92%E5%BC%8F%E5%9C%B0%E5%9B%BE"},ue=e("strong",null,[e("code",null,"交互式地图")],-1),_e=e("p",null,[e("img",{src:p,alt:"Interactive_map.png"})],-1),pe=e("h4",{id:"保存完成的点位",tabindex:"-1"},[d("保存完成的点位 "),e("a",{class:"header-anchor",href:"#保存完成的点位","aria-hidden":"true"},"#")],-1),fe=e("p",null,"保存标记完成的点位至设定位置。",-1),ge={href:"#%E6%94%B6%E9%9B%86%E7%89%A9%E5%93%81%E6%A3%80%E6%B5%8B"},be=e("strong",null,[e("code",null,"收集物品检测")],-1),Ee={href:"#%E6%89%8B%E5%8A%A8%E5%AE%8C%E6%88%90"},Ae=e("strong",null,[e("code",null,"手动完成")],-1),Be=e("li",null,[e("p",null,[d("可选择: "),e("code",null,"账号"),d(),e("code",null,"配置文件"),d(),e("code",null,"全局")])],-1),me=o('<h3 id="图标视图" tabindex="-1">图标视图 <a class="header-anchor" href="#图标视图" aria-hidden="true">#</a></h3><p>图标相关的设定。</p><h4 id="图标大小" tabindex="-1">图标大小 <a class="header-anchor" href="#图标大小" aria-hidden="true">#</a></h4><p>设定按<code>M</code>后的地图上的图标大小。</p><ul><li>范围: <code>4 ~ 100</code></li></ul><h4 id="迷你地图大小" tabindex="-1">迷你地图大小 <a class="header-anchor" href="#迷你地图大小" aria-hidden="true">#</a></h4><p>设定游戏中右上角的迷你地图上的图标大小。</p><ul><li>范围: <code>4 ~ 100</code></li></ul><h4 id="动态大小" tabindex="-1">动态大小 <a class="header-anchor" href="#动态大小" aria-hidden="true">#</a></h4><p>使图标随着地图的缩放的缩放。</p><h4 id="显示高清图标" tabindex="-1">显示高清图标 <a class="header-anchor" href="#显示高清图标" aria-hidden="true">#</a></h4><p>将图标更换为高清图标。</p><h3 id="未-已完成图标视图" tabindex="-1">未/已完成图标视图 <a class="header-anchor" href="#未-已完成图标视图" aria-hidden="true">#</a></h3><p>设定与</p><h4 id="显示完成的" tabindex="-1">显示完成的 <a class="header-anchor" href="#显示完成的" aria-hidden="true">#</a></h4><p>是否显示已标记完成的点位。</p><h4 id="完成点透明度" tabindex="-1">完成点透明度 <a class="header-anchor" href="#完成点透明度" aria-hidden="true">#</a></h4><p>已标记完成的点位的图标透明度。</p><h4 id="显示未完成" tabindex="-1">显示未完成 <a class="header-anchor" href="#显示未完成" aria-hidden="true">#</a></h4><p>是否显示未标记完成的点位。</p><h4 id="未完成点透明度" tabindex="-1">未完成点透明度 <a class="header-anchor" href="#未完成点透明度" aria-hidden="true">#</a></h4><p>未标记完成的点位的图标透明度。</p><h3 id="物品调整" tabindex="-1">物品调整 <a class="header-anchor" href="#物品调整" aria-hidden="true">#</a></h3><p>物品调整相关。</p><h4 id="固定物品位置" tabindex="-1">固定物品位置 <a class="header-anchor" href="#固定物品位置" aria-hidden="true">#</a></h4><p>根据物品在世界中位置来修复其在地图上的点位位置。</p>',26),xe={href:"#%E6%A3%80%E6%B5%8B%E8%8C%83%E5%9B%B4"},ve=e("strong",null,[e("code",null,"检测范围")],-1),ke={href:"#%E5%9B%BA%E5%AE%9A%E7%89%A9%E5%93%81%E4%BD%8D%E7%BD%AE%E5%9B%B4"},Te=e("strong",null,[e("code",null,"固定物品位置")],-1),Se={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Pe=e("strong",null,[e("code",null,"过滤器")],-1),De=e("h4",{id:"检测新物品",tabindex:"-1"},[d("检测新物品 "),e("a",{class:"header-anchor",href:"#检测新物品","aria-hidden":"true"},"#")],-1),Ce=e("p",null,"检测在交互式地图中没有数据的点位。",-1),Ge={href:"#%E6%A3%80%E6%B5%8B%E8%8C%83%E5%9B%B4"},we=e("strong",null,[e("code",null,"检测范围")],-1),Re={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Fe=e("strong",null,[e("code",null,"过滤器")],-1),Ie=e("h4",{id:"仅检测显示的物品",tabindex:"-1"},[d("仅检测显示的物品 "),e("a",{class:"header-anchor",href:"#仅检测显示的物品","aria-hidden":"true"},"#")],-1),ye=e("p",null,"仅检测过滤器中已勾选的点位类型。",-1),He=e("h4",{id:"检测范围",tabindex:"-1"},[d("检测范围 "),e("a",{class:"header-anchor",href:"#检测范围","aria-hidden":"true"},"#")],-1),Ve={href:"#%E5%9B%BA%E5%AE%9A%E7%89%A9%E5%93%81%E4%BD%8D%E7%BD%AE"},Ne=e("strong",null,[e("code",null,"固定物品位置")],-1),qe={href:"#%E6%A3%80%E6%B5%8B%E6%96%B0%E7%89%A9%E5%93%81"},We=e("strong",null,[e("code",null,"检测新物品")],-1),ze=o('<h4 id="检测延迟-ms" tabindex="-1">检测延迟(ms) <a class="header-anchor" href="#检测延迟-ms" aria-hidden="true">#</a></h4><p>设定设定每一次检测之间的间隔。</p><ul><li>检测物品会调整整体项目从而消耗性能 因此你需要指定每次检测物品之间的间隔。</li></ul><h3 id="收集物品检测" tabindex="-1">收集物品检测 <a class="header-anchor" href="#收集物品检测" aria-hidden="true">#</a></h3><p>收集物品的检测相关设定。</p><h4 id="检测收集到的物品" tabindex="-1">检测收集到的物品 <a class="header-anchor" href="#检测收集到的物品" aria-hidden="true">#</a></h4><p>检测某项物品是否被被收集 若被收集则会将点位标记为完成。</p>',7),Me={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Le=e("strong",null,[e("code",null,"过滤器")],-1),Oe=e("h4",{id:"检测范围-1",tabindex:"-1"},[d("检测范围 "),e("a",{class:"header-anchor",href:"#检测范围-1","aria-hidden":"true"},"#")],-1),Ue={href:"#%E6%A3%80%E6%B5%8B%E6%94%B6%E9%9B%86%E5%88%B0%E7%9A%84%E7%89%A9%E5%93%81"},$e=e("strong",null,[e("code",null,"检测收集到的物品")],-1),je=o('<h3 id="手动完成" tabindex="-1">手动完成 <a class="header-anchor" href="#手动完成" aria-hidden="true">#</a></h3><p>手动设定指定物品是否标记为完成。</p><h4 id="完成附近点位" tabindex="-1">完成附近点位 <a class="header-anchor" href="#完成附近点位" aria-hidden="true">#</a></h4><p>标记完成距离角色最近的一个点位。</p><h4 id="恢复最近一次完成" tabindex="-1">恢复最近一次完成 <a class="header-anchor" href="#恢复最近一次完成" aria-hidden="true">#</a></h4><p>取消标记上一次标记完成的点位。</p><ul><li>根据已标记完成的点位标记顺序 从最后一项开始取消标记完成。</li></ul><h4 id="仅完成已显示的点位" tabindex="-1">仅完成已显示的点位 <a class="header-anchor" href="#仅完成已显示的点位" aria-hidden="true">#</a></h4>',8),Je={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Qe=e("strong",null,[e("code",null,"过滤器")],-1),Ye=o('<h3 id="过滤器" tabindex="-1">过滤器 <a class="header-anchor" href="#过滤器" aria-hidden="true">#</a></h3><p>筛选在地图上显示的点位。</p><h3 id="升级材料过滤器" tabindex="-1">升级材料过滤器 <a class="header-anchor" href="#升级材料过滤器" aria-hidden="true">#</a></h3><p>用于过滤其他界面指定的材料</p><h4 id="角色过滤器" tabindex="-1">角色过滤器 <a class="header-anchor" href="#角色过滤器" aria-hidden="true">#</a></h4>',5),Ze={href:"#%E8%A7%92%E8%89%B2%E8%BF%87%E6%BB%A4%E5%99%A8"},Ke=e("strong",null,[e("code",null,"角色过滤器")],-1),Xe=e("h4",{id:"武器过滤器",tabindex:"-1"},[d("武器过滤器 "),e("a",{class:"header-anchor",href:"#武器过滤器","aria-hidden":"true"},"#")],-1),ed={href:"#%E6%AD%A6%E5%99%A8%E8%BF%87%E6%BB%A4%E5%99%A8"},dd=e("strong",null,[e("code",null,"武器过滤器")],-1),ld=o('<h3 id="搜索" tabindex="-1">搜索 <a class="header-anchor" href="#搜索" aria-hidden="true">#</a></h3><p>使用关键词过滤以下项目。</p><ul><li>仅支持英文关键词过滤 可在此处使用(Ctrl+F)中文搜索来定位指定物品。</li></ul><h3 id="锚点" tabindex="-1">锚点 <a class="header-anchor" href="#锚点" aria-hidden="true">#</a></h3><ul><li>可选择: <code>n/28 七天神像</code> <code>n/219 传送锚点</code> <code>n/47 秘境</code> <code>n/1 南十字·死兆星</code> <code>n/1 群玉阁</code></li></ul><h3 id="特殊物品" tabindex="-1">特殊物品 <a class="header-anchor" href="#特殊物品" aria-hidden="true">#</a></h3><ul><li>可选择: <code>n/66 风神瞳</code> <code>n/131 岩神瞳</code> <code>n/80 绯红玉随</code> <code>n/9 老石</code> <code>n/181 雷神瞳</code> <code>n/1 键纹 II</code> <code>n/1 键纹 III</code> <code>n/1 键纹 IV</code> <code>n/45 旋曜玉帛</code> <code>n/235 草神瞳</code> <code>n/108 圣章石</code> <code>n/5 棋盘棋子</code> <code>n/6 神秘的石板</code> <code>n/7 「棋子」激活器件</code></li></ul><h3 id="地方特产" tabindex="-1">地方特产 <a class="header-anchor" href="#地方特产" aria-hidden="true">#</a></h3><ul><li>可选择: <code>n/19 落落莓</code> <code>n/46 绝云椒椒</code> <code>n/54 嘟嘟莲</code> <code>n/138 清心</code> <code>n/77 小灯草</code> <code>n/209 琉璃袋</code> <code>n/38 塞西莉亚花</code> <code>n/14 霓裳花</code> <code>n/53 蒲公英种子</code> <code>n/39 琉璃百合</code> <code>n/53 慕风蘑菇</code> <code>n/161 石珀</code> <code>n/33 钩钩果</code> <code>n/52 夜泊石</code> <code>n/72 风车菊</code> <code>n/77 星螺</code> <code>n/154 海灵芝</code> <code>n/79 鬼兜虫</code> <code>n/129 鸣草</code> <code>n/55 血斛</code> <code>n/75 绯樱绣球</code> <code>n/66 晶化骨髓</code> <code>n/44 珊瑚珍珠</code> <code>n/95 天云草实</code> <code>n/71 幽灯蕈</code> <code>n/79 月莲</code> <code>n/66 劫波莲</code> <code>n/77 树王圣体菇</code> <code>n/68 帕蒂沙兰</code> <code>n/80 圣金虫</code> <code>n/96 赤念果</code> <code>n/74 沙脂蛹</code></li></ul><p>...</p><h3 id="角色" tabindex="-1">角色 <a class="header-anchor" href="#角色" aria-hidden="true">#</a></h3>',11),id={href:"#%E8%A7%92%E8%89%B2%E8%BF%87%E6%BB%A4%E5%99%A8"},ad=e("strong",null,[e("code",null,"角色过滤器")],-1),od=e("p",null,"...",-1),nd=e("h3",{id:"武器",tabindex:"-1"},[d("武器 "),e("a",{class:"header-anchor",href:"#武器","aria-hidden":"true"},"#")],-1),cd={href:"#%E6%AD%A6%E5%99%A8%E8%BF%87%E6%BB%A4%E5%99%A8"},rd=e("strong",null,[e("code",null,"武器过滤器")],-1),td=e("p",null,"...",-1);function hd(sd,ud,_d,pd,fd,gd){const l=r("font");return t(),c("div",null,[g,b,E,e("p",null,[d("打开"),e("a",A,[i(l,null,{default:a(()=>[B]),_:1})]),d("。")]),m,x,v,e("p",null,[d("附加当前的账号到选定的"),e("a",k,[i(l,null,{default:a(()=>[T]),_:1})]),d("。")]),e("ul",null,[e("li",null,[d("在使用当前账号登录时自动切换到当前选定的"),e("a",S,[i(l,null,{default:a(()=>[P]),_:1})]),d("。")])]),D,e("ul",null,[e("li",null,[d("选定后将会检测此项 如果是解密将会检测解谜状态 使"),e("a",C,[i(l,null,{default:a(()=>[G]),_:1})]),d("生效。")])]),w,R,F,I,e("p",null,[d("添加设定的"),e("a",y,[i(l,null,{default:a(()=>[H]),_:1})]),d("。")]),V,e("p",null,[d("替换选定项的"),e("a",N,[i(l,null,{default:a(()=>[q]),_:1})]),d("。")]),W,e("p",null,[d("取消编辑选定项的"),e("a",z,[i(l,null,{default:a(()=>[M]),_:1})]),d("。")]),e("ul",null,[e("li",null,[d("会清除"),e("a",L,[i(l,null,{default:a(()=>[O]),_:1})]),d("的编辑状态。")])]),U,e("ul",null,[e("li",null,[d("会清除"),e("a",$,[i(l,null,{default:a(()=>[j]),_:1})]),d("、"),e("a",J,[i(l,null,{default:a(()=>[Q]),_:1})]),d("和"),e("a",Y,[i(l,null,{default:a(()=>[Z]),_:1})]),d("的编辑状态。")])]),K,e("p",null,[d("恢复上一次"),e("a",X,[i(l,null,{default:a(()=>[ee]),_:1})]),d("时的主题。")]),de,e("ul",null,[e("li",null,[d("不建议使用此项 而是在"),e("a",le,[i(l,null,{default:a(()=>[ie]),_:1})]),d("中修改。")])]),ae,oe,e("ul",null,[e("li",null,[d("不建议使用此项 而是在"),e("a",ne,[i(l,null,{default:a(()=>[ce]),_:1})]),d("中修改。")])]),re,e("h4",te,[d("启用 "),i(l,{size:"2",color:"#5FC3E4"},{default:a(()=>[d(" <热键> ")]),_:1}),d(),he]),e("p",null,[d("是否启用"),e("a",se,[i(l,null,{default:a(()=>[ue]),_:1})]),d("。")]),_e,pe,fe,e("ul",null,[e("li",null,[e("p",null,[d("使用鼠标右键、"),e("a",ge,[i(l,null,{default:a(()=>[be]),_:1})]),d("或者"),e("a",Ee,[i(l,null,{default:a(()=>[Ae]),_:1})]),d("标记完成。")])]),Be]),me,e("ul",null,[e("li",null,[e("p",null,[d("仅在"),e("a",xe,[i(l,null,{default:a(()=>[ve]),_:1})]),d("中检测到的物品才会被"),e("a",ke,[i(l,null,{default:a(()=>[Te]),_:1})]),d("。")])]),e("li",null,[e("p",null,[d("仅限支持在"),e("a",Se,[i(l,null,{default:a(()=>[Pe]),_:1})]),d("中有 "),i(l,{color:"#00ff00"},{default:a(()=>[d("绿色标记")]),_:1}),d(" 的点位类型。")])])]),De,Ce,e("ul",null,[e("li",null,[e("p",null,[d("若"),e("a",Ge,[i(l,null,{default:a(()=>[we]),_:1})]),d("内新物品在交互是地图中没有数据 则此物品会被检测为新物品。")])]),e("li",null,[e("p",null,[d("仅限支持在"),e("a",Re,[i(l,null,{default:a(()=>[Fe]),_:1})]),d("中有 "),i(l,{color:"#00ff00"},{default:a(()=>[d("绿色标记")]),_:1}),d(" 的点位类型。")])])]),Ie,ye,He,e("p",null,[d("设定"),e("a",Ve,[i(l,null,{default:a(()=>[Ne]),_:1})]),d("与"),e("a",qe,[i(l,null,{default:a(()=>[We]),_:1})]),d("的范围。")]),ze,e("ul",null,[e("li",null,[d("仅限支持在"),e("a",Me,[i(l,null,{default:a(()=>[Le]),_:1})]),d("中有 "),i(l,{color:"#0000ff"},{default:a(()=>[d("蓝色标记")]),_:1}),d(" 的点位类型。")])]),Oe,e("p",null,[d("设定"),e("a",Ue,[i(l,null,{default:a(()=>[$e]),_:1})]),d("的范围。")]),je,e("p",null,[d("仅对"),e("a",Je,[i(l,null,{default:a(()=>[Qe]),_:1})]),d("中已勾选的点位类型有效")]),Ye,e("p",null,[d("在"),e("a",Ze,[i(l,null,{default:a(()=>[Ke]),_:1})]),d("中已选角色的所需材料。")]),Xe,e("p",null,[d("在"),e("a",ed,[i(l,null,{default:a(()=>[dd]),_:1})]),d("中已选角色的所需材料。")]),ld,e("p",null,[d("选择的角色会将所需材料显示在"),e("a",id,[i(l,null,{default:a(()=>[ad]),_:1})]),d("中。")]),od,nd,e("p",null,[d("选择的武器会将所需材料显示在"),e("a",cd,[i(l,null,{default:a(()=>[rd]),_:1})]),d("中。")]),td])}const Ad=n(f,[["render",hd]]);export{Ed as __pageData,Ad as default};
