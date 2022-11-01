import{_ as s,c as a,o as n,a as l}from"./app.f6b8b16b.js";const b=JSON.parse('{"title":"slocate","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/slocate.md","lastUpdated":1666509709000}'),e={name:"linux/command/pages/slocate.md"},p=l(`<h1 id="slocate" tabindex="-1">slocate <a class="header-anchor" href="#slocate" aria-hidden="true">#</a></h1><p>\u547D\u4EE4\u67E5\u627E\u6587\u4EF6\u6216\u76EE\u5F55</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>slocate\u547D\u4EE4</strong> \u662F\u4E00\u4E2A\u547D\u4EE4\u67E5\u627E\u6587\u4EF6\u6216\u76EE\u5F55\u3002slocate\u672C\u8EAB\u5177\u6709\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u91CC\u9762\u5B58\u653E\u4E86\u7CFB\u7EDF\u4E2D\u6587\u4EF6\u4E0E\u76EE\u5F55\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">slocate </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-u</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">--help</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">--version</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">-d </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;][</span><span style="color:#A6ACCD;">\u67E5\u627E\u7684\u6587\u4EF6</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-d</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6216--database=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u3000\u6307\u5B9A\u6570\u636E\u5E93\u6240\u5728\u7684\u76EE\u5F55\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-u \u3000\u66F4\u65B0slocate\u6570\u636E\u5E93\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--help \u3000\u663E\u793A\u5E2E\u52A9\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--version \u3000\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u6307\u4EE4&quot;slocate&quot;\u663E\u793A\u6587\u4EF6\u540D\u4E2D\u542B\u6709\u5173\u952E\u5B57&quot;fdisk&quot;\u7684\u6587\u4EF6\u8DEF\u5F84\u4FE1\u606F\uFF0C\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ slocate fdisk </span><span style="color:#676E95;">#\u663E\u793A\u6587\u4EF6\u540D\u4E2D\u542B\u6709fdisk\u5173\u952E\u5B57\u7684\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u4EE5\u4E0A\u547D\u4EE4\u540E\uFF0C\u6307\u4EE4\u6267\u884C\u7684\u8F93\u51FA\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ slocate fdisk </span><span style="color:#676E95;">#\u663E\u793A\u6587\u4EF6\u540D\u4E2D\u542B\u6709fdisk \u5173\u952E\u5B57\u7684\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F  </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/cfdisk        </span><span style="color:#676E95;">#\u641C\u7D22\u5230\u7684\u6587\u4EF6\u8DEF\u5F84\u5217\u8868  </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/fdisk  </span></span>
<span class="line"><span style="color:#A6ACCD;">/root/sfdisk  </span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/include/grub/ieee1275/ofdisk.h  </span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/doc/util-Linux/README.cfdisk  </span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/doc/util-Linux/README.fdisk.gz  </span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/doc/util-Linux/examples/sfdisk.examples.gz  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,13),o=[p];function c(r,t,i,d,u,h){return n(),a("div",null,o)}const C=s(e,[["render",c]]);export{b as __pageData,C as default};