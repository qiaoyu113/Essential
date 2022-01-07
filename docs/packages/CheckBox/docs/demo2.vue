<template>
  <EsContainer
      title="Checkbox disabled属性"
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
    const options = [
      { label: '选项1', value: 1 },
    ]
    return {
      listQuery: value,
      formItem: [
          {
            type: 'es-checkbox',
            label: 'checkbox',
            key: 'CheckboxValue',
            col: 24,
            width: '100px',
            tagAttrs:{
                disabled:true //是否禁用
            },
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