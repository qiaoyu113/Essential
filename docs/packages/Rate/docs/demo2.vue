<template>
  <EsContainer
      title="Rate组件 ShowText属性"
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
          col: 24,
          width: '100px',
          attrs: {
            style: 'line-height: 2.5;',
            showText: true, // 为组件设置 show-text 属性会在右侧显示辅助文字
            texts: ['oops', 'disappointed', 'normal', 'good', 'great'] // 通过设置 texts 可以为每一个分值指定对应的辅助文字
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