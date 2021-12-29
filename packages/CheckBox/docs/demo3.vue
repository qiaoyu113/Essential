<template>
  <EsContainer title="Checkbox indeterminate属性 ">
    <el-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      >Check all</el-checkbox
    >
    <EsForm
      ref="EsForm"
      :list-query="listQuery"
      :form-item="formItem"
      :rules="rules"
    />
  </EsContainer>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue";

export default {
  name: "Checkbox",

  setup() {
    let checkedList = [1, 2, 3, 4];
    let isIndeterminate = ref(true);
    let checkAll = ref(false);
    const value = reactive({ CheckboxValue: [1, 2] });
    const option2 = [
      { label: "选项1", value: 1 },
      { label: "选项2", value: 2 },
      { label: "选项3", value: 3 },
      { label: "选项4", value: 4 },
    ];
    const handleCheckAllChange = (val: any) => {
      // 选中的值
      (value.CheckboxValue as any) = val ? checkedList : [];
      isIndeterminate.value = false;
    };
    const formItem = [
      {
        type: "es-checkbox",
        label: "checkbox",
        key: "CheckboxValue",
        col: 24,
        width: "100px",
        tagAttrs: {},
        options: option2,
        listeners: {
          change: (val: any) => {
            console.log("val", val);
            const checkedCount = val.length;
            checkAll.value = checkedCount === checkedList.length;
            isIndeterminate.value = checkedCount > 0 && checkedCount < checkedList.length;
            ElMessage({
              message: "已经选中：" + val,
              type: "success",
            });
          },
        },
      },
    ];
    return {
      listQuery: value,
      formItem,
      checkAll,
      isIndeterminate,
      handleCheckAllChange,
      rules: {
        CheckboxValue: [
          { required: true, message: "请选择", trigger: "change" },
        ],
      },
    };
  },
};
</script>