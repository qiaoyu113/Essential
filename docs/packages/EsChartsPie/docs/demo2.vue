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
    name: 'EsChartPie',
    setup() {
        const genData = function(count: number) {
            // prettier-ignore
            const nameList = [
                '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
            ];
            const legendData = [];
            const seriesData = [];
            for (var i = 0; i < count; i++) {
                var name =
                Math.random() > 0.65
                    ? makeWord(4, 1) + '·' + makeWord(3, 0)
                    : makeWord(2, 1);
                legendData.push(name);
                seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
                });
            }

            return {
                legendData: legendData,
                seriesData: seriesData
            };

            function makeWord(max: number, min: number) {
                const nameLen = Math.ceil(Math.random() * max + min);
                const name = [];
                for (var i = 0; i < nameLen; i++) {
                name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
                }
                return name.join('');
            }
        }
        const data = genData(50);
        const EsChart = reactive({ 
            Id: 'EsChart2', // 注意：id是唯一的，不能重复
            eWidth: '800px',
            eHeight: '500px',
            options: {
                title: {
                    text: '滚动饼状图',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: { // 提示框组件
                    trigger: 'item', // string 触发类型。 'item' 数据项图形触发
                    formatter: '{a} <br/>{b} : {c} ({d}%)' // string | Function 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    bottom: 20,
                    data: data.legendData
                },
                series: [
                    {
                    name: '姓名',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: data.seriesData,
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
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