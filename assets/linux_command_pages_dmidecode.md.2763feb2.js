import{_ as s,c as n,o as a,a as l}from"./app.f6b8b16b.js";const A=JSON.parse('{"title":"dmidecode","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8865\u5145\u8BF4\u660E","slug":"\u8865\u5145\u8BF4\u660E","link":"#\u8865\u5145\u8BF4\u660E","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[]},{"level":3,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}]}],"relativePath":"linux/command/pages/dmidecode.md","lastUpdated":1666509709000}'),p={name:"linux/command/pages/dmidecode.md"},e=l(`<h1 id="dmidecode" tabindex="-1">dmidecode <a class="header-anchor" href="#dmidecode" aria-hidden="true">#</a></h1><p>\u5728Linux\u7CFB\u7EDF\u4E0B\u83B7\u53D6\u6709\u5173\u786C\u4EF6\u65B9\u9762\u7684\u4FE1\u606F</p><h2 id="\u8865\u5145\u8BF4\u660E" tabindex="-1">\u8865\u5145\u8BF4\u660E <a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a></h2><p><strong>dmidecode\u547D\u4EE4</strong> \u53EF\u4EE5\u8BA9\u4F60\u5728Linux\u7CFB\u7EDF\u4E0B\u83B7\u53D6\u6709\u5173\u786C\u4EF6\u65B9\u9762\u7684\u4FE1\u606F\u3002dmidecode\u7684\u4F5C\u7528\u662F\u5C06DMI\u6570\u636E\u5E93\u4E2D\u7684\u4FE1\u606F\u89E3\u7801\uFF0C\u4EE5\u53EF\u8BFB\u7684\u6587\u672C\u65B9\u5F0F\u663E\u793A\u3002\u7531\u4E8EDMI\u4FE1\u606F\u53EF\u4EE5\u4EBA\u4E3A\u4FEE\u6539\uFF0C\u56E0\u6B64\u91CC\u9762\u7684\u4FE1\u606F\u4E0D\u4E00\u5B9A\u662F\u7CFB\u7EDF\u51C6\u786E\u7684\u4FE1\u606F\u3002dmidecode\u9075\u5FAASMBIOS/DMI\u6807\u51C6\uFF0C\u5176\u8F93\u51FA\u7684\u4FE1\u606F\u5305\u62ECBIOS\u3001\u7CFB\u7EDF\u3001\u4E3B\u677F\u3001\u5904\u7406\u5668\u3001\u5185\u5B58\u3001\u7F13\u5B58\u7B49\u7B49\u3002</p><p>DMI\uFF08Desktop Management Interface,DMI\uFF09\u5C31\u662F\u5E2E\u52A9\u6536\u96C6\u7535\u8111\u7CFB\u7EDF\u4FE1\u606F\u7684\u7BA1\u7406\u7CFB\u7EDF\uFF0CDMI\u4FE1\u606F\u7684\u6536\u96C6\u5FC5\u987B\u5728\u4E25\u683C\u9075\u7167SMBIOS\u89C4\u8303\u7684\u524D\u63D0\u4E0B\u8FDB\u884C\u3002SMBIOS\uFF08System Management BIOS\uFF09\u662F\u4E3B\u677F\u6216\u7CFB\u7EDF\u5236\u9020\u8005\u4EE5\u6807\u51C6\u683C\u5F0F\u663E\u793A\u4EA7\u54C1\u7BA1\u7406\u4FE1\u606F\u6240\u9700\u9075\u5FAA\u7684\u7EDF\u4E00\u89C4\u8303\u3002SMBIOS\u548CDMI\u662F\u7531\u884C\u4E1A\u6307\u5BFC\u673A\u6784Desktop Management Task Force(DMTF)\u8D77\u8349\u7684\u5F00\u653E\u6027\u7684\u6280\u672F\u6807\u51C6\uFF0C\u5176\u4E2DDMI\u8BBE\u8BA1\u9002\u7528\u4E8E\u4EFB\u4F55\u7684\u5E73\u53F0\u548C\u64CD\u4F5C\u7CFB\u7EDF\u3002</p><p>DMI\u5145\u5F53\u4E86\u7BA1\u7406\u5DE5\u5177\u548C\u7CFB\u7EDF\u5C42\u4E4B\u95F4\u63A5\u53E3\u7684\u89D2\u8272\u3002\u5B83\u5EFA\u7ACB\u4E86\u6807\u51C6\u7684\u53EF\u7BA1\u7406\u7CFB\u7EDF\u66F4\u52A0\u65B9\u4FBF\u4E86\u7535\u8111\u5382\u5546\u548C\u7528\u6237\u5BF9\u7CFB\u7EDF\u7684\u4E86\u89E3\u3002DMI\u7684\u4E3B\u8981\u7EC4\u6210\u90E8\u5206\u662FManagement Information Format(MIF)\u6570\u636E\u5E93\u3002\u8FD9\u4E2A\u6570\u636E\u5E93\u5305\u62EC\u4E86\u6240\u6709\u6709\u5173\u7535\u8111\u7CFB\u7EDF\u548C\u914D\u4EF6\u7684\u4FE1\u606F\u3002\u901A\u8FC7DMI\uFF0C\u7528\u6237\u53EF\u4EE5\u83B7\u53D6\u5E8F\u5217\u53F7\u3001\u7535\u8111\u5382\u5546\u3001\u4E32\u53E3\u4FE1\u606F\u4EE5\u53CA\u5176\u5B83\u7CFB\u7EDF\u914D\u4EF6\u4FE1\u606F\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dmidecode </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u9009\u9879</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u9009\u9879" tabindex="-1">\u9009\u9879 <a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">-d\uFF1A</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">default:/dev/mem</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\u4ECE\u8BBE\u5907\u6587\u4EF6\u8BFB\u53D6\u4FE1\u606F\uFF0C\u8F93\u51FA\u5185\u5BB9\u4E0E\u4E0D\u52A0\u53C2\u6570\u6807\u51C6\u8F93\u51FA\u76F8\u540C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-h\uFF1A\u663E\u793A\u5E2E\u52A9\u4FE1\u606F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-s\uFF1A\u53EA\u663E\u793A\u6307\u5B9ADMI\u5B57\u7B26\u4E32\u7684\u4FE1\u606F\u3002</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">-t\uFF1A\u53EA\u663E\u793A\u6307\u5B9A\u6761\u76EE\u7684\u4FE1\u606F\u3002</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">-u\uFF1A\u663E\u793A\u672A\u89E3\u7801\u7684\u539F\u59CB\u6761\u76EE\u5185\u5BB9\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--dump-bin file\uFF1A\u5C06DMI\u6570\u636E\u8F6C\u50A8\u5230\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">--from-dump FILE\uFF1A\u4ECE\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6587\u4EF6\u8BFB\u53D6DMI\u6570\u636E\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">-V\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>dmidecode\u53C2\u6570string\u53CAtype\u5217\u8868\uFF1A</strong></p><p>\uFF081\uFF09Valid string keywords are\uFF1A</p><ul><li>bios-vendor</li><li>bios-version</li><li>bios-release-date</li><li>system-manufacturer</li><li>system-product-name</li><li>system-version</li><li>system-serial-number</li><li>system-uuid</li><li>baseboard-manufacturer</li><li>baseboard-product-name</li><li>baseboard-version</li><li>baseboard-serial-number</li><li>baseboard-asset-tag</li><li>chassis-manufacturer</li><li>chassis-type</li><li>chassis-version</li><li>chassis-serial-number</li><li>chassis-asset-tag</li><li>processor-family</li><li>processor-manufacturer</li><li>processor-version</li><li>processor-frequency</li></ul><p>\uFF082\uFF09Valid type keywords are\uFF1A</p><ul><li>bios</li><li>system</li><li>baseboard</li><li>chassis</li><li>processor</li><li>memory</li><li>Cache</li><li>connector</li><li>slot</li></ul><p>\uFF083\uFF09type\u5168\u90E8\u7F16\u7801\u5217\u8868\uFF1A</p><ul><li>BIOS</li><li>System</li><li>Base Board</li><li>Chassis</li><li>Processor</li><li>Memory Controller</li><li>Memory Module</li><li>Cache</li><li>Port Connector</li><li>System Slots</li><li>On Board Devices</li><li>OEM Strings</li><li>System Configuration Options</li><li>BIOS Language</li><li>Group Associations</li><li>System Event Log</li><li>Physical Memory Array</li><li>Memory Device</li><li>32-bit Memory Error</li><li>Memory Array Mapped Address</li><li>Memory Device Mapped Address</li><li>Built-in Pointing Device</li><li>Portable Battery</li><li>System Reset</li><li>Hardware Security</li><li>System Power Controls</li><li>Voltage Probe</li><li>Cooling Device</li><li>Temperature Probe</li><li>Electrical Current Probe</li><li>Out-of-band Remote Access</li><li>Boot Integrity Services</li><li>System Boot</li><li>64-bit Memory Error</li><li>Management Device</li><li>Management Device Component</li><li>Management Device Threshold Data</li><li>Memory Channel</li><li>IPMI Device</li><li>Power Supply</li><li>Additional Information</li><li>Onboard Device</li></ul><h3 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dmidecode -t 1  </span><span style="color:#676E95;"># \u67E5\u770B\u670D\u52A1\u5668\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Product Name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u67E5\u770B\u670D\u52A1\u5668\u578B\u53F7 </span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Serial Number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u67E5\u770B\u4E3B\u677F\u7684\u5E8F\u5217\u53F7 </span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode -t 2  </span><span style="color:#676E95;"># \u67E5\u770B\u4E3B\u677F\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode -s system-serial-number </span><span style="color:#676E95;"># \u67E5\u770B\u7CFB\u7EDF\u5E8F\u5217\u53F7 </span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode -t memory </span><span style="color:#676E95;"># \u67E5\u770B\u5185\u5B58\u4FE1\u606F </span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode -t 11 </span><span style="color:#676E95;"># \u67E5\u770BOEM\u4FE1\u606F </span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode -t 17 </span><span style="color:#676E95;"># \u67E5\u770B\u5185\u5B58\u6761\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode -t 16 </span><span style="color:#676E95;"># \u67E5\u8BE2\u5185\u5B58\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode -t 4  </span><span style="color:#676E95;"># \u67E5\u770BCPU\u4FE1\u606F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cat /proc/scsi/scsi </span><span style="color:#676E95;"># \u67E5\u770B\u670D\u52A1\u5668\u786C\u76D8\u4FE1\u606F</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0D\u5E26\u9009\u9879\u6267\u884Cdmidecode\u547D\u4EE4\u901A\u5E38\u4F1A\u8F93\u51FA\u6240\u6709\u7684\u786C\u4EF6\u4FE1\u606F\u3002dmidecode\u547D\u4EE4\u6709\u4E2A\u5F88\u6709\u7528\u7684\u9009\u9879-t\uFF0C\u53EF\u4EE5\u6309\u6307\u5B9A\u7C7B\u578B\u8F93\u51FA\u76F8\u5173\u4FE1\u606F\uFF0C\u5047\u5982\u8981\u83B7\u5F97\u5904\u7406\u5668\u65B9\u9762\u7684\u4FE1\u606F\uFF0C\u5219\u53EF\u4EE5\u6267\u884C\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># dmidecode -t processor</span></span>
<span class="line"><span style="color:#676E95;"># dmidecode 2.11</span></span>
<span class="line"><span style="color:#A6ACCD;">SMBIOS 2.5 present.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Handle 0x0001, DMI </span><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> 4, 40 bytes</span></span>
<span class="line"><span style="color:#A6ACCD;">Processor Information</span></span>
<span class="line"><span style="color:#A6ACCD;">        Socket Designation: Node 1 Socket 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        Type: Central Processor</span></span>
<span class="line"><span style="color:#A6ACCD;">        Family: Xeon MP</span></span>
<span class="line"><span style="color:#A6ACCD;">        Manufacturer: Intel</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">R</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Corporation</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: C2 06 02 00 FF FB EB BF</span></span>
<span class="line"><span style="color:#A6ACCD;">        Signature: Type 0, Family 6, Model 44, Stepping 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        Flags:</span></span>
<span class="line"><span style="color:#A6ACCD;">                FPU </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Floating-point unit on-chip</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                VME </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Virtual mode extension</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                DE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Debugging extension</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                PSE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Page size extension</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                TSC </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time stamp counter</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                MSR </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Model specific registers</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                PAE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Physical address extension</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                MCE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Machine check exception</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                CX8 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">CMPXCHG8 instruction supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                APIC </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">On-chip APIC hardware supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                SEP </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Fast system call</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                MTRR </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Memory </span><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> range registers</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                PGE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Page global enable</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                MCA </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Machine check architecture</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                CMOV </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Conditional move instruction supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                PAT </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Page attribute table</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                PSE-36 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">36-bit page size extension</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                CLFSH </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">CLFLUSH instruction supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                DS </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Debug store</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                ACPI </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ACPI supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                MMX </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MMX technology supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                FXSR </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">FXSAVE and FXSTOR instructions supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                SSE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Streaming SIMD extensions</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                SSE2 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Streaming SIMD extensions 2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                ss </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Self-snoop</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                HTT </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Multi-threading</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                TM </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Thermal monitor supported</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                PBE </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Pending </span><span style="color:#82AAFF;">break</span><span style="color:#A6ACCD;"> enabled</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        Version: Intel</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">R</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> Xeon</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">R</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> CPU           E5620  @ 2.40GHz</span></span>
<span class="line"><span style="color:#A6ACCD;">        Voltage: 1.2 V</span></span>
<span class="line"><span style="color:#A6ACCD;">        External Clock: 5866 MHz</span></span>
<span class="line"><span style="color:#A6ACCD;">        Max Speed: 4400 MHz</span></span>
<span class="line"><span style="color:#A6ACCD;">        Current Speed: 2400 MHz</span></span>
<span class="line"><span style="color:#A6ACCD;">        Status: Populated, Enabled</span></span>
<span class="line"><span style="color:#A6ACCD;">        Upgrade: ZIF Socket</span></span>
<span class="line"><span style="color:#A6ACCD;">        L1 Cache Handle: 0x0002</span></span>
<span class="line"><span style="color:#A6ACCD;">        L2 Cache Handle: 0x0003</span></span>
<span class="line"><span style="color:#A6ACCD;">        L3 Cache Handle: 0x0004</span></span>
<span class="line"><span style="color:#A6ACCD;">        Serial Number: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        Asset Tag: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        Part Number: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        Core Count: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">        Core Enabled: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">        Thread Count: 8</span></span>
<span class="line"><span style="color:#A6ACCD;">        Characteristics:</span></span>
<span class="line"><span style="color:#A6ACCD;">                64-bit capable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Handle 0x0055, DMI </span><span style="color:#82AAFF;">type</span><span style="color:#A6ACCD;"> 4, 40 bytes</span></span>
<span class="line"><span style="color:#A6ACCD;">Processor Information</span></span>
<span class="line"><span style="color:#A6ACCD;">        Socket Designation: Node 1 Socket 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        Type: Central Processor</span></span>
<span class="line"><span style="color:#A6ACCD;">        Family: Xeon MP</span></span>
<span class="line"><span style="color:#A6ACCD;">        Manufacturer: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        ID: 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span style="color:#A6ACCD;">        Signature: Type 0, Family 0, Model 0, Stepping 0</span></span>
<span class="line"><span style="color:#A6ACCD;">        Flags: None</span></span>
<span class="line"><span style="color:#A6ACCD;">        Version: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        Voltage: 1.2 V</span></span>
<span class="line"><span style="color:#A6ACCD;">        External Clock: 5866 MHz</span></span>
<span class="line"><span style="color:#A6ACCD;">        Max Speed: 4400 MHz</span></span>
<span class="line"><span style="color:#A6ACCD;">        Current Speed: Unknown</span></span>
<span class="line"><span style="color:#A6ACCD;">        Status: Unpopulated</span></span>
<span class="line"><span style="color:#A6ACCD;">        Upgrade: ZIF Socket</span></span>
<span class="line"><span style="color:#A6ACCD;">        L1 Cache Handle: Not Provided</span></span>
<span class="line"><span style="color:#A6ACCD;">        L2 Cache Handle: Not Provided</span></span>
<span class="line"><span style="color:#A6ACCD;">        L3 Cache Handle: Not Provided</span></span>
<span class="line"><span style="color:#A6ACCD;">        Serial Number: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        Asset Tag: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        Part Number: Not Specified</span></span>
<span class="line"><span style="color:#A6ACCD;">        Characteristics: None</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><p>\u67E5\u770B\u5185\u5B58\u7684\u63D2\u69FD\u6570\uFF0C\u5DF2\u7ECF\u4F7F\u7528\u591A\u5C11\u63D2\u69FD\u3002\u6BCF\u6761\u5185\u5B58\u591A\u5927\uFF0C\u5DF2\u4F7F\u7528\u5185\u5B58\u591A\u5927</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dmidecode</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep -P -A5 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Memory\\s+Device</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep Size</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep -v Range </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#   Size: 2048 MB</span></span>
<span class="line"><span style="color:#676E95;">#   Size: 2048 MB</span></span>
<span class="line"><span style="color:#676E95;">#   Size: 4096 MB</span></span>
<span class="line"><span style="color:#676E95;">#   Size: No Module Installed</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u67E5\u770B\u5185\u5B58\u652F\u6301\u7684\u6700\u5927\u5185\u5B58\u5BB9\u91CF</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dmidecode</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep -P </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Maximum\\s+Capacity</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#  Maximum Capacity: 16 GB</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u67E5\u770B\u5185\u5B58\u7684\u9891\u7387</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">dmidecode</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep -A16 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Memory Device</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#   Memory Device</span></span>
<span class="line"><span style="color:#676E95;">#     Array Handle: 0x1000</span></span>
<span class="line"><span style="color:#676E95;">#     Error Information Handle: Not Provided</span></span>
<span class="line"><span style="color:#676E95;">#     Total Width: 72 bits</span></span>
<span class="line"><span style="color:#676E95;">#     Data Width: 64 bits</span></span>
<span class="line"><span style="color:#676E95;">#     Size: 2048 MB</span></span>
<span class="line"><span style="color:#676E95;">#     Form Factor: DIMM</span></span>
<span class="line"><span style="color:#676E95;">#     Set: 1</span></span>
<span class="line"><span style="color:#676E95;">#     Locator: DIMM_A1</span></span>
<span class="line"><span style="color:#676E95;">#     Bank Locator: Not Specified</span></span>
<span class="line"><span style="color:#676E95;">#     Type: DDR3</span></span>
<span class="line"><span style="color:#676E95;">#     Type Detail: Synchronous Unbuffered (Unregistered)</span></span>
<span class="line"><span style="color:#676E95;">#     Speed: 1333 MHz</span></span>
<span class="line"><span style="color:#676E95;">#     Manufacturer: 00CE000080CE</span></span>
<span class="line"><span style="color:#676E95;">#     Serial Number: 4830F3E1</span></span>
<span class="line"><span style="color:#676E95;">#     Asset Tag: 01093200</span></span>
<span class="line"><span style="color:#676E95;">#     Part Number: M391B5673EH1-CH9</span></span>
<span class="line"><span style="color:#676E95;">#   --</span></span>
<span class="line"><span style="color:#676E95;">#   Memory Device</span></span>
<span class="line"><span style="color:#676E95;">#     Array Handle: 0x1000</span></span>
<span class="line"><span style="color:#676E95;">#     Error Information Handle: Not Provided</span></span>
<span class="line"><span style="color:#676E95;">#     Total Width: 72 bits</span></span>
<span class="line"><span style="color:#676E95;">#     Data Width: 64 bits</span></span>
<span class="line"><span style="color:#676E95;">#     Size: 2048 MB</span></span>
<span class="line"><span style="color:#676E95;">#     Form Factor: DIMM</span></span>
<span class="line"><span style="color:#676E95;">#     Set: 1</span></span>
<span class="line"><span style="color:#676E95;">#     Locator: DIMM_A2</span></span>
<span class="line"><span style="color:#676E95;">#     Bank Locator: Not Specified</span></span>
<span class="line"><span style="color:#676E95;">#     Type: DDR3</span></span>
<span class="line"><span style="color:#676E95;">#     Type Detail: Synchronous Unbuffered (Unregistered)</span></span>
<span class="line"><span style="color:#676E95;">#     Speed: 1333 MHz</span></span>
<span class="line"><span style="color:#676E95;">#     Manufacturer: 00AD000080AD</span></span>
<span class="line"><span style="color:#676E95;">#     Serial Number: 1BA1F0B5</span></span>
<span class="line"><span style="color:#676E95;">#     Asset Tag: 01110900</span></span>
<span class="line"><span style="color:#676E95;">#     Part Number: HMT325U7BFR8C-H9</span></span>
<span class="line"><span style="color:#676E95;">#   --</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dmidecode</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep -A16 </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Memory Device</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">grep </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Speed</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#  Speed: 1333 MHz</span></span>
<span class="line"><span style="color:#676E95;">#  Speed: 1333 MHz</span></span>
<span class="line"><span style="color:#676E95;">#  Speed: 1333 MHz</span></span>
<span class="line"><span style="color:#676E95;">#  Speed: Unknown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#C3E88D;">shell</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,27),r=[e];function o(c,i,t,b,D,y){return a(),n("div",null,r)}const m=s(p,[["render",o]]);export{A as __pageData,m as default};