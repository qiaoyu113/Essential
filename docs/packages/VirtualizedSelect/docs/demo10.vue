<template>
  <EsContainer
      title="Virtualized Select remoteMethod方法"
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
  name: "SelectV2",
  
  setup() {
    const select = ref('')
    const value = reactive({ selectValue: select })
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
    const options = ref([])
    const loading = ref(false)
    const list = states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
    const remoteMethod = (query:any) => {
      if (query !== '') {
        loading.value = true
        setTimeout(() => {
          loading.value = false;
          (options as any).value = list.filter((item:any) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        options.value = []
      }
    }
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-select-v2',
          label: 'Select',
          key: 'selectValue',
          col: 24,
          width: '100px',
          options: options,
          attrs: {
            placeholder: '请选择',
            multiple: true,
            clearable: true,
            size: "medium",
            style: 'width: 240px;',
            loading: loading,
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
      ]),
      rules: ref({
          selectValue: [
            { required: true, message: '不能为空', trigger: 'change' }
        ]
      }),
      loading,
    }
  }
};
</script>