import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"chown","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/chown.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/chown.md"},p=e(`<h1 id="chown" tabindex="-1">chown <a class="header-anchor" href="#chown" aria-hidden="true">#</a></h1><p>\u7528\u6765\u53D8\u66F4\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u62E5\u6709\u8005\u6216\u6240\u5C5E\u7FA4\u7EC4</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>chown\u547D\u4EE4</strong> \u6539\u53D8\u67D0\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u6709\u8005\u548C\u6240\u5C5E\u7684\u7EC4\uFF0C\u8BE5\u547D\u4EE4\u53EF\u4EE5\u5411\u67D0\u4E2A\u7528\u6237\u6388\u6743\uFF0C\u4F7F\u8BE5\u7528\u6237\u53D8\u6210\u6307\u5B9A\u6587\u4EF6\u7684\u6240\u6709\u8005\u6216\u8005\u6539\u53D8\u6587\u4EF6\u6240\u5C5E\u7684\u7EC4\u3002\u7528\u6237\u53EF\u4EE5\u662F\u7528\u6237\u6216\u8005\u662F\u7528\u6237D\uFF0C\u7528\u6237\u7EC4\u53EF\u4EE5\u662F\u7EC4\u540D\u6216\u7EC4id\u3002\u6587\u4EF6\u540D\u53EF\u4EE5\u4F7F\u7531\u7A7A\u683C\u5206\u5F00\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u5728\u6587\u4EF6\u540D\u4E2D\u53EF\u4EE5\u5305\u542B\u901A\u914D\u7B26\u3002</p><p>\u53EA\u6709\u6587\u4EF6\u4E3B\u548C\u8D85\u7EA7\u7528\u6237\u624D\u53EF\u4EE5\u4F7F\u7528\u8BE5\u547D\u4EE4\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chown</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c\u6216\u2014\u2014changes\uFF1A\u6548\u679C\u7C7B\u4F3C\u201C-v\u201D\u53C2\u6570\uFF0C\u4F46\u4EC5\u56DE\u62A5\u66F4\u6539\u7684\u90E8\u5206\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\u6216--quite\u6216\u2014\u2014silent\uFF1A\u4E0D\u663E\u793A\u9519\u8BEF\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-h\u6216--no-dereference\uFF1A\u53EA\u5BF9\u7B26\u53F7\u8FDE\u63A5\u7684\u6587\u4EF6\u4F5C\u4FEE\u6539\uFF0C\u800C\u4E0D\u66F4\u6539\u5176\u4ED6\u4EFB\u4F55\u76F8\u5173\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-R\u6216\u2014\u2014recursive\uFF1A\u9012\u5F52\u5904\u7406\uFF0C\u5C06\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55\u4E00\u5E76\u5904\u7406\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\u6216\u2014\u2014version\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--dereference\uFF1A\u6548\u679C\u548C\u201C-h\u201D\u53C2\u6570\u76F8\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--reference=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u628A\u6307\u5B9A\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u62E5\u6709\u8005\u4E0E\u6240\u5C5E\u7FA4\u7EC4\u5168\u90E8\u8BBE\u6210\u548C\u53C2\u8003\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u62E5\u6709\u8005\u4E0E\u6240\u5C5E\u7FA4\u7EC4\u76F8\u540C\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u7528\u6237\uFF1A\u7EC4\uFF1A\u6307\u5B9A\u6240\u6709\u8005\u548C\u6240\u5C5E\u5DE5\u4F5C\u7EC4\u3002\u5F53\u7701\u7565\u201C\uFF1A\u7EC4\u201D\uFF0C\u4EC5\u6539\u53D8\u6587\u4EF6\u6240\u6709\u8005\uFF1B<br> \u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u6539\u53D8\u6240\u6709\u8005\u548C\u5DE5\u4F5C\u7EC4\u7684\u6587\u4EF6\u5217\u8868\u3002\u652F\u6301\u591A\u4E2A\u6587\u4EF6\u548C\u76EE\u6807\uFF0C\u652F\u6301shell\u901A\u914D\u7B26\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5C06\u76EE\u5F55<code>/usr/meng</code>\u53CA\u5176\u4E0B\u9762\u7684\u6240\u6709\u6587\u4EF6\u3001\u5B50\u76EE\u5F55\u7684\u6587\u4EF6\u4E3B\u6539\u6210 liu\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chown -R liu /usr/meng</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,14),r=[p];function c(o,i,t,d,h,u){return a(),n("div",null,r)}const A=s(l,[["render",c]]);export{m as __pageData,A as default};