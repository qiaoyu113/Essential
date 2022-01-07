<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# DateTimePicker组件

### 日期和时间点
<Preview comp-name="DateTimePicker" demo-name="demo">
  <demo />
</Preview>

### 日期和时间范围
<Preview comp-name="DateTimePicker" demo-name="demo2">
  <demo2 />
</Preview>

### 开始日期和结束日期的默认值
<Preview comp-name="DateTimePicker" demo-name="demo3">
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
`type` | 显示类型 | string | year/month/date/datetime/ week/datetimerange/daterange | `date` | 否
`format` | 显示在输入框中的格式 | string | see date formats | `YYYY-MM-DD HH:mm:ss` | 否

### 事件
事件名 | 说明 | 回调参数 | 参数说明
:-: | :-: | :-: | :-:
`change` | 用户确认选定的值时触发 | 	value
`blur` | 在组件 Input 失去焦点时触发 | instance 
`focus` | 在组件 Input 获得焦点时触发 | instance
`calendar-change` | 如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 datetimerange 才生效 | 	[Date, Date]


### 方法
方法名 | 说明 | 回调参数 | 参数说明
:-: | :-: | :-: | :-: 
`focus` | 使 input 获取焦点
