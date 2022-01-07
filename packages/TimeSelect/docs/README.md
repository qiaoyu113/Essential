<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# TimeSelect组件

### 示例
<Preview comp-name="TimeSelect" demo-name="demo">
  <demo />
</Preview>

### 固定时间范围
<Preview comp-name="TimeSelect" demo-name="demo2">
  <demo2 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`disabled` | 禁用 | boolean | - | `false` | 否
`editable` | 文本框可输入 | boolean | - | `	true` | 否
`clearable` | 是否显示清除按钮 | boolean | - | `true` | 否
`size` | 输入框尺寸 | string | large/medium/small/mini | `large` | 否
`placeholder` | 非范围选择时的占位内容 | string | - | `-` | 否
`name` | 	原生属性 | string | - | `-` | 否
`prefix-icon` | 自定义前缀图标 | string / Component | - | `Date` | 否
`clear-icon` | 自定义清除当前选择的图标 | string / Component | - | `CircleClose` | 否
`start` | 开始时间 | string | - | `09:00` | 否
`end` | 	结束时间 | string | - | `18:00` | 否
`step` | 	间隔时间 | string | - | `00:30` | 否
`min-time` | 		最小时间，小于该时间的时间段将被禁用 | string | - | `00:00` | 否
`max-time` | 	最大时间，大于该时间的时间段将被禁用 | string | - | `-` | 否



### 事件
事件名 | 说明 | 回调参数 | 参数说明
:-: | :-: | :-: | :-:
`change` | 用户确认选定的值时触发 | val，组件绑定值 
`blur` | 在组件 Input 失去焦点时触发 | 组件实例 
`focus` | 在组件 Input 获得焦点时触发 | 组件实例


### 方法
方法名 | 说明 | 回调参数 | 参数说明
:-: | :-: | :-: | :-: 
`blur` | 在组件 Input 失去焦点时触发 
`focus` | blur the Input component 
