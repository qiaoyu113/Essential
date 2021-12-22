<template>
  <EsContainer
      title="Input fetchSuggestions属性"
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
import { ref, reactive, onMounted } from 'vue'

export default {
  name: "Input",
  components: {
    EsContainer,
    EsForm
  },
  setup() {
    const input = ref('')
    const input2 = ref('')
    const value = reactive({ inputValue: input, inputValue2: input2 })
    const restaurants = ref([])
    const querySearch = (queryString: string, cb:Function) => {
      const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      cb(results)
    }
    const createFilter = (queryString: any) => {
      return (restaurant:any) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    }
    const loadAll = () => {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ]
    }
    const handleSelect = (item: any) => {
      console.log('选中的值', item.value)
    }
    onMounted(() => {
      (restaurants.value as any) = loadAll()
    })
    return {
      listQuery: value,
      formItem: [
        {
          type: 'es-autocomplete',
          label: 'Input',
          key: 'inputValue',
          col: 12,
          width: '100px',
          attrs: {
            placeholder: '请输入',
            fetchSuggestions: querySearch // 配置返回建议输入的方法
          },
          listeners: {
            'input': (val:any) => {
              console.log('输入内容：' + val)
            },
            'select': handleSelect
          }
        },
        {
          type: 'es-autocomplete',
          label: 'Input2',
          key: 'inputValue2',
          col: 12,
          width: '100px',
          attrs: {
            placeholder: '请输入',
            fetchSuggestions: querySearch,
            triggerOnFocus: false // 是否在输入框 focus 时显示建议列表
          },
          listeners: {
            'input': (val:any) => {
              console.log('输入内容2：' + val)
            },
            'select': handleSelect
          }
        }
      ],
      rules: {
        inputValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ],
        inputValue2: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>