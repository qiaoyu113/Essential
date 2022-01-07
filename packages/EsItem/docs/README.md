<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# EsItem组件

### 基础示例
<Preview comp-name="EsItem" demo-name="demo">
  <demo />
</Preview>

### 配合EsContainer
<Preview comp-name="EsItem" demo-name="demo2">
  <demo2 />
</Preview>

### slot插槽
<Preview comp-name="EsItem" demo-name="demo3">
  <demo3 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`name` | 配置标题文案 | string | - | - | 是
`value` | 配置展示内容 | string | - | - | 是
`type` | 配置展示种类/slot配置name | image、YN（1是/0否） | - | - | 是
`slot` | 是否使用插槽 | Boolean | - | false | 否

