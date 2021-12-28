<template>
  <EsContainer
      title="TimePicker is-range属性 "
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
  name: "TimePicker",
  
  setup() {
    const value = reactive({ 
        TimePickerValue: [new Date(2021, 9, 10, 8, 40), new Date(2021, 9, 10, 9, 40)],
        TimePickerTwoValue: [new Date(2021, 10, 10, 12, 40), new Date(2021, 10, 20, 16, 40)]
        })
    const formItem=[
        {
          type: 'es-time-picker',
          label: 'TimePicker',
          key: 'TimePickerValue',
          col: 16,
          width: '100px',
          tagAttrs: {
            'start-placeholder':'请选择开始时间',
            'end-placeholder':'请选择结束时间',
            'is-range':true //是否为时间范围选择
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
          type: 'es-time-picker',
          label: 'TimePicker',
          key: 'TimePickerTwoValue',
          col: 16,
          width: '100px',
          tagAttrs: {
            'start-placeholder':'请选择开始时间',
            'end-placeholder':'请选择结束时间',
            'is-range':true, //是否为时间范围选择
            'arrow-control':true
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
      ]
    return {
      listQuery: value,
      formItem,
      rules: {
        TimePickerValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
         TimePickerTwoValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>