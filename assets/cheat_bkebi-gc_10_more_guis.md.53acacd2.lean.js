import{_ as n,c,a as e,d,b as i,w as a,e as o,r,o as t}from"./app.3e9f5ef1.js";const h="/Anime_Game_Ha-k_Docs/assets/Status_Window.412ae5d4.png",s="/Anime_Game_Ha-k_Docs/assets/Info_Window.4288a3f7.png",u="/Anime_Game_Ha-k_Docs/assets/FPS_indicator.852c05ab.png",_="/Anime_Game_Ha-k_Docs/assets/Notifications.4dce33db.png",p="/Anime_Game_Ha-k_Docs/assets/Interactive_map.1a5db775.png",Ed=JSON.parse('{"title":"Bkebi-GC","description":"","frontmatter":{"title":"Bkebi-GC","editLink":true},"headers":[{"level":3,"title":"配置文件...","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"配置文件","slug":"配置文件-1","link":"#配置文件-1","children":[]},{"level":3,"title":"附加","slug":"附加","link":"#附加","children":[]},{"level":2,"title":"配置文件管理","slug":"配置文件管理","link":"#配置文件管理","children":[{"level":3,"title":"显示类型","slug":"显示类型","link":"#显示类型","children":[]},{"level":3,"title":"别名 (重命名 (伪))","slug":"别名-重命名-伪","link":"#别名-重命名-伪","children":[]},{"level":3,"title":"重命名","slug":"重命名","link":"#重命名","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":3,"title":"复制","slug":"复制","link":"#复制","children":[]},{"level":3,"title":"+","slug":"","link":"#","children":[]},{"level":3,"title":"-","slug":"-1","link":"#-1","children":[]},{"level":3,"title":"账号列表","slug":"账号列表","link":"#账号列表","children":[]}]},{"level":2,"title":"自定义筛选器","slug":"自定义筛选器","link":"#自定义筛选器","children":[{"level":3,"title":"新增筛选器","slug":"新增筛选器","link":"#新增筛选器","children":[]},{"level":3,"title":"Display name","slug":"display-name","link":"#display-name","children":[]},{"level":3,"title":"Type","slug":"type","link":"#type","children":[]},{"level":3,"title":"解密","slug":"解密","link":"#解密","children":[]},{"level":3,"title":"名称","slug":"名称","link":"#名称","children":[]},{"level":3,"title":"添加","slug":"添加","link":"#添加","children":[]},{"level":3,"title":"Update name","slug":"update-name","link":"#update-name","children":[]},{"level":3,"title":"Cancel editing name","slug":"cancel-editing-name","link":"#cancel-editing-name","children":[]},{"level":3,"title":"添加筛选器","slug":"添加筛选器","link":"#添加筛选器","children":[]},{"level":3,"title":"Calcel editing","slug":"calcel-editing","link":"#calcel-editing","children":[]}]},{"level":2,"title":"状态窗口","slug":"状态窗口","link":"#状态窗口","children":[]},{"level":2,"title":"信息窗口","slug":"信息窗口","link":"#信息窗口","children":[]},{"level":2,"title":"FPS指示器","slug":"fps指示器","link":"#fps指示器","children":[]},{"level":2,"title":"通知","slug":"通知","link":"#通知","children":[]},{"level":2,"title":"ImGui","slug":"imgui","link":"#imgui","children":[{"level":3,"title":"颜色 (Colors)","slug":"颜色-colors","link":"#颜色-colors","children":[]},{"level":3,"title":"字体 (Fonts)","slug":"字体-fonts","link":"#字体-fonts","children":[]},{"level":3,"title":"框架圆角 (FrameRounding)","slug":"框架圆角-framerounding","link":"#框架圆角-framerounding","children":[]},{"level":3,"title":"窗体边框 (Window Border)","slug":"窗体边框-window-border","link":"#窗体边框-window-border","children":[]},{"level":3,"title":"框架边框 (Frame Border)","slug":"框架边框-frame-border","link":"#框架边框-frame-border","children":[]},{"level":3,"title":"选择框边框 (Popup Border)","slug":"选择框边框-popup-border","link":"#选择框边框-popup-border","children":[]},{"level":3,"title":"保存配置 (Save Ref)","slug":"保存配置-save-ref","link":"#保存配置-save-ref","children":[]},{"level":3,"title":"恢复配置 (Revert Ref)","slug":"恢复配置-revert-ref","link":"#恢复配置-revert-ref","children":[]},{"level":3,"title":"大小 (Sizes)","slug":"大小-sizes","link":"#大小-sizes","children":[]},{"level":3,"title":"颜色 (Colors)","slug":"颜色-colors-1","link":"#颜色-colors-1","children":[]},{"level":3,"title":"字体 (Fonts)","slug":"字体-fonts-1","link":"#字体-fonts-1","children":[]},{"level":3,"title":"渲染 (Rendering)","slug":"渲染-rendering","link":"#渲染-rendering","children":[]}]},{"level":2,"title":"交互式地图","slug":"交互式地图","link":"#交互式地图","children":[{"level":3,"title":"设置","slug":"设置","link":"#设置","children":[]},{"level":3,"title":"通用","slug":"通用","link":"#通用","children":[]},{"level":3,"title":"图标视图","slug":"图标视图","link":"#图标视图","children":[]},{"level":3,"title":"未/已完成图标视图","slug":"未-已完成图标视图","link":"#未-已完成图标视图","children":[]},{"level":3,"title":"物品调整","slug":"物品调整","link":"#物品调整","children":[]},{"level":3,"title":"收集物品检测","slug":"收集物品检测","link":"#收集物品检测","children":[]},{"level":3,"title":"手动完成","slug":"手动完成","link":"#手动完成","children":[]},{"level":3,"title":"过滤器","slug":"过滤器","link":"#过滤器","children":[]},{"level":3,"title":"升级材料过滤器","slug":"升级材料过滤器","link":"#升级材料过滤器","children":[]},{"level":3,"title":"搜索","slug":"搜索","link":"#搜索","children":[]},{"level":3,"title":"锚点","slug":"锚点","link":"#锚点","children":[]},{"level":3,"title":"特殊物品","slug":"特殊物品","link":"#特殊物品","children":[]},{"level":3,"title":"地方特产","slug":"地方特产","link":"#地方特产","children":[]},{"level":3,"title":"角色","slug":"角色","link":"#角色","children":[]},{"level":3,"title":"武器","slug":"武器","link":"#武器","children":[]}]}],"relativePath":"cheat/bkebi-gc/10_more_guis.md","lastUpdated":null}'),f={name:"cheat/bkebi-gc/10_more_guis.md"},g=e("h1",{id:"更多界面",tabindex:"-1"},[d("更多界面 "),e("a",{class:"header-anchor",href:"#更多界面","aria-hidden":"true"},"#")],-1),b=e("p",null,"主界面功能列表外的其他功能。",-1),E=e("h3",{id:"配置文件",tabindex:"-1"},[d("配置文件... "),e("a",{class:"header-anchor",href:"#配置文件","aria-hidden":"true"},"#")],-1),A={href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},B=e("strong",null,[e("code",null,"配置文件管理")],-1),m=e("h3",{id:"配置文件-1",tabindex:"-1"},[d("配置文件 "),e("a",{class:"header-anchor",href:"#配置文件-1","aria-hidden":"true"},"#")],-1),x=e("p",null,"设定当前使用的配置文件。",-1),v=e("h3",{id:"附加",tabindex:"-1"},[d("附加 "),e("a",{class:"header-anchor",href:"#附加","aria-hidden":"true"},"#")],-1),k={href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},T=e("strong",null,[e("code",null,"配置文件")],-1),S={href:"#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},P=e("strong",null,[e("code",null,"配置文件")],-1),D=o("",32),C={href:"/Anime_Game_Ha-k_Docs/cheat/bkebi-gc/04_esp.html#隐藏已完成的解密"},G=e("strong",null,[e("code",null,"隐藏已完成的解密")],-1),w=e("h3",{id:"名称",tabindex:"-1"},[d("名称 "),e("a",{class:"header-anchor",href:"#名称","aria-hidden":"true"},"#")],-1),R=e("p",null,"添加后将会通过名称筛选实体。",-1),F=e("ul",null,[e("li",null,"若不添加名称 则只通过类别直接筛选。")],-1),I=e("h3",{id:"添加",tabindex:"-1"},[d("添加 "),e("a",{class:"header-anchor",href:"#添加","aria-hidden":"true"},"#")],-1),y={href:"#%E5%90%8D%E7%A7%B0"},H=e("strong",null,[e("code",null,"名称")],-1),V=e("h3",{id:"update-name",tabindex:"-1"},[d("Update name "),e("a",{class:"header-anchor",href:"#update-name","aria-hidden":"true"},"#")],-1),N={href:"#%E5%90%8D%E7%A7%B0"},q=e("strong",null,[e("code",null,"名称")],-1),W=e("h3",{id:"cancel-editing-name",tabindex:"-1"},[d("Cancel editing name "),e("a",{class:"header-anchor",href:"#cancel-editing-name","aria-hidden":"true"},"#")],-1),z={href:"#%E5%90%8D%E7%A7%B0"},M=e("strong",null,[e("code",null,"名称")],-1),L={href:"#%E5%90%8D%E7%A7%B0"},O=e("strong",null,[e("code",null,"名称")],-1),U=o("",4),$={href:"#display-name"},j=e("strong",null,[e("code",null,"Display name")],-1),J={href:"#type"},Q=e("strong",null,[e("code",null,"Type")],-1),Y={href:"#%E5%90%8D%E7%A7%B0"},Z=e("strong",null,[e("code",null,"名称")],-1),K=o("",34),X={href:"#%E4%BF%9D%E5%AD%98%E9%85%8D%E7%BD%AE-save-ref"},ee=e("strong",null,[e("code",null,"保存配置 (Save Ref)")],-1),de=o("",38),le={href:"#%E5%A4%A7%E5%B0%8F"},ie=e("strong",null,[e("code",null,"大小")],-1),ae=e("h4",{id:"全局缩放-global-scale",tabindex:"-1"},[d("全局缩放 (global scale) "),e("a",{class:"header-anchor",href:"#全局缩放-global-scale","aria-hidden":"true"},"#")],-1),oe=e("p",null,"更改全局的文本、应用等项目的大小。",-1),ne={href:"#%E5%A4%A7%E5%B0%8F"},ce=e("strong",null,[e("code",null,"大小")],-1),re=o("",26),te={id:"启用-热键",tabindex:"-1"},he=e("a",{class:"header-anchor",href:"#启用-热键","aria-hidden":"true"},"#",-1),se={href:"#%E4%BA%A4%E4%BA%92%E5%BC%8F%E5%9C%B0%E5%9B%BE"},ue=e("strong",null,[e("code",null,"交互式地图")],-1),_e=e("p",null,[e("img",{src:p,alt:"Interactive_map.png"})],-1),pe=e("h4",{id:"保存完成的点位",tabindex:"-1"},[d("保存完成的点位 "),e("a",{class:"header-anchor",href:"#保存完成的点位","aria-hidden":"true"},"#")],-1),fe=e("p",null,"保存标记完成的点位至设定位置。",-1),ge={href:"#%E6%94%B6%E9%9B%86%E7%89%A9%E5%93%81%E6%A3%80%E6%B5%8B"},be=e("strong",null,[e("code",null,"收集物品检测")],-1),Ee={href:"#%E6%89%8B%E5%8A%A8%E5%AE%8C%E6%88%90"},Ae=e("strong",null,[e("code",null,"手动完成")],-1),Be=e("li",null,[e("p",null,[d("可选择: "),e("code",null,"账号"),d(),e("code",null,"配置文件"),d(),e("code",null,"全局")])],-1),me=o("",26),xe={href:"#%E6%A3%80%E6%B5%8B%E8%8C%83%E5%9B%B4"},ve=e("strong",null,[e("code",null,"检测范围")],-1),ke={href:"#%E5%9B%BA%E5%AE%9A%E7%89%A9%E5%93%81%E4%BD%8D%E7%BD%AE%E5%9B%B4"},Te=e("strong",null,[e("code",null,"固定物品位置")],-1),Se={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Pe=e("strong",null,[e("code",null,"过滤器")],-1),De=e("h4",{id:"检测新物品",tabindex:"-1"},[d("检测新物品 "),e("a",{class:"header-anchor",href:"#检测新物品","aria-hidden":"true"},"#")],-1),Ce=e("p",null,"检测在交互式地图中没有数据的点位。",-1),Ge={href:"#%E6%A3%80%E6%B5%8B%E8%8C%83%E5%9B%B4"},we=e("strong",null,[e("code",null,"检测范围")],-1),Re={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Fe=e("strong",null,[e("code",null,"过滤器")],-1),Ie=e("h4",{id:"仅检测显示的物品",tabindex:"-1"},[d("仅检测显示的物品 "),e("a",{class:"header-anchor",href:"#仅检测显示的物品","aria-hidden":"true"},"#")],-1),ye=e("p",null,"仅检测过滤器中已勾选的点位类型。",-1),He=e("h4",{id:"检测范围",tabindex:"-1"},[d("检测范围 "),e("a",{class:"header-anchor",href:"#检测范围","aria-hidden":"true"},"#")],-1),Ve={href:"#%E5%9B%BA%E5%AE%9A%E7%89%A9%E5%93%81%E4%BD%8D%E7%BD%AE"},Ne=e("strong",null,[e("code",null,"固定物品位置")],-1),qe={href:"#%E6%A3%80%E6%B5%8B%E6%96%B0%E7%89%A9%E5%93%81"},We=e("strong",null,[e("code",null,"检测新物品")],-1),ze=o("",7),Me={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Le=e("strong",null,[e("code",null,"过滤器")],-1),Oe=e("h4",{id:"检测范围-1",tabindex:"-1"},[d("检测范围 "),e("a",{class:"header-anchor",href:"#检测范围-1","aria-hidden":"true"},"#")],-1),Ue={href:"#%E6%A3%80%E6%B5%8B%E6%94%B6%E9%9B%86%E5%88%B0%E7%9A%84%E7%89%A9%E5%93%81"},$e=e("strong",null,[e("code",null,"检测收集到的物品")],-1),je=o("",8),Je={href:"#%E8%BF%87%E6%BB%A4%E5%99%A8"},Qe=e("strong",null,[e("code",null,"过滤器")],-1),Ye=o("",5),Ze={href:"#%E8%A7%92%E8%89%B2%E8%BF%87%E6%BB%A4%E5%99%A8"},Ke=e("strong",null,[e("code",null,"角色过滤器")],-1),Xe=e("h4",{id:"武器过滤器",tabindex:"-1"},[d("武器过滤器 "),e("a",{class:"header-anchor",href:"#武器过滤器","aria-hidden":"true"},"#")],-1),ed={href:"#%E6%AD%A6%E5%99%A8%E8%BF%87%E6%BB%A4%E5%99%A8"},dd=e("strong",null,[e("code",null,"武器过滤器")],-1),ld=o("",11),id={href:"#%E8%A7%92%E8%89%B2%E8%BF%87%E6%BB%A4%E5%99%A8"},ad=e("strong",null,[e("code",null,"角色过滤器")],-1),od=e("p",null,"...",-1),nd=e("h3",{id:"武器",tabindex:"-1"},[d("武器 "),e("a",{class:"header-anchor",href:"#武器","aria-hidden":"true"},"#")],-1),cd={href:"#%E6%AD%A6%E5%99%A8%E8%BF%87%E6%BB%A4%E5%99%A8"},rd=e("strong",null,[e("code",null,"武器过滤器")],-1),td=e("p",null,"...",-1);function hd(sd,ud,_d,pd,fd,gd){const l=r("font");return t(),c("div",null,[g,b,E,e("p",null,[d("打开"),e("a",A,[i(l,null,{default:a(()=>[B]),_:1})]),d("。")]),m,x,v,e("p",null,[d("附加当前的账号到选定的"),e("a",k,[i(l,null,{default:a(()=>[T]),_:1})]),d("。")]),e("ul",null,[e("li",null,[d("在使用当前账号登录时自动切换到当前选定的"),e("a",S,[i(l,null,{default:a(()=>[P]),_:1})]),d("。")])]),D,e("ul",null,[e("li",null,[d("选定后将会检测此项 如果是解密将会检测解谜状态 使"),e("a",C,[i(l,null,{default:a(()=>[G]),_:1})]),d("生效。")])]),w,R,F,I,e("p",null,[d("添加设定的"),e("a",y,[i(l,null,{default:a(()=>[H]),_:1})]),d("。")]),V,e("p",null,[d("替换选定项的"),e("a",N,[i(l,null,{default:a(()=>[q]),_:1})]),d("。")]),W,e("p",null,[d("取消编辑选定项的"),e("a",z,[i(l,null,{default:a(()=>[M]),_:1})]),d("。")]),e("ul",null,[e("li",null,[d("会清除"),e("a",L,[i(l,null,{default:a(()=>[O]),_:1})]),d("的编辑状态。")])]),U,e("ul",null,[e("li",null,[d("会清除"),e("a",$,[i(l,null,{default:a(()=>[j]),_:1})]),d("、"),e("a",J,[i(l,null,{default:a(()=>[Q]),_:1})]),d("和"),e("a",Y,[i(l,null,{default:a(()=>[Z]),_:1})]),d("的编辑状态。")])]),K,e("p",null,[d("恢复上一次"),e("a",X,[i(l,null,{default:a(()=>[ee]),_:1})]),d("时的主题。")]),de,e("ul",null,[e("li",null,[d("不建议使用此项 而是在"),e("a",le,[i(l,null,{default:a(()=>[ie]),_:1})]),d("中修改。")])]),ae,oe,e("ul",null,[e("li",null,[d("不建议使用此项 而是在"),e("a",ne,[i(l,null,{default:a(()=>[ce]),_:1})]),d("中修改。")])]),re,e("h4",te,[d("启用 "),i(l,{size:"2",color:"#5FC3E4"},{default:a(()=>[d(" <热键> ")]),_:1}),d(),he]),e("p",null,[d("是否启用"),e("a",se,[i(l,null,{default:a(()=>[ue]),_:1})]),d("。")]),_e,pe,fe,e("ul",null,[e("li",null,[e("p",null,[d("使用鼠标右键、"),e("a",ge,[i(l,null,{default:a(()=>[be]),_:1})]),d("或者"),e("a",Ee,[i(l,null,{default:a(()=>[Ae]),_:1})]),d("标记完成。")])]),Be]),me,e("ul",null,[e("li",null,[e("p",null,[d("仅在"),e("a",xe,[i(l,null,{default:a(()=>[ve]),_:1})]),d("中检测到的物品才会被"),e("a",ke,[i(l,null,{default:a(()=>[Te]),_:1})]),d("。")])]),e("li",null,[e("p",null,[d("仅限支持在"),e("a",Se,[i(l,null,{default:a(()=>[Pe]),_:1})]),d("中有 "),i(l,{color:"#00ff00"},{default:a(()=>[d("绿色标记")]),_:1}),d(" 的点位类型。")])])]),De,Ce,e("ul",null,[e("li",null,[e("p",null,[d("若"),e("a",Ge,[i(l,null,{default:a(()=>[we]),_:1})]),d("内新物品在交互是地图中没有数据 则此物品会被检测为新物品。")])]),e("li",null,[e("p",null,[d("仅限支持在"),e("a",Re,[i(l,null,{default:a(()=>[Fe]),_:1})]),d("中有 "),i(l,{color:"#00ff00"},{default:a(()=>[d("绿色标记")]),_:1}),d(" 的点位类型。")])])]),Ie,ye,He,e("p",null,[d("设定"),e("a",Ve,[i(l,null,{default:a(()=>[Ne]),_:1})]),d("与"),e("a",qe,[i(l,null,{default:a(()=>[We]),_:1})]),d("的范围。")]),ze,e("ul",null,[e("li",null,[d("仅限支持在"),e("a",Me,[i(l,null,{default:a(()=>[Le]),_:1})]),d("中有 "),i(l,{color:"#0000ff"},{default:a(()=>[d("蓝色标记")]),_:1}),d(" 的点位类型。")])]),Oe,e("p",null,[d("设定"),e("a",Ue,[i(l,null,{default:a(()=>[$e]),_:1})]),d("的范围。")]),je,e("p",null,[d("仅对"),e("a",Je,[i(l,null,{default:a(()=>[Qe]),_:1})]),d("中已勾选的点位类型有效")]),Ye,e("p",null,[d("在"),e("a",Ze,[i(l,null,{default:a(()=>[Ke]),_:1})]),d("中已选角色的所需材料。")]),Xe,e("p",null,[d("在"),e("a",ed,[i(l,null,{default:a(()=>[dd]),_:1})]),d("中已选角色的所需材料。")]),ld,e("p",null,[d("选择的角色会将所需材料显示在"),e("a",id,[i(l,null,{default:a(()=>[ad]),_:1})]),d("中。")]),od,nd,e("p",null,[d("选择的武器会将所需材料显示在"),e("a",cd,[i(l,null,{default:a(()=>[rd]),_:1})]),d("中。")]),td])}const Ad=n(f,[["render",hd]]);export{Ed as __pageData,Ad as default};
