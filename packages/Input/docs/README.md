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

# Input组件

### 基础用法
<Preview comp-name="Input" demo-name="demo">
  <demo />
</Preview>

### 禁用状态
<Preview comp-name="Input" demo-name="demo2">
  <demo2 />
</Preview>

### 一键清空
<Preview comp-name="Input" demo-name="demo3">
  <demo3 />
</Preview>

### 密码类型的输入框
<Preview comp-name="Input" demo-name="demo4">
  <demo4 />
</Preview>

### 自动补全输入框
<Preview comp-name="Input" demo-name="demo5">
  <demo5 />
</Preview>

### 远程搜索
<Preview comp-name="Input" demo-name="demo6">
  <demo6 />
</Preview>

### 自定义建议模板
<Preview comp-name="Input" demo-name="demo7">
  <demo7 />
</Preview>

### attrs属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-: 
`type` | 类型 | string | text，textarea 和其他 | `text`
`arg2` | 第二个参数 | string | - | `default`

### listeners事件
事件名 | 说明 | 参数说明
:-: | :-: | :-: 
`select` | 点击选中建议项时触发 | 选中的建议项
`change` | 在 Input 值改变时触发 | (value: string | number)
