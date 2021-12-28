<template>
  <EsContainer
      title="DatePicker default-value属性"
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
  name: "DatePicker",
  
  setup() {
    const date = ref('')
    const Twodate = ref('')
    const value = reactive({ DatePickerValue: date })
    const Twovalue = reactive({ DatePickerTwoValue: Twodate })
    return {
      listQuery: value,
      listQueryTwo:Twovalue,
      formItem: [
        {
          type: 'es-date-picker',
          label: 'DatePicker',
          key: 'DatePickerValue',
          col: 12,
          width: 90,
          attrs: {
            'placeholder': '请选择',
            'type': 'date',
            'default-value':new Date(2021, 10, 1)
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
          type: 'es-date-picker',
          label: 'DatePicker',
          key: 'DatePickerTwoValue',
          col: 16,
          width: 90,
          attrs: {
            'placeholder': '请选择',
            'type': 'daterange',
            'start-placeholder': "请选择开始时间",
            'end-placeholder': "请选择结束时间",
            'default-value':[new Date(2021, 9, 1), new Date(2021, 10, 1)]
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
      ],
      rules: {
        DatePickerValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        DatePickerTwoValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>