<template>
  <EsContainer title="Form动态添加">
    <EsForm
      ref="EsForm"
      :list-query="listQuery"
      :form-item="formItem"
      label-width="100px"
      :rules="rules"
    >
      <template #carNum="{ row }">
        <el-select
          v-model="listQuery[row.key]"
          filterable
          remote
          v-bind="row.attrs || {}"
        >
          <el-option
            v-for="(sub, index) in optionList['carNum']"
            :key="'select-' + sub.value + '-' + index"
            :style="'max-width:700px'"
            :label="sub.label"
            :value="sub.value"
          />
        </el-select>
        <el-button type="primary" @click="handleAddClick"> + 添加 </el-button>
      </template>
    </EsForm>
    <div v-for="(item, i) in formArr" :key="i">
      <EsForm
        :list-query="item.listQuery2"
        :form-item="item.formItem2"
        :rules="item.rules"
        label-width="100px"
        position="top"
      >
        <template #amount="{ row, index }">
          <el-input
            v-model="item.listQuery2[row.key]"
            v-bind="row.attrs || {}"
          />
          <el-button type="primary" style="margin-left: 20px;" @click="handledelClick(index)">
            - 删除
          </el-button>
        </template>
      </EsForm>
    </div>
  </EsContainer>
</template>

<script lang="ts">
import { resetForm } from "@/utils/index";
import { ElMessage } from "element-plus";
import { reactive, toRefs } from "vue";

export default {
  name: "Form",

  setup() {
    let data: any = reactive({
      listQuery: reactive({
        customer: "",
        bill: "",
        carNum: "",
      }),
      optionList: {
        carNum: [
          {
            value: "京A0000",
            label: "京A0000",
          },
          {
            value: "京A0001",
            label: "京A0001",
          },
        ],
      },
      formItem: [
        {
          type: "es-select",
          label: "客户名称",
          key: "customer",
          col: 12,
          options: [
            {
              value: 1,
              label: "客户1",
            },
            {
              value: 2,
              label: "客户2",
            },
          ],
          attrs: {
            placeholder: "请选择客户名称",
          },
          listeners: {
            change: (val: any) => {
              ElMessage({
                message: "已经选中：" + val,
                type: "success",
              });
            },
          },
        },
        {
          type: "es-date-picker",
          label: "日期单位",
          key: "bill",
          col: 14,
          format: "YYYY-MM",
          attrs: {
            placeholder: "请选择日期单位",
            type: "month",
          },
          listeners: {
            change: (val: any) => {
              ElMessage({
                message: "已经选中：" + val,
                type: "success",
              });
            },
          },
        },
        {
          slot: true,
          col: 14,
          type: "carNum",
          key: "carNum",
          label: "车辆车牌",
          attrs: {
            placeholder: "请选择车辆",
          },
        },
      ],
      formArr: reactive([]),
    });
    return {
      ...toRefs(data),
      rules: {
        customer: [{ required: true, message: "请选择", trigger: "change" }],
        bill: [{ required: true, message: "请选择", trigger: "change" }],
        carNum: [{ required: true, message: "请选择", trigger: "change" }],
      },
    };
  },
  methods: {
    async handleAddClick() {
      let CreatForm = await (this.$refs.EsForm as any).submitForm();
      if (!CreatForm) {
        ElMessage({
          message: "请完善表单后添加",
          type: "warning",
        });
        return false;
      }
      let { bill, carNum } = (this as any).listQuery;
      let billItem = `${bill} ~ ${carNum}`;
      let formObj = {
        formItem2: [
          {
            type: "es-span",
            label: "账单项",
            key: "billItem",
            col: 6,
          },
          {
            type: "es-select",
            label: "类型",
            key: "adjust",
            col: 8,
            options: [
              {
                value: 1,
                label: "类型1",
              },
              {
                value: 2,
                label: "类型2",
              },
            ],
            attrs: {
              placeholder: "请选择类型",
            },
          },
          {
            slot: true,
            col: 8,
            type: "amount",
            key: "amount",
            label: "金额",
            attrs: {
              placeholder: "请输入金额",
              clearable: true
            },
          },
        ],
        listQuery2: {
          billItem,
          adjust: "",
          amount: "",
        },
        rules: {
          adjust: [{ required: true, message: "请选择", trigger: "change" }],
          amount: [{ required: true, message: "请输入", trigger: "blur" }],
        },
      };

      (this as any).formArr.push(formObj);

      // 清空对象
      resetForm((this as any).listQuery);
      // 重置校验
      (this.$refs.EsForm as any).resetFields();
    },
    async handledelClick(i: any) {
      (this as any).formArr.splice(i, 1);
    },
  },
};
</script>
