<template>
    <EsCharts 
        :echartsId="EsChart.Id"
        :eWidth="EsChart.eWidth"
        :eHeight="EsChart.eHeight"
        :options="EsChart.options"
    />
</template>

<script lang="ts">
import { ref } from 'vue'

export default({
    name: 'EsChart',
    setup() {
        const EsChart = ref({ 
            Id: 'EsChart', // 注意：id是唯一的，不能重复
            eWidth: '600px',
            eHeight: '400px',
            options: {
                title: {
                    text: '折线图入门示例'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
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