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

export default({
    name: 'EsChart',
    setup() {
        const EsChart = reactive({ 
            Id: 'EsChart', // 注意：id是唯一的，不能重复
            eWidth: '600px',
            eHeight: '400px',
            options: {
                title: {
                    text: '柱状图入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        })
        return {
            EsChart
        }
    }
});
</script>