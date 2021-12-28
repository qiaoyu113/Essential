<template>
  <EsContainer
      title="Slider组件 ShowInput属性"
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
    const value = reactive({ sliderValue: 0 })
    const formatTooltip = (val: any) => {
      return val / 100
    }
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-slider',
          label: 'ShowInput',
          key: 'sliderValue',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'format-tooltip': formatTooltip,
            'min': 0,
            'max': 100,
            'show-input': true // 设置 show-input 属性会在右侧显示一个输入框
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