<template>
  <EsContainer
      title="Switch组件 Disabled属性"
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
  name: "Switch",
  
  setup() {
    const switchs = ref(false)
    const value = reactive({ switchValue: switchs })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-switch',
          label: 'Disabled',
          key: 'switchValue',
          col: 24,
          attrs: {
            'style': 'margin-top: 10px;',
            'active-color': "#13ce66",
            'inactive-color': "#ff4949",
            'disabled': true
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已操作：' + val,
                type: 'success'
              });
            }
          }
        }
      ]),
      rules: ref({
        switchValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>