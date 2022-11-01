import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const A=JSON.parse('{"title":"chcon","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/chcon.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/chcon.md"},p=e(`<h1 id="chcon" tabindex="-1">chcon <a class="header-anchor" href="#chcon" aria-hidden="true">#</a></h1><p>\u4FEE\u6539\u5BF9\u8C61\uFF08\u6587\u4EF6\uFF09\u7684\u5B89\u5168\u4E0A\u4E0B\u6587</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>chcon\u547D\u4EE4</strong> \u662F\u4FEE\u6539\u5BF9\u8C61\uFF08\u6587\u4EF6\uFF09\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\uFF0C\u6BD4\u5982\uFF1A\u7528\u6237\u3001\u89D2\u8272\u3001\u7C7B\u578B\u3001\u5B89\u5168\u7EA7\u522B\u3002\u4E5F\u5C31\u662F\u5C06\u6BCF\u4E2A\u6587\u4EF6\u7684\u5B89\u5168\u73AF\u5883\u53D8\u66F4\u81F3\u6307\u5B9A\u73AF\u5883\u3002\u4F7F\u7528<code>--reference</code>\u9009\u9879\u65F6\uFF0C\u628A\u6307\u5B9A\u6587\u4EF6\u7684\u5B89\u5168\u73AF\u5883\u8BBE\u7F6E\u4E3A\u4E0E\u53C2\u8003\u6587\u4EF6\u76F8\u540C\u3002chcon\u547D\u4EE4\u4F4D\u4E8E<code>/usr/bin/chcon</code>\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chcon </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... \u73AF\u5883 \u6587\u4EF6...</span></span>
<span class="line"><span style="color:#A6ACCD;">chcon </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-u \u7528\u6237</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-r \u89D2\u8272</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-l \u8303\u56F4</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-t \u7C7B\u578B</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> \u6587\u4EF6...</span></span>
<span class="line"><span style="color:#A6ACCD;">chcon </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... --reference=\u53C2\u8003\u6587\u4EF6 \u6587\u4EF6...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-h, --no-dereference\uFF1A\u5F71\u54CD\u7B26\u53F7\u8FDE\u63A5\u800C\u975E\u5F15\u7528\u7684\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    --reference=\u53C2\u8003\u6587\u4EF6\uFF1A\u4F7F\u7528\u6307\u5B9A\u53C2\u8003\u6587\u4EF6\u7684\u5B89\u5168\u73AF\u5883\uFF0C\u800C\u975E\u6307\u5B9A\u503C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-R, --recursive\uFF1A\u9012\u5F52\u5904\u7406\u6240\u6709\u7684\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-v, --verbose\uFF1A\u4E3A\u5904\u7406\u7684\u6240\u6709\u6587\u4EF6\u663E\u793A\u8BCA\u65AD\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-u, --user=\u7528\u6237\uFF1A\u8BBE\u7F6E\u6307\u5B9A\u7528\u6237\u7684\u76EE\u6807\u5B89\u5168\u73AF\u5883\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-r, --role=\u89D2\u8272\uFF1A\u8BBE\u7F6E\u6307\u5B9A\u89D2\u8272\u7684\u76EE\u6807\u5B89\u5168\u73AF\u5883\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-t, --type=\u7C7B\u578B\uFF1A\u8BBE\u7F6E\u6307\u5B9A\u7C7B\u578B\u7684\u76EE\u6807\u5B89\u5168\u73AF\u5883\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-l, --range=\u8303\u56F4\uFF1A\u8BBE\u7F6E\u6307\u5B9A\u8303\u56F4\u7684\u76EE\u6807\u5B89\u5168\u73AF\u5883\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4EE5\u4E0B\u9009\u9879\u662F\u5728\u6307\u5B9A\u4E86<code>-R</code>\u9009\u9879\u65F6\u88AB\u7528\u4E8E\u8BBE\u7F6E\u5982\u4F55\u7A7F\u8D8A\u76EE\u5F55\u7ED3\u6784\u4F53\u7CFB\u3002\u5982\u679C\u60A8\u6307\u5B9A\u4E86\u591A\u4E8E\u4E00\u4E2A\u9009\u9879\uFF0C\u90A3\u4E48\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u751F\u6548\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-H\uFF1A\u5982\u679C\u547D\u4EE4\u884C\u53C2\u6570\u662F\u4E00\u4E2A\u901A\u5230\u76EE\u5F55\u7684\u7B26\u53F7\u94FE\u63A5\uFF0C\u5219\u904D\u5386\u7B26\u53F7\u94FE\u63A5\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-L\uFF1A\u904D\u5386\u6BCF\u4E00\u4E2A\u9047\u5230\u7684\u901A\u5230\u76EE\u5F55\u7684\u7B26\u53F7\u94FE\u63A5\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-P\uFF1A\u4E0D\u904D\u5386\u4EFB\u4F55\u7B26\u53F7\u94FE\u63A5\uFF08\u9ED8\u8BA4\uFF09\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u663E\u793A\u6B64\u5E2E\u52A9\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u60F3\u628A\u8FD9\u4E2Aftp\u5171\u4EAB\u7ED9\u533F\u540D\u7528\u6237\u7684\u8BDD\uFF0C\u9700\u8981\u5F00\u542F\u4EE5\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chcon -R -t public_content_t /var/ftp</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u8BA9\u4F60\u8BBE\u7F6E\u7684FTP\u76EE\u5F55\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\u7684\u8BDD\uFF0CSELINUX\u9700\u8981\u8BBE\u7F6E\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chcon -t public_content_rw_t /var/ftp/incoming</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5141\u8BB8\u7528\u6237HHTP\u8BBF\u95EE\u5176\u5BB6\u76EE\u5F55\uFF0C\u8BE5\u8BBE\u5B9A\u9650\u4EC5\u4E8E\u7528\u6237\u7684\u5BB6\u76EE\u5F55\u4E3B\u9875\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">setsebool -P httpd_enable_homedirs 1</span></span>
<span class="line"><span style="color:#A6ACCD;">chcon -R -t httpd_sys_content_t </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">user/public_html</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u4F60\u5E0C\u671B\u5C06samba\u76EE\u5F55\u5171\u4EAB\u7ED9\u5176\u4ED6\u7528\u6237\uFF0C\u4F60\u9700\u8981\u8BBE\u7F6E\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chcon -t samba_share_t /directory</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5171\u4EABrsync\u76EE\u5F55\u65F6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">chcon -t public_content_t /directories</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,21),c=[p];function r(o,t,i,d,b,u){return a(),n("div",null,c)}const C=s(l,[["render",r]]);export{A as __pageData,C as default};