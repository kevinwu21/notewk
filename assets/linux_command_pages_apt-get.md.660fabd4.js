import{_ as s,c as a,o as n,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"apt-get","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/apt-get.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/apt-get.md"},p=e(`<h1 id="apt-get" tabindex="-1">apt-get <a class="header-anchor" href="#apt-get" aria-hidden="true">#</a></h1><p>Debian Linux\u53D1\u884C\u7248\u4E2D\u7684APT\u8F6F\u4EF6\u5305\u7BA1\u7406\u5DE5\u5177</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>apt-get\u547D\u4EE4</strong> \u662FDebian Linux\u53D1\u884C\u7248\u4E2D\u7684APT\u8F6F\u4EF6\u5305\u7BA1\u7406\u5DE5\u5177\u3002\u6240\u6709\u57FA\u4E8EDebian\u7684\u53D1\u884C\u90FD\u4F7F\u7528\u8FD9\u4E2A\u5305\u7BA1\u7406\u7CFB\u7EDF\u3002deb\u5305\u53EF\u4EE5\u628A\u4E00\u4E2A\u5E94\u7528\u7684\u6587\u4EF6\u5305\u5728\u4E00\u8D77\uFF0C\u5927\u4F53\u5C31\u5982\u540CWindows\u4E0A\u7684\u5B89\u88C5\u6587\u4EF6\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> PACKAGE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get install  </span><span style="color:#676E95;"># \u5B89\u88C5\u65B0\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get remove   </span><span style="color:#676E95;"># \u5378\u8F7D\u5DF2\u5B89\u88C5\u7684\u5305\uFF08\u4FDD\u7559\u914D\u7F6E\u6587\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get purge    </span><span style="color:#676E95;"># \u5378\u8F7D\u5DF2\u5B89\u88C5\u7684\u5305\uFF08\u5220\u9664\u914D\u7F6E\u6587\u4EF6\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get update   </span><span style="color:#676E95;"># \u66F4\u65B0\u8F6F\u4EF6\u5305\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get upgrade  </span><span style="color:#676E95;"># \u66F4\u65B0\u6240\u6709\u5DF2\u5B89\u88C5\u7684\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get autoremove   </span><span style="color:#676E95;"># \u5378\u8F7D\u5DF2\u4E0D\u9700\u8981\u7684\u5305\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get dist-upgrade </span><span style="color:#676E95;"># \u81EA\u52A8\u5904\u7406\u4F9D\u8D56\u5305\u5347\u7EA7</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get autoclean    </span><span style="color:#676E95;"># \u5C06\u5DF2\u7ECF\u5220\u9664\u4E86\u7684\u8F6F\u4EF6\u5305\u7684.deb\u5B89\u88C5\u6587\u4EF6\u4ECE\u786C\u76D8\u4E2D\u5220\u9664\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">apt-get clean        </span><span style="color:#676E95;"># \u5220\u9664\u8F6F\u4EF6\u5305\u7684\u5B89\u88C5\u5305</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><ul><li>\u7BA1\u7406\u6307\u4EE4\uFF1A\u5BF9APT\u8F6F\u4EF6\u5305\u7684\u7BA1\u7406\u64CD\u4F5C\uFF1B</li><li>\u8F6F\u4EF6\u5305\uFF1A\u6307\u5B9A\u8981\u64CD\u7EB5\u7684\u8F6F\u4EF6\u5305\u3002</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528apt-get\u547D\u4EE4\u7684\u7B2C\u4E00\u6B65\u5C31\u662F\u5F15\u5165\u5FC5\u9700\u7684\u8F6F\u4EF6\u5E93\uFF0CDebian\u7684\u8F6F\u4EF6\u5E93\u4E5F\u5C31\u662F\u6240\u6709Debian\u8F6F\u4EF6\u5305\u7684\u96C6\u5408\uFF0C\u5B83\u4EEC\u5B58\u5728\u4E92\u8054\u7F51\u4E0A\u7684\u4E00\u4E9B\u516C\u5171\u7AD9\u70B9\u4E0A\u3002\u628A\u5B83\u4EEC\u7684\u5730\u5740\u52A0\u5165\uFF0Capt-get\u5C31\u80FD\u641C\u7D22\u5230\u6211\u4EEC\u60F3\u8981\u7684\u8F6F\u4EF6\u3002/etc/apt/sources.list\u662F\u5B58\u653E\u8FD9\u4E9B\u5730\u5740\u5217\u8868\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5176\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">deb web\u6216</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ftp\u5730\u5740</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u53D1\u884C\u7248\u540D\u5B57</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> main/contrib/non-</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">free</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6211\u4EEC\u5E38\u7528\u7684Ubuntu\u5C31\u662F\u4E00\u4E2A\u57FA\u4E8EDebian\u7684\u53D1\u884C\uFF0C\u6211\u4EEC\u4F7F\u7528apt-get\u547D\u4EE4\u83B7\u53D6\u8FD9\u4E2A\u5217\u8868\uFF0C\u4EE5\u4E0B\u662F\u6211\u6574\u7406\u7684\u5E38\u7528\u547D\u4EE4\uFF1A</p><p>\u5728\u4FEE\u6539<code>/etc/apt/sources.list</code>\u6216\u8005<code>/etc/apt/preferences</code>\u4E4B\u540E\u8FD0\u884C\u8BE5\u547D\u4EE4\u3002\u6B64\u5916\u60A8\u9700\u8981\u5B9A\u671F\u8FD0\u884C\u8FD9\u4E00\u547D\u4EE4\u4EE5\u786E\u4FDD\u60A8\u7684\u8F6F\u4EF6\u5305\u5217\u8868\u662F\u6700\u65B0\u7684\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u4E00\u4E2A\u65B0\u8F6F\u4EF6\u5305\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get install packagename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5378\u8F7D\u4E00\u4E2A\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\uFF08\u4FDD\u7559\u914D\u7F6E\u6587\u4EF6\uFF09\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get remove packagename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5378\u8F7D\u4E00\u4E2A\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\uFF08\u5220\u9664\u914D\u7F6E\u6587\u4EF6\uFF09\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get \u2013purge remove packagename</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F1A\u628A\u5DF2\u88C5\u6216\u5DF2\u5378\u7684\u8F6F\u4EF6\u90FD\u5907\u4EFD\u5728\u786C\u76D8\u4E0A\uFF0C\u6240\u4EE5\u5982\u679C\u9700\u8981\u7A7A\u95F4\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8BA9\u8FD9\u4E2A\u547D\u4EE4\u6765\u5220\u9664\u4F60\u5DF2\u7ECF\u5220\u6389\u7684\u8F6F\u4EF6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get autoclean apt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u628A\u5B89\u88C5\u7684\u8F6F\u4EF6\u7684\u5907\u4EFD\u4E5F\u5220\u9664\uFF0C\u4E0D\u8FC7\u8FD9\u6837\u4E0D\u4F1A\u5F71\u54CD\u8F6F\u4EF6\u7684\u4F7F\u7528\u7684\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get clean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u66F4\u65B0\u6240\u6709\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get upgrade</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C06\u7CFB\u7EDF\u5347\u7EA7\u5230\u65B0\u7248\u672C\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get dist-upgrade</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B9A\u671F\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u6765\u6E05\u9664\u90A3\u4E9B\u5DF2\u7ECF\u5378\u8F7D\u7684\u8F6F\u4EF6\u5305\u7684.deb\u6587\u4EF6\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u60A8\u53EF\u4EE5\u91CA\u653E\u5927\u91CF\u7684\u78C1\u76D8\u7A7A\u95F4\u3002\u5982\u679C\u60A8\u7684\u9700\u6C42\u5341\u5206\u8FEB\u5207\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>apt-get clean</code>\u4EE5\u91CA\u653E\u66F4\u591A\u7A7A\u95F4\u3002\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5C06\u5DF2\u5B89\u88C5\u8F6F\u4EF6\u5305\u88F9\u7684.deb\u6587\u4EF6\u4E00\u5E76\u5220\u9664\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u60A8\u4E0D\u4F1A\u518D\u7528\u5230\u8FD9\u4E9B.debs\u6587\u4EF6\uFF0C\u56E0\u6B64\u5982\u679C\u60A8\u4E3A\u78C1\u76D8\u7A7A\u95F4\u4E0D\u8DB3 \u800C\u611F\u5230\u7126\u5934\u70C2\u989D\uFF0C\u8FD9\u4E2A\u529E\u6CD5\u4E5F\u8BB8\u503C\u5F97\u4E00\u8BD5\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get autoclean</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,32),c=[p];function t(r,o,i,d,u,b){return n(),a("div",null,c)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};