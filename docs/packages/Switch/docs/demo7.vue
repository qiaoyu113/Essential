<template>
  <EsContainer
      title="Switch组件 BeforeChange属性"
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
import { ref, reactive, toRefs } from 'vue'

export default {
  name: "Switch",
  
  setup() {
    const value = reactive({
        switchValue: false,
        loading: false
    })
    
    const beforeChange = () => {
      value.loading = true
      return new Promise((resolve) => {
        setTimeout(() => {
          value.loading = false
          ElMessage.success('Switch success')
          return resolve(true)
        }, 1000)
      })
    }
    const value2 = reactive({
      switchValue2: false,
      loading2: false,
    })
  
    const beforeChange2 = () => {
      value2.loading2 = true
      return new Promise((_, reject) => {
        setTimeout(() => {
          value2.loading2 = false
          ElMessage.error('Switch failed')
          return reject(new Error('Error'))
        }, 1000)
      })
    }
    const formItem = reactive([
      {
        type: 'es-switch',
        label: 'Disabled',
        key: 'switchValue',
        col: 12,
        attrs: {
          'style': 'margin-top: 10px;',
          'active-color': "#13ce66",
          'inactive-color': "#ff4949",
          'loading': toRefs(value).loading,
          'before-change': beforeChange // 设置 beforeChange 属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。
        },
        listeners: {
          'change': (val:any) => {
            console.log(value.loading);
          }
        }
      },
      {
        type: 'es-switch',
        label: 'Disabled',
        key: 'switchValue2',
        col: 12,
        attrs: {
          'style': 'margin-top: 10px;',
          'active-color': "#13ce66",
          'inactive-color': "#ff4949",
          'loading': toRefs(value2).loading2,
          'before-change': beforeChange2
        }
      }
    ])
    return {
      listQuery: value,
      formItem,
      rules: reactive({
        switchValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        switchValue2: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>