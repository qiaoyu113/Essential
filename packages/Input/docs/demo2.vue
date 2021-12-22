<template>
  <EsContainer
      title="Input disabled属性"
    >
      <es-form
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
      >
      </es-form>
  </EsContainer>
</template>

<script lang="ts">
import EsContainer from "@/components/EssentialContainer/index.vue";
import EsForm from "@/components/Essential/EsForm.vue"
import { ref, reactive } from 'vue'

export default {
  name: "Input",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const input = ref('')
    const value = reactive({ inputValue: input })
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-input',
          label: 'Input',
          key: 'inputValue',
          col: 8,
          width: '100px',
          attrs: {
            disabled: true, // 配置disabled达到禁用
            placeholder: '请输入',
          },
          listeners: {
            'input': (val:any) => {
              console.log('输入内容：' + val)
            }
          }
        }
      ],
      rules: {
        inputValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>