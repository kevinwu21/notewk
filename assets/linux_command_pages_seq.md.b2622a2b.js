import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const D=JSON.parse('{"title":"seq","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/seq.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/seq.md"},p=l(`<h1 id="seq" tabindex="-1">seq <a class="header-anchor" href="#seq" aria-hidden="true">#</a></h1><p>\u4EE5\u6307\u5B9A\u589E\u91CF\u4ECE\u9996\u6570\u5F00\u59CB\u6253\u5370\u6570\u5B57\u5230\u5C3E\u6570</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>seq\u547D\u4EE4</strong> \u7528\u4E8E\u4EA7\u751F\u4ECE\u67D0\u4E2A\u6570\u5230\u53E6\u5916\u4E00\u4E2A\u6570\u4E4B\u95F4\u7684\u6240\u6709\u6574\u6570\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">seq </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... \u5C3E\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">seq </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... \u9996\u6570 \u5C3E\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">seq </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">... \u9996\u6570 \u589E\u91CF \u5C3E\u6570</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-f, --format=\u683C\u5F0F        \u4F7F\u7528printf \u6837\u5F0F\u7684\u6D6E\u70B9\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">-s, --separator=\u5B57\u7B26\u4E32   \u4F7F\u7528\u6307\u5B9A\u5B57\u7B26\u4E32\u5206\u9694\u6570\u5B57\uFF08\u9ED8\u8BA4\u4F7F\u7528\uFF1A\\n\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">-w, --equal-width        \u5728\u5217\u524D\u6DFB\u52A00 \u4F7F\u5F97\u5BBD\u5EA6\u76F8\u540C</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p><strong>-f\u9009\u9879\uFF1A\u6307\u5B9A\u683C\u5F0F</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#seq -f&quot;%3g&quot; 9 11</span></span>
<span class="line"><span style="color:#A6ACCD;">9</span></span>
<span class="line"><span style="color:#A6ACCD;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">11</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>%</code>\u540E\u9762\u6307\u5B9A\u6570\u5B57\u7684\u4F4D\u6570 \u9ED8\u8BA4\u662F<code>%g</code>\uFF0C<code>%3g</code>\u90A3\u4E48\u6570\u5B57\u4F4D\u6570\u4E0D\u8DB3\u90E8\u5206\u662F\u7A7A\u683C\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#sed -f&quot;%03g&quot; 9 11</span></span>
<span class="line"><span style="color:#676E95;">#seq -f&quot;str%03g&quot; 9 11</span></span>
<span class="line"><span style="color:#A6ACCD;">str009</span></span>
<span class="line"><span style="color:#A6ACCD;">str010</span></span>
<span class="line"><span style="color:#A6ACCD;">str011</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u6837\u7684\u8BDD\u6570\u5B57\u4F4D\u6570\u4E0D\u8DB3\u90E8\u5206\u662F0\uFF0C<code>%</code>\u524D\u9762\u5236\u5B9A\u5B57\u7B26\u4E32\u3002</p><p><strong>-w\u9009\u9879\uFF1A\u6307\u5B9A\u8F93\u51FA\u6570\u5B57\u540C\u5BBD</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">seq -w 98 101</span></span>
<span class="line"><span style="color:#A6ACCD;">098</span></span>
<span class="line"><span style="color:#A6ACCD;">099</span></span>
<span class="line"><span style="color:#A6ACCD;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">101</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0D\u80FD\u548C<code>-f</code>\u4E00\u8D77\u7528\uFF0C\u8F93\u51FA\u662F\u540C\u5BBD\u7684\u3002</p><p><strong>-s\u9009\u9879\uFF1A\u6307\u5B9A\u5206\u9694\u7B26\uFF08\u9ED8\u8BA4\u662F\u56DE\u8F66\uFF09</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">seq -s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> -f</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">str%03g</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 9 11</span></span>
<span class="line"><span style="color:#A6ACCD;">str009 str010 str011</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8981\u6307\u5B9A<code>/t</code>\u505A\u4E3A\u5206\u9694\u7B26\u53F7\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">seq -s</span><span style="color:#89DDFF;">&quot;\`</span><span style="color:#C3E88D;">echo -e </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/t</span><span style="color:#89DDFF;">&quot;\`&quot;</span><span style="color:#A6ACCD;"> 9 11</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6307\u5B9A<code>\\n</code>\u4F5C\u4E3A\u5206\u9694\u7B26\u53F7\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">seq -s</span><span style="color:#89DDFF;">&quot;\`</span><span style="color:#C3E88D;">echo -e </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\n</span><span style="color:#89DDFF;">&quot;\`&quot;</span><span style="color:#A6ACCD;"> 9 11</span></span>
<span class="line"><span style="color:#A6ACCD;">19293949596979899910911</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5F97\u5230\u7684\u662F\u4E2A\u9519\u8BEF\u7ED3\u679C\uFF0C\u4E0D\u8FC7\u4E00\u822C\u4E5F\u6CA1\u6709\u8FD9\u4E2A\u5FC5\u8981\uFF0C\u5B83\u9ED8\u8BA4\u7684\u5C31\u662F\u56DE\u8F66\u4F5C\u4E3A\u5206\u9694\u7B26\u3002</p>`,24),o=[p];function r(c,t,i,d,u,b){return a(),n("div",null,o)}const A=s(e,[["render",r]]);export{D as __pageData,A as default};