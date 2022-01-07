<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# TimePicker组件

### 示例
<Preview comp-name="TimePicker" demo-name="demo">
  <demo />
</Preview>

### 箭头选择任意时间点
<Preview comp-name="TimePicker" demo-name="demo2">
  <demo2 />
</Preview>

### 任意时间范围
<Preview comp-name="TimePicker" demo-name="demo3">
  <demo3 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`readonly` | 只读 | boolean | - | `false` | 否 
`disabled` | 禁用 | boolean | - | `false` | 否
`editable` | 文本框可输入 | boolean | - | `	true` | 否
`clearable` | 是否显示清除按钮 | boolean | - | `true` | 否
`size` | 输入框尺寸 | string | large/medium/small/mini | `large` | 否
`placeholder` | 非范围选择时的占位内容 | string | - | `-` | 否
`start-placeholder` | 范围选择时开始日期的占位内容 | string | - | `-` | 否
`end-placeholder` | 范围选择时结束日期的占位内容 | string | - | `-` | 否
`is-range` | 是否为时间范围选择 | boolean | - | `false` | 否
`format` | 显示在输入框中的格式 | string | see date formats | `YYYY-MM-DD HH:mm:ss` | 否
`popper-class` | TimePicker 下拉框的类名 | string | - | `-` | 否
`range-separator` | 选择范围时的分隔符 | string | -| `'-'` | 否
`default-value` | 选择器打开时默认显示的时间 | Date(TimePicker) / string(TimeSelect) | a可被new Date()解析(TimePicker) / 可选值(TimeSelect) | `-` | 否
`name` | 原生属性 | string | - | `-` | 否
`range-separator` | 选择范围时的分隔符 | string| - | `'-'` | 否
`prefix-icon` | 自定义前缀图标 | string / Component | - | `Date` | 否
`clear-icon` | 清除日期图标 | string / Component | - | `CircleClose` | 否
`disabled-hours` | 禁止选择部分小时选项 | function | - | `-` | 否
`disabled-minutes` | 禁止选择部分分钟选项 | function(selectedHour) | - | `-` | 否
`disabled-seconds` | 禁止选择部分秒选项 | function(selectedHour, selectedMinute) | - | `-` | 否

### 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
