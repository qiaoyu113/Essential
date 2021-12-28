<template>
  <EsContainer
      title="Virtualized Select slot"
    >
      <EsForm
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
      >
      <el-select-v2
        v-model="value"
        filterable
        :options="options"
        placeholder="Please select"
        style="width: 240px"
        multiple
        >
          <template #selectValue="{ item }">
              <span style="margin-right: 8px">{{ item.label }}</span>
              <span style="color: var(--el-text-color-secondary); font-size: 13px">
              {{ item.value }}
              </span>
          </template>
        </el-select-v2>
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
          type: 'selectValue',
          label: 'Slot',
          key: 'selectValue',
          col: 24,
          width: '100px',
          options: options,
          slot: true,
          attrs: {
            placeholder: '请选择',
            style: 'width: 240px;'
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