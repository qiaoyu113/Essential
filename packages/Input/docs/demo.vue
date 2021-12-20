<template>
  <EsContainer
      title="Input组件"
    >
      <es-form
        ref="EsForm"
        :list-query="ruleForm"
        :form-item="formItem"
        label-width="100px"
        :rules="rules"
      >
      </es-form>
  </EsContainer>
</template>

<script lang="ts">
import EsContainer from "@/components/EssentialContainer/index.vue";
import EsForm from "@/components/Essential/EsForm.vue"
export default {
  name: "Input",
  components: {
    EsContainer,
    EsForm
  },
  data() {
    return {
      ruleForm: {
          inputValue: ''
      },
      formItem: [
        {
          type: 'es-input',
          label: 'Input',
          key: 'inputValue',
          col: 24,
          w: '100px',
          tagAttrs: {
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