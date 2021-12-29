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
            Id: 'EsChart2', // 注意：id是唯一的，不能重复
            eWidth: '600px',
            eHeight: '400px',
            options: {
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '2%',
                    right: '4%',
                    bottom: '5%',
                    top: '16%',
                    containLabel: true
                },
                legend: {
                    data: ['用户总数', '新增会员', '用户', '其它'],
                    left: '20px',
                    top:0,
                    icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
                    textStyle: {
                        color: "#333"
                    },
                    itemWidth: 10,
                    itemHeight: 10,
                },
                xAxis: {
                    type: 'category',
                    data: ['2019/01/01', '2019/01/02', '2019/01/03', '2019/01/04', '2019/01/05', '2019/01/06', '2019/01/07'],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,0,0,0.5)'
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                    },
                },
                yAxis: {
                    type: 'value',
                    max: '1200',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#f1f1f1'
                        }
                    },
                    axisLabel: {
                        color: '#999',
                        textStyle: {
                            fontSize: 12
                        },
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                    },
                },
                series: [{
                        name: '用户总数',
                        type: 'bar',
                        barWidth: '15%',
                        itemStyle: {
                            normal: {
                                color: '#9C9AFF',
                                barBorderRadius: [12, 12, 0, 0],
                            },
                        },
                        data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
                    },
                    {
                        name: '新增会员',
                        type: 'bar',
                        barWidth: '15%',
                        itemStyle: {
                            normal: {
                                color: '#FC8B62',
                                barBorderRadius: [12, 12, 0, 0],
                            }

                        },
                        data: [400, 500, 500, 500, 500, 400, 400, 500, 500]
                    },
                    {
                        name: '用户',
                        type: 'bar',
                        barWidth: '15%',
                        itemStyle: {
                            normal: {
                                color: '#FF679F',
                                barBorderRadius: [12, 12, 0, 0],
                            }
                        },
                        data: [400, 600, 700, 700, 1000, 400, 400, 600, 700]
                    },
                    {
                        name: '其它',
                        type: 'line',
                        barWidth: '15%',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFCA71',
                                barBorderRadius: [12, 12, 0, 0],
                            }
                        },
                        data: [400, 600, 700, 700, 1000, 400, 400, 600, 700]
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