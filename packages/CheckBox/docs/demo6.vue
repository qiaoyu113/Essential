<template>
  <EsContainer
      title="Checkbox border属性"
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
      { label: 'Option1', value: 1 },
      { label: 'Option2', value: 2 },
      
    ]
    const options2 = [
      { label: 'Option1', value: 1 },
      { label: 'Option2', value: 2 ,disabled:true},//单个禁用
     
    ]
    return {
      listQuery: value,
      formItem: [
          {
            type: 'es-checkbox',
            label: 'default',
            key: 'CheckboxValue',
            col: 24,
            width: '100px',
            options: options,
            tagAttrs:{
                'border':true
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
            type: 'es-checkbox',
            label: 'medium',
            key: 'CheckboxValue2',
            col: 24,
            width: '100px',
            options: options2,
            tagAttrs:{
                'size':'medium',
                'border':true
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
            type: 'es-checkbox',
            label: 'small',
            key: 'CheckboxValue2',
            col: 24,
            width: '100px',
            options: options,
            tagAttrs:{
                'size':'small',
                'border':true
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
            type: 'es-checkbox',
            label: 'mini',
            key: 'CheckboxValue2',
            col: 24,
            width: '100px',
            options: options,
            tagAttrs:{
                'size':'mini',
                'disabled':true, //禁用整个单元组
                'border':true
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