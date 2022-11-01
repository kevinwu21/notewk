import{_ as s,c as a,o as n,a as l}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"badblocks","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]},{"level":3,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6","link":"#\u5176\u4ED6","children":[]}]}],"relativePath":"linux/command/pages/badblocks.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/badblocks.md"},p=l(`<h1 id="badblocks" tabindex="-1">badblocks <a class="header-anchor" href="#badblocks" aria-hidden="true">#</a></h1><p>\u67E5\u627E\u78C1\u76D8\u4E2D\u635F\u574F\u7684\u533A\u5757</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>badblock\u547D\u4EE4</strong> \u7528\u4E8E\u67E5\u627E\u78C1\u76D8\u4E2D\u635F\u574F\u7684\u533A\u5757\u3002\xA0\u786C\u76D8\u662F\u4E00\u4E2A\u635F\u8017\u8BBE\u5907\uFF0C\u5F53\u4F7F\u7528\u4E00\u6BB5\u65F6\u95F4\u540E\u53EF\u80FD\u4F1A\u51FA\u73B0\u574F\u9053\u7B49\u7269\u7406\u6545\u969C\u3002\u7535\u8111\u786C\u76D8\u51FA\u73B0\u574F\u9053\u540E\uFF0C\u5982\u679C\u4E0D\u53CA\u65F6\u66F4\u6362\u6216\u8FDB\u884C\u6280\u672F\u5904\u7406\uFF0C\u574F\u9053\u5C31\u4F1A\u8D8A\u6765\u8D8A\u591A\uFF0C\u5E76\u4F1A\u9020\u6210\u9891\u7E41\u6B7B\u673A\u548C\u6570\u636E\u4E22\u5931\u3002\u6700\u597D\u7684\u5904\u7406\u65B9\u5F0F\u662F\u66F4\u6362\u78C1\u76D8\uFF0C\u4F46\u5728\u4E34\u65F6\u7684\u60C5\u51B5\u4E0B\uFF0C\u5E94\u53CA\u65F6\u5C4F\u853D\u574F\u9053\u90E8\u5206\u7684\u6247\u533A\uFF0C\u4E0D\u8981\u89E6\u52A8\u5B83\u4EEC\u3002badblocks\u5C31\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u68C0\u67E5\u574F\u9053\u4F4D\u7F6E\u7684\u5DE5\u5177\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">badblock</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-b</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u533A\u5757\u5927\u5C0F</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u6307\u5B9A\u78C1\u76D8\u7684\u533A\u5757\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-o</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u8F93\u51FA\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u5C06\u68C0\u67E5\u7684\u7ED3\u679C\u5199\u5165\u6307\u5B9A\u7684\u8F93\u51FA\u6587\u4EF6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u5728\u68C0\u67E5\u65F6\u663E\u793A\u8FDB\u5EA6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\uFF1A\u6267\u884C\u65F6\u663E\u793A\u8BE6\u7EC6\u7684\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-w\uFF1A\u5728\u68C0\u67E5\u65F6\uFF0C\u6267\u884C\u5199\u5165\u6D4B\u8BD5\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u78C1\u76D8\u88C5\u7F6E\uFF1A\u6307\u5B9A\u8981\u68C0\u67E5\u7684\u78C1\u76D8\u88C5\u7F6E\uFF1B</li><li>\u78C1\u76D8\u533A\u5757\u6570\uFF1A\u6307\u5B9A\u78C1\u76D8\u88C5\u7F6E\u7684\u533A\u5757\u603B\u6570\uFF1B</li><li>\u542F\u59CB\u533A\u5757\uFF1A\u6307\u5B9A\u8981\u4ECE\u54EA\u4E2A\u533A\u5757\u5F00\u59CB\u68C0\u67E5\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>badblocks\u4EE5 4096 \u7684\u4E00\u4E2Ablock\uFF0C\u6BCF\u4E00\u4E2Ablock\u68C0\u67E516\u6B21\uFF0C\u5C06\u7ED3\u679C\u8F93\u51FA\u5230\u201Chda-badblocks-list\u201D\u6587\u4EF6\u91CC\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">badblocks -b 4096 -c 16 /dev/hda1 -o hda-badblocks-list</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>hda-badblocks-list\u662F\u4E2A\u6587\u672C\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">cat hda-badblocks-list</span></span>
<span class="line"><span style="color:#A6ACCD;">51249</span></span>
<span class="line"><span style="color:#A6ACCD;">51250</span></span>
<span class="line"><span style="color:#A6ACCD;">51251</span></span>
<span class="line"><span style="color:#A6ACCD;">51253</span></span>
<span class="line"><span style="color:#A6ACCD;">51254</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2026\u2026</span></span>
<span class="line"><span style="color:#A6ACCD;">61245</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2026\u2026</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53EF\u4EE5\u9488\u5BF9\u53EF\u7591\u7684\u533A\u5757\u591A\u505A\u51E0\u6B21\u64CD\u4F5C\u3002\u4E0B\u9762\uFF0Cbadblocks\u4EE54096\u5B57\u8282\u4E3A\u4E00\u4E2A\u201Cblock\u201D,\u6BCF\u4E00\u4E2A\u201Cblock\u201D\u68C0\u67E51\u6B21, \u5C06\u7ED3\u679C\u8F93\u51FA\u5230\u201Chda-badblocks-list.1\u201D\u6587\u4EF6\u4E2D\uFF0C\u7531\u7B2C51000 block\u5F00\u59CB\uFF0C\u523063000 block\u7ED3\u675F\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">badblocks -b 4096 -c 1 /dev/hda1 -o hda-badblocks-list.1 63000 51000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6B21\u82B1\u8D39\u7684\u65F6\u95F4\u6BD4\u8F83\u77ED\uFF0C\u786C\u76D8\u5728\u6307\u5B9A\u7684\u60C5\u51B5\u4E0B\u5728\u5F88\u77ED\u7684\u65F6\u95F4\u5C31\u4EA7\u751F\u201C\u560E\u560E\u560E\u560E\u201D\u7684\u54CD\u58F0\u3002\u7531\u4E8E\u68C0\u67E5\u6761\u4EF6\u7684\u4E0D\u540C\uFF0C\u5176\u8F93\u51FA\u7684\u7ED3\u679C\u4E5F\u4E0D\u5B8C\u5168\u662F\u76F8\u540C\u7684\u3002\u91CD\u590D\u51E0\u6B21\u540C\u6837\u7684\u64CD\u4F5C\uFF0C\u56E0\u6761\u4EF6\u591A\u5C11\u90FD\u6709\u4E9B\u4E0D\u540C\uFF0C\u6240\u4EE5\u7ED3\u679C\u4E5F\u6709\u6240\u4E0D\u540C\u3002\u8FDB\u884C\u591A\u6B21\u64CD\u4F5C\u540E\uFF0C\u76F4\u5230\u4EA7\u751F\u6700\u540E\u7684hda-badblock-list.final\u6587\u4EF6\u3002</p><h3 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h3><p><strong>1\u3001fsck\u4F7F\u7528badblocks\u7684\u4FE1\u606F</strong></p><p>badblocks\u53EA\u4F1A\u5728\u65E5\u5FD7\u6587\u4EF6\u4E2D\u6807\u8BB0\u51FA\u574F\u9053\u7684\u4FE1\u606F\uFF0C\u4F46\u82E5\u5E0C\u671B\u5728\u68C0\u6D4B\u78C1\u76D8\u65F6\u4E5F\u80FD\u8DF3\u8FC7\u8FD9\u4E9B\u574F\u5757\u4E0D\u68C0\u6D4B\uFF0C\u53EF\u4EE5\u4F7F\u7528fsck\u7684-l\u53C2\u6570\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">fsck.ext3 -l /tmp/hda-badblock-list.final /dev/hda1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>2\u3001\u5728\u521B\u5EFA\u6587\u4EF6\u7CFB\u7EDF\u524D\u68C0\u6D4B\u574F\u9053</strong></p><p>badblocks\u53EF\u4EE5\u968Fe2fsck\u548Cmke2fs\u7684-c\u5220\u9664\u4E00\u8D77\u8FD0\u884C\uFF08\u5BF9ext3\u6587\u4EF6\u7CFB\u7EDF\u4E5F\u4E00\u6837\uFF09\uFF0C\u5728\u521B\u5EFA\u6587\u4EF6\u7CFB\u7EDF\u524D\u5C31\u5148\u68C0\u6D4B\u574F\u9053\u4FE1\u606F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkfs.ext3 -c /dev/hda1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4EE3\u7801\u8868\u793A\u4F7F\u7528-c\u5728\u521B\u5EFA\u6587\u4EF6\u7CFB\u7EDF\u524D\u68C0\u67E5\u574F\u9053\u7684\u786C\u76D8\u3002</p><p>\u8FD9\u4E2A\u64CD\u4F5C\u5DF2\u7ECF\u5F88\u6E05\u695A\u5730\u544A\u77E5\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528<code>mkfs.ext3 -c</code>\u9009\u9879\u7528<code>read-only</code>\u65B9\u5F0F\u68C0\u67E5\u786C\u76D8\u3002\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5728\u683C\u5F0F\u5316\u786C\u76D8\u65F6\u68C0\u67E5\u786C\u76D8\uFF0C\u5E76\u6807\u51FA\u9519\u8BEF\u7684\u786C\u76D8\u201Cblock\u201D\u3002\u7528\u8FD9\u4E2A\u65B9\u6CD5\u683C\u5F0F\u5316\u786C\u76D8\uFF0C\u9700\u8981\u6709\u76F8\u5F53\u5927\u7684\u8010\u5FC3\uFF0C\u56E0\u4E3A\u547D\u4EE4\u8FD0\u884C\u540E\uFF0C\u4F1A\u4E00\u4E2A\u4E2A\u7528\u8BFB\u7684\u65B9\u5F0F\u68C0\u67E5\u786C\u76D8\u3002</p>`,27),c=[p];function o(r,i,d,t,b,h){return n(),a("div",null,c)}const A=s(e,[["render",o]]);export{m as __pageData,A as default};