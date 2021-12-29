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

# Select组件

### 示例
<Preview comp-name="Select" demo-name="demo">
  <demo />
</Preview>

### 有禁用选项
<Preview comp-name="Select" demo-name="demo2">
  <demo2 />
</Preview>

### 禁用状态
<Preview comp-name="Select" demo-name="demo3">
  <demo3 />
</Preview>

### 可清空单选
<Preview comp-name="Select" demo-name="demo4">
  <demo4 />
</Preview>

### 基础多选
<Preview comp-name="Select" demo-name="demo5">
  <demo5 />
</Preview>

<!-- ### 自定义模板
<Preview comp-name="Select" demo-name="demo6">
  <demo6 />
</Preview> -->

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
`model-value / v-model`	| 选中项绑定值 |	string / number / boolean / object	— |	—
`multiple` |	是否多选 |	boolean |	— |	false
`disabled` |	是否禁用 |	boolean |	— |	false
`value-key`	| 作为 value 唯一标识的键名，绑定值为对象类型时必填 |	string |	— |	value
`size` |	输入框尺寸 |	string |	large/medium/small/mini	| large
`clearable` |	是否可以清空选项 |	boolean |	—	| false
`collapse-tags`	| 多选时是否将选中值按文字的形式展示 |	boolean |	— |	false
`multiple-limit`	| 多选时用户最多可以选择的项目数， 为 0 则不限制 |	number |	— |	0
`name` |	多选框的输入框的原生 | name 属性 |	string |	— |	—
`autocomplete` |	多选框的输入框的原生autocomplete属性 |	string |	— |	off
`placeholder` |	占位符 |	string |	— |	Select
`filterable` |	是否可以筛选 |	boolean |	— |	false
`allow-create`	| 是否允许用户创建新条目， 当 filterable 必须为 true 时才会生效。	| boolean |	— |	false
`filter-method`	| 自定义筛选方法|	function |	— |	—
`remote` |	是可以远程搜索 |	boolean |	— |	false
`remote-method`	| 远程搜索对应的函数 |	function |	— |	—
`loading` |	是否正在从远程获取数据 |	boolean |	— |	false
`loading-text`	| 搜索内容加载中的文字 |	string |	— |	Loading
`no-match-text`	| 搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置	| string	| — |	No matching data
`no-data-text`	| 选项为空时显示的文字，也可以使用 empty 插槽设置	| string| — | 	No data
`popper-class`	| Select 下拉框的类名 |	string |	— |	—
`reserve-keyword`	| 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 |	boolean |	— |	false
`default-first-option`	| 在输入框按下回车，选择第一个匹配项。 需配合 filterable 或 remote 使用 |	boolean |	-	 |false
`popper-append-to-body`	| 是否将弹出框插入至 body 元素。 在弹出框的定位出现问题时，可将该属性设置为 false |	boolean |	- |	true
`automatic-dropdown`	| 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 |	boolean |	- |	false
`clear-icon`	| 自定义清除当前选择的图标 |	string / Component |	— |	CircleClose
`fit-input-width`	| 下拉框是否与输入框同宽 |	boolean |	— |	false
`suffix-icon`	| 自定义后缀图标组件 |	string / Component |	—	ArrowUp
`tag-type`	| tag type |	string |	success/info/warning/danger |	info

### 事件
事件名 | 说明 | 参数列表
:-: | :-: | :-:
`change` |	选中值发生变化时触发 |	val，目前的选中值
`visible-change` |	下拉框出现/隐藏时触发 |	val，出现则为 true，隐藏则为 false
`remove-tag` |	多选模式下移除tag时触发 |	val，移除的tag值
`clear` |	可清空的单选模式下用户点击清空按钮时触发 |	—
`blur` |	当 input 失去焦点时触发 |	(event: Event)
`focus` |	当 input 获得焦点时触发 |	(event: Event)

### Option Group 属性
参数 | 说明 | 类型 | 可选值 | 默认值
:-: | :-: | :-: | :-: | :-:
`label` |	分组的组名 |	string |	— |	—
`disabled` |	是否将该分组下所有选项置为禁用 |	boolean |	— |	false