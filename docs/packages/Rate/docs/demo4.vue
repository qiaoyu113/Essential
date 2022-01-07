<template>
  <EsContainer
      title="Rate组件 Disabled属性"
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
    const rate = ref(3)
    const value = reactive({ rateValue: rate })
    const formItem = [
        {
            type: 'es-rate',
            label: 'RateDefault',
            key: 'rateValue',
            col: 24,
            width: '100px',
            attrs: {
                style: 'line-height: 2.5;',
                disabled: true, // 为组件设置 disabled 属性表示组件为只读
                showScore: true, // 设置 show-score，则会在右侧显示目前的分值
                scoreTemplate: `${value.rateValue.toString()} points`,
                textColor: "#ff9900"
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
    ]
    return {
      listQuery: value,
      formItem,
      rules: ref({
        rateValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>