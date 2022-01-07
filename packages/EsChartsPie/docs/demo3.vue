<template>
  <EsCharts
    :echartsId="EsChart.Id"
    :eWidth="EsChart.eWidth"
    :eHeight="EsChart.eHeight"
    :options="EsChart.options"
  />
</template>

<script lang="ts">
import { reactive, onMounted } from "vue";

export default {
  name: "EsChartPie",
  setup() {
    const EsChart = reactive({
      Id: "EsChart3", // 注意：id是唯一的，不能重复
      eWidth: "800px",
      eHeight: "600px",
      options: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: { // 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
          left: "center",
          top: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8",
          ],
        },
        toolbox: { // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
          show: false, // 是否显示工具栏组件
        //   feature: { // 各工具配置项。show设置为true时展示
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        },
        series: [
          {
            name: "Radius Mode",
            type: "pie",
            radius: [20, 140],
            center: ["20%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 33, name: "rose 2" },
              { value: 28, name: "rose 3" },
              { value: 22, name: "rose 4" },
              { value: 20, name: "rose 5" },
              { value: 15, name: "rose 6" },
              { value: 12, name: "rose 7" },
              { value: 10, name: "rose 8" },
            ],
          },
          {
            name: "Area Mode",
            type: "pie",
            radius: [20, 140],
            center: ["70%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 30, name: "rose 1" },
              { value: 28, name: "rose 2" },
              { value: 26, name: "rose 3" },
              { value: 24, name: "rose 4" },
              { value: 22, name: "rose 5" },
              { value: 20, name: "rose 6" },
              { value: 18, name: "rose 7" },
              { value: 16, name: "rose 8" },
            ],
          },
        ],
      },
    });
    return {
      EsChart,
    };
  },
};
</script>
