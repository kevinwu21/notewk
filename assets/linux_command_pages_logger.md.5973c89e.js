import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const d=JSON.parse('{"title":"logger","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[]}]}],"relativePath":"linux/command/pages/logger.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/logger.md"},p=l(`<h1 id="logger" tabindex="-1">logger <a class="header-anchor" href="#logger" aria-hidden="true">#</a></h1><p>\u5728\u7CFB\u7EDF\u65E5\u5FD7\u4E2D\u8BB0\u5F55\u76F8\u5E94\u6761\u76EE</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>logger\u547D\u4EE4</strong> \u662F\u7528\u4E8E\u5F80\u7CFB\u7EDF\u4E2D\u5199\u5165\u65E5\u5FD7\uFF0C\u4ED6\u63D0\u4F9B\u4E00\u4E2Ashell\u547D\u4EE4\u63A5\u53E3\u5230syslog\u7CFB\u7EDF\u6A21\u5757</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">logger </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;"> -T, --tcp             \u4F7F\u7528\u6D41\u8FDE\u63A5</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">TCP</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"> -d, --udp             \u4F7F\u7528\u6570\u636E\u62A5</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">UDP</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"> -i, --id              \u9010\u884C\u8BB0\u5F55\u6BCF\u4E00\u6B21logger\u7684\u8FDB\u7A0BID</span></span>
<span class="line"><span style="color:#A6ACCD;"> -f, --file </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">     \u8BB0\u5F55\u7279\u5B9A\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> -h, --help            \u663E\u793A\u5E2E\u52A9\u6587\u672C\u5E76\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;"> -n, --server </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   \u5199\u5165\u6307\u5B9A\u7684\u8FDC\u7A0Bsyslog\u670D\u52A1\u5668\uFF0C\u4F7F\u7528UDP\u4EE3\u66FF\u5185\u88C5\u5F0Fsyslog\u7684\u4F8B\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;"> -P, --port </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">     \u4F7F\u7528\u6307\u5B9A\u7684UDP\u7AEF\u53E3\u3002\u9ED8\u8BA4\u7684\u7AEF\u53E3\u53F7\u662F514</span></span>
<span class="line"><span style="color:#A6ACCD;"> -p, --priority </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">prio</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u6307\u5B9A\u8F93\u5165\u6D88\u606F\u7684\u4F18\u5148\u7EA7\uFF0C\u4F18\u5148\u7EA7\u53EF\u4EE5\u662F\u6570\u5B57\u6216\u8005\u6307\u5B9A\u4E3A </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> facility.level</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \u7684\u683C\u5F0F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">                       \u6BD4\u5982\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> -p local3.info </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> local3 \u8FD9\u4E2A\u8BBE\u5907\u7684\u6D88\u606F\u7EA7\u522B\u4E3A info\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">                       \u9ED8\u8BA4\u7EA7\u522B\u662F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user.notice</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> -s, --stderr          \u8F93\u51FA\u6807\u51C6\u9519\u8BEF\u5230\u7CFB\u7EDF\u65E5\u5FD7\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"> -t, --tag </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">       \u6307\u5B9A\u6807\u8BB0\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"> -u, --socket </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u5199\u5165\u6307\u5B9A\u7684socket\uFF0C\u800C\u4E0D\u662F\u5230\u5185\u7F6E\u7CFB\u7EDF\u65E5\u5FD7\u4F8B\u7A0B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"> -V, --version         \u8F93\u51FA\u7248\u672C\u4FE1\u606F\u5E76\u9000\u51FA</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">logger -p syslog.info </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">backup.sh is starting</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,10),o=[p];function r(t,c,i,D,C,y){return a(),n("div",null,o)}const u=s(e,[["render",r]]);export{d as __pageData,u as default};