import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const C=JSON.parse('{"title":"blkid","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/blkid.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/blkid.md"},e=l(`<h1 id="blkid" tabindex="-1">blkid <a class="header-anchor" href="#blkid" aria-hidden="true">#</a></h1><p>\u67E5\u770B\u5757\u8BBE\u5907\u7684\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u3001LABEL\u3001UUID\u7B49\u4FE1\u606F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u5728Linux\u4E0B\u53EF\u4EE5\u4F7F\u7528 <strong>blkid\u547D\u4EE4</strong> \u5BF9\u67E5\u8BE2\u8BBE\u5907\u4E0A\u6240\u91C7\u7528\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u8FDB\u884C\u67E5\u8BE2\u3002blkid\u4E3B\u8981\u7528\u6765\u5BF9\u7CFB\u7EDF\u7684\u5757\u8BBE\u5907\uFF08\u5305\u62EC\u4EA4\u6362\u5206\u533A\uFF09\u6240\u4F7F\u7528\u7684\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u3001LABEL\u3001UUID\u7B49\u4FE1\u606F\u8FDB\u884C\u67E5\u8BE2\u3002\u8981\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\u5FC5\u987B\u5B89\u88C5e2fsprogs\u8F6F\u4EF6\u5305\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">blkid -L </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> -U</span></span>
<span class="line"><span style="color:#A6ACCD;">blkid </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-c </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-ghlLv</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-o</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-s </span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">-t </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">w </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> ...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">blkid -p </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-s </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-O </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-S </span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">-o</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;">blkid -i </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-s </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">-o</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-c </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># \u6307\u5B9Acache\u6587\u4EF6(default: /etc/blkid.tab, /dev/null = none)</span></span>
<span class="line"><span style="color:#A6ACCD;">-d          </span><span style="color:#676E95;"># don&#39;t encode non-printing characters</span></span>
<span class="line"><span style="color:#A6ACCD;">-h          </span><span style="color:#676E95;"># \u663E\u793A\u5E2E\u52A9\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">-g          </span><span style="color:#676E95;"># garbage collect the blkid cache</span></span>
<span class="line"><span style="color:#A6ACCD;">-o </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">format</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u6307\u5B9A\u8F93\u51FA\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">-k          </span><span style="color:#676E95;"># list all known filesystems/RAIDs and exit</span></span>
<span class="line"><span style="color:#A6ACCD;">-s </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u663E\u793A\u6307\u5B9A\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u663E\u793A\u6240\u6709\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">-t </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">token</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># find device with a specific token (NAME=value pair)</span></span>
<span class="line"><span style="color:#A6ACCD;">-l          </span><span style="color:#676E95;"># look up only first device with token specified by -t</span></span>
<span class="line"><span style="color:#A6ACCD;">-L </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># convert LABEL to device name</span></span>
<span class="line"><span style="color:#A6ACCD;">-U </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">uuid</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># convert UUID to device name</span></span>
<span class="line"><span style="color:#A6ACCD;">-v          </span><span style="color:#676E95;"># \u663E\u793A\u7248\u672C\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">-w </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># write cache to different file (/dev/null = no write)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">dev</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;"># specify device(s) to probe (default: all devices)</span></span>
<span class="line"><span style="color:#A6ACCD;">Low-level probing options:</span></span>
<span class="line"><span style="color:#A6ACCD;">-p          </span><span style="color:#676E95;"># low-level superblocks probing (bypass cache)</span></span>
<span class="line"><span style="color:#A6ACCD;">-i          </span><span style="color:#676E95;"># gather information about I/O limits</span></span>
<span class="line"><span style="color:#A6ACCD;">-S </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># overwrite device size</span></span>
<span class="line"><span style="color:#A6ACCD;">-O </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">offset</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># probe at the given offset</span></span>
<span class="line"><span style="color:#A6ACCD;">-u </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># filter by &quot;usage&quot; (e.g. -u filesystem,raid)</span></span>
<span class="line"><span style="color:#A6ACCD;">-n </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;"># filter by filesystem type (e.g. -n vfat,ext3)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><p>1\u3001\u5217\u51FA\u5F53\u524D\u7CFB\u7EDF\u4E2D\u6240\u6709\u5DF2\u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF\u7684\u7C7B\u578B\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>2\u3001\u663E\u793A\u6307\u5B9A\u8BBE\u5907 UUID\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid -s UUID /dev/sda5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>3\u3001\u663E\u793A\u6240\u6709\u8BBE\u5907 UUID\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid -s UUID</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>4\u3001\u663E\u793A\u6307\u5B9A\u8BBE\u5907 LABEL\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid -s LABEL /dev/sda5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>5\u3001\u663E\u793A\u6240\u6709\u8BBE\u5907 LABEL\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid -s LABEL</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>6\u3001\u663E\u793A\u6240\u6709\u8BBE\u5907\u6587\u4EF6\u7CFB\u7EDF\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid -s TYPE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>7\u3001\u663E\u793A\u6240\u6709\u8BBE\u5907\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid -o device</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>8\u3001\u4EE5\u5217\u8868\u65B9\u5F0F\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo blkid -o list</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,25),o=[e];function c(r,t,i,D,d,A){return a(),n("div",null,o)}const b=s(p,[["render",c]]);export{C as __pageData,b as default};