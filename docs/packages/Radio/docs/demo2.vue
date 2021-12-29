<template>
  <EsContainer
      title="Radio组件 Disabled属性"
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
  name: "radio",
  
  setup() {
    const radio = ref(2)
    const value = reactive({ RadioValue: radio })
    return {
      listQuery: value,
      formItem: [
          {
            type: 'es-radio',
            label: 'Radio',
            key: 'RadioValue',
            col: 24,
            width: '100px',
            attrs: {
                disabled: true, // // 配置disabled达到禁用
            },
            options: [
              {
                label: '选择1',
                value: 1
              },
              {
                label: '选择2',
                value: 2
              }
            ],
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
        RadioValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>