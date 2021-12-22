<template>
  <EsContainer
      title="DateTimePicker组件"
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
  name: "DateTimePicker",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const date = ref([new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)])
    const value = reactive({ DateTimePickerValue: date })
    const state = reactive({
      shortcuts: [
        {
          text: 'Last week',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          },
        },
        {
          text: 'Last month',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
        },
        {
          text: 'Last 3 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          },
        },
      ],
    })
    return {
      listQuery: value,
      formItem: [
        // Default
        {
          type: 'es-date-picker',
          label: 'DateTimePicker',
          key: 'DateTimePickerValue',
          col: 16,
          attrs: {
            'placeholder': '请选择',
            'type': 'datetimerange',
            'shortcuts': state.shortcuts,
            'range-separator': "To",
            'start-placeholder': "请选择开始时间",
            'end-placeholder': "请选择结束时间",
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
        DateTimePickerValue: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  }
};
</script>