<template>
  <EsContainer
      title="Rate组件"
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
  name: "Rate",
  
  setup() {
    const rate = ref(0)
    const value = reactive({ rateValue: rate })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-rate',
          label: 'RateDefault',
          key: 'rateValue',
          col: 12,
          width: '100px',
          attrs: {
            'show-score': true,
            'allow-half': true,
            'style': 'line-height: 2.5;'
          },
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
          type: 'es-rate',
          label: 'RateColor',
          key: 'rateValue',
          col: 12,
          width: '100px',
          attrs: {
            'show-score': true,
            'allow-half': true,
            'style': 'line-height: 2.5;',
            'colors': ['#99A9BF', '#F7BA2A', '#FF9900']
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
      rules: ref({
        rateValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>