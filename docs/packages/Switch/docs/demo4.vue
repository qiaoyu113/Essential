<template>
  <EsContainer
    title="Switch组件 ActiveValue和InactiveValue属性"
    >
      <EsForm
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
      >
      <template #ActiveValue="{row}">
        <el-tooltip :content="'Switch value: ' + row.switchValue.value" placement="top">
          <el-switch
            v-model="row.key"
            v-bind="row.attrs || {}"
            v-on="row.listeners || {}"
          />
        </el-tooltip>
      </template>
      </EsForm>
  </EsContainer>
</template>

<script lang="ts">

import { ElMessage } from 'element-plus'
import { ref, reactive, toRef, toRefs } from 'vue'

export default {
  name: "Switch",
  
  setup() {
    const value = reactive({ switchValue: false })
    const formItem = reactive([
      {
        type: 'ActiveValue',
        label: 'ActiveValue',
        key: 'switchValue',
        col: 24,
        slot: true,
        attrs: {
          'active-color': "#13ce66",
          'inactive-color': "#ff4949",
          'style': 'margin-top: 10px;'
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
    ])
    return {
      listQuery: toRefs(value),
      formItem,
      rules: reactive({
        switchValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
}
</script>