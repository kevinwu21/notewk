import{_ as s,c as a,o as e,a as n}from"./app.f6b8b16b.js";const v=JSON.parse('{"title":"vgchange","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/vgchange.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/vgchange.md"},p=n(`<h1 id="vgchange" tabindex="-1">vgchange <a class="header-anchor" href="#vgchange" aria-hidden="true">#</a></h1><p>\u4FEE\u6539\u5377\u7EC4\u5C5E\u6027</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>vgchange\u547D\u4EE4</strong> \u7528\u4E8E\u4FEE\u6539\u5377\u7EC4\u7684\u5C5E\u6027\uFF0C\u7ECF\u5E38\u88AB\u7528\u6765\u8BBE\u7F6E\u5377\u7EC4\u662F\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\u6216\u975E\u6D3B\u52A8\u72B6\u6001\u3002\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001\u7684\u5377\u7EC4\u65E0\u6CD5\u88AB\u5220\u9664\uFF0C\u5FC5\u987B\u4F7F\u7528vgchange\u547D\u4EE4\u5C06\u5377\u7EC4\u8BBE\u7F6E\u4E3A\u975E\u6D3B\u52A8\u72B6\u6001\u540E\u624D\u80FD\u5220\u9664\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">vgchange</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u8BBE\u7F6E\u5377\u7EC4\u7684\u6D3B\u52A8\u72B6\u6001\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u5377\u7EC4\uFF1A\u6307\u5B9A\u8981\u8BBE\u7F6E\u5C5E\u6027\u7684\u5377\u7EC4\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528vgchange\u547D\u4EE4\u5C06\u5377\u7EC4\u72B6\u6001\u6539\u4E3A\u6D3B\u52A8\u7684\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># vgchange -ay vg1000     #\u5C06\u5377\u7EC4&quot;vg1000&quot;\u8BBE\u7F6E\u4E3A\u6D3B\u52A8\u72B6\u6001</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">1 logical volume</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> volume group </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vg1000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> now active</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),c=[p];function o(r,t,i,d,h,g){return e(),a("div",null,c)}const D=s(l,[["render",o]]);export{v as __pageData,D as default};