<template>
  <EsContainer
      title="Form横向排列"
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
  name: "Form",
  
  setup() {
    const listQuery = reactive({ 
      inputValue: '',
      RadioValue: '',
      CheckboxValue: []
    })
    const options = [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 }
    ]
    return {
      listQuery: listQuery,
      formItem: [
        {
          type: 'es-input',
          label: 'Input',
          key: 'inputValue',
          col: 8,
          attrs: {
            placeholder: '请输入',
          },
          listeners: {
            'input': (val:any) => {
              console.log('输入内容：' + val)
            }
          }
        },
        {
          type: 'es-radio',
          label: 'Radio',
          key: 'RadioValue',
          col: 8,
          options: options,
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
          type: 'es-checkbox',
          label: 'Check',
          key: 'CheckboxValue',
          col: 8,
          options: options,
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
        CheckboxValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>