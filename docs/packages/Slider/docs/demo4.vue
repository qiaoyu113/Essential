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
            'range': true // 设置 range 即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值
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