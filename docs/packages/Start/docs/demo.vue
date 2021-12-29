<template>
<!--
    EsContainer: 最外层UI组件
    EsForm: 核心表单组件（包含所有组件，告别view层反复编写）
-->
  <EsContainer
      title="Essential 基础用法"
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
import { ref, reactive } from 'vue'

export default {
  name: "Essential",
  setup() {
    const input = ref('')
    const value = reactive({ inputValue: input }) // v-model对应参数
    return {
        /*
        * listQuery： 所有v-model的对象集合；
        * formItem： 表单内所有组件的调用方法；
        * rules： 表单校验的规则；
        */
      listQuery: value, // v-model默认值（Object类型）
      formItem: [ // es-form生成表单内所有组件
        {
          type: 'es-input',     // 表单内对应的组件名称
          label: '举例',         // label名称
          key: 'inputValue',    // key值为v-model绑定的参数，需要和listQuery中的参数一致！(关键！)
          col: 8,               // 栅格布局, 最大24
          width: '100px',       // label 的宽度
          attrs: {              // 所有attribute都配置在这里（关键！）
            placeholder: '请输入',
          },
          listeners: {          // 所有event事件都配置在这里（关键！）
            'input': (val:any) => {
              console.log('输入内容：' + val)
            }
          }
        }
      ],
      rules: {  // 配置所有需要校验的表单内容
        inputValue: [ // key需要和listQuery中的参数一致！(关键！)
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>