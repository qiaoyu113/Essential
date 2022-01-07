<template>
  <EsContainer
      title="Slider组件 Step属性"
    >
      <EsForm
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
      >
      </EsForm>
  </EsContainer>
</template>

<script lang="ts">

import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

export default {
  name: "Slider",
  
  setup() {
    const value = reactive({
        sliderValue: 30,
        sliderValue2: 30 
    })
    const formatTooltip = (val: any) => {
      return val / 100
    }
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-slider',
          label: 'Step',
          key: 'sliderValue',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'format-tooltip': formatTooltip,
            'min': 0,
            'max': 100,
            'step': 10 // 改变step的值可以改变步长
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        },
        {
          type: 'es-slider',
          label: 'Slider',
          key: 'sliderValue2',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'format-tooltip': formatTooltip,
            'min': 0,
            'max': 100,
            'step': 10,
            'showStops': true // 通过设置 show-stops 属性可以显示间断点
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中2：' + val,
                type: 'success'
              });
            }
          }
        }
      ]),
      rules: ref({
        sliderValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        sliderValue2: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>