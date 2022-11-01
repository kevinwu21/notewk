import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"grub2-set-default","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":2,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}],"relativePath":"linux/command/pages/grub2-set-default.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/grub2-set-default.md"},p=e(`<h1 id="grub2-set-default" tabindex="-1">grub2-set-default <a class="header-anchor" href="#grub2-set-default" aria-hidden="true">#</a></h1><p>\u8BBE\u7F6E\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u542F\u52A8\u5185\u6838</p><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">Usage: grub2-set-default </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTION</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> MENU_ENTRY</span></span>
<span class="line"><span style="color:#A6ACCD;">Set the default boot menu entry </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> GRUB.</span></span>
<span class="line"><span style="color:#A6ACCD;">This requires setting GRUB_DEFAULT=saved </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> /etc/default/grub.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  -h, --help              print this message and </span><span style="color:#82AAFF;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v, --version           print the version information and </span><span style="color:#82AAFF;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;">  --boot-directory=DIR    expect GRUB images under the directory DIR/grub2</span></span>
<span class="line"><span style="color:#A6ACCD;">                          instead of the /boot/grub2 directory</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">MENU_ENTRY is a number, a menu item title or a menu item identifier.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Report bugs to </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">bug-grub@gnu.org</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u53EF\u9009\u7684\u7CFB\u7EDF\u5185\u6838\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># awk -F\\&#39; &#39;$1==&quot;menuentry &quot; {print $2}&#39; /etc/grub2.cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">CentOS Linux </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">5.4.219-1.el7.elrepo.x86_64</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 7 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">CentOS Linux </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">3.10.0-1160.76.1.el7.x86_64</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 7 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">CentOS Linux </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">3.10.0-862.el7.x86_64</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 7 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">CentOS Linux </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">0-rescue-3221d376917c458992a952d6327f2d6a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 7 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>grub2-set-default\u540E\u9762\u7684\u5E8F\u53F7\u4ECE0\u5F00\u59CB\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u60F3\u8BBE\u7F6E\u7B2C\u4E00\u4E2A\u9009\u9879\u4E3A\u9ED8\u8BA4\u542F\u52A8\u5185\u6838\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># grub2-set-default 0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u60F3\u4F7F\u7528CentOS Linux (3.10.0-862.el7.x86_64) 7 (Core)\u5185\u6838\u7248\u672C,\u5219\u53EF\u4EE5\u5C060\u6539\u4E3A2</p><p>\u91CD\u542F\u7CFB\u7EDF</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">]</span><span style="color:#676E95;"># init 6</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,12),r=[p];function o(t,c,i,u,d,D){return a(),n("div",null,r)}const A=s(l,[["render",o]]);export{C as __pageData,A as default};