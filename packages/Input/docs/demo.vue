<template>
  <EsContainer
      title="Input 基础用法"
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
  name: "Input",
  setup() {
    const input = ref('')
    const value = reactive({ inputValue: input })
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-input',
          label: 'Input',
          key: 'inputValue',
          col: 12,
          width: '100px',
          attrs: {
            placeholder: '请输入',
          },
          listeners: {
            'input': (val:any) => {
              console.log('输入内容：' + val)
            }
          }
        }
      ],
      rules: {
        inputValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>