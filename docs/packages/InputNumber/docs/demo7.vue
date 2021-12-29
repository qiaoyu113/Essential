<template>
  <EsContainer
      title="Input Number Size属性"
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

import { ref, reactive } from 'vue'

export default {
  name: "InputNumber",
  
  setup() {
    const value = reactive({ 
        inputNumberValue: 0,
        inputNumberValue2: 0,
        inputNumberValue3: 0,
        inputNumberValue4: 0,
    })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-input-number',
          label: 'default',
          key: 'inputNumberValue',
          col: 12,
          width: '120px',
          attrs: {
            placeholder: '请输入'
          }
        },
        {
          type: 'es-input-number',
          label: 'medium',
          key: 'inputNumberValue2',
          col: 12,
          width: '120px',
          attrs: {
            placeholder: '请输入',
            size: 'medium'
          }
        },
        {
          type: 'es-input-number',
          label: 'small',
          key: 'inputNumberValue3',
          col: 12,
          width: '120px',
          attrs: {
            placeholder: '请输入',
            size: 'small'
          }
        },
        {
          type: 'es-input-number',
          label: 'mini',
          key: 'inputNumberValue4',
          col: 12,
          width: '120px',
          attrs: {
            placeholder: '请输入',
            size: 'mini'
          }
        }
      ]),
      rules: ref({
        inputNumberValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>