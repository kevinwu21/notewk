import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const h=JSON.parse('{"title":"umask","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/umask.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/umask.md"},p=l(`<h1 id="umask" tabindex="-1">umask <a class="header-anchor" href="#umask" aria-hidden="true">#</a></h1><p>\u663E\u793A\u6216\u8BBE\u7F6E\u521B\u5EFA\u6587\u4EF6\u7684\u6743\u9650\u63A9\u7801\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-p</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-S</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mode</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u663E\u793A\u5F53\u524D\u7684\u6587\u4EF6\u6743\u9650\u63A9\u7801\u3002</li><li>\u901A\u8FC7\u516B\u8FDB\u5236\u6570\u7684\u65B9\u5F0F\u8BBE\u7F6E\u521B\u5EFA\u6587\u4EF6\u7684\u6743\u9650\u63A9\u7801\u3002</li><li>\u901A\u8FC7\u7B26\u53F7\u7EC4\u5408\u7684\u65B9\u5F0F\u8BBE\u7F6E\u521B\u5EFA\u6587\u4EF6\u7684\u6743\u9650\u63A9\u7801\u3002</li></ul><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>mode\uFF08\u53EF\u9009\uFF09\uFF1A\u516B\u8FDB\u5236\u6570\u6216\u7B26\u53F7\u7EC4\u5408\u3002</p><h2 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-p\uFF1A\u5F53\u6CA1\u6709\u53C2\u6570\u65F6\u6307\u5B9A\u8BE5\u9009\u9879\uFF0C\u6267\u884C\u4EA7\u751F\u7684\u8F93\u51FA\u683C\u5F0F\u53EF\u590D\u7528\u4E3A\u8F93\u5165\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-S\uFF1A\u4EE5\u7B26\u53F7\u7EC4\u5408\u7684\u65B9\u5F0F\u8F93\u51FA\u521B\u5EFA\u6587\u4EF6\u7684\u6743\u9650\u63A9\u7801\uFF0C\u4E0D\u4F7F\u7528\u8BE5\u9009\u9879\u65F6\u4EE5\u516B\u8FDB\u5236\u6570\u7684\u5F62\u5F0F\u8F93\u51FA\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u72B6\u6001\u4E3A\u6210\u529F\u9664\u975E\u7ED9\u51FA\u4E86\u975E\u6CD5\u9009\u9879\u6216\u975E\u6CD5\u53C2\u6570\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><p><em>\u4EE5\u4E0B\u7684\u4F8B\u5B50\u5747\u5047\u8BBE\u6587\u4EF6\u6743\u9650\u63A9\u7801\u4E3A0022\u3002</em></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u4EE5\u516B\u8FDB\u5236\u6570\u7684\u5F62\u5F0F\u8F93\u51FA\u521B\u5EFA\u6587\u4EF6\u7684\u6743\u9650\u63A9\u7801\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> -p</span></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> 0022</span></span>
<span class="line"><span style="color:#676E95;"># \u4EE5\u7B26\u53F7\u7EC4\u5408\u7684\u65B9\u5F0F\u8F93\u51FA\u521B\u5EFA\u6587\u4EF6\u7684\u6743\u9650\u63A9\u7801\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> -S</span></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C\u7ED3\u679C\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">u=rwx,g=rx,o=rx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u53C2\u8003<code>man chmod</code>\u6587\u6863\u7684<code>DESCRIPTION</code>\u6BB5\u843D\u5F97\u77E5\uFF1A</p><ul><li><code>u</code>\u7B26\u53F7\u4EE3\u8868\u5F53\u524D\u7528\u6237\u3002</li><li><code>g</code>\u7B26\u53F7\u4EE3\u8868\u548C\u5F53\u524D\u7528\u6237\u5728\u540C\u4E00\u4E2A\u7EC4\u7684\u7528\u6237\uFF0C\u4EE5\u4E0B\u7B80\u79F0\u7EC4\u7528\u6237\u3002</li><li><code>o</code>\u7B26\u53F7\u4EE3\u8868\u5176\u4ED6\u7528\u6237\u3002</li><li><code>a</code>\u7B26\u53F7\u4EE3\u8868\u6240\u6709\u7528\u6237\u3002</li><li><code>r</code>\u7B26\u53F7\u4EE3\u8868\u8BFB\u6743\u9650\u4EE5\u53CA\u516B\u8FDB\u5236\u6570<code>4</code>\u3002</li><li><code>w</code>\u7B26\u53F7\u4EE3\u8868\u5199\u6743\u9650\u4EE5\u53CA\u516B\u8FDB\u5236\u6570<code>2</code>\u3002</li><li><code>x</code>\u7B26\u53F7\u4EE3\u8868\u6267\u884C\u6743\u9650\u4EE5\u53CA\u516B\u8FDB\u5236\u6570<code>1</code>\u3002</li><li><code>+</code>\u7B26\u53F7\u4EE3\u8868\u6DFB\u52A0\u76EE\u6807\u7528\u6237\u76F8\u5E94\u7684\u6743\u9650\u3002</li><li><code>-</code>\u7B26\u53F7\u4EE3\u8868\u5220\u9664\u76EE\u6807\u7528\u6237\u76F8\u5E94\u7684\u6743\u9650\u3002</li><li><code>=</code>\u7B26\u53F7\u4EE3\u8868\u6DFB\u52A0\u76EE\u6807\u7528\u6237\u76F8\u5E94\u7684\u6743\u9650\uFF0C\u5220\u9664\u672A\u63D0\u5230\u7684\u6743\u9650\u3002</li></ul></blockquote><p>\u90A3\u4E48\u521A\u624D\u4EE5\u7B26\u53F7\u5F62\u5F0F\u8F93\u51FA\u7684\u7ED3\u679C<code>u=rwx,g=rx,o=rx</code>\u8F6C\u5316\u4E3A\u516B\u8FDB\u5236\u6570\u7B49\u4E8E<code>0755</code>\uFF1B</p><p>\u7528\u516B\u8FDB\u5236\u6570\u6765\u8BBE\u7F6E\u540C\u6837\u7684\u6743\u9650\uFF0C<code>umask</code>\u9700\u8981\u989D\u5916\u7684\u6267\u884C\u51CF\u6CD5<code>0777 - 0755</code>\u5373<code>0022</code>\uFF0C\u800C<code>chmod</code>\u4E0D\u9700\u8981\u3002</p><p>\u7B26\u53F7\u7EC4\u5408\u6A21\u5F0F\u7684\u6DFB\u52A0\u3001\u5220\u9664\u3001\u8D4B\u503C\u6743\u9650\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u6743\u9650\uFF1A</span></span>
<span class="line"><span style="color:#676E95;"># \u4E3A\u7EC4\u7528\u6237\u6DFB\u52A0\u5199\u6743\u9650\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> g+w</span></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u6743\u9650\uFF1A</span></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u5176\u4ED6\u7528\u6237\u7684\u5199\u3001\u6267\u884C\u6743\u9650</span></span>
<span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> o-wx</span></span>
<span class="line"><span style="color:#676E95;"># \u8D4B\u503C\u6743\u9650\uFF1A</span></span>
<span class="line"><span style="color:#676E95;"># \u8D4B\u503C\u5168\u90E8\u7528\u6237\u6240\u6709\u6743\u9650\uFF0C\u7B49\u4EF7\u4E8Eumask u=rwx,g=rwx,o=rwx</span></span>
<span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> a=rwx</span></span>
<span class="line"><span style="color:#676E95;"># \u6E05\u9664\u5176\u4ED6\u7528\u6237\u7684\u8BFB\u3001\u5199\u3001\u6267\u884C\u6743\u9650\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">umask</span><span style="color:#A6ACCD;"> o=</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u521B\u5EFA\u6587\u4EF6\u5939\u3001\u6587\u4EF6\uFF08\u5047\u8BBE\u5F53\u524D\u76EE\u5F55\u4E0D\u5B58\u5728\uFF09</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">touch test.sh</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6743\u9650\uFF0C\u53D1\u73B0\u6267\u884C\u6743\u9650\u7684\u8BBE\u7F6E\u4E0D\u8D77\u4F5C\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">stat test.sh</span></span>
<span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">touch newdir</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6743\u9650\uFF0C\u53D1\u73B0\u6267\u884C\u6743\u9650\u7684\u8BBE\u7F6E\u53EF\u4EE5\u8D77\u4F5C\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">stat newdir</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li><p>\u8BE5\u547D\u4EE4\u662Fbash\u5185\u5EFA\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>help</code>\u547D\u4EE4\u3002</p></li><li><p><code>chmod</code>\u7528\u4E8E\u66F4\u6539\u5DF2\u6709\u5BF9\u8C61\u7684\u6743\u9650\uFF0C<code>umask</code>\u5F71\u54CD\u4E4B\u540E\u65B0\u5EFA\u5BF9\u8C61\u7684\u6743\u9650\u3002</p></li><li><p><strong>\u8BF7\u8C28\u614E\u4F7F\u7528\u8BE5\u547D\u4EE4</strong>\uFF0C\u7279\u522B\u662F\u4E0D\u8981\u53D6\u6D88\u5F53\u524D\u7528\u6237\u7684\u8BFB\u53D6\u6743\u9650\uFF0C\u90A3\u6837\u4F1A\u5BFC\u81F4\u4F60\u5728\u7EC8\u7AEF\u4F7F\u7528<code>TAB</code>\u952E\u8865\u5168\u65F6\u62A5\u9519\u3002</p></li></ol>`,24),c=[p];function o(r,i,d,t,u,b){return a(),n("div",null,c)}const A=s(e,[["render",o]]);export{h as __pageData,A as default};