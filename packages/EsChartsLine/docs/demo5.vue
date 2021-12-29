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
import { reactive, onMounted, nextTick, ref } from 'vue'

export default({
    name: 'EsChart5',
    setup() {
        const EsChartsRef: any = ref();
        const EsChart: any = reactive({ 
            Id: 'EsChart5', // 注意：id是唯一的，不能重复
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
                    data: [90, 70, 120, 301, 135, 47, 276],
                    type: 'line'
                    }
                ]
            }
        })
        onMounted(()=>{
            nextTick(() => {
                let es = EsChartsRef.value.attrs
                setInterval(() => {
                    let datas = [Math.random()*(30)+(1), Math.random()*(30)+(1), Math.random()*(30)+(1), Math.random()*(30)+(1), Math.random()*(30)+(1), Math.random()*(30)+(1), Math.random()*(30)+(1)]
                    es.setOption({
                        series: [
                            {
                                data: datas,
                                type: 'line'
                            }
                        ]
                    })
                }, 1500)
            })
        });
        return {
            EsChart,
            EsChartsRef
        }
    }
});
</script>