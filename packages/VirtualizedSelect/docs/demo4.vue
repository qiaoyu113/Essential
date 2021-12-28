<template>
  <EsContainer
      title="Virtualized Select filterable属性"
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
  name: "SelectV2",
  
  setup() {
    const select = ref([])
    const value = reactive({ selectValue: select })
    const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const options = ref(
        Array.from({ length: 1000 }).map((_, idx) => ({
          value: `Option ${idx + 1}`,
          label: `${initials[idx % 10]}${idx}`
        }))
      )
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-select-v2',
          label: 'Filterable',
          key: 'selectValue',
          col: 24,
          width: '100px',
          options: options,
          attrs: {
            placeholder: '请选择',
            style: 'width: 240px;',
            multiple: true,
            filterable: true // 设置 filterable 实现可过滤的多选
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
        selectValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>