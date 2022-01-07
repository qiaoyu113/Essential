<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# EsTable组件

### 基础功能
<Preview comp-name="EsTable" demo-name="demo">
  <demo />
</Preview>

### 全部功能
<Preview comp-name="EsTable" demo-name="demo2">
  <demo2 />
</Preview>

### 输入功能
<Preview comp-name="EsTable" demo-name="demo3">
  <demo3 />
</Preview>

### 固定表头
<Preview comp-name="EsTable" demo-name="demo4">
  <demo4 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`row-key` | table纵列的key值 | string | - | - | 是
`select` | 是否开启选择功能 | boolean | - | false | 是
`indexes` | 是否开启序列 | string | - | false | 是
`operation-list` | 是否展示左下角操作 | array | - | - | 否
`operation-name` | 左下角操作按钮名称 | string | - | 批量操作 | 否
`columns` | table内容项 | array | - | - | 是
`key` | table数据展示对应key值 | string | - | - | 是
`label` | table数据展示对应展示文案 | string | - | - | 是
`fixed` | table数据展示是否固定 | string | - | right | 是
`page` | 分页配置 | object | - | - | 是
`page` | 当前页数 | number | - | - | 是
`limit` | 一页限制多少条 | number | - | - | 是
`total` | 总数据量 | number | - | - | 是
`page-sizes` | 分页配置项 | array | - | - | 是


