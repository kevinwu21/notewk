import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"gunzip","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/gunzip.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/gunzip.md"},p=e(`<h1 id="gunzip" tabindex="-1">gunzip <a class="header-anchor" href="#gunzip" aria-hidden="true">#</a></h1><p>\u7528\u6765\u89E3\u538B\u7F29\u6587\u4EF6</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>gunzip\u547D\u4EE4</strong> \u7528\u6765\u89E3\u538B\u7F29\u6587\u4EF6\u3002gunzip\u662F\u4E2A\u4F7F\u7528\u5E7F\u6CDB\u7684\u89E3\u538B\u7F29\u7A0B\u5E8F\uFF0C\u5B83\u7528\u4E8E\u89E3\u5F00\u88ABgzip\u538B\u7F29\u8FC7\u7684\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u538B\u7F29\u6587\u4EF6\u9884\u8BBE\u6700\u540E\u7684\u6269\u5C55\u540D\u4E3A.gz\u3002\u4E8B\u5B9E\u4E0Agunzip\u5C31\u662Fgzip\u7684\u786C\u8FDE\u63A5\uFF0C\u56E0\u6B64\u4E0D\u8BBA\u662F\u538B\u7F29\u6216\u89E3\u538B\u7F29\uFF0C\u90FD\u53EF\u901A\u8FC7gzip\u6307\u4EE4\u5355\u72EC\u5B8C\u6210\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">gunzip</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">)(</span><span style="color:#A6ACCD;">\u53C2\u6570</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-a\u6216\u2014\u2014ascii\uFF1A\u4F7F\u7528ASCII\u6587\u5B57\u6A21\u5F0F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\u6216--stdout\u6216--to-stdout\uFF1A\u628A\u89E3\u538B\u540E\u7684\u6587\u4EF6\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\u6216-force\uFF1A\u5F3A\u884C\u89E3\u5F00\u538B\u7F29\u6587\u4EF6\uFF0C\u4E0D\u7406\u4F1A\u6587\u4EF6\u540D\u79F0\u6216\u786C\u8FDE\u63A5\u662F\u5426\u5B58\u5728\u4EE5\u53CA\u8BE5\u6587\u4EF6\u662F\u5426\u4E3A\u7B26\u53F7\u8FDE\u63A5\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-h\u6216\u2014\u2014help\uFF1A\u5728\u7EBF\u5E2E\u52A9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-l\u6216\u2014\u2014list\uFF1A\u5217\u51FA\u538B\u7F29\u6587\u4EF6\u7684\u76F8\u5173\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-L\u6216\u2014\u2014license\uFF1A\u663E\u793A\u7248\u672C\u4E0E\u7248\u6743\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\u6216--no-name\uFF1A\u89E3\u538B\u7F29\u65F6\uFF0C\u82E5\u538B\u7F29\u6587\u4EF6\u5185\u542B\u6709\u539F\u6765\u7684\u6587\u4EF6\u540D\u79F0\u53CA\u65F6\u95F4\u6233\u8BB0\uFF0C\u5219\u5C06\u5176\u5FFD\u7565\u4E0D\u4E88\u5904\u7406\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-N\u6216\u2014\u2014name\uFF1A\u89E3\u538B\u7F29\u65F6\uFF0C\u82E5\u538B\u7F29\u6587\u4EF6\u5185\u542B\u6709\u539F\u6765\u7684\u6587\u4EF6\u540D\u79F0\u53CA\u65F6\u95F4\u6233\u8BB0\uFF0C\u5219\u5C06\u5176\u56DE\u5B58\u5230\u89E3\u5F00\u7684\u6587\u4EF6\u4E0A\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-q\u6216\u2014\u2014quiet\uFF1A\u4E0D\u663E\u793A\u8B66\u544A\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-r\u6216\u2014\u2014recursive\uFF1A\u9012\u5F52\u5904\u7406\uFF0C\u5C06\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u53CA\u5B50\u76EE\u5F55\u4E00\u5E76\u5904\u7406\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-S\u6216</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u538B\u7F29\u5B57\u5C3E\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216----suffix</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u538B\u7F29\u5B57\u5C3E\u5B57\u7B26\u4E32</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF1A\u66F4\u6539\u538B\u7F29\u5B57\u5C3E\u5B57\u7B26\u4E32\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\u6216\u2014\u2014test\uFF1A\u6D4B\u8BD5\u538B\u7F29\u6587\u4EF6\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-v\u6216\u2014\u2014verbose\uFF1A\u663E\u793A\u6307\u4EE4\u6267\u884C\u8FC7\u7A0B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-V\u6216\u2014\u2014version\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\uFF1B</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\u5217\u8868\uFF1A\u6307\u5B9A\u8981\u89E3\u538B\u7F29\u7684\u538B\u7F29\u5305\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5C06<code>/etc</code>\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4EE5\u53CA\u5B50\u76EE\u5F55\u8FDB\u884C\u538B\u7F29\uFF0C\u5907\u4EFD\u538B\u7F29\u5305etc.zip\u5230<code>/opt</code>\u76EE\u5F55\uFF0C\u7136\u540E\u5BF9etc.zip\u6587\u4EF6\u8FDB\u884Cgzip\u538B\u7F29\uFF0C\u8BBE\u7F6Egzip\u7684\u538B\u7F29\u7EA7\u522B\u4E3A9\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">zip \u2013r /opt/etc.zip /etc</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip -9v /opt/etc.zip</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u67E5\u770B\u4E0A\u8FF0etc.zip.gz\u6587\u4EF6\u7684\u538B\u7F29\u4FE1\u606F\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">gzip -l /opt/etc.zip.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">compressed        uncompressed ratio uncompressed_name</span></span>
<span class="line"><span style="color:#A6ACCD;">11938745            12767265   6.5% /opt/etc.zip</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u89E3\u538B\u4E0A\u8FF0etc.zip.gz\u6587\u4EF6\u5230\u5F53\u524D\u76EE\u5F55\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@mylinux </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;">#gzip \u2013d /opt/etc.zip.gz </span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216\u8005\u6267\u884C</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@mylinux </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;">#gunzip /opt/etc.zip.gz</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u901A\u8FC7\u4E0A\u9762\u7684\u793A\u4F8B\u53EF\u4EE5\u77E5\u9053<code>gzip \u2013d</code>\u7B49\u4EF7\u4E8E<code>gunzip</code>\u547D\u4EE4\u3002</p>`,18),c=[p];function r(i,o,t,d,u,b){return a(),n("div",null,c)}const h=s(l,[["render",r]]);export{C as __pageData,h as default};