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
    name: 'EsChart3',
    setup() {
        const EsChart = reactive({ 
            Id: 'EsChart3', // 注意：id是唯一的，不能重复
            eWidth: '600px',
            eHeight: '400px',
            options: {
                title: {
                    text: '折线图基础面积'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                    }
                ]
            }
        })
        return {
            EsChart
        }
    }
});
</script>