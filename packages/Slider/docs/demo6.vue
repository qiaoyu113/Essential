<template>
  <EsContainer
      title="Slider组件 Range属性"
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
    const value = reactive({ sliderValue: [30, 80] })
    const marks = reactive({
      0: '0°C',
      8: '8°C',
      37: '37°C',
      50: {
        style: {
          color: '#1989FA',
        },
        label: '50%',
      },
    })
    const formatTooltip = (val: any) => {
      return val / 100
    }
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-slider',
          label: 'Range',
          key: 'sliderValue',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'format-tooltip': formatTooltip,
            'min': 0,
            'max': 100,
            'range': true,
            'marks': marks // 设置 marks 属性可以展示标记
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        }
      ]),
      rules: ref({
        sliderValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>