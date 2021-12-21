<!-- 加载 demo 组件 start -->
<script setup>
import Prism from 'prismjs';
import '@/assets/prism.css';
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
            <p>import ElementUI from 'element-ui';</p>
            <p>import App from './App.vue';</p>
            <p>Vue.use(ElementUI);</p>
            <p style="padding: 10px;"> </p>
            <p>new Vue({</p>
            <p>el: '#app',</p>
            <p>render: h => h(App)</p>
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
    </style>
</pre>

