<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Radio组件

### 示例
<Preview comp-name="Radio" demo-name="demo">
  <demo />
</Preview>

### 禁用状态
<Preview comp-name="Radio" demo-name="demo2">
  <demo2 />
</Preview>

### 按钮样式
<Preview comp-name="Radio" demo-name="demo3">
  <demo3 />
</Preview>

### 带有边框
<Preview comp-name="Radio" demo-name="demo4">
  <demo4 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-: 
`model-value / v-model`	| 选中项绑定值 |	string / number / boolean	| — |	—
`label` |	单选框对应的值 |	string / number / boolean	| — |	—
`disabled` |	是否禁用单选框 |	boolean	| — |	false
`border` |	是否显示边框 |	boolean	| — |	false
`size` |	Radio 的尺寸 |	string	| medium / small / mini | -
`name` |	原生 name 属性 |	string	| — |	—

### 事件
事件名 | 说明 | 参数列表
:-: | :-: | :-:
`change` |	绑定值变化时触发的事件 |	选中的 Radio label 值

### Radio-group 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-: 
`model-value / v-model`	| 选中项绑定值 |	string / number / boolean	| — |	—
`size` |	单选框组尺寸|	string |	medium / small / mini |	—
`disabled` |	是否禁用|	boolean |	—	| false
`text-color` |	按钮形式的 Radio 激活时的文本颜色|	string |	— |	#ffffff
`fill` |	按钮形式的 Radio 激活时的填充色和边框色|	string |	— |	#409EFF

### Radio-group事件
事件名 | 说明 | 参数列表
:-: | :-: | :-:
`change` |	绑定值变化时触发的事件 |	选中的 Radio label 值