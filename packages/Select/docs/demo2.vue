<template>
  <EsContainer
      title="Select组件 Disabled属性"
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
  name: "Select",
  
  setup() {
    const select = ref('')
    const value = reactive({ selectValue: select })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-select',
          label: 'Select',
          key: 'selectValue',
          col: 12,
          width: '100px',
          options: [
            {
              value: 'Option1',
              label: 'Option1',
              disabled: true, // 通过disabled属性设置某一项为禁用状态
            },
            {
              value: 'Option2',
              label: 'Option2'
            }
          ],
          attrs: {
            placeholder: '请选择'
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
      ]),
      rules: {
        selectValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>