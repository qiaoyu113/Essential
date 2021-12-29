<template>
  <EsContainer
      title="DatePicker default-time属性"
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
    const value = reactive({ DatePickerValue: date })
    const state = reactive({
    })
    const defaultTime= reactive([
      new Date(2021, 1, 1, 0, 0, 0),
      new Date(2021, 2, 1, 23, 59, 59),
    ])
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-date-picker',
          label: 'DatePicker',
          key: 'DatePickerValue',
          col: 16,
          attrs: {
            'placeholder': '请选择',
            'type': 'daterange',
            'start-placeholder': "请选择开始时间",
            'end-placeholder': "请选择结束时间",
            'default-time':defaultTime, //在选择日期范围时，你可以指定起始日期和结束日期的默认时间。
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
        ]
      }
    }
  }
};
</script>