<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import demo8 from './demo8.vue'
import demo9 from './demo9.vue'
import demo10 from './demo10.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Virtualized Select组件

### 示例
<Preview comp-name="VirtualizedSelect" demo-name="demo">
  <demo />
</Preview>

### 多选
<Preview comp-name="VirtualizedSelect" demo-name="demo2">
  <demo2 />
</Preview>

### 隐藏多余标签的多选
<Preview comp-name="VirtualizedSelect" demo-name="demo3">
  <demo3 />
</Preview>

### 可过滤的多选
<Preview comp-name="VirtualizedSelect" demo-name="demo4">
  <demo4 />
</Preview>

### 禁用选择器本身或选项
<Preview comp-name="VirtualizedSelect" demo-name="demo5">
  <demo5 />
</Preview>

### 给选项进行分组
<Preview comp-name="VirtualizedSelect" demo-name="demo6">
  <demo6 />
</Preview>

<!-- ### 自定义选项的渲染模板
<Preview comp-name="VirtualizedSelect" demo-name="demo7">
  <demo7 />
</Preview> -->

### 一键清除
<Preview comp-name="VirtualizedSelect" demo-name="demo8">
  <demo8 />
</Preview>

### 创建临时选项
<Preview comp-name="VirtualizedSelect" demo-name="demo9">
  <demo9 />
</Preview>

### 远程搜索
<Preview comp-name="VirtualizedSelect" demo-name="demo10">
  <demo10 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
`model-value / v-model` |	绑定值 |	string / number / boolean / object | — | —
`multiple` |	是否多选 |	boolean |	— |	false
`disabled` |	是否禁用 |	boolean |	— |	false
`value-key` |	作为 value 唯一标识的键名，绑定值为对象类型时必填 |	string |	— |	value
`size` |	输入框尺寸 |	string |	medium/small/mini |	— |
`clearable` |	是否可以清空选项 |	boolean |	— |	false
`collapse-tags` |	多选时是否将选中值按文字的形式展示 |	boolean |	—	 |false
`multiple-limit` |	多选时用户最多可以选择的项目数， 为 0 则不限制 |	number |	— |	0
`name` |	选择器的输入框的原生 | name 属性 |	string |	— |	—
`autocomplete` |	选择器的输入框的原生 autocomplete 属性 |	string |	— |	off
`placeholder` |	占位符 |	string |	— |	Please select
`filterable` |	是否可搜索 |	boolean |	— |	false
`allow-create` |	是否允许用户创建新条目， 只有当 filterable 设置为 true 时才会生效。 |	boolean |	— |	false
`no-data-text` |	选项为空时显示的文字，也可以使用 empty 插槽自定义该内容 |	string |	— |	No Data
`popper-class` |	下拉菜单的类名 |	string |	— |	—
`popper-append-to-body` |	是否将弹出框插入至 body 元素。 在弹出框的定位出现问题时，可将该属性设置为 false |	boolean |	- |	false
`popper-options` |	popper.js 的参数 |	object |	- |	-
`automatic-dropdown` |	对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单	 |boolean |	- |	false
`clear-icon |`	自定义清除图标 |	string / Component |	—	 |CircleClose
`height` |	下拉菜单的高度，每一个子选项的高度是 34px |	number |	-	 |170px
`scrollbar-always-on` |	控制是否总是展示滚动条 |	boolean |	- |	false

### 事件
事件名 | 说明 | 参数列表
:-: | :-: | :-:
`change` |	选中值发生变化时触发 |	val，目前的选中值
`visible-change` |	下拉框出现/隐藏时触发 |	val，出现则为 true，隐藏则为 false
`remove-tag` |	多选模式下移除tag时触发 |	val，移除的tag值
`clear` |	可清空的单选模式下用户点击清空按钮时触发 |	— |
`blur` |	当选择器的输入框失去焦点时触发 |	(event: FocusEvent)
`focus` |	当选择器的输入框获得焦点时触发 |	(event: FocusEvent)
