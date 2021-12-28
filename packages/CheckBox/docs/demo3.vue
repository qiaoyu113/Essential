<template>
  <EsContainer
      title="Checkbox "
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
  name: "Checkbox",
  
  setup() {
    const switchs = ref([])
    const value = reactive({ CheckboxValue: switchs })
    const option1 = [
      { label: '全选', value: 0 },
    ]
    const flag= ref
    const option2 = [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
      { label: '选项4', value: 4 },
    ]
    const checkedOption =[]
    const  formItem = [
          {
            type: 'es-checkbox',
            label: 'checkbox',
            key: 'CheckboxValue',
            col: 24,
            width: '100px',
            tagAttrs:{
                isIndeterminate:flag,
            },
            options: option1,
            listeners: {
              'change': (val:any) => {
                //    checkedOption = val ? option2 : []
                //     isIndeterminate = false
                ElMessage({
                  message: '已经选中：' + val,
                  type: 'success'
                });
              }
            }
          },
          {
            type: 'es-checkbox',
            label: 'checkbox',
            key: 'CheckboxValue',
            col: 24,
            width: '100px',
            tagAttrs:{
            },
            options: option2,
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
        CheckboxValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>