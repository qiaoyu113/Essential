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
    const list = ref([])
    const options = ref([])
    const loading = ref(false)
    const value = reactive({ selectValue: [] })
    const states = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ]
    onMounted(() => {
      (list as any).value = states.map((item:any) => {
        return { value: `value:${item}`, label: `label:${item}` }
      })
    })

    const remoteMethod = (query:any) => {
      if (query !== '') {
        loading.value = true
        setTimeout(() => {
          loading.value = false
          options.value = list.value.filter((item:any) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        options.value = []
      }
    }
    const formItem = reactive([
        {
          type: 'es-select',
          label: 'Select',
          key: 'selectValue',
          col: 12,
          width: '100px',
          options: options,
          attrs: {
            placeholder: '请选择',
            loading: loading,
            multiple: true,
            filterable: true, // 为了启用远程搜索，需要将filterable和remote设置为true
            remote: true,
            'remote-method': remoteMethod
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
      loading,
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