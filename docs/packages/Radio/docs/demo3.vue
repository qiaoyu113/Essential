<template>
  <EsContainer
      title="Radio组件 ElRadioButton样式"
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
        label: '选择1',
        value: 1
      },
      {
        label: '选择2',
        value: 2
      },
      {
        label: '选择3',
        value: 3,
        disabled: true // 配置disabled禁用某一个单选组
      },
      {
        label: '选择4',
        value: 4
      }
    ]
    const optionsList2 = [
      {
        label: '选择1',
        value: 1
      },
      {
        label: '选择2',
        value: 2
      },
      {
        label: '选择3',
        value: 3
      },
      {
        label: '选择4',
        value: 4
      }
    ]
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-radio-group',
          label: 'default',
          key: 'RadioValue',
          col: 24,
          width: '100px',
          options: optionsList2,
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
          type: 'es-radio-group',
          label: 'medium',
          key: 'RadioValue2',
          col: 24,
          width: '100px',
          options: optionsList2,
          attrs: {
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
          type: 'es-radio-group',
          label: 'small',
          key: 'RadioValue3',
          col: 24,
          width: '100px',
          options: optionsList,
          attrs: {
            size: 'small',
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
        },
        {
          type: 'es-radio-group',
          label: 'mini',
          key: 'RadioValue4',
          col: 24,
          width: '100px',
          options: optionsList,
          attrs: {
            size: 'mini'
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