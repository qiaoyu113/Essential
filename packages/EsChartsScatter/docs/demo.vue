<template>
  <EsCharts
    :echartsId="EsChart.Id"
    :eWidth="EsChart.eWidth"
    :eHeight="EsChart.eHeight"
    :options="EsChart.options"
  />
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'EsChartScatter',
  setup() {
    const EsChart = reactive({
      Id: 'EsChartScatter', // 注意：id是唯一的，不能重复
      eWidth: '600px',
      eHeight: '400px',
      options: {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20, // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [12.0, 6.26],
              [12.0, 8.84],
              [7.08, 5.82],
              [5.02, 5.68],
            ],
            type: 'scatter'
          }
        ]
      }
    })
    return {
      EsChart
    }
  }
}
</script>
