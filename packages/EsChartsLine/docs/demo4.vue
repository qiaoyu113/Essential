<template>
    <EsCharts 
        ref="EsChartsRef"
        :echartsId="EsChart.Id"
        :eWidth="EsChart.eWidth"
        :eHeight="EsChart.eHeight"
        :options="EsChart.options"
    />
</template>

<script lang="ts">
import * as echarts from 'echarts'
import { reactive, ref, onMounted, nextTick } from 'vue'

export default({
    name: 'EsChart4',
    setup() {
        const EsChartsRef: any = ref();
        const data: number[][] = [
            [15, 0],
            [-50, 10],
            [-56.5, 20],
            [-46.5, 30],
            [-22.1, 40]
        ];
        const symbolSize: any = ref(20);
        const EsChart = reactive({ 
            Id: 'EsChart4', // 注意：id是唯一的，不能重复
            eWidth: '600px',
            eHeight: '400px',
            options: {
                xAxis: {
                    min: -100,
                    max: 80,
                    type: 'value',
                    axisLine: { onZero: false }
                },
                yAxis: {
                    min: -30,
                    max: 60,
                    type: 'value',
                    axisLine: { onZero: false }
                },
                series: [
                    {
                    id: 'a',
                    type: 'line',
                    smooth: true,
                    symbolSize: symbolSize, // 为了方便拖拽，把 symbolSize 尺寸设大了。
                    data: data
                    }
                ]
            }
        });
        onMounted(()=>{
            nextTick(() => {
                setTimeout(() => {
                        EsChartsRef.value.attrs.setOption({
                            graphic: echarts.util.map(data, function(item, dataIndex) {
                                return {
                                    type: 'circle',
                                    x: EsChartsRef.value.attrs.convertToPixel('grid', item)[0] + Math.random(),
                                    y: EsChartsRef.value.attrs.convertToPixel('grid', item)[1] + Math.random(),
                                    shape: { r: symbolSize / 20 },
                                    ondrag: function (dx: number, dy: number) {
                                        console.log(dataIndex, [(this as any).x, (this as any).y])
                                        onPointDragging(dataIndex, [(this as any).x, (this as any).y]);
                                    },
                                    onmousemove: function () {
                                        showTooltip(dataIndex);
                                    },
                                    onmouseout: function () {
                                        hideTooltip(dataIndex);
                                    },
                                    z: 100
                                };
                            })
                        });
                }, 2000);
                const showTooltip = (dataIndex: any) => {
                    EsChartsRef.value.attrs.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: dataIndex
                    });
                }
                const hideTooltip = (dataIndex: any) => {
                    EsChartsRef.value.attrs.dispatchAction({
                        type: 'hideTip'
                    });
                }
                const onPointDragging = (dataIndex: any, pos: any) => {
                    data[dataIndex] = EsChartsRef.value.attrs.convertFromPixel('grid', pos);
                    EsChartsRef.value.attrs.setOption({
                        series: [
                            {
                                id: 'a',
                                data: data
                            }
                        ]
                    })
                }
                const updatePosition = () => {
                    EsChartsRef.value.attrs.setOption({
                        graphic: data.map(function (item, dataIndex) {
                            return {
                                x: EsChartsRef.value.attrs.convertToPixel('grid', item)[0],
                                y: EsChartsRef.value.attrs.convertToPixel('grid', item)[1]
                            };
                        })
                    });
                }
                window.addEventListener('resize', updatePosition);
                EsChartsRef.value.attrs.on('dataZoom', updatePosition);
            })
        });
        return {
            EsChart,
            EsChartsRef
        }
    }
});
</script>