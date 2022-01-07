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
`filter-placeholder` | 搜索框占位符 | string | - | `Enter keyword` | 否
`filter-method` | 	自定义搜索方法 | function | - | `-` | 否
`target-order` | 右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序； 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前 | string | original / push / unshift | `original` | 否
`render-content` | 自定义数据项渲染函数 | function(h, option) | - | `-` | 否
`props` | 	数据源的字段别名 | object{key, label, disabled} | - | `-` | 否

### 事件
事件名 | 说明 | 回调参数 | 参数说明 
:-: | :-: | :-: | :-:
`change` | 右侧列表元素变化时触发 | 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组
`left-check-change` | 左侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 
`right-check-change` | 右侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组


### 方法
方法名 | 说明 | 回调参数 | 参数说明 
:-: | :-: | :-: | :-: 
`clearQuery` | 清空某个面板的搜索关键词 | 'left' / 'right'  
