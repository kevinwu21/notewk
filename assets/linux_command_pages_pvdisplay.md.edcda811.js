import{_ as s,c as a,o as n,a as l}from"./app.f6b8b16b.js";const y=JSON.parse('{"title":"pvdisplay","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/pvdisplay.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/pvdisplay.md"},p=l(`<h1 id="pvdisplay" tabindex="-1">pvdisplay <a class="header-anchor" href="#pvdisplay" aria-hidden="true">#</a></h1><p>\u663E\u793A\u7269\u7406\u5377\u7684\u5C5E\u6027</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>pvdisplay\u547D\u4EE4</strong> \u7528\u4E8E\u663E\u793A\u7269\u7406\u5377\u7684\u5C5E\u6027\u3002pvdisplay\u547D\u4EE4\u663E\u793A\u7684\u7269\u7406\u5377\u4FE1\u606F\u5305\u62EC\uFF1A\u7269\u7406\u5377\u540D\u79F0\u3001\u6240\u5C5E\u7684\u5377\u7EC4\u3001\u7269\u7406\u5377\u5927\u5C0F\u3001PE\u5927\u5C0F\u3001\u603BPE\u6570\u3001\u53EF\u7528PE\u6570\u3001\u5DF2\u5206\u914D\u7684PE\u6570\u548CUUID\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">pvdisplay</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u4EE5\u77ED\u683C\u5F0F\u8F93\u51FA\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-m\uFF1A\u663E\u793APE\u5230LE\u7684\u6620\u5C04\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u7269\u7406\u5377\uFF1A\u8981\u663E\u793A\u7684\u7269\u7406\u5377\u5BF9\u5E94\u7684\u8BBE\u5907\u6587\u4EF6\u540D\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528pvdisplay\u547D\u4EE4\u663E\u793A\u6307\u5B9A\u7684\u7269\u7406\u5377\u7684\u57FA\u672C\u4FE1\u606F\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># pvdisplay /dev/sdb1    #\u663E\u793A\u7269\u7406\u5377\u57FA\u672C\u4FE1\u606F</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dev/sdb1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> is a new physical volume of </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">101.94 MB</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">--- NEW Physical volume ---  </span></span>
<span class="line"><span style="color:#A6ACCD;">PV Name               /dev/sdb1  </span></span>
<span class="line"><span style="color:#A6ACCD;">....\u7701\u7565\u90E8\u5206\u8F93\u51FA\u5185\u5BB9......  </span></span>
<span class="line"><span style="color:#A6ACCD;">PV UUID         FOXiS2-Ghaj-Z0Mf- cdVZ-pfpk- dP9p-ifIZXN</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,15),r=[p];function c(i,o,t,d,h,u){return n(),a("div",null,r)}const v=s(e,[["render",c]]);export{y as __pageData,v as default};