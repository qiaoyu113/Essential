<template>
  <EsContainer
      title="Select组件"
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
import { ref, reactive, onMounted } from 'vue'

export default {
  name: "Select",
  
  setup() {
    const value = reactive({ selectValue: [] })
    const formItem = reactive([
        {
          type: 'es-select',
          label: 'Select',
          key: 'selectValue',
          col: 24,
          width: '100px',
          options: [{
              value: 'Option1',
              label: 'Option1'
            },
            {
              value: 'Option2',
              label: 'Option2'
            }],
          attrs: {
            placeholder: '请选择',
            multiple: true,
            filterable: true,
            'allow-create': true, // 通过使用 allow-create 属性，用户可以通过输入框创建新项目。 为了使 allow-create 正确的工作， filterable 的值必须为 true
            'default-first-option': true // default-first-option 在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位
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
    ])
    return {
      listQuery: value,
      formItem,
      rules: {
        selectValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>