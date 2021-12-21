<template>
  <EsContainer
      title="Slider组件"
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
  name: "Slider",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const rate = ref(30)
    const value = reactive({ sliderValue: rate })
    const formatTooltip = (val: any) => {
      return val / 100
    }
    return {
      listQuery: value,
      formItem: ref([
        {
          type: 'es-slider',
          label: 'Slider',
          key: 'sliderValue',
          col: 24,
          attrs: {
            'style': 'width: 200px;',
            'format-tooltip': formatTooltip,
            'min': 0,
            'max': 100
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
        sliderValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      })
    }
  }
};
</script>