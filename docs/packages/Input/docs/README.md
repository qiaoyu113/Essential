<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
// import demo7 from './demo7.vue'
import demo8 from './demo8.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Input组件

### 示例
<Preview comp-name="Input" demo-name="demo">
  <demo />
</Preview>

### 禁用状态
<Preview comp-name="Input" demo-name="demo2">
  <demo2 />
</Preview>

### 一键清空
<Preview comp-name="Input" demo-name="demo3">
  <demo3 />
</Preview>

### 密码类型的输入框
<Preview comp-name="Input" demo-name="demo4">
  <demo4 />
</Preview>

### 自动补全输入框
<Preview comp-name="Input" demo-name="demo5">
  <demo5 />
</Preview>

### 远程搜索
<Preview comp-name="Input" demo-name="demo6">
  <demo6 />
</Preview>

<!-- ### 自定义建议模板
<Preview comp-name="Input" demo-name="demo7">
  <demo7 />
</Preview> -->

### 输入长度限制
<Preview comp-name="Input" demo-name="demo8">
  <demo8 />
</Preview>


### attrs属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-: 
`type` | 类型 | string | text，textarea 和其他 | `text`
`maxlength` | 最大输入长度 | string / number | - | -
`minlength` | 原生属性，最小输入长度 | number | - | -
`show-word-limit` | 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效 | boolean | - | false
`placeholder` |	输入框占位文本 | string |	—	| —
`clearable` |	是否可清空 | boolean |	—	| false
`show-password`	是否显示切换密码图标 |	boolean	| — |	false | -
`disabled` |	是否禁用 | boolean |	—	| false
`size` |	输入框尺寸，只在type !="textarea" 时有效 | string |	medium / small / mini | - | -
`prefix-icon`	自定义前缀图标 | string / Component |	— |	— | -
`suffix-icon`	自定义后缀图标 | string / Component |	— |	— | -
`rows` | 输入框行数，只对type="textarea" 有效 |	number	| — |	2
`autosize` |	textarea高度是否自适应，只在type="textarea" 时生效。 可接受一个对象，如 { minRows: 2, maxRows: 6 }	boolean / object |	false | - | -
`autocomplete` |	原生属性，自动补全 |	string	| — |	off
`name` |	原生属性 |	string |	— |	—
`readonly` |	原生属性，是否只读 |	boolean	| false | -
`max` |	原生属性，设置最大值 |	— |	— |	—
`min` |	原生属性，设置最小值 |	— |	— |	—
`step` |	原生属性，设置输入字段的合法数字间隔 | —	| —	| —
`resize` |	控制是否能被用户缩放 |	string	none / both / horizontal / vertical | - | -
`autofocus` |	原生属性，自动获取焦点 |	boolean	| — |	false
`form` |	原生属性 |	string	| —	| —
`label` |	输入框关联的label 文字 |	string |	— | -
`tabindex` |	输入框的tabindex |	string / number	| -	| -
`validate-event` |	输入时是否触发表单的校验	boolean	| - |	true | -
`input-style` |	input 元素或 textarea 元素的 style |	object	| -	| {}

### listeners事件
事件名 | 说明 | 参数说明
:-: | :-: | :-: 
`change` | 在 Input 值改变时触发 | (value: string | number)
`blur` | 在 Input 失去焦点时触发 |	(event: Event)
`focus` |	在 Input 获得焦点时触发 |	(event: Event)
`input` |	在 Input 值改变时触发 |	(value: string | number)
`clear` |	在点击由 clearable 属性生成的清空按钮时触发 |	—
