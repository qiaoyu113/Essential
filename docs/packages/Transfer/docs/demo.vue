<template>
  <EsContainer
      title="Transfer组件"
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
import EsContainer from "@/components/EssentialContainer/index.vue"

import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

export default {
  name: "Transfer",
  
  data() {
    const generateData = () => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }
    const rightValue = ref([1])
    const leftValue = ref([1])
    const datas = ref(generateData())
    const value = reactive({ TransferValue: {
      rightValue,
      leftValue
    }})
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-transfer',
          label: 'Transfer',
          key: 'TransferValue',
          col: 24,
          attrs: {
            'placeholder': '选择',
            'filterable': false,
            'left-default-checked': [2, 3],
            'right-default-checked': [1],
            'render-content': (h: any, option: any) => {
              return h('span', null, option.key, ' - ', option.label)
            },
            'titles': ['左侧标题', '右侧标题'],
            'button-texts': ['向左', '向右'],
            'format': {
              noChecked: '${total}',
              hasChecked: '${checked}/${total}',
            },
            'data': datas
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '右侧内容为：' + val,
                type: 'success'
              });
            }
          },
          operationLeftName: '左侧操作',
          operationLeft: {
            'click': (val:any) => {
              ElMessage({
                message: '点击左侧操作按钮',
                type: 'success'
              });
            }
          },
          operationRightName: '右侧操作',
          operationRight: {
            'click': (val:any) => {
              ElMessage({
                message: '点击右侧操作按钮',
                type: 'success'
              });
            }
          }
        }
      ],
      rules: {
        TimeSelectValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>