import{l as g,r as _,a as t,o as r,f as v,w as l,e as c,c as h,b as p,Q as E,g as i}from"./vendor.3dfe569d.js";import{_ as f}from"./index.0e7570c9.js";const b={name:"Essential",setup(){const n=g("");return{listQuery:_({inputValue:n}),formItem:[{type:"es-input",label:"\u4E3E\u4F8B",key:"inputValue",col:8,width:"100px",attrs:{placeholder:"\u8BF7\u8F93\u5165"},listeners:{input:a=>{console.log("\u8F93\u5165\u5185\u5BB9\uFF1A"+a)}}}],rules:{inputValue:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}}}};function j(n,s,a,e,u,o){const d=t("EsForm"),m=t("EsContainer");return r(),v(m,{title:"Essential \u57FA\u7840\u7528\u6CD5"},{default:l(()=>[c(d,{ref:"EsForm","list-query":e.listQuery,"form-item":e.formItem,rules:e.rules},null,8,["list-query","form-item","rules"])]),_:1})}var y=f(b,[["render",j]]);const x={class:"markdown-body"},F=E(`<h1>Essential</h1><h3>\u5FEB\u901F\u4E0A\u624B</h3><hr><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Essential\u3002</p><img src="https://prod-mf-common-bucket.oss-cn-hangzhou.aliyuncs.com/img/WechatIMG127%20(1).png" width="375"><h3>\u5F15\u5165 Essential</h3><p>\u4F60\u53EF\u4EE5\u5F15\u5165\u6574\u4E2A Essential\uFF0C\u6216\u662F\u6839\u636E\u9700\u8981\u4EC5\u5F15\u5165\u90E8\u5206\u7EC4\u4EF6\u3002\u6211\u4EEC\u5148\u4ECB\u7ECD\u5982\u4F55\u5F15\u5165\u5B8C\u6574\u7684 Essential\u3002</p><p>\u5B8C\u6574\u5F15\u5165 \u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><pre>    <div class="hljs"> 
        <code class="language-javascript line-numbers">
            <p>import Vue from &#39;vue&#39;;</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import App from &#39;./App.vue&#39;;</p>
        </code>
        
        <code class="language-javascript line-numbers">
            <p>// \u5F15\u5165Element plus</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import &#39;element-plus/dist/index.css&#39;;</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import ElementPlus from &#39;element-plus&#39;;</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>// \u5F15\u5165Essential</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import &#39;es-com/dist/style.css&#39;;</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import Essential from &#39;es-com&#39;;</p>
        </code>
        <code class="language-javascript line-numbers">
            <p style="padding:10px;"> </p>
        </code>
        <code class="language-javascript line-numbers">
            <p>Vue.use(ElementPlus).use(Essential);</p>
        </code>
        <code class="language-javascript line-numbers">
            <p style="padding:10px;"> </p>
        </code>
        <code class="language-javascript line-numbers">
            <p>new Vue({</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>el: &#39;#app&#39;,</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>render: h =&gt; h(App)</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>});</p>
        </code>
    </div>
    
</pre><h3>\u4F7F\u7528\u65B9\u6CD5</h3>`,10),V=i("\u6210\u529F\u5F15\u5165\u6574\u4E2A Essential\u540E\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5566\uFF01\uFF08\u8BF7\u70B9\u51FB"),A=p("code",null,"\u67E5\u770B\u4EE3\u7801",-1),w=i("\u8FDB\u884C\u67E5\u770B\uFF09 "),C={setup(n,{expose:s}){return s({frontmatter:{}}),(e,u)=>{const o=t("Preview");return r(),h("div",x,[F,p("p",null,[V,A,w,c(o,{"comp-name":"Start","demo-name":"demo"},{default:l(()=>[c(y)]),_:1})])])}}};export{C as default};
