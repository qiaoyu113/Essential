<template>
  <EsContainer title="Form动态添加">
    <EsForm
      ref="EsForm"
      :list-query="listQuery"
      :form-item="formItem"
      label-width="100px"
      :rules="rules"
    >
      <template #addBut="{row}">
        <el-button type="primary" @click="handleAddClick"> + 添加 </el-button>
      </template>
    </EsForm>
    <!-- 表格 -->
    <EsTable
      ref="EsTable"
      v-if="isShowEsTable"
      v-loading="listLoading"
      :data="tableData"
      :columns="columns"
      row-key="name"
      :select="false"
      :indexes="false"
      :border="true"
    >
      <template #mobile="{row}">
        <el-input
          v-if="row.showNode"
          v-model="row.mobile"
          v-bind="row.attrs || {}"
        />
        <span v-else>{{ row.mobile }}</span>
      </template>
      <template #city="{row}">
        <el-select
          v-if="row.showNode"
          v-model="row.city"
          filterable
          remote
          v-bind="row.attrs || {}"
        >
          <el-option
            v-for="(sub, index) in optionList['city']"
            :key="'select-' + sub.value + '-' + index"
            :style="'max-width:700px'"
            :label="sub.label"
            :value="sub.value"
          />
        </el-select>
        <span v-else>{{ row.city }}</span>
      </template>
      <template #op="{row, index}">
        <el-button
          v-if="!row.showNode"
          type="text"
          size="small"
          @click="handleEditClick(index)"
        >
          编辑
        </el-button>
        <el-button
          v-if="row.showNode"
          type="text"
          size="small"
          @click="handleSaveClick(index)"
        >
          保存
        </el-button>
        <el-button
          type="text"
          size="small"
          @click="handleDelClick(index)"
        >
          <span style="color: #f56c6c;">删除</span>
        </el-button>
      </template>
    </EsTable>
  </EsContainer>
</template>

<script lang="ts">
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
          type: "addBut",
          key: "addBut",
          label: "调整的账单项"
        },
      ],
      columns: [
        {
          key: 'name',
          label: '姓名'
        },
        {
          key: 'mobile',
          label: '手机号',
          slot: true
        },
        {
          key: 'city',
          label: '所属城市',
          slot: true
        },
        {
          key: 'op',
          label: '操作',
          fixed: 'right',
          slot: true,
      }],
      optionList: {
        city: [
          {
            value: "北京",
            label: "北京",
          },
          {
            value: "上海",
            label: "上海",
          },
        ],
      },
      listLoading: false,
      isShowEsTable: false,
    });
    let tableData: any = reactive([])
    const handleEditClick = (i:any) => {
        tableData[i].showNode = true
    }
    const handleSaveClick = (i:any) => {
        tableData[i].showNode = false;
    }
    const handleDelClick = (i:any) => {
        tableData.splice(i, 1)
        if(tableData.length === 0) {
            data.isShowEsTable = false;
        }
    }
    return {
      ...toRefs(data),
      tableData,
      handleEditClick,
      handleSaveClick,
      handleDelClick,
      rules: {
        customer: [{ required: true, message: "请选择", trigger: "change" }],
        bill: [{ required: true, message: "请选择", trigger: "change" }]
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
      (this as any).isShowEsTable = true;
      (this as any).tableData.push({ name: '小明', mobile: '1300000000', city: '北京' })
      this.reset();
    },
    // 清空数据和重置校验
    reset() {
      // 清空对象
      (this.$refs.EsForm as any).clearValidate();
      // 重置校验
      (this.$refs.EsForm as any).resetFields();
    }
  }
};
</script>
