<template>
  <EsContainer
      title="TimePicker组件"
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
  name: "TimePicker",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const time = ref(new Date(2016, 9, 10, 18, 40))
    const value = reactive({ TimePickerValue: time })
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-time-picker',
          label: 'TimePicker',
          key: 'TimePickerValue',
          col: 12,
          width: '100px',
          attrs: {
            'start': '08:30',
            'step': '00:30',
            'end': '18:30'
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
      ],
      rules: {
        TimePickerValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>