<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# EsCharts Bar 组件

### 基础示例
<Preview comp-name="EsChartsBar" demo-name="demo">
  <demo />
</Preview>

### 彩色
<Preview comp-name="EsChartsBar" demo-name="demo3">
  <demo3 />
</Preview>

### 定制化
<Preview comp-name="EsChartsBar" demo-name="demo2">
  <demo2 />
</Preview>

### 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`echartsId` | EsChart的id名称 | string | 必填 | EsCharts | 是
`eWidth` | 宽度 | string | 必填 | 300px | 是
`eHight` | 高度 | string | 必填 | 300px | 是
`options` | 配置参数 | Object | 必填 | - | 是

