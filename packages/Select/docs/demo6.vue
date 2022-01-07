<template>
  <EsContainer
      title="Select组件 Slot"
    >
      <EsForm
        ref="EsForm"
        :list-query="listQuery"
        :form-item="formItem"
        :rules="rules"
      >
      <template
        slot="selectValue"
        slot-scope="{row}"
      >
        <el-select
          v-model="listQuery[row.key]"
          v-bind="row.attrs || {}"
          v-on="row.listeners || {}"
        >
          <el-option
            v-for="(sub,index) in optionList"
            :key="'select-'+sub.value+'-'+index"
            :style="'max-width:700px'"
            :label="sub.label"
            :value="sub.value"
          >
            <span style="float: left">{{ sub.label }}</span>
            <span
              style="
                float: right;
                color: var(--el-text-color-secondary);
                font-size: 13px;
                "
            >{{ sub.value }}</span>
          </el-option>
        </el-select>
      </template>
    </EsForm>
  </EsContainer>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

export default {
  name: "Select",
  
  setup() {
    const select = ref('')
    const listQuery = reactive({ selectValue: select })
    const optionList = reactive([
      {
        value: 'Value1',
        label: 'Option1'
      },
      {
        value: 'Value2',
        label: 'Option2'
      }
    ])
    const formItem = reactive([
      {
        type: 'selectValue',
        label: 'Slot 插槽',
        key: 'selectValue',
        slot: true,
        col: 24,
        attrs: {
          placeholder: '请输入'
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
    ])
    return {
      listQuery,
      optionList,
      formItem,
      rules: {
        selectValue: [
          { required: true, message: '不能为空', trigger: 'change' }
        ]
      }
    }
  }
};
</script>