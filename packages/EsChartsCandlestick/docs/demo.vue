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
  name: 'EsChartsCandlestick',
  setup() {
    const EsChart = reactive({
      Id: 'EsChartsCandlestick', // 注意：id是唯一的，不能重复
      eWidth: '600px',
      eHeight: '400px',
      options: {
        xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
      },
      yAxis: {},
      series: [
        {
          type: 'candlestick',
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42]
          ]
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
