import{_ as x,d as b}from"./index.17927878.js";import{l as p,r as h,a as o,o as y,f as _,w as c,e as n,J as F,c as E,b as m,R as I}from"./vendor.184a8d03.js";const A={name:"Input",setup(){const e=p("");return{listQuery:h({inputValue:e}),formItem:[{type:"es-input",label:"Input",key:"inputValue",col:12,width:"100px",attrs:{disabled:!0,placeholder:"\u8BF7\u8F93\u5165"},listeners:{input:l=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+l)}}}],rules:{inputValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}}}};function C(e,r,l,t,i,s){const d=o("EsForm"),a=o("EsContainer");return y(),_(a,{title:"Input Disabled\u5C5E\u6027"},{default:c(()=>[n(d,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var k=x(A,[["render",C]]);const w={name:"Input",setup(){const e=p("");return{listQuery:h({inputValue:e}),formItem:[{type:"es-input",label:"Input",key:"inputValue",col:12,width:"100px",attrs:{placeholder:"\u8BF7\u8F93\u5165",clearable:!0},listeners:{input:l=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+l)}}}],rules:{inputValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}}}};function B(e,r,l,t,i,s){const d=o("EsForm"),a=o("EsContainer");return y(),_(a,{title:"Input Clearable\u5C5E\u6027"},{default:c(()=>[n(d,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var V=x(w,[["render",B]]);const q={name:"Input",setup(){const e=p("");return{listQuery:h({inputValue:e}),formItem:[{type:"es-input",label:"Input",key:"inputValue",col:12,width:"100px",attrs:{placeholder:"\u8BF7\u8F93\u5165",showPassword:!0},listeners:{input:l=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+l)}}}],rules:{inputValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}}}};function D(e,r,l,t,i,s){const d=o("EsForm"),a=o("EsContainer");return y(),_(a,{title:"Input ShowPassword\u5C5E\u6027"},{default:c(()=>[n(d,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var $=x(q,[["render",D]]);const Q={name:"Input",setup(){const e=p([]),r=(g,u)=>{const f=g?e.value.filter(l(g)):e.value;u(f)},l=g=>u=>u.value.toLowerCase().indexOf(g.toLowerCase())===0,t=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],i=g=>{console.log("\u9009\u4E2D\u7684\u503C",g.value)};return F(()=>{e.value=t()}),{listQuery:h({inputValue:"",inputValue2:""}),formItem:[{type:"es-autocomplete",label:"AutoFocus",key:"inputValue",col:12,width:"100px",attrs:{placeholder:"\u8BF7\u8F93\u5165",fetchSuggestions:r},listeners:{input:g=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+g)},select:i}},{type:"es-autocomplete",label:"OnFocus",key:"inputValue2",col:12,width:"100px",attrs:{placeholder:"\u8BF7\u8F93\u5165",fetchSuggestions:r,triggerOnFocus:!1},listeners:{input:g=>{console.log("\u8F93\u5165\u5185\u5BB92\uFF1A"+g)},select:i}}],rules:{inputValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],inputValue2:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}}}};function j(e,r,l,t,i,s){const d=o("EsForm"),a=o("EsContainer");return y(),_(a,{title:"Input FetchSuggestions\u5C5E\u6027"},{default:c(()=>[n(d,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var S=x(Q,[["render",j]]);const L={name:"Input",setup(){const e=p([]);let r=null;const l=(u,f)=>{const v=u?e.value.filter(t(u)):e.value;clearTimeout(r),r=setTimeout(()=>{f(v)},3e3*Math.random())},t=u=>f=>f.value.toLowerCase().indexOf(u.toLowerCase())===0,i=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],s=u=>{console.log("\u9009\u4E2D\u7684\u503C",u.value)};return F(()=>{e.value=i()}),{listQuery:h({inputValue:""}),formItem:[{type:"es-autocomplete",label:"AutoFocusAsync",key:"inputValue",col:14,width:"140px",attrs:{placeholder:"\u8BF7\u8F93\u5165",fetchSuggestions:l},listeners:{input:u=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+u)},select:s}}],rules:{inputValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}}}};function z(e,r,l,t,i,s){const d=o("EsForm"),a=o("EsContainer");return y(),_(a,{title:"Input FetchSuggestions\u5C5E\u6027"},{default:c(()=>[n(d,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var M=x(L,[["render",z]]);const O={name:"Input",setup(){const e=p("");return{listQuery:h({inputValue:e}),formItem:[{type:"es-input",label:"InputLimit",key:"inputValue",col:12,width:"100px",attrs:{placeholder:"\u8BF7\u8F93\u5165",minlength:0,maxlength:10,showWordLimit:!0},listeners:{input:l=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+l)}}}],rules:{inputValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}}}};function P(e,r,l,t,i,s){const d=o("EsForm"),a=o("EsContainer");return y(),_(a,{title:"Input Minlength\u548CMaxlength\u5C5E\u6027"},{default:c(()=>[n(d,{ref:"EsForm","list-query":t.listQuery,"form-item":t.formItem,rules:t.rules},null,8,["list-query","form-item","rules"])]),_:1})}var N=x(O,[["render",P]]);const R={class:"markdown-body"},T=m("h1",null,"Input\u7EC4\u4EF6",-1),J=m("h3",null,"\u793A\u4F8B",-1),W=m("h3",null,"\u7981\u7528\u72B6\u6001",-1),G=m("h3",null,"\u4E00\u952E\u6E05\u7A7A",-1),H=m("h3",null,"\u5BC6\u7801\u7C7B\u578B\u7684\u8F93\u5165\u6846",-1),K=m("h3",null,"\u81EA\u52A8\u8865\u5168\u8F93\u5165\u6846",-1),U=m("h3",null,"\u8FDC\u7A0B\u641C\u7D22",-1),X=m("h3",null,"\u8F93\u5165\u957F\u5EA6\u9650\u5236",-1),Y=I('<h3>attrs\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;"><code>type</code></td><td style="text-align:center;">\u7C7B\u578B</td><td style="text-align:center;">string</td><td style="text-align:center;">text\uFF0Ctextarea \u548C\u5176\u4ED6</td><td style="text-align:center;"><code>text</code></td></tr><tr><td style="text-align:center;"><code>maxlength</code></td><td style="text-align:center;">\u6700\u5927\u8F93\u5165\u957F\u5EA6</td><td style="text-align:center;">string / number</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>minlength</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5C0F\u8F93\u5165\u957F\u5EA6</td><td style="text-align:center;">number</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>show-word-limit</code></td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1\uFF0C\u53EA\u5728 type = \u201Ctext\u201D \u6216 type = \u201Ctextarea\u201D \u65F6\u6709\u6548</td><td style="text-align:center;">boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>placeholder</code></td><td style="text-align:center;">\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>clearable</code></td><td style="text-align:center;">\u662F\u5426\u53EF\u6E05\u7A7A</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>show-password</code> \u662F\u5426\u663E\u793A\u5207\u6362\u5BC6\u7801\u56FE\u6807</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>disabled</code></td><td style="text-align:center;">\u662F\u5426\u7981\u7528</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>size</code></td><td style="text-align:center;">\u8F93\u5165\u6846\u5C3A\u5BF8\uFF0C\u53EA\u5728type !=\u201Ctextarea\u201D \u65F6\u6709\u6548</td><td style="text-align:center;">string</td><td style="text-align:center;">medium / small / mini</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>prefix-icon</code> \u81EA\u5B9A\u4E49\u524D\u7F00\u56FE\u6807</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>suffix-icon</code> \u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807</td><td style="text-align:center;">string / Component</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>rows</code></td><td style="text-align:center;">\u8F93\u5165\u6846\u884C\u6570\uFF0C\u53EA\u5BF9type=\u201Ctextarea\u201D \u6709\u6548</td><td style="text-align:center;">number</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;"><code>autosize</code></td><td style="text-align:center;">textarea\u9AD8\u5EA6\u662F\u5426\u81EA\u9002\u5E94\uFF0C\u53EA\u5728type=\u201Ctextarea\u201D \u65F6\u751F\u6548\u3002 \u53EF\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982 { minRows: 2, maxRows: 6 } boolean / object</td><td style="text-align:center;">false</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>autocomplete</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u8865\u5168</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">off</td></tr><tr><td style="text-align:center;"><code>name</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>readonly</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB</td><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>max</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5927\u503C</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>min</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u6700\u5C0F\u503C</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>step</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8F93\u5165\u5B57\u6BB5\u7684\u5408\u6CD5\u6570\u5B57\u95F4\u9694</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>resize</code></td><td style="text-align:center;">\u63A7\u5236\u662F\u5426\u80FD\u88AB\u7528\u6237\u7F29\u653E</td><td style="text-align:center;">string none / both / horizontal / vertical</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>autofocus</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027\uFF0C\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;"><code>form</code></td><td style="text-align:center;">\u539F\u751F\u5C5E\u6027</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">\u2014</td></tr><tr><td style="text-align:center;"><code>label</code></td><td style="text-align:center;">\u8F93\u5165\u6846\u5173\u8054\u7684label \u6587\u5B57</td><td style="text-align:center;">string</td><td style="text-align:center;">\u2014</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>tabindex</code></td><td style="text-align:center;">\u8F93\u5165\u6846\u7684tabindex</td><td style="text-align:center;">string / number</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>validate-event</code></td><td style="text-align:center;">\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C boolean</td><td style="text-align:center;">-</td><td style="text-align:center;">true</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;"><code>input-style</code></td><td style="text-align:center;">input \u5143\u7D20\u6216 textarea \u5143\u7D20\u7684 style</td><td style="text-align:center;">object</td><td style="text-align:center;">-</td><td style="text-align:center;">{}</td></tr></tbody></table><h3>listeners\u4E8B\u4EF6</h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>change</code></td><td style="text-align:center;">\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td style="text-align:center;">(value: string</td></tr><tr><td style="text-align:center;"><code>blur</code></td><td style="text-align:center;">\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:center;">(event: Event)</td></tr><tr><td style="text-align:center;"><code>focus</code></td><td style="text-align:center;">\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:center;">(event: Event)</td></tr><tr><td style="text-align:center;"><code>input</code></td><td style="text-align:center;">\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td style="text-align:center;">(value: string</td></tr><tr><td style="text-align:center;"><code>clear</code></td><td style="text-align:center;">\u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1</td><td style="text-align:center;">\u2014</td></tr></tbody></table>',4),et={setup(e,{expose:r}){return r({frontmatter:{}}),(t,i)=>{const s=o("Preview");return y(),E("div",R,[T,J,n(s,{"comp-name":"Input","demo-name":"demo"},{default:c(()=>[n(b)]),_:1}),W,n(s,{"comp-name":"Input","demo-name":"demo2"},{default:c(()=>[n(k)]),_:1}),G,n(s,{"comp-name":"Input","demo-name":"demo3"},{default:c(()=>[n(V)]),_:1}),H,n(s,{"comp-name":"Input","demo-name":"demo4"},{default:c(()=>[n($)]),_:1}),K,n(s,{"comp-name":"Input","demo-name":"demo5"},{default:c(()=>[n(S)]),_:1}),U,n(s,{"comp-name":"Input","demo-name":"demo6"},{default:c(()=>[n(M)]),_:1}),X,n(s,{"comp-name":"Input","demo-name":"demo8"},{default:c(()=>[n(N)]),_:1}),Y])}}};export{et as default};
