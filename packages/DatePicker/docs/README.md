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
import demo11 from './demo11.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# DatePicker组件

### 基础用法
<Preview comp-name="DatePicker" demo-name="demo">
  <demo />
</Preview>

### 配置快捷选项
<Preview comp-name="DatePicker" demo-name="demo2">
  <demo2 />
</Preview>

### 其他日期单位
<Preview comp-name="DatePicker" demo-name="demo3">
  <demo3 />
</Preview>

### 选择一段时间
<Preview comp-name="DatePicker" demo-name="demo4">
  <demo4 />
</Preview>

### 选择一段时间配置快捷选项
<Preview comp-name="DatePicker" demo-name="demo5">
  <demo5 />
</Preview>

### 选择月份范围
<Preview comp-name="DatePicker" demo-name="demo6">
  <demo6 />
</Preview>

### 默认值
<Preview comp-name="DatePicker" demo-name="demo7">
  <demo7 />
</Preview>

### 日期格式
<Preview comp-name="DatePicker" demo-name="demo8">
  <demo8 />
</Preview>

### 默认显示日期
<Preview comp-name="DatePicker" demo-name="demo9">
  <demo9 />
</Preview>

### 自定义前缀图标
<Preview comp-name="DatePicker" demo-name="demo10">
  <demo10 />
</Preview>

### 自定义内容
<Preview comp-name="DatePicker" demo-name="demo11">
  <demo11 />
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
`popper-class` | DatePicker 下拉框的类名 | string | - | `-` | 否
`range-separator` | 选择范围时的分隔符 | string | -| `'-'` | 否
`default-value` | 选择器打开时默认显示的时间 | Date | anything accepted by new Date() | `-` | 否
`default-time` | 范围选择时选中日期所使用的当日内具体时刻 | Date[] | 长度为2的数组，每一项都是Date对象。 第一项是起始日期，第二项是终止日期 | `-` | 否
`value-format` | 绑定值的格式。 不指定则绑定值为 Date 对象 | string | see date formats | `-` | 否
`name` | 原生属性 | string | - | `-` | 否
`unlink-panels` | 在范围选择器里取消两个日期面板之间的联动 | boolean| - | `false` | 否
`prefix-icon` | 自定义前缀图标 | string / Component | - | `Date` | 否
`clear-icon` | 清除日期图标 | string / Component | - | `CircleClose` | 否
`validate-event` | 输入时是否触发表单的校验 | boolean | - | `true` | 否
`disabledDate` | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数 ，应该返回一个 Boolean 值 Should return a Boolean | function | - | `-` | 否
`shortcuts` | 设置快捷选项，需要传入数组对象 | object[{ text: string, value: date / function }] | - | `-` | 否

### 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
