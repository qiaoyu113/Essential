<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# CheckBox组件

### 示例
<Preview comp-name="CheckBox" demo-name="demo">
  <demo />
</Preview>

### 禁用状态
<Preview comp-name="CheckBox" demo-name="demo2">
  <demo2 />
</Preview>

### 中间状态
<Preview comp-name="CheckBox" demo-name="demo3">
  <demo3 />
</Preview>

### 可选项目数量的限制
<Preview comp-name="CheckBox" demo-name="demo4">
  <demo4 />
</Preview>

### 按钮样式
<Preview comp-name="CheckBox" demo-name="demo5">
  <demo5 />
</Preview>

### 按钮样式
<Preview comp-name="CheckBox" demo-name="demo6">
  <demo6 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`label` | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean / object | - | `-` | 否 
`true-label` | 选中时的值 | string / number | - | `-` | 否
`false-label` | 没有选中时的值 | string / number | - | `-` | 否
`disabled` | 	是否禁用 | boolean | - | `false` | 否
`border` | 是否显示边框| 	boolean | - | `false` | 否
`size` | Checkbox 的尺寸 | string | medium / small / mini | `-` | 否
`name` | 原生 name 属性 | string | - | `-` | 否
`checked` | 当前是否勾选 | string | boolean | `false` | 否
`indeterminate` | 设置 indeterminate 状态，只负责样式控制 | boolean | - | `false` | 否

### 事件
事件名 | 说明 | 回调参数 | 参数说明
:-: | :-: | :-: | :-:
`change` | 当绑定值变化时触发的事件 | value | -
