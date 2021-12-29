<template>
  <EsContainer
      title="Checkbox ElCheckboxButton样式"
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
    const value = reactive({
         CheckboxValue: [1],
         CheckboxValue2: [1],
         CheckboxValue3: [1],
         CheckboxValue4: [1],
         })
    const options = [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
      { label: '选项4', value: 4 }
    ]
    const options2 = [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 ,disabled:true},//单个禁用
      { label: '选项3', value: 3 },
      { label: '选项4', value: 4 }
    ]
    return {
      listQuery: value,
      formItem: [
          {
            type: 'es-checkbox-button',
            label: 'default',
            key: 'CheckboxValue',
            col: 24,
            width: '100px',
            options: options,
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
            type: 'es-checkbox-button',
            label: 'medium',
            key: 'CheckboxValue2',
            col: 24,
            width: '100px',
            options: options2,
            tagAttrs:{
                'size':'medium'
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
            type: 'es-checkbox-button',
            label: 'small',
            key: 'CheckboxValue2',
            col: 24,
            width: '100px',
            options: options,
            tagAttrs:{
                'size':'small'
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
            type: 'es-checkbox-button',
            label: 'mini',
            key: 'CheckboxValue2',
            col: 24,
            width: '100px',
            options: options,
            tagAttrs:{
                'size':'mini',
                'disabled':true, //禁用整个单元组
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
        ],
         CheckboxValue2: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
         CheckboxValue3: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
         CheckboxValue4: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>