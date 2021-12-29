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
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
`model-value / v-model` |	绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型 |	boolean / string / number |	— |	—
`disabled` |	是否禁用 |	boolean |	— |	false
`loading` |	是否显示加载中 |	boolean |	— |	false
`width` |	switch 的宽度 |	number |	— |	40px
`inline-prompt` |	无论图标或文本是否显示在点内，只会呈现文本的第一个字符 |	boolean |	— |	false
`active-icon` |	switch 状态为 on 时所显示图标，设置此项会忽略 active-text	| string / Component |	— |	—
`inactive-icon` |	switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text |	string / Component |	—	 |—
`active-text` |	switch 状态为 on 时的文字描述 |	string |	— |	—
`inactive-text` |	switch 的状态为 off 时的文字描述 |	string |	— |	—
`active-value` |	switch 状态为 on 时的值 |	boolean / string / number |	— |	true
`inactive-value` |	switch的状态为 off 时的值 |	boolean / string / number |	— |	false
`active-color` |	switch的值为 on 时的颜色 |	string |	— |	#409EFF
`inactive-color` |	switch的值为 off 的颜色	 |string |	—	 | #C0CCDA
`border-color` |	switch 边框颜色 |	string |	— |	—
`string` |	switch 对应的 name 属性 |	string |	— |	—
`validate-event` |	输入时是否触发表单的校验 |	boolean |	—	 | true
`before-change` |	switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换 |	function |	—	 |—

### 事件
事件名 | 说明 | 参数列表
:-: | :-: | :-:
`change` |	switch | 状态发生变化时的回调函数	val，新状态的值

### 方法
方法 | 说明 | 参数
:-: | :-: | :-:
`focus` |	使 Switch 获取焦点 |	—
