<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# EsCharts Scatter 组件

### 基础示例
<Preview comp-name="EsChartsScatter" demo-name="demo">
  <demo />
</Preview>

### 单轴散点图
<Preview comp-name="EsChartsScatter" demo-name="demo2">
  <demo2 />
</Preview>

### 散点图聚合为柱状图动画
<Preview comp-name="EsChartsScatter" demo-name="demo3">
  <demo3 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`echartsId` | EsChart的id名称 | string | 必填 | EsCharts | 是
`eWidth` | 宽度 | string | 必填 | 300px | 是
`eHight` | 高度 | string | 必填 | 300px | 是
`options` | 配置参数 | Object | 必填 | - | 是
### options属性
参数 | 说明 | 类型 
:-: | :-: | :-:
`title` | 标题组件，包含主标题和副标题 | Object
`tooltip` | 提示框组件 | Object
`legend` | 图例组件, 展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示 | Object
`series` | 配置参数 | Object
