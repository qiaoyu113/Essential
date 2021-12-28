<template>
  <EsContainer
      title="TimeSelect组件"
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
  name: "TimeSelect",
  
  setup() {
    const time = ref('')
    const value = reactive({ TimeSelectValue: time })
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-time-select',
          label: 'TimeSelect',
          key: 'TimeSelectValue',
          col: 12,
          width: '100px',
          tagAttrs: {
            'start-placeholder': '开始时间',
            'end-placeholder': '结束时间',
            'placeholder': '选择时间范围',
            'value-format': "timestamp",
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
        TimeSelectValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>