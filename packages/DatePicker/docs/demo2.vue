<template>
  <EsContainer
      title="DatePicker组件"
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
  name: "DatePicker",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const date = ref('')
    const value = reactive({ DatePickerValue: date })
    const state = reactive({
      disabledDate(time: any) {
        return time.getTime() > Date.now()
      },
      shortcuts: [
        {
          text: 'Today',
          value: new Date(),
        },
        {
          text: 'Yesterday',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        },
        {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        },
      ],
    })
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-date-picker',
          label: 'DatePicker',
          key: 'DatePickerValue',
          col: 12,
          attrs: {
            'placeholder': '请选择',
            'type': 'date',
            'disabled-date': state.disabledDate,
            'shortcuts': state.shortcuts
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
        DatePickerValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>