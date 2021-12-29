<template>
  <EsContainer
      title="Checkbox min max 属性"
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
    const switchs = ref([1,2])
    const value = reactive({ CheckboxValue: switchs })
    const options = [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
      { label: '选项4', value: 4 }
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
            options: options,
            tagAttrs:{
                'min':1, //最少被勾选的项目的数量
                'max':2, //最多被勾选的项目的数量
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