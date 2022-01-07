<template>
  <EsContainer
      title="Select组件 Multiple属性"
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
  name: "Select",
  
  setup() {
    const value = reactive({ 
      selectValue: [],
      selectValue2: []
    })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-select',
          label: 'Select',
          key: 'selectValue',
          col: 12,
          width: '100px',
          options: [
            {
              value: 'Option1',
              label: 'Option1'
            },
            {
              value: 'Option2',
              label: 'Option2'
            }
          ],
          attrs: {
            placeholder: '请选择',
            multiple: true //  设置 multiple 属性即可启用多选
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
          type: 'es-select',
          label: 'Select',
          key: 'selectValue2',
          col: 12,
          width: '100px',
          options: ref([
            {
              value: 'Option1',
              label: 'Option1'
            },
            {
              value: 'Option2',
              label: 'Option2'
            }
          ]),
          attrs: {
            placeholder: '请选择',
            multiple: true,
            collapseTags: true // 设置 collapse-tags 属性将它们合并为一段文字
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
      rules: {
        selectValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>