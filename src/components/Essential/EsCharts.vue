<template>
    <div :id="echartsId || 'EsCharts'" :style="{ width: eWidth || '300px', height: eHeight || '300px' }"></div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import { watch, ref, nextTick, defineComponent } from 'vue'
import { onMounted, onUnmounted } from "@vue/runtime-core";

export default defineComponent({
  name: "EsCharts",
  data () {
    return {
      echart: {},
      chartDocument: {}
    };
  },
  watch: {},
  computed: {},
  props: [
    'echartsId',
    'eWidth',
    'eHeight',
    'theme',
    'options'
  ],
  components: {},
  setup(props) {
    /// 声明定义一下echart
    const echart = echarts;

    // 监听变化
    const divListen = (div: any, chart: any, t: any) => {
        // let that = this
        // return new Promise(() => {
        //     let erd: any = elementResizeDetectorMaker();
        //     erd.listenTo(document.getElementById(div), debounce(async () => {
        //       chart && chart.resize();
        //     }));
        // })
    };
    const debounce = (fn: any, t = 100) => {
        let lastTime: any;
        return  () => {
            clearTimeout (lastTime);
            const [that, args] = [this, arguments];
            lastTime = setTimeout (() => {
            fn.apply (that, args);
            }, t);
        }
    }
    
    // 定义变量存储echarts对象
    let attrs = ref();
    
    onMounted(() => {
      initChart();
    });
    
    onUnmounted(() => {
      echart.dispose;
    });
  
    // 基础配置一下Echarts
    // nextTick是为了让dom渲染后再执行echats
    const initChart = () => {
      nextTick(() => {
        const chart = (echart as any).init(document.getElementById(props.echartsId), props.theme);
        attrs.value = chart
        divListen(props.echartsId, chart, this)
        // 把配置和数据放这里
        chart && chart.clear();
        props.options && chart.setOption(props.options, true);
        // 监听数据变化后重置数据
        watch(props.options,
          () => {
            console.log(props.options)
            chart && chart.clear();
            props.options && chart.setOption(props.options, true)
          }
        )
      })
    }
    return {
      attrs
    }
  },
  methods: {
  }
});

function elementResizeDetectorMaker() {
  // throw new Error('Function not implemented.');
}

function debounce(arg0: () => Promise<void>): any {
  // throw new Error('Function not implemented.');
}
</script>