# Essential

### 介绍
---

`Essential` 是一款结合`Element plus` + `Vue3`开发的快速页面生成组件库，与`ElementUI`不同的是，不需要写过多的`view`层，只需要通过简单的`Js`代码便可实现`ElementUI`的所有组建。

<img src="https://prod-mf-common-bucket.oss-cn-hangzhou.aliyuncs.com/img/WechatIMG127%20(1).png" width="375">

### 项目架构版本
| Vue | Element-Plus | TypeScript |
| ------ | ------ | ------ |
| v3.2.26 | v1.2.0-beta.6 | v4.4.4 |

| Author | E-mail |
| ------ | ----- |
| [@乔宇(Joey)](http://github.com/qiaoyu113) | 527324363@qq.com |

| Team Member | E-mail |
| ------ | ------ |
| 张慧慧 |  |
| 王云芳 |  |

### 安装
---
###
### 
推荐使用 `npm` 的方式安装，它能更好地和 `webpack`、`vite` 等打包工具配合使用。

（ * 如果您已搭建好项目并已安装`element-plus`，可直接进行 " Step 4 " ）
# 
### Step 1
先搭建vue3环境,安装Vue-cli 3.x
```
npm install -g @vue/cli  
```
# 
# 
### Step 2
新建项目，以下我新建一个名称为`my-vue`的项目
```
vue create my-vue
```
enter之后，根据项目提示，接下来会让你选择一个预设, 这里就不展开赘述，大家可以到官网查看相关文档。

# 
# 
###  Step 3
构建完成后，安装`Element-plus`
```
npm install element-plus --save
```

# 
# 
###  Step 4
安装`Essential`，大功告成！
```
npm instal es-com
```
<!-- 加载 demo 组件 start -->
<script setup>
import Prism from 'prismjs';
import '@/assets/prism.css';
import demo from './packages/Start/docs/demo.vue'

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
            <p>import ElementUI from 'element-ui';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import Essential from 'es-com';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>import App from './App.vue';</p>
        </code>
        <code class="language-javascript line-numbers">
            <p>Vue.use(ElementUI).use(Essential);</p>
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

大功告成！
