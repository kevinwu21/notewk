import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const g=JSON.parse('{"title":"nologin","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/nologin.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/nologin.md"},p=e(`<h1 id="nologin" tabindex="-1">nologin <a class="header-anchor" href="#nologin" aria-hidden="true">#</a></h1><p>\u62D2\u7EDD\u7528\u6237\u767B\u5F55\u7CFB\u7EDF</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>nologin\u547D\u4EE4</strong> \u53EF\u4EE5\u5B9E\u73B0\u793C\u8C8C\u5730\u62D2\u7EDD\u7528\u6237\u767B\u5F55\u7CFB\u7EDF\uFF0C\u540C\u65F6\u7ED9\u51FA\u4FE1\u606F\u3002\u5982\u679C\u5C1D\u8BD5\u4EE5\u8FD9\u7C7B\u7528\u6237\u767B\u5F55\uFF0C\u5C31\u5728log\u91CC\u6DFB\u52A0\u8BB0\u5F55\uFF0C\u7136\u540E\u5728\u7EC8\u7AEF\u8F93\u51FAThis account is currently not available\u4FE1\u606F\uFF0C\u5C31\u662F\u8FD9\u6837\u3002\u4E00\u822C\u8BBE\u7F6E\u8FD9\u6837\u7684\u5E10\u53F7\u662F\u7ED9\u542F\u52A8\u670D\u52A1\u7684\u8D26\u53F7\u6240\u7528\u7684\uFF0C\u8FD9\u53EA\u662F\u8BA9\u670D\u52A1\u542F\u52A8\u8D77\u6765\uFF0C\u4F46\u662F\u4E0D\u80FD\u767B\u5F55\u7CFB\u7EDF\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">nologin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>Linux\u7981\u6B62\u7528\u6237\u767B\u5F55\uFF1A</p><p>\u7981\u6B62\u7528\u6237\u767B\u5F55\u540E\uFF0C\u7528\u6237\u4E0D\u80FD\u767B\u5F55\u7CFB\u7EDF\uFF0C\u4F46\u53EF\u4EE5\u767B\u5F55ftp\u3001SAMBA\u7B49\u3002\u6211\u4EEC\u5728Linux\u4E0B\u505A\u7CFB\u7EDF\u7EF4\u62A4\u7684\u65F6\u5019\uFF0C\u5E0C\u671B\u4E2A\u522B\u7528\u6237\u6216\u8005\u6240\u6709\u7528\u6237\u4E0D\u80FD\u767B\u5F55\u7CFB\u7EDF\uFF0C\u4FDD\u8BC1\u7CFB\u7EDF\u5728\u7EF4\u62A4\u671F\u95F4\u6B63\u5E38\u8FD0\u884C\u3002\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u8981\u7981\u6B62\u7528\u6237\u767B\u5F55\u3002</p><p>1\u3001\u7981\u6B62\u4E2A\u522B\u7528\u6237\u767B\u5F55\uFF0C\u6BD4\u5982\u7981\u6B62lynn\u7528\u6237\u767B\u5F55\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">passwd -l lynn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u5C31\u8BDD\u7684\u610F\u601D\u662F\u9501\u5B9Alynn\u7528\u6237\uFF0C\u8FD9\u6837\u8BE5\u7528\u6237\u5C31\u4E0D\u80FD\u767B\u5F55\u4E86\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">passwd -u lynn</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u662F\u5BF9\u9501\u5B9A\u7684\u7528\u6237lynn\u8FDB\u884C\u89E3\u9501\uFF0C\u7528\u6237\u53EF\u767B\u5F55\u4E86\u3002</p><p>2\u3001\u6211\u4EEC\u901A\u8FC7\u4FEE\u6539<code>/etc/passwd</code>\u6587\u4EF6\u4E2D\u7528\u6237\u767B\u5F55\u7684shell</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">vi /etc/passwd</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u66F4\u6539\u4E3A\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">lynn:x:500:500::/home/lynn:/sbin/nologin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8BE5\u7528\u6237\u5C31\u65E0\u6CD5\u767B\u5F55\u4E86\u3002</p><p>3\u3001\u7981\u6B62\u6240\u6709\u7528\u6237\u767B\u5F55\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">touch /etc/nologin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u9664root\u4EE5\u5916\u7684\u7528\u6237\u4E0D\u80FD\u767B\u5F55\u4E86\u3002</p>`,22),i=[p];function o(c,r,t,d,u,h){return a(),n("div",null,i)}const m=s(l,[["render",o]]);export{g as __pageData,m as default};