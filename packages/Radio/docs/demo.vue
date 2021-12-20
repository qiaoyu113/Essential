<template>
  <EsContainer
      title="Radio组件"
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
  name: "radio",
  components: {
    EsContainer,
    EsForm
  },
  data() {
    return {
      ruleForm: {
          RadioValue: ''
      },
      formItem: [
          {
            type: 'es-radio',
            label: 'Radio',
            key: 'RadioValue',
            col: 24,
            w: '100px',
            options: [
              {
                label: '选择1',
                value: 1
              },
              {
                label: '选择2',
                value: 2
              }
            ],
            listeners: {
              'change': (val:any) => {
                alert('已经选中：' + val)
              }
            }
          }
      ],
      rules: {
        RadioValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>