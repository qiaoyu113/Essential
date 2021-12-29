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

# Slider组件

### 示例
<Preview comp-name="Slider" demo-name="demo">
  <demo />
</Preview>

### 离散值
<Preview comp-name="Slider" demo-name="demo2">
  <demo2 />
</Preview>

### 带有输入框的滑块
<Preview comp-name="Slider" demo-name="demo3">
  <demo3 />
</Preview>

### 范围选择
<Preview comp-name="Slider" demo-name="demo4">
  <demo4 />
</Preview>

### 竖向模式
<Preview comp-name="Slider" demo-name="demo5">
  <demo5 />
</Preview>

### 展示标记
<Preview comp-name="Slider" demo-name="demo6">
  <demo6 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
`model-value / v-model` |	选中项绑定值 |	number |	— |	0
`min` |	最小值 |	number |	— |	0
`max` |	最大值 |	number |	—	 |100
`disabled` |	是否禁用 |	boolean |	—	 |false
`step` |	步长 |	number |	—	 |1
`show-input` |	是否显示输入框，仅在非范围选择时有效 |	boolean |	— |	false
`show-input-controls` |	在显示输入框的情况下，是否显示输入框的控制按钮 |	boolean |	— |	true
`input-size` |	输入框的尺寸 |	string |	large / medium / small / mini	| small
`show-stops` |	是否显示间断点 |	boolean |	—	 |false
`show-tooltip` |	是否显示 | tooltip |	boolean |	— |	true
`format-tooltip` |	格式化 | tooltip message |	function(value) |	— |	—
`range` |	是否为范围选择 |	boolean	 |—	 |false
`vertical` |	是否竖向模式 |	boolean |	—	 |false
`height` |	Slider 高度，当竖向模式时必填	 |string	 |— |	—
`label` |	屏幕阅读器标签 |	string	 | —	 | —
`debounce` |	输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效 |	number |	— |	300
`tooltip-class` |	tooltip 的自定义类名 |	string |	—	 | —
`marks` |	标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式	 |object |	— |	—

### 事件
事件名 | 说明 | 参数列表
:-: | :-: | :-:
`change`  |	值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）| val，新状态的值
`input` |	数据改变时触发（使用鼠标拖曳时，活动过程实时触发） |	val，改变后的值
