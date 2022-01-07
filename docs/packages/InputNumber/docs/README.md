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

# InputNumber组件

### 示例
<Preview comp-name="InputNumber" demo-name="demo">
  <demo />
</Preview>

### 禁用状态
<Preview comp-name="InputNumber" demo-name="demo2">
  <demo2 />
</Preview>

### 步进
<Preview comp-name="InputNumber" demo-name="demo3">
  <demo3 />
</Preview>

### 严格步进
<Preview comp-name="InputNumber" demo-name="demo4">
  <demo4 />
</Preview>

### 精度
<Preview comp-name="InputNumber" demo-name="demo5">
  <demo5 />
</Preview>

### 不同的输入框尺寸
<Preview comp-name="InputNumber" demo-name="demo7">
  <demo7 />
</Preview>

### 按钮位置
<Preview comp-name="InputNumber" demo-name="demo6">
  <demo6 />
</Preview>


### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`model-value / v-model` |	选中项绑定值 |	number / undefined | —
`min` |	设置计数器允许的最小值 |	number |	— |	-Infinity
`max` |	设置计数器允许的最大值 |	number |	— |	Infinity
`step` |	计数器步长 |	number |	— |	1
`step-strictly`	是否只能输入 step 的倍数 |	boolean |	— |	false
`precision` |	数值精度 |	number |	— |	—
`size` |	计数器尺寸 |	string |	large/medium/small/mini |	large
`disabled` |	是否禁用计数器 |	boolean |	— |	false
`controls` |	是否使用控制按钮 |	boolean |	— |	true
`controls-position`	控制按钮位置 |	string |	right |	-
`name` |	原生 name 属性 |	string |	— |	—
`label` |	输入框关联的 label 文字 |	string |	— |	—
`placeholder` |	输入框默认 | placeholder |	string |	- |	-

### 事件
事件名 | 说明 | 回调参数
:-: | :-: | :-: 
`change` |	绑定值被改变时触发 |	(currentValue: number / NaN, oldValue: number / NaN)
`blur` |	在组件 Input 失去焦点时触发 |	(event: Event)
`focus` |	在组件 Input 获得焦点时触发 |	(event: Event)

### 方法
方法名 | 说明	| 参数
:-: | :-: | :-: 
`focus` |	使 input 组件获得焦点	| -
`blur` |	使 input 组件失去焦点	| —