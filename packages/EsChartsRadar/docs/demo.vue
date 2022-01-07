<template>
  <EsCharts
    :echartsId="EsChart.Id"
    :eWidth="EsChart.eWidth"
    :eHeight="EsChart.eHeight"
    :options="EsChart.options"
  />
</template>

<script lang="ts">
import { reactive } from "vue";

export default {
  name: "EsChartsRadar",
  setup() {
    const EsChart = reactive({
      Id: "EsChartsRadar", // 注意：id是唯一的，不能重复
      eWidth: "600px",
      eHeight: "400px",
      options: {
        legend: {
          data: ["Allocated Budget", "Actual Spending"],
        },
        radar: {
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "Allocated Budget",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "Actual Spending",
              },
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
