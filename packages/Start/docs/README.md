<!-- 加载 demo 组件 start -->
<script setup>
import Prism from 'prismjs';
import '@/assets/prism.css';
import demo from './demo.vue'

</script>
# Essential

### 快速上手
---
本节将介绍如何在项目中使用 Essential。

<img src="https://prod-mf-common-bucket.oss-cn-hangzhou.aliyuncs.com/img/WechatIMG127%20(1).png" width="375">

### 引入 Essential
你可以引入整个 Essential，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Essential。

完整引入
在 main.js 中写入以下内容：
<pre>
    <div class="hljs"> 
        <code class="language-javascript line-numbers">
            <p>import Vue from 'vue';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import App from './App.vue';</p>
        </code>
        <!-- <code class="language-javascript line-numbers">
            <p>import ElementUI from 'element-ui';</p>
        </code> -->
        <code class="language-javascript line-numbers">
            <p>// 引入Element plus</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import 'element-plus/dist/index.css';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import ElementPlus from 'element-plus';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>// 引入Essential</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import 'es-com/dist/style.css';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import Essential from 'es-com';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p style="padding: 10px;"> </p>
        </code>
        <code class="language-javascript line-numbers">
            <p>Vue.use(ElementPlus).use(Essential);</p>
        </code>
        <code class="language-javascript line-numbers">
            <p style="padding: 10px;"> </p>
        </code>
        <code class="language-javascript line-numbers">
            <p>new Vue({</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>el: '#app',</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>render: h => h(App)</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>});</p>
        </code>
    </div>
    <style>
        .hljs {
            line-height: 1.8;
            font-size: 12px;
            padding: 18px 24px;
            background-color: #fafafa;
            border: 1px solid #eaeefb;
            margin-bottom: 25px;
            border-radius: 4px;
            -webkit-font-smoothing: auto;
        }
        p {
            display: block;
        }
    </style>
</pre>

### 使用方法
成功引入整个 Essential后，就可以直接使用啦！（请点击`查看代码`进行查看）
<Preview comp-name="Start" demo-name="demo">
  <demo />
</Preview>