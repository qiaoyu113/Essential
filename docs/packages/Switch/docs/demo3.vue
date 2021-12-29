<template>
  <EsContainer
      title="Switch组件 ActiveText和InactiveText属性"
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
  name: "Switch",
  
  setup() {
    const value = reactive({ 
        switchValue: false,
        switchValue2: false
    })
    return {
      listQuery: value,
      formItem: reactive([
        {
          type: 'es-switch',
          label: 'SwitchIcon',
          key: 'switchValue',
          col: 12,
          attrs: {
            'style': 'margin-top: 10px;',
            'active-color': "#13ce66",
            'inactive-color': "#ff4949",
            'active-icon': "Check", // 使用 inactive-icon 和 active-icon 属性来添加图标。
            'inactive-icon': "Close",
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已操作：' + val,
                type: 'success'
              });
            }
          }
        },
        {
          type: 'es-switch',
          label: 'InlinePrompt',
          key: 'switchValue2',
          col: 12,
          attrs: {
            'active-color': "#13ce66",
            'inactive-color': "#ff4949",
            'style': 'margin-top: 10px;',
            'active-icon': "Check",
            'inactive-icon': "Close",
            'inline-prompt': true //  使用 inline-prompt 属性来控制图标显示在点内。
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已操作2：' + val,
                type: 'success'
              });
            }
          }
        }
      ]),
      rules: ref({
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