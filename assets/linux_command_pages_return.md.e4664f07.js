import{_ as s,c as n,o as a,a as e}from"./app.f6b8b16b.js";const m=JSON.parse('{"title":"return","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u8981","slug":"\u6982\u8981","link":"#\u6982\u8981","children":[]},{"level":2,"title":"\u4E3B\u8981\u7528\u9014","slug":"\u4E3B\u8981\u7528\u9014","link":"#\u4E3B\u8981\u7528\u9014","children":[]},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50","link":"#\u4F8B\u5B50","children":[{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}]}],"relativePath":"linux/command/pages/return.md","lastUpdated":1666509709000}'),l={name:"linux/command/pages/return.md"},r=e(`<h1 id="return" tabindex="-1">return <a class="header-anchor" href="#return" aria-hidden="true">#</a></h1><p>\u4ECE\u51FD\u6570\u4E2D\u9000\u51FA\u5E76\u8FD4\u56DE\u6570\u503C\u3002</p><h2 id="\u6982\u8981" tabindex="-1">\u6982\u8981 <a class="header-anchor" href="#\u6982\u8981" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E3B\u8981\u7528\u9014" tabindex="-1">\u4E3B\u8981\u7528\u9014 <a class="header-anchor" href="#\u4E3B\u8981\u7528\u9014" aria-hidden="true">#</a></h2><ul><li>\u4F7F\u5F97shell\u51FD\u6570\u9000\u51FA\u5E76\u8FD4\u56DE\u6570\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9An\u7684\u503C\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u51FD\u6570\u6700\u540E\u4E00\u6761\u547D\u4EE4\u6267\u884C\u7684\u8FD4\u56DE\u72B6\u6001\u3002</li></ul><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p>n\uFF08\u53EF\u9009\uFF09\uFF1A\u6574\u6570\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p>\u8FD4\u56DE\u503C\u4E3A\u4F60\u6307\u5B9A\u7684\u53C2\u6570n\u7684\u503C\uFF0C\u5982\u679C\u4F60\u6307\u5B9A\u7684\u53C2\u6570\u5927\u4E8E255\u6216\u5C0F\u4E8E0\uFF0C\u90A3\u4E48\u4F1A\u901A\u8FC7\u52A0\u6216\u51CF256\u7684\u65B9\u5F0F\u4F7F\u5F97\u8FD4\u56DE\u503C\u603B\u662F\u5904\u4E8E0\u5230255\u4E4B\u95F4\u3002</p><p>\u5728\u51FD\u6570\u5916\u6267\u884Creturn\u8BED\u53E5\u4F1A\u8FD4\u56DE\u5931\u8D25\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#!/usr/bin/env bash</span></span>
<span class="line"><span style="color:#676E95;"># \u5B9A\u4E49\u4E00\u4E2A\u8FD4\u56DE\u503C\u5927\u4E8E255\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#82AAFF;">example</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> 259</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"># \u6267\u884C\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">example</span></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A3</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">?</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><ol><li>\u8BE5\u547D\u4EE4\u662Fbash\u5185\u5EFA\u547D\u4EE4\uFF0C\u76F8\u5173\u7684\u5E2E\u52A9\u4FE1\u606F\u8BF7\u67E5\u770B<code>help</code>\u547D\u4EE4\u3002</li></ol>`,15),p=[r];function c(i,t,o,d,h,u){return a(),n("div",null,p)}const _=s(l,[["render",c]]);export{m as __pageData,_ as default};