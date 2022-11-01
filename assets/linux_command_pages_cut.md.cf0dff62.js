import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const d=JSON.parse('{"title":"cut","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]},{"level":3,"title":"\u6307\u5B9A\u5B57\u6BB5\u7684\u5B57\u7B26\u6216\u8005\u5B57\u8282\u8303\u56F4","slug":"\u6307\u5B9A\u5B57\u6BB5\u7684\u5B57\u7B26\u6216\u8005\u5B57\u8282\u8303\u56F4","link":"#\u6307\u5B9A\u5B57\u6BB5\u7684\u5B57\u7B26\u6216\u8005\u5B57\u8282\u8303\u56F4","children":[]}]}],"relativePath":"linux/command/pages/cut.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/cut.md"},e=l(`<h1 id="cut" tabindex="-1">cut <a class="header-anchor" href="#cut" aria-hidden="true">#</a></h1><p>\u8FDE\u63A5\u6587\u4EF6\u5E76\u6253\u5370\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u4E0A</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>cut \u547D\u4EE4</strong> \u7528\u6765\u663E\u793A\u884C\u4E2D\u7684\u6307\u5B9A\u90E8\u5206\uFF0C\u5220\u9664\u6587\u4EF6\u4E2D\u6307\u5B9A\u5B57\u6BB5\u3002cut \u7ECF\u5E38\u7528\u6765\u663E\u793A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u7C7B\u4F3C\u4E8E type \u547D\u4EE4\u3002</p><p>\u8BF4\u660E\uFF1A\u8BE5\u547D\u4EE4\u6709\u4E24\u9879\u529F\u80FD\uFF0C\u5176\u4E00\u662F\u7528\u6765\u663E\u793A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u5B83\u4F9D\u6B21\u8BFB\u53D6\u7531\u53C2\u6570 file \u6240\u6307 \u660E\u7684\u6587\u4EF6\uFF0C\u5C06\u5B83\u4EEC\u7684\u5185\u5BB9\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u4E0A\uFF1B\u5176\u4E8C\u662F\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\uFF0C\u5982<code>cut fl f2 &gt; f3</code>\u5C06\u628A\u6587\u4EF6 fl \u548C f2 \u7684\u5185\u5BB9\u5408\u5E76\u8D77\u6765\uFF0C\u7136\u540E\u901A\u8FC7\u8F93\u51FA\u91CD\u5B9A\u5411\u7B26\u201C&gt;\u201D\u7684\u4F5C\u7528\uFF0C\u5C06\u5B83\u4EEC\u653E\u5165\u6587\u4EF6 f3 \u4E2D\u3002</p><p>\u5F53\u6587\u4EF6\u8F83\u5927\u65F6\uFF0C\u6587\u672C\u5728\u5C4F\u5E55\u4E0A\u8FC5\u901F\u95EA\u8FC7\uFF08\u6EDA\u5C4F\uFF09\uFF0C\u7528\u6237\u5F80\u5F80\u770B\u4E0D\u6E05\u6240\u663E\u793A\u7684\u5185\u5BB9\u3002\u56E0\u6B64\uFF0C\u4E00\u822C\u7528 more \u7B49\u547D\u4EE4\u5206\u5C4F\u663E\u793A\u3002\u4E3A\u4E86\u63A7\u5236\u6EDA\u5C4F\uFF0C\u53EF\u4EE5\u6309 Ctrl+S \u952E\uFF0C\u505C\u6B62\u6EDA\u5C4F\uFF1B\u6309 Ctrl+Q \u952E\u53EF\u4EE5\u6062\u590D\u6EDA\u5C4F\u3002\u6309 Ctrl+C\uFF08\u4E2D\u65AD\uFF09\u952E\u53EF\u4EE5\u7EC8\u6B62\u8BE5\u547D\u4EE4\u7684\u6267\u884C\uFF0C\u5E76\u4E14\u8FD4\u56DE Shell \u63D0\u793A\u7B26\u72B6\u6001\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">cut\uFF08\u9009\u9879\uFF09\uFF08\u53C2\u6570\uFF09</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-b\uFF1A\u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u76F4\u63A5\u8303\u56F4\u7684\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-c\uFF1A\u4EC5\u663E\u793A\u884C\u4E2D\u6307\u5B9A\u8303\u56F4\u7684\u5B57\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-d\uFF1A\u6307\u5B9A\u5B57\u6BB5\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u7684\u5B57\u6BB5\u5206\u9694\u7B26\u4E3A\u201CTAB\u201D\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-f\uFF1A\u663E\u793A\u6307\u5B9A\u5B57\u6BB5\u7684\u5185\u5BB9\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">-n\uFF1A\u4E0E\u201C-b\u201D\u9009\u9879\u8FDE\u7528\uFF0C\u4E0D\u5206\u5272\u591A\u5B57\u8282\u5B57\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--complement\uFF1A\u8865\u8DB3\u88AB\u9009\u62E9\u7684\u5B57\u8282\u3001\u5B57\u7B26\u6216\u5B57\u6BB5\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--out-delimiter= \u5B57\u6BB5\u5206\u9694\u7B26\uFF1A\u6307\u5B9A\u8F93\u51FA\u5185\u5BB9\u662F\u7684\u5B57\u6BB5\u5206\u5272\u7B26\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--help\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">--version\uFF1A\u663E\u793A\u6307\u4EE4\u7684\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6587\u4EF6\uFF1A\u6307\u5B9A\u8981\u8FDB\u884C\u5185\u5BB9\u8FC7\u6EE4\u7684\u6587\u4EF6\u3002</p><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F8B\u5982\u6709\u4E00\u4E2A\u5B66\u751F\u62A5\u8868\u4FE1\u606F\uFF0C\u5305\u542B No\u3001Name\u3001Mark\u3001Percent\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cat test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">No Name Mark Percent</span></span>
<span class="line"><span style="color:#A6ACCD;">01 tom 69 91</span></span>
<span class="line"><span style="color:#A6ACCD;">02 jack 71 87</span></span>
<span class="line"><span style="color:#A6ACCD;">03 alex 68 98</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528 <strong>-f</strong> \u9009\u9879\u63D0\u53D6\u6307\u5B9A\u5B57\u6BB5\uFF08\u8FD9\u91CC\u7684 f \u53C2\u6570\u53EF\u4EE5\u7B80\u5355\u8BB0\u5FC6\u4E3A <code>--fields</code>\u7684\u7F29\u5199\uFF09\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cut -f 1 test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">No</span></span>
<span class="line"><span style="color:#A6ACCD;">01</span></span>
<span class="line"><span style="color:#A6ACCD;">02</span></span>
<span class="line"><span style="color:#A6ACCD;">03</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cut -f2,3 test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">Name Mark</span></span>
<span class="line"><span style="color:#A6ACCD;">tom 69</span></span>
<span class="line"><span style="color:#A6ACCD;">jack 71</span></span>
<span class="line"><span style="color:#A6ACCD;">alex 68</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>--complement</strong> \u9009\u9879\u63D0\u53D6\u6307\u5B9A\u5B57\u6BB5\u4E4B\u5916\u7684\u5217\uFF08\u6253\u5370\u9664\u4E86\u7B2C\u4E8C\u5217\u4E4B\u5916\u7684\u5217\uFF09\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cut -f2 --complement test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">No Mark Percent</span></span>
<span class="line"><span style="color:#A6ACCD;">01 69 91</span></span>
<span class="line"><span style="color:#A6ACCD;">02 71 87</span></span>
<span class="line"><span style="color:#A6ACCD;">03 68 98</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F7F\u7528 <strong>-d</strong> \u9009\u9879\u6307\u5B9A\u5B57\u6BB5\u5206\u9694\u7B26\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cat test2.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">No</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">Mark</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">Percent</span></span>
<span class="line"><span style="color:#A6ACCD;">01</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">tom</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">69</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">91</span></span>
<span class="line"><span style="color:#A6ACCD;">02</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">jack</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">71</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">87</span></span>
<span class="line"><span style="color:#A6ACCD;">03</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">alex</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">68</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">98</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cut -f2 -d&quot;;&quot; test2.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">Name</span></span>
<span class="line"><span style="color:#A6ACCD;">tom</span></span>
<span class="line"><span style="color:#A6ACCD;">jack</span></span>
<span class="line"><span style="color:#A6ACCD;">alex</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u6307\u5B9A\u5B57\u6BB5\u7684\u5B57\u7B26\u6216\u8005\u5B57\u8282\u8303\u56F4" tabindex="-1">\u6307\u5B9A\u5B57\u6BB5\u7684\u5B57\u7B26\u6216\u8005\u5B57\u8282\u8303\u56F4 <a class="header-anchor" href="#\u6307\u5B9A\u5B57\u6BB5\u7684\u5B57\u7B26\u6216\u8005\u5B57\u8282\u8303\u56F4" aria-hidden="true">#</a></h3><p>cut \u547D\u4EE4\u53EF\u4EE5\u5C06\u4E00\u4E32\u5B57\u7B26\u4F5C\u4E3A\u5217\u6765\u663E\u793A\uFF0C\u5B57\u7B26\u5B57\u6BB5\u7684\u8BB0\u6CD5\uFF1A</p><ul><li><strong>N-</strong> \uFF1A\u4ECE\u7B2C N \u4E2A\u5B57\u8282\u3001\u5B57\u7B26\u3001\u5B57\u6BB5\u5230\u7ED3\u5C3E\uFF1B</li><li><strong>N-M</strong> \uFF1A\u4ECE\u7B2C N \u4E2A\u5B57\u8282\u3001\u5B57\u7B26\u3001\u5B57\u6BB5\u5230\u7B2C M \u4E2A\uFF08\u5305\u62EC M \u5728\u5185\uFF09\u5B57\u8282\u3001\u5B57\u7B26\u3001\u5B57\u6BB5\uFF1B</li><li><strong>-M</strong> \uFF1A\u4ECE\u7B2C 1 \u4E2A\u5B57\u8282\u3001\u5B57\u7B26\u3001\u5B57\u6BB5\u5230\u7B2C M \u4E2A\uFF08\u5305\u62EC M \u5728\u5185\uFF09\u5B57\u8282\u3001\u5B57\u7B26\u3001\u5B57\u6BB5\u3002</li></ul><p>\u4E0A\u9762\u662F\u8BB0\u6CD5\uFF0C\u7ED3\u5408\u4E0B\u9762\u9009\u9879\u5C06\u6478\u4E2A\u8303\u56F4\u7684\u5B57\u8282\u3001\u5B57\u7B26\u6307\u5B9A\u4E3A\u5B57\u6BB5\uFF1A</p><ul><li><strong>-b</strong> \u8868\u793A\u5B57\u8282\uFF1B</li><li><strong>-c</strong> \u8868\u793A\u5B57\u7B26\uFF1B</li><li><strong>-f</strong> \u8868\u793A\u5B9A\u4E49\u5B57\u6BB5\u3002</li></ul><p><strong>\u793A\u4F8B</strong></p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cat test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">abcdefghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">abcdefghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">abcdefghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">abcdefghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">abcdefghijklmnopqrstuvwxyz</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6253\u5370\u7B2C 1 \u4E2A\u5230\u7B2C 3 \u4E2A\u5B57\u7B26\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cut -c1-3 test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">abc</span></span>
<span class="line"><span style="color:#A6ACCD;">abc</span></span>
<span class="line"><span style="color:#A6ACCD;">abc</span></span>
<span class="line"><span style="color:#A6ACCD;">abc</span></span>
<span class="line"><span style="color:#A6ACCD;">abc</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6253\u5370\u524D 2 \u4E2A\u5B57\u7B26\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cut -c-2 test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">ab</span></span>
<span class="line"><span style="color:#A6ACCD;">ab</span></span>
<span class="line"><span style="color:#A6ACCD;">ab</span></span>
<span class="line"><span style="color:#A6ACCD;">ab</span></span>
<span class="line"><span style="color:#A6ACCD;">ab</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6253\u5370\u4ECE\u7B2C 5 \u4E2A\u5B57\u7B26\u5F00\u59CB\u5230\u7ED3\u5C3E\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost text</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cut -c5- test.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">efghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">efghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">efghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">efghijklmnopqrstuvwxyz</span></span>
<span class="line"><span style="color:#A6ACCD;">efghijklmnopqrstuvwxyz</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,36),c=[e];function r(o,t,i,b,u,C){return a(),n("div",null,c)}const m=s(p,[["render",r]]);export{d as __pageData,m as default};