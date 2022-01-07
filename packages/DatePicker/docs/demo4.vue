<template>
  <EsContainer
      title="DatePicker type属性"
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
    const value = reactive({ DatePickerValue: '' })
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
            'type': 'daterange',  //显示的类型是范围日期
            'start-placeholder': "请选择开始时间",
            'end-placeholder': "请选择结束时间",
            'range-separator':'To'
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