<template>
  <EsContainer
      title="Radio组件 Border样式"
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
    const value = reactive({ 
      RadioValue: 1,
      RadioValue2: 1,
      RadioValue3: 1,
      RadioValue4: 1,
    })
    const optionsList = [
      {
        label: 'Essential',
        value: 1
      },
      {
        label: 'Essential2',
        value: 2
      }
    ]
    const optionsList2 = [
      {
        label: 'Essential',
        value: 1
      },
      {
        label: 'Essential2',
        value: 2,
        disabled: true // 配置disabled禁用某一个单选组
      }
    ]
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-radio',
          label: 'default',
          key: 'RadioValue',
          col: 24,
          width: '100px',
          options: optionsList,
          tagAttrs: { // 配置radio
            border: true // 设置 border 属性为 true 可以渲染为带有边框的单选框。
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
          type: 'es-radio',
          label: 'medium',
          key: 'RadioValue2',
          col: 24,
          width: '100px',
          options: optionsList,
          tagAttrs: {
            border: true,
          },
          attrs: { // 配置radio-group
            size: 'medium'
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
          type: 'es-radio',
          label: 'small',
          key: 'RadioValue3',
          col: 24,
          width: '100px',
          options: optionsList2,
          tagAttrs: {
            border: true
          },
          attrs: {
            size: 'small',
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
          type: 'es-radio',
          label: 'mini',
          key: 'RadioValue4',
          col: 24,
          width: '100px',
          options: optionsList,
          tagAttrs: {
            border: true,
          },
          attrs: {
            border: true,
            size: 'mini',
            disabled: true // 配置disabled禁用整个单选组
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
        RadioValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        RadioValue2: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        RadioValue3: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        RadioValue4: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>