<template>
  <EsContainer
      title="Input fetchSuggestions属性"
    >
      <EsForm
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
      >
      </EsForm>
  </EsContainer>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from 'vue'

export default {
  name: "Input",
  setup() {
    /**
     * 基础数据生成
     */
    const restaurants = ref([])
    let timeout:any = null
    const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
      const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value

      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    }
    const createFilter = (queryString: string) => {
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
    /**
     * 组件生成
     */
    const listQuery: Record<string, any> = reactive({ inputValue: '' })
    const formItem: unknown[] = [
        {
          type: 'es-autocomplete',
          label: 'AutoFocusAsync',
          key: 'inputValue',
          col: 12,
          width: '140px',
          attrs: {
            placeholder: '请输入',
            fetchSuggestions: querySearchAsync // 配置远程搜索的方法
          },
          listeners: {
            'input': (val:any) => {
              console.log('输入内容：' + val)
            },
            'select': handleSelect
          }
        }
    ]
    const rules: Object = {
        inputValue: [
            { required: true, message: '不能为空', trigger: 'change' }
        ]
    }
    return {
      listQuery,
      formItem,
      rules
    }
  }
};
</script>