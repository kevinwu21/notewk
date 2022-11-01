import{_ as s,c as e,o as a,a as n}from"./app.f6b8b16b.js";const g=JSON.parse('{"title":"vgreduce","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/vgreduce.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/vgreduce.md"},r=n(`<h1 id="vgreduce" tabindex="-1">vgreduce <a class="header-anchor" href="#vgreduce" aria-hidden="true">#</a></h1><p>\u4ECE\u5377\u7EC4\u4E2D\u5220\u9664\u7269\u7406\u5377</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>vgreduce\u547D\u4EE4</strong> \u901A\u8FC7\u5220\u9664LVM\u5377\u7EC4\u4E2D\u7684\u7269\u7406\u5377\u6765\u51CF\u5C11\u5377\u7EC4\u5BB9\u91CF\u3002\u4E0D\u80FD\u5220\u9664LVM\u5377\u7EC4\u4E2D\u5269\u4F59\u7684\u6700\u540E\u4E00\u4E2A\u7269\u7406\u5377\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">vgreduce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\uFF1A\u5982\u679C\u547D\u4EE4\u884C\u4E2D\u6CA1\u6709\u6307\u5B9A\u8981\u5220\u9664\u7684\u7269\u7406\u5377\uFF0C\u5219\u5220\u9664\u6240\u6709\u7684\u7A7A\u7269\u7406\u5377\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--removemissing\uFF1A\u5220\u9664\u5377\u7EC4\u4E2D\u4E22\u5931\u7684\u7269\u7406\u5377\uFF0C\u4F7F\u5377\u7EC4\u6062\u590D\u6B63\u5E38\u72B6\u6001\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u5377\u7EC4\uFF1A\u6307\u5B9A\u8981\u64CD\u4F5C\u7684\u5377\u7EC4\u540D\u79F0\uFF1B</li><li>\u7269\u7406\u5377\u5217\u8868\uFF1A\u6307\u5B9A\u8981\u5220\u9664\u7684\u7269\u7406\u5377\u5217\u8868\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528vgreduce\u547D\u4EE4\u4ECE\u5377\u7EC4&quot;vg2000&quot;\u4E2D\u79FB\u9664\u7269\u7406\u5377<code>/dev/sdb2</code>\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># vgreduce vg2000 /dev/sdb2    #\u5C06\u7269\u7406\u5377&quot;/dev/sdb2&quot;\u4ECE\u5377\u7EC4&quot;vg2000&quot;\u4E2D\u5220\u9664</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">Removed </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/dev/sdb2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> from volume group </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vg2000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),p=[r];function o(c,t,d,i,u,h){return a(),e("div",null,p)}const b=s(l,[["render",o]]);export{g as __pageData,b as default};