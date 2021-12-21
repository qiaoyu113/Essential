<template>
  <EsContainer
      title="Input组件"
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
  name: "InputNumber",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const inputNumber = ref(0)
    const value = reactive({ inputNumberValue: inputNumber })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-input-number',
          label: 'Input Number',
          key: 'inputNumberValue',
          col: 24,
          width: '120px',
          attrs: {
            showWordLimit: true,
            disabled: false,
            placeholder: '请输入',
            clearable: true
          },
          listeners: {
            'input': (val:any) => {
              console.log('输入内容：' + val)
            }
          }
        }
      ]),
      rules: ref({
        inputNumberValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>