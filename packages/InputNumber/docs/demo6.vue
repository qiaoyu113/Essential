<template>
  <EsContainer
      title="Input Number ControlsPosition属性"
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
    const inputNumber = ref(0)
    const value = reactive({ inputNumberValue: inputNumber })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-input-number',
          label: 'Input Number',
          key: 'inputNumberValue',
          col: 24,
          width: '120px',
          attrs: {
            placeholder: '请输入',
            controlsPosition: 'right'
          },
          listeners: {
            'change': (val:any) => {
              console.log('输入内容：' + val)
            }
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