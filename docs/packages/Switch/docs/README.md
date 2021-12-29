<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Switch组件

### 示例
<Preview comp-name="Switch" demo-name="demo">
  <demo />
</Preview>

### 文字描述
<Preview comp-name="Switch" demo-name="demo2">
  <demo2 />
</Preview>

### 显示自定义图标
<Preview comp-name="Switch" demo-name="demo3">
  <demo3 />
</Preview>

<!-- ### 扩展的 value 类型
<Preview comp-name="Switch" demo-name="demo4">
  <demo4 />
</Preview> -->

### 禁用状态
<Preview comp-name="Switch" demo-name="demo5">
  <demo5 />
</Preview>

### 加载中
<Preview comp-name="Switch" demo-name="demo6">
  <demo6 />
</Preview>

### 阻止切换
<Preview comp-name="Switch" demo-name="demo7">
  <demo7 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`arg1` | 第一个参数 | string | - | `default` | 否 
`arg2` | 第二个参数 | string | - | `default` | 否

### 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
