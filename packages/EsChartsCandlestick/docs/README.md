<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# EsCharts Candlestick 组件

### 基础示例
<Preview comp-name="EsChartsCandlestick" demo-name="demo">
  <demo />
</Preview>

### 上证指数
<Preview comp-name="EsChartsCandlestick" demo-name="demo2">
  <demo2 />
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
`dataZoom` | 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。 | Array
`xAxis` | 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。 | Object
`yAxis` | 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。 | Object
`grid` | 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。 | Object
