<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# Transfer组件

### 示例
<Preview comp-name="Transfer" demo-name="demo">
  <demo />
</Preview>

### 搜索状态
<Preview comp-name="Transfer" demo-name="demo2">
  <demo2 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`data` | Transfer 的数据源 | array[{ key, label, disabled }] | - | `[]` | 是 
`filterable` | 是否可搜索 | boolean | - | `false` | 否
`titles` | 自定义列表标题 | array | - | `['左侧标题', '右侧标题']` | 否
`button-texts` | 自定义按钮文案 | array | - | `[]` | 否
`format` | 列表顶部勾选状态文案 | object{noChecked, hasChecked} | - | `{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }` | 否
`left-default-checked` | 初始状态下左侧列表的已勾选项的 key 数组 | array | - | `[]` | 否
`right-default-checked` | 初始状态下右侧列表的已勾选项的 key 数组 | array | - | `[]` | 否
### 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
