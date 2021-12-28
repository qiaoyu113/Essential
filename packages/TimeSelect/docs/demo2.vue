<template>
  <EsContainer
      title="TimeSelect组件"
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
  name: "TimeSelect",
  
  setup() {
    const value = reactive({ 
        TimeSelectValue: '',
        TimeEndValue: ''
    })
    const formItem = [
        {
          type: 'es-time-select',
          label: 'StartTime',
          key: 'TimeSelectValue',
          col: 12,
          width: '100px',
          tagAttrs: {
            'placeholder': '请选择开始时间',
            'start': "8:30",
            'step': "00:15",
            'end': "18:30"
          },
          listeners: {
            'change': (val:any) => {
              // console.log("toRefs(value).TimeSelectValue",toRefs(value).TimeSelectValue);
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        },
        {
          type: 'es-time-select',
          label: 'EndTime',
          key: 'TimeEndValue',
          col: 12,
          width: '100px',
          tagAttrs: {
            'placeholder': '请选择结束时间',
            // 'min-time': TimeSelectValue,
            'start': "08:30",
            'step': "00:15",
            'end': "18:30",
          },
          listeners: {
            'change': (val:any) => {
              console.log("value.TimeSelectValue", value);
              ElMessage({
                message: '已经选中：' + val,
                type: 'success'
              });
            }
          }
        }
      ]
    return {
      listQuery: value,
      formItem,
      rules: {
        TimeSelectValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        TimeEndValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>