<template>
  <EsContainer
      title="Slider组件 Vertical属性"
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
    const formatTooltip = (val: any) => {
      return val / 100
    }
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-slider',
          label: 'Vertical',
          key: 'sliderValue',
          col: 24,
          attrs: {
            'style': 'width: 100%; height: 200px;',
            'format-tooltip': formatTooltip,
            'min': 0,
            'max': 100,
            'vertical': true // 设置 vertical 属性可使 Slider 变成竖向模式， 此时必须设置高度 height 属性
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