<template>
  <EsContainer
      title="Rate组件 IconClasses属性"
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
            voidIcon: 'ChatRound', // 通过void-icon-class 指定未选中时的图标类名
            colors: ['#409eff', '#67c23a', '#FF9900'], // 对应icon的颜色
            icons: ['ChatRound', 'ChatLineRound', 'ChatDotRound']
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