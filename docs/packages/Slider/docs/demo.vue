<template>
  <EsContainer
      title="Slider组件"
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
      sliderValue: 0,
      sliderValue2: 30,
      sliderValue3: 0,
      sliderValue4: 0,
      sliderValue5: 0
    })
    const formatTooltip = (val: any) => {
      return val / 100
    }
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-slider',
          label: 'Default value',
          key: 'sliderValue',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'min': 0,
            'max': 100
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
          label: 'Customized initial value',
          key: 'sliderValue2',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'min': 0,
            'max': 100
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中2：' + val,
                type: 'success'
              });
            }
          }
        },
        {
          type: 'es-slider',
          label: 'Hide Tooltip',
          key: 'sliderValue3',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'min': 0,
            'max': 100,
            'show-tooltip': false
            
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中3：' + val,
                type: 'success'
              });
            }
          }
        },
        {
          type: 'es-slider',
          label: 'Customized initial value',
          key: 'sliderValue4',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'min': 0,
            'max': 100,
            'show-tooltip': formatTooltip,
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中2：' + val,
                type: 'success'
              });
            }
          }
        },
        {
          type: 'es-slider',
          label: 'Customized initial value',
          key: 'sliderValue5',
          col: 24,
          attrs: {
            'style': 'width: 100%;',
            'min': 0,
            'max': 100,
            'disabled': true
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已经选中2：' + val,
                type: 'success'
              });
            }
          }
        },
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