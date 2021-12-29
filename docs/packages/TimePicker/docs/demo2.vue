<template>
  <EsContainer
      title="TimePicker arrow-control属性 "
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
    const time = ref(new Date(2016, 9, 10, 18, 40))
    const value = reactive({ TimePickerValue: time })
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-time-picker',
          label: 'TimePicker',
          key: 'TimePickerValue',
          col: 12,
          width: '100px',
          tagAttrs: {
            'arrow-control':true //是否使用箭头进行时间选择
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
        TimePickerValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>