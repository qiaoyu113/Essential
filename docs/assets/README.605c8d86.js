import{_ as x}from"./index.17927878.js";import{l as _,r as m,E as o,a as l,o as g,f as h,w as s,e as n,c as p,b as y,R as f}from"./vendor.184a8d03.js";const F={name:"TimePicker",setup(){const d=_(new Date(2016,9,10,18,40));return{listQuery:m({TimePickerValue:d}),formItem:[{type:"es-time-picker",label:"TimePicker",key:"TimePickerValue",col:12,width:"100px",tagAttrs:{},listeners:{change:e=>{o({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}],rules:{TimePickerValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function k(d,r,e,t,u,c){const a=l("EsForm"),i=l("EsContainer");return g(),h(i,{title:"TimePicker\u7EC4\u4EF6"},{default:s(()=>[n(a,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var E=x(F,[["render",k]]);const T={name:"TimePicker",setup(){const d=_(new Date(2016,9,10,18,40));return{listQuery:m({TimePickerValue:d}),formItem:[{type:"es-time-picker",label:"TimePicker",key:"TimePickerValue",col:12,width:"100px",tagAttrs:{"arrow-control":!0},listeners:{change:e=>{o({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}],rules:{TimePickerValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function P(d,r,e,t,u,c){const a=l("EsForm"),i=l("EsContainer");return g(),h(i,{title:"TimePicker arrow-control\u5C5E\u6027 "},{default:s(()=>[n(a,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var b=x(T,[["render",P]]);const w={name:"TimePicker",setup(){return{listQuery:m({TimePickerValue:[new Date(2021,9,10,8,40),new Date(2021,9,10,9,40)],TimePickerTwoValue:[new Date(2021,10,10,12,40),new Date(2021,10,20,16,40)]}),formItem:[{type:"es-time-picker",label:"TimePicker",key:"TimePickerValue",col:16,width:"100px",tagAttrs:{"start-placeholder":"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4","is-range":!0},listeners:{change:e=>{o({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}},{type:"es-time-picker",label:"TimePicker",key:"TimePickerTwoValue",col:16,width:"100px",tagAttrs:{"start-placeholder":"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4","is-range":!0,"arrow-control":!0},listeners:{change:e=>{o({message:"\u5DF2\u7ECF\u9009\u4E2D\uFF1A"+e,type:"success"})}}}],rules:{TimePickerValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}],TimePickerTwoValue:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"change"}]}}}};function C(d,r,e,t,u,c){const a=l("EsForm"),i=l("EsContainer");return g(),h(i,{title:"TimePicker is-range\u5C5E\u6027 "},{default:s(()=>[n(a,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var D=x(w,[["render",C]]);const v={class:"markdown-body"},V=y("h1",null,"TimePicker\u7EC4\u4EF6",-1),B=y("h3",null,"\u793A\u4F8B",-1),q=y("h3",null,"\u7BAD\u5934\u9009\u62E9\u4EFB\u610F\u65F6\u95F4\u70B9",-1),$=y("h3",null,"\u4EFB\u610F\u65F6\u95F4\u8303\u56F4",-1),A=f('<h3>\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>readonly</code></td><td style="text-align:center;">\u53EA\u8BFB</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>disabled</code></td><td style="text-align:center;">\u7981\u7528</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>editable</code></td><td style="text-align:center;">\u6587\u672C\u6846\u53EF\u8F93\u5165</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code> true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>clearable</code></td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>true</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>size</code></td><td style="text-align:center;">\u8F93\u5165\u6846\u5C3A\u5BF8</td><td style="text-align:center;">string</td><td style="text-align:center;">large/medium/small/mini</td><td style="text-align:center;"><code>large</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>placeholder</code></td><td style="text-align:center;">\u975E\u8303\u56F4\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u5185\u5BB9</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>start-placeholder</code></td><td style="text-align:center;">\u8303\u56F4\u9009\u62E9\u65F6\u5F00\u59CB\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>end-placeholder</code></td><td style="text-align:center;">\u8303\u56F4\u9009\u62E9\u65F6\u7ED3\u675F\u65E5\u671F\u7684\u5360\u4F4D\u5185\u5BB9</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>is-range</code></td><td style="text-align:center;">\u662F\u5426\u4E3A\u65F6\u95F4\u8303\u56F4\u9009\u62E9</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>false</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>format</code></td><td style="text-align:center;">\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F</td><td style="text-align:center;">string</td><td style="text-align:center;">see date formats</td><td style="text-align:center;"><code>YYYY-MM-DD HH:mm:ss</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>popper-class</code></td><td style="text-align:center;">TimePicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>range-separator</code></td><td style="text-align:center;">\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>&#39;-&#39;</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>default-value</code></td><td style="text-align:center;">\u9009\u62E9\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u663E\u793A\u7684\u65F6\u95F4</td><td style="text-align:center;">Date(TimePicker) / string(TimeSelect)</td><td style="text-align:center;">a\u53EF\u88ABnew Date()\u89E3\u6790(TimePicker) / \u53EF\u9009\u503C(TimeSelect)</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>name</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>range-separator</code></td><td style="text-align:center;">\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>&#39;-&#39;</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>prefix-icon</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>Date</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>clear-icon</code></td><td style="text-align:center;">\u6E05\u9664\u65E5\u671F\u56FE\u6807</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>CircleClose</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>disabled-hours</code></td><td style="text-align:center;">\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</td><td style="text-align:center;">function</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>disabled-minutes</code></td><td style="text-align:center;">\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</td><td style="text-align:center;">function(selectedHour)</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>disabled-seconds</code></td><td style="text-align:center;">\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</td><td style="text-align:center;">function(selectedHour, selectedMinute)</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>-</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table>',4),H={setup(d,{expose:r}){return r({frontmatter:{}}),(t,u)=>{const c=l("Preview");return g(),p("div",v,[V,B,n(c,{"comp-name":"TimePicker","demo-name":"demo"},{default:s(()=>[n(E)]),_:1}),q,n(c,{"comp-name":"TimePicker","demo-name":"demo2"},{default:s(()=>[n(b)]),_:1}),$,n(c,{"comp-name":"TimePicker","demo-name":"demo3"},{default:s(()=>[n(D)]),_:1}),A])}}};export{H as default};
