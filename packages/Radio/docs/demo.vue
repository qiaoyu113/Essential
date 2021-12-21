<template>
  <EsContainer
      title="Radio组件"
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
export default {
  name: "radio",
  components: {
    EsContainer,
    EsForm
  },
  data() {
    return {
      listQuery: {
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
                this.$message({
                  message: '已经选中：' + val,
                  type: 'success'
                });
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