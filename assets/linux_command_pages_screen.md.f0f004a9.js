import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const d=JSON.parse('{"title":"screen","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5E38\u7528screen\u53C2\u6570","slug":"\u5E38\u7528screen\u53C2\u6570","link":"#\u5E38\u7528screen\u53C2\u6570","children":[]},{"level":3,"title":"\u4F7F\u7528 screen","slug":"\u4F7F\u7528-screen","link":"#\u4F7F\u7528-screen","children":[]}]}],"relativePath":"linux/command/pages/screen.md","lastUpdated":1666512969000}'),l={name:"linux/command/pages/screen.md"},p=e(`<h1 id="screen" tabindex="-1">screen <a class="header-anchor" href="#screen" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u547D\u4EE4\u884C\u7EC8\u7AEF\u5207\u6362</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>Screen</strong> \u662F\u4E00\u6B3E\u7531GNU\u8BA1\u5212\u5F00\u53D1\u7684\u7528\u4E8E\u547D\u4EE4\u884C\u7EC8\u7AEF\u5207\u6362\u7684\u81EA\u7531\u8F6F\u4EF6\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u8BE5\u8F6F\u4EF6\u540C\u65F6\u8FDE\u63A5\u591A\u4E2A\u672C\u5730\u6216\u8FDC\u7A0B\u7684\u547D\u4EE4\u884C\u4F1A\u8BDD\uFF0C\u5E76\u5728\u5176\u95F4\u81EA\u7531\u5207\u6362\u3002GNU Screen\u53EF\u4EE5\u770B\u4F5C\u662F\u7A97\u53E3\u7BA1\u7406\u5668\u7684\u547D\u4EE4\u884C\u754C\u9762\u7248\u672C\u3002\u5B83\u63D0\u4F9B\u4E86\u7EDF\u4E00\u7684\u7BA1\u7406\u591A\u4E2A\u4F1A\u8BDD\u7684\u754C\u9762\u548C\u76F8\u5E94\u7684\u529F\u80FD\u3002</p><p><strong>\u4F1A\u8BDD\u6062\u590D</strong></p><p>\u53EA\u8981Screen\u672C\u8EAB\u6CA1\u6709\u7EC8\u6B62\uFF0C\u5728\u5176\u5185\u90E8\u8FD0\u884C\u7684\u4F1A\u8BDD\u90FD\u53EF\u4EE5\u6062\u590D\u3002\u8FD9\u4E00\u70B9\u5BF9\u4E8E\u8FDC\u7A0B\u767B\u5F55\u7684\u7528\u6237\u7279\u522B\u6709\u7528\u2014\u2014\u5373\u4F7F\u7F51\u7EDC\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u7528\u6237\u4E5F\u4E0D\u4F1A\u5931\u53BB\u5BF9\u5DF2\u7ECF\u6253\u5F00\u7684\u547D\u4EE4\u884C\u4F1A\u8BDD\u7684\u63A7\u5236\u3002\u53EA\u8981\u518D\u6B21\u767B\u5F55\u5230\u4E3B\u673A\u4E0A\u6267\u884Cscreen -r\u5C31\u53EF\u4EE5\u6062\u590D\u4F1A\u8BDD\u7684\u8FD0\u884C\u3002\u540C\u6837\u5728\u6682\u65F6\u79BB\u5F00\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u6267\u884C\u5206\u79BB\u547D\u4EE4detach\uFF0C\u5728\u4FDD\u8BC1\u91CC\u9762\u7684\u7A0B\u5E8F\u6B63\u5E38\u8FD0\u884C\u7684\u60C5\u51B5\u4E0B\u8BA9Screen\u6302\u8D77\uFF08\u5207\u6362\u5230\u540E\u53F0\uFF09\u3002\u8FD9\u4E00\u70B9\u548C\u56FE\u5F62\u754C\u9762\u4E0B\u7684VNC\u5F88\u76F8\u4F3C\u3002</p><p><strong>\u591A\u7A97\u53E3</strong></p><p>\u5728Screen\u73AF\u5883\u4E0B\uFF0C\u6240\u6709\u7684\u4F1A\u8BDD\u90FD\u72EC\u7ACB\u7684\u8FD0\u884C\uFF0C\u5E76\u62E5\u6709\u5404\u81EA\u7684\u7F16\u53F7\u3001\u8F93\u5165\u3001\u8F93\u51FA\u548C\u7A97\u53E3\u7F13\u5B58\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5FEB\u6377\u952E\u5728\u4E0D\u540C\u7684\u7A97\u53E3\u4E0B\u5207\u6362\uFF0C\u5E76\u53EF\u4EE5\u81EA\u7531\u7684\u91CD\u5B9A\u5411\u5404\u4E2A\u7A97\u53E3\u7684\u8F93\u5165\u548C\u8F93\u51FA\u3002Screen\u5B9E\u73B0\u4E86\u57FA\u672C\u7684\u6587\u672C\u64CD\u4F5C\uFF0C\u5982\u590D\u5236\u7C98\u8D34\u7B49\uFF1B\u8FD8\u63D0\u4F9B\u4E86\u7C7B\u4F3C\u6EDA\u52A8\u6761\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u67E5\u770B\u7A97\u53E3\u72B6\u51B5\u7684\u5386\u53F2\u8BB0\u5F55\u3002\u7A97\u53E3\u8FD8\u53EF\u4EE5\u88AB\u5206\u533A\u548C\u547D\u540D\uFF0C\u8FD8\u53EF\u4EE5\u76D1\u89C6\u540E\u53F0\u7A97\u53E3\u7684\u6D3B\u52A8\u3002 \u4F1A\u8BDD\u5171\u4EAB Screen\u53EF\u4EE5\u8BA9\u4E00\u4E2A\u6216\u591A\u4E2A\u7528\u6237\u4ECE\u4E0D\u540C\u7EC8\u7AEF\u591A\u6B21\u767B\u5F55\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u5E76\u5171\u4EAB\u4F1A\u8BDD\u7684\u6240\u6709\u7279\u6027\uFF08\u6BD4\u5982\u53EF\u4EE5\u770B\u5230\u5B8C\u5168\u76F8\u540C\u7684\u8F93\u51FA\uFF09\u3002\u5B83\u540C\u65F6\u63D0\u4F9B\u4E86\u7A97\u53E3\u8BBF\u95EE\u6743\u9650\u7684\u673A\u5236\uFF0C\u53EF\u4EE5\u5BF9\u7A97\u53E3\u8FDB\u884C\u5BC6\u7801\u4FDD\u62A4\u3002</p><p>GNU&#39;s Screen \u5B98\u65B9\u7AD9\u70B9\uFF1A<a href="http://www.gnu.org/software/screen/" target="_blank" rel="noreferrer">http://www.gnu.org/software/screen/</a></p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># screen -AmRvx -[ls -wipe][-d &lt;\u4F5C\u4E1A\u540D\u79F0&gt;][-h &lt;\u884C\u6570&gt;][-r &lt;\u4F5C\u4E1A\u540D\u79F0&gt;][-s ][-S &lt;\u4F5C\u4E1A\u540D\u79F0&gt;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-A \u3000\u5C06\u6240\u6709\u7684\u89C6\u7A97\u90FD\u8C03\u6574\u4E3A\u76EE\u524D\u7EC8\u7AEF\u673A\u7684\u5927\u5C0F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-d </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u4F5C\u4E1A\u540D\u79F0</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u3000\u5C06\u6307\u5B9A\u7684screen\u4F5C\u4E1A\u79BB\u7EBF\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-h </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u884C\u6570</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u3000\u6307\u5B9A\u89C6\u7A97\u7684\u7F13\u51B2\u533A\u884C\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-m \u3000\u5373\u4F7F\u76EE\u524D\u5DF2\u5728\u4F5C\u4E1A\u4E2D\u7684screen\u4F5C\u4E1A\uFF0C\u4ECD\u5F3A\u5236\u5EFA\u7ACB\u65B0\u7684screen\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-r </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u4F5C\u4E1A\u540D\u79F0</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u3000\u6062\u590D\u79BB\u7EBF\u7684screen\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-R \u3000\u5148\u8BD5\u56FE\u6062\u590D\u79BB\u7EBF\u7684\u4F5C\u4E1A\u3002\u82E5\u627E\u4E0D\u5230\u79BB\u7EBF\u7684\u4F5C\u4E1A\uFF0C\u5373\u5EFA\u7ACB\u65B0\u7684screen\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s \u3000\u6307\u5B9A\u5EFA\u7ACB\u65B0\u89C6\u7A97\u65F6\uFF0C\u6240\u8981\u6267\u884C\u7684shell\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-S </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u4F5C\u4E1A\u540D\u79F0</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u3000\u6307\u5B9Ascreen\u4F5C\u4E1A\u7684\u540D\u79F0\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-v \u3000\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-x \u3000\u6062\u590D\u4E4B\u524D\u79BB\u7EBF\u7684screen\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-ls\u6216--list \u3000\u663E\u793A\u76EE\u524D\u6240\u6709\u7684screen\u4F5C\u4E1A\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-wipe \u3000\u68C0\u67E5\u76EE\u524D\u6240\u6709\u7684screen\u4F5C\u4E1A\uFF0C\u5E76\u5220\u9664\u5DF2\u7ECF\u65E0\u6CD5\u4F7F\u7528\u7684screen\u4F5C\u4E1A\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u5E38\u7528screen\u53C2\u6570" tabindex="-1">\u5E38\u7528screen\u53C2\u6570 <a class="header-anchor" href="#\u5E38\u7528screen\u53C2\u6570" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">screen -S yourname -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u65B0\u5EFA\u4E00\u4E2A\u53EByourname\u7684session</span></span>
<span class="line"><span style="color:#A6ACCD;">screen -ls -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u5217\u51FA\u5F53\u524D\u6240\u6709\u7684session</span></span>
<span class="line"><span style="color:#A6ACCD;">screen -r yourname -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u56DE\u5230yourname\u8FD9\u4E2Asession</span></span>
<span class="line"><span style="color:#A6ACCD;">screen -d yourname -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u8FDC\u7A0Bdetach\u67D0\u4E2Asession</span></span>
<span class="line"><span style="color:#A6ACCD;">screen -d -r yourname -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u7ED3\u675F\u5F53\u524Dsession\u5E76\u56DE\u5230yourname\u8FD9\u4E2Asession</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728\u6BCF\u4E2Ascreen session \u4E0B\uFF0C\u6240\u6709\u547D\u4EE4\u90FD\u4EE5 ctrl+a(C-a) \u5F00\u59CB\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">C-a </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u663E\u793A\u6240\u6709\u952E\u7ED1\u5B9A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a c -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8FD0\u884Cshell\u7684\u7A97\u53E3\u5E76\u5207\u6362\u5230\u8BE5\u7A97\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a n -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Next\uFF0C\u5207\u6362\u5230\u4E0B\u4E00\u4E2A window</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a p -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> Previous\uFF0C\u5207\u6362\u5230\u524D\u4E00\u4E2A window</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a 0..9 -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u5207\u6362\u5230\u7B2C 0..9 \u4E2A window</span></span>
<span class="line"><span style="color:#A6ACCD;">Ctrl+a </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Space</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u7531\u89C6\u7A970\u5FAA\u5E8F\u5207\u6362\u5230\u89C6\u7A979</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a C-a -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u5728\u4E24\u4E2A\u6700\u8FD1\u4F7F\u7528\u7684 window \u95F4\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a x -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u9501\u4F4F\u5F53\u524D\u7684 window\uFF0C\u9700\u7528\u7528\u6237\u5BC6\u7801\u89E3\u9501</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a d -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> detach\uFF0C\u6682\u65F6\u79BB\u5F00\u5F53\u524Dsession\uFF0C\u5C06\u76EE\u524D\u7684 screen session </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u53EF\u80FD\u542B\u6709\u591A\u4E2A windows</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> \u4E22\u5230\u540E\u53F0\u6267\u884C\uFF0C\u5E76\u4F1A\u56DE\u5230\u8FD8\u6CA1\u8FDB screen \u65F6\u7684\u72B6\u6001\uFF0C\u6B64\u65F6\u5728 screen session \u91CC\uFF0C\u6BCF\u4E2A window \u5185\u8FD0\u884C\u7684 process </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u65E0\u8BBA\u662F\u524D\u53F0/\u540E\u53F0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\u90FD\u5728\u7EE7\u7EED\u6267\u884C\uFF0C\u5373\u4F7F </span><span style="color:#82AAFF;">logout</span><span style="color:#A6ACCD;"> \u4E5F\u4E0D\u5F71\u54CD\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a z -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u628A\u5F53\u524Dsession\u653E\u5230\u540E\u53F0\u6267\u884C\uFF0C\u7528 shell \u7684 </span><span style="color:#82AAFF;">fg</span><span style="color:#A6ACCD;"> \u547D\u4EE4\u5219\u53EF\u56DE\u53BB\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a w -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u663E\u793A\u6240\u6709\u7A97\u53E3\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a t -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> time\uFF0C\u663E\u793A\u5F53\u524D\u65F6\u95F4\uFF0C\u548C\u7CFB\u7EDF\u7684 load</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a k -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> window\uFF0C\u5F3A\u884C\u5173\u95ED\u5F53\u524D\u7684 window</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a  -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u8FDB\u5165 copy mode\uFF0C\u5728 copy mode \u4E0B\u53EF\u4EE5\u56DE\u6EDA\u3001\u641C\u7D22\u3001\u590D\u5236\u5C31\u50CF\u7528\u4F7F\u7528 </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">vi \u4E00\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;">    C-b Backward\uFF0CPageUp</span></span>
<span class="line"><span style="color:#A6ACCD;">    C-f Forward\uFF0CPageDown</span></span>
<span class="line"><span style="color:#A6ACCD;">    H</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u5927\u5199</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> High\uFF0C\u5C06\u5149\u6807\u79FB\u81F3\u5DE6\u4E0A\u89D2</span></span>
<span class="line"><span style="color:#A6ACCD;">    L Low\uFF0C\u5C06\u5149\u6807\u79FB\u81F3\u5DE6\u4E0B\u89D2</span></span>
<span class="line"><span style="color:#A6ACCD;">    0 \u79FB\u5230\u884C\u9996</span></span>
<span class="line"><span style="color:#A6ACCD;">    $ \u884C\u672B</span></span>
<span class="line"><span style="color:#A6ACCD;">    w forward one word\uFF0C\u4EE5\u5B57\u4E3A\u5355\u4F4D\u5F80\u524D\u79FB</span></span>
<span class="line"><span style="color:#A6ACCD;">    b backward one word\uFF0C\u4EE5\u5B57\u4E3A\u5355\u4F4D\u5F80\u540E\u79FB</span></span>
<span class="line"><span style="color:#A6ACCD;">    Space \u7B2C\u4E00\u6B21\u6309\u4E3A\u6807\u8BB0\u533A\u8D77\u70B9\uFF0C\u7B2C\u4E8C\u6B21\u6309\u4E3A\u7EC8\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    Esc \u7ED3\u675F copy mode</span></span>
<span class="line"><span style="color:#A6ACCD;">C-a </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> paste\uFF0C\u628A\u521A\u521A\u5728 copy mode \u9009\u5B9A\u7684\u5185\u5BB9\u8D34\u4E0A</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u4F7F\u7528-screen" tabindex="-1">\u4F7F\u7528 screen <a class="header-anchor" href="#\u4F7F\u7528-screen" aria-hidden="true">#</a></h3><p><strong>\u5B89\u88C5screen</strong></p><p>\u6D41\u884C\u7684Linux\u53D1\u884C\u7248\uFF08\u4F8B\u5982Red Hat Enterprise Linux\uFF09\u901A\u5E38\u4F1A\u81EA\u5E26screen\u5B9E\u7528\u7A0B\u5E8F\uFF0C\u5982\u679C\u6CA1\u6709\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4ECEGNU screen\u7684\u5B98\u65B9\u7F51\u7AD9\u4E0B\u8F7D\u3002</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># yum install screen</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># rpm -qa|grep screen</span></span>
<span class="line"><span style="color:#A6ACCD;">screen-4.0.3-4.el5</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;">#</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A97\u53E3</strong></p><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u76F4\u63A5\u6572\u547D\u4EE4screen\u5C31\u53EF\u4EE5\u542F\u52A8\u5B83\u3002\u4F46\u662F\u8FD9\u6837\u542F\u52A8\u7684screen\u4F1A\u8BDD\u6CA1\u6709\u540D\u5B57\uFF0C\u5B9E\u8DF5\u4E0A\u63A8\u8350\u4E3A\u6BCF\u4E2Ascreen\u4F1A\u8BDD\u53D6\u4E00\u4E2A\u540D\u5B57\uFF0C\u65B9\u4FBF\u5206\u8FA8\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># screen\xA0-S david</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>screen\u542F\u52A8\u540E\uFF0C\u4F1A\u521B\u5EFA\u7B2C\u4E00\u4E2A\u7A97\u53E3\uFF0C\u4E5F\u5C31\u662F\u7A97\u53E3No. 0\uFF0C\u5E76\u5728\u5176\u4E2D\u6253\u5F00\u4E00\u4E2A\u7CFB\u7EDF\u9ED8\u8BA4\u7684shell\uFF0C\u4E00\u822C\u90FD\u4F1A\u662Fbash\u3002\u6240\u4EE5\u4F60\u6572\u5165\u547D\u4EE4screen\u4E4B\u540E\uFF0C\u4F1A\u7ACB\u523B\u53C8\u8FD4\u56DE\u5230\u547D\u4EE4\u63D0\u793A\u7B26\uFF0C\u4EFF\u4F5B\u4EC0\u4E48\u4E5F\u6CA1\u6709\u53D1\u751F\u4F3C\u7684\uFF0C\u5176\u5B9E\u4F60\u5DF2\u7ECF\u8FDB\u5165Screen\u7684\u4E16\u754C\u4E86\u3002\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u5728screen\u547D\u4EE4\u4E4B\u540E\u52A0\u5165\u4F60\u559C\u6B22\u7684\u53C2\u6570\uFF0C\u4F7F\u4E4B\u76F4\u63A5\u6253\u5F00\u4F60\u6307\u5B9A\u7684\u7A0B\u5E8F\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># screen vi david.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>screen\u521B\u5EFA\u4E00\u4E2A\u6267\u884Cvi david.txt\u7684\u5355\u7A97\u53E3\u4F1A\u8BDD\uFF0C\u9000\u51FAvi \u5C06\u9000\u51FA\u8BE5\u7A97\u53E3/\u4F1A\u8BDD\u3002</p><p><strong>\u67E5\u770B\u7A97\u53E3\u548C\u7A97\u53E3\u540D\u79F0</strong></p><p>\u6253\u5F00\u591A\u4E2A\u7A97\u53E3\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952EC-a w\u5217\u51FA\u5F53\u524D\u6240\u6709\u7A97\u53E3\u3002\u5982\u679C\u4F7F\u7528\u6587\u672C\u7EC8\u7AEF\uFF0C\u8FD9\u4E2A\u5217\u8868\u4F1A\u5217\u5728\u5C4F\u5E55\u5DE6\u4E0B\u89D2\uFF0C\u5982\u679C\u4F7F\u7528X\u73AF\u5883\u4E0B\u7684\u7EC8\u7AEF\u6A21\u62DF\u5668\uFF0C\u8FD9\u4E2A\u5217\u8868\u4F1A\u5217\u5728\u6807\u9898\u680F\u91CC\u3002\u7A97\u53E3\u5217\u8868\u7684\u6837\u5B50\u4E00\u822C\u662F\u8FD9\u6837\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">0$ bash  1-$ bash  2</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">$ bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6211\u5F00\u542F\u4E86\u4E09\u4E2A\u7A97\u53E3\uFF0C\u5176\u4E2D*\u53F7\u8868\u793A\u5F53\u524D\u4F4D\u4E8E\u7A97\u53E32\uFF0C-\u53F7\u8868\u793A\u4E0A\u4E00\u6B21\u5207\u6362\u7A97\u53E3\u65F6\u4F4D\u4E8E\u7A97\u53E31\u3002</p><p>Screen\u9ED8\u8BA4\u4F1A\u4E3A\u7A97\u53E3\u547D\u540D\u4E3A\u7F16\u53F7\u548C\u7A97\u53E3\u4E2D\u8FD0\u884C\u7A0B\u5E8F\u540D\u7684\u7EC4\u5408\uFF0C\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\u7A97\u53E3\u90FD\u662F\u9ED8\u8BA4\u540D\u5B57\u3002\u7EC3\u4E60\u4E86\u4E0A\u9762\u67E5\u770B\u7A97\u53E3\u7684\u65B9\u6CD5\uFF0C\u4F60\u53EF\u80FD\u5C31\u5E0C\u671B\u5404\u4E2A\u7A97\u53E3\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u540D\u5B57\u4EE5\u65B9\u4FBF\u533A\u5206\u4E86\u3002\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952EC-a A\u6765\u4E3A\u5F53\u524D\u7A97\u53E3\u91CD\u547D\u540D\uFF0C\u6309\u4E0B\u5FEB\u6377\u952E\u540E\uFF0CScreen\u4F1A\u5141\u8BB8\u4F60\u4E3A\u5F53\u524D\u7A97\u53E3\u8F93\u5165\u65B0\u7684\u540D\u5B57\uFF0C\u56DE\u8F66\u786E\u8BA4\u3002</p><p><strong>\u4F1A\u8BDD\u5206\u79BB\u4E0E\u6062\u590D</strong></p><p>\u4F60\u53EF\u4EE5\u4E0D\u4E2D\u65ADscreen\u7A97\u53E3\u4E2D\u7A0B\u5E8F\u7684\u8FD0\u884C\u800C\u6682\u65F6\u65AD\u5F00\uFF08detach\uFF09screen\u4F1A\u8BDD\uFF0C\u5E76\u5728\u968F\u540E\u65F6\u95F4\u91CD\u65B0\u8FDE\u63A5\uFF08attach\uFF09\u8BE5\u4F1A\u8BDD\uFF0C\u91CD\u65B0\u63A7\u5236\u5404\u7A97\u53E3\u4E2D\u8FD0\u884C\u7684\u7A0B\u5E8F\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u6253\u5F00\u4E00\u4E2Ascreen\u7A97\u53E3\u7F16\u8F91/tmp/david.txt\u6587\u4EF6\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># screen vi /tmp/david.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\u6211\u4EEC\u60F3\u6682\u65F6\u9000\u51FA\u505A\u70B9\u522B\u7684\u4E8B\u60C5\uFF0C\u6BD4\u5982\u51FA\u53BB\u6563\u6563\u6B65\uFF0C\u90A3\u4E48\u5728screen\u7A97\u53E3\u952E\u5165C-a d\uFF0CScreen\u4F1A\u7ED9\u51FAdetached\u63D0\u793A\uFF1A</p><p>\u6682\u65F6\u4E2D\u65AD\u4F1A\u8BDD</p><p>\u534A\u4E2A\u5C0F\u65F6\u4E4B\u540E\u56DE\u6765\u4E86\uFF0C\u627E\u5230\u8BE5screen\u4F1A\u8BDD\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># screen -ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u91CD\u65B0\u8FDE\u63A5\u4F1A\u8BDD\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@TS-DEV </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># screen -r 12865</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E00\u5207\u90FD\u5728\u3002</p><p>\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u5728\u53E6\u4E00\u53F0\u673A\u5668\u4E0A\u6CA1\u6709\u5206\u79BB\u4E00\u4E2AScreen\u4F1A\u8BDD\uFF0C\u5C31\u65E0\u4ECE\u6062\u590D\u4F1A\u8BDD\u4E86\u3002\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u5F3A\u5236\u5C06\u8FD9\u4E2A\u4F1A\u8BDD\u4ECE\u5B83\u6240\u5728\u7684\u7EC8\u7AEF\u5206\u79BB\uFF0C\u8F6C\u79FB\u5230\u65B0\u7684\u7EC8\u7AEF\u4E0A\u6765\uFF1A</p><p><strong>\u6E05\u9664dead \u4F1A\u8BDD</strong></p><p>\u5982\u679C\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\u5176\u4E2D\u4E00\u4E2A\u4F1A\u8BDD\u6B7B\u6389\u4E86\uFF08\u4F8B\u5982\u4EBA\u4E3A\u6740\u6389\u8BE5\u4F1A\u8BDD\uFF09\uFF0C\u8FD9\u65F6screen -list\u4F1A\u663E\u793A\u8BE5\u4F1A\u8BDD\u4E3Adead\u72B6\u6001\u3002\u4F7F\u7528screen -wipe\u547D\u4EE4\u6E05\u9664\u8BE5\u4F1A\u8BDD\uFF1A</p><p><strong>\u5173\u95ED\u6216\u6740\u6B7B\u4E00\u4E2AScreen\u4F1A\u8BDD</strong></p><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5F53\u4F60\u9000\u51FA\u4E00\u4E2A\u7A97\u53E3\u4E2D\u6700\u540E\u4E00\u4E2A\u7A0B\u5E8F\uFF08\u901A\u5E38\u662Fbash\uFF09\u540E\uFF0C\u8FD9\u4E2A\u7A97\u53E3\u5C31\u5173\u95ED\u4E86\u3002\u53E6\u4E00\u4E2A\u5173\u95ED\u7A97\u53E3\u7684\u65B9\u6CD5\u662F\u4F7F\u7528<code>ctrl</code>+<code>a</code> \u952E\uFF0C\u7136\u540E\u6309\u4E0B<code>k</code>\u952E\uFF0C\u6700\u540E\u5F53\u63D0\u793A\u4F60\u662F\u5426\u8981\u6740\u6B7B\u8FD9\u4E2A\u4F1A\u8BDD\u65F6\u6309\u4E0B<code>y</code>\u952E\uFF0C\u8FD9\u4E2A\u5FEB\u6377\u952E\u4F1A\u6740\u6B7B\u5F53\u524D\u7684\u7A97\u53E3\uFF0C\u540C\u65F6\u4E5F\u5C06\u6740\u6B7B\u8FD9\u4E2A\u7A97\u53E3\u4E2D\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u3002</p><p>\u5982\u679C\u4E00\u4E2AScreen\u4F1A\u8BDD\u4E2D\u6700\u540E\u4E00\u4E2A\u7A97\u53E3\u88AB\u5173\u95ED\u4E86\uFF0C\u90A3\u4E48\u6574\u4E2AScreen\u4F1A\u8BDD\u4E5F\u5C31\u9000\u51FA\u4E86\uFF0Cscreen\u8FDB\u7A0B\u4F1A\u88AB\u7EC8\u6B62\u3002</p><p>\u9664\u4E86\u4F9D\u6B21\u9000\u51FA/\u6740\u6B7B\u5F53\u524DScreen\u4F1A\u8BDD\u4E2D\u6240\u6709\u7A97\u53E3\u8FD9\u79CD\u65B9\u6CD5\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952EC-a :\uFF0C\u7136\u540E\u8F93\u5165quit\u547D\u4EE4\u9000\u51FAScreen\u4F1A\u8BDD\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u6837\u9000\u51FA\u4F1A\u6740\u6B7B\u6240\u6709\u7A97\u53E3\u5E76\u9000\u51FA\u5176\u4E2D\u8FD0\u884C\u7684\u6240\u6709\u7A0B\u5E8F\u3002\u5176\u5B9EC-a :\u8FD9\u4E2A\u5FEB\u6377\u952E\u5141\u8BB8\u7528\u6237\u76F4\u63A5\u8F93\u5165\u7684\u547D\u4EE4\u6709\u5F88\u591A\uFF0C\u5305\u62EC\u5206\u5C4F\u53EF\u4EE5\u8F93</p>`,49),r=[p];function o(c,t,i,D,C,A){return a(),n("div",null,r)}const b=s(l,[["render",o]]);export{d as __pageData,b as default};