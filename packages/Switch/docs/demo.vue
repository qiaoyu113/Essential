<template>
  <EsContainer
      title="Switch组件"
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
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

export default {
  name: "Switch",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const switchs = ref(false)
    const value = reactive({ switchValue: switchs })
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-switch',
          label: 'Switch',
          key: 'switchValue',
          col: 24,
          attrs: {
            'active-color': "#13ce66",
            'inactive-color': "#ff4949",
            'style': 'margin-top: 10px;'
          },
          listeners: {
            'change': (val:any) => {
              ElMessage({
                message: '已操作：' + val,
                type: 'success'
              });
            }
          }
        }
      ]),
      rules: ref({
        switchValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>