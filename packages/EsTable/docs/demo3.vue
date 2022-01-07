<template>
  <EsContainer title="EsTable 输入用法">
    <el-form ref="formOperation" :rules="model.rules" :model="model">
      <!-------------------------------------------- 表格 -->
      <es-table
        v-loading="listLoading"
        :data="model.tableDatas"
        v-bind="attrs"
      >
        <template v-slot:name="scope">
          <el-form-item
            style="margin: 15px"
            :prop="'tableDatas.' + scope.index + '.name'"
            :rules="model.rules.name"
          >
            <el-input
              v-model="scope.row.name"
              type="text"
              placeholder="请输入名称"
            />
          </el-form-item>
        </template>
        <template v-slot:mobile="scope">
          <el-form-item
            style="margin: 15px"
            :prop="'tableDatas.' + scope.index + '.mobile'"
            :rules="model.rules.mobile"
          >
            <el-input
              v-model="scope.row.mobile"
              type="text"
              placeholder="请输入手机号"
            />
          </el-form-item>
        </template>
        <template v-slot:city="scope">
          <el-form-item
            style="margin: 15px"
            :prop="'tableDatas.' + scope.index + '.city'"
            :rules="model.rules.city"
          >
            <el-select
              v-model="scope.row.city"
              placeholder="请选择"
            >
              <el-option label="上海市" value="shanghai"></el-option>
              <el-option label="北京市" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </template>
        <template v-slot:op="scope">
          <el-button type="text" @click="click(scope)"> 按钮 </el-button>
        </template>
      </es-table>
    </el-form>
  </EsContainer>
</template>
<script lang="ts">
import { ElMessage } from "element-plus";
import { ref, reactive, toRefs } from "vue";

export default {
  name: "Table",
  setup() {
    const listLoading = false
    const attrs: any = {
      // 每行的key值
      "row-key": "name",
      // 是否可以选择
      select: false,
      // 是否展示排序
      indexes: false,
      // 批量操作按钮
      "operation-list": [],
      // 批量操作按钮展示文案
      "operation-name": "批量操作",
      // 表格列
      columns: [
        {
          key: "name",
          label: "姓名",
          slot: true,
          "min-width": "100px",
        },
        {
          key: "mobile",
          label: "手机号",
          slot: true,
          "min-width": "100px",
        },
        {
          key: "city",
          label: "所属城市",
          slot: true,
          "min-width": "100px",
        },
        {
          key: "op",
          label: "操作",
          fixed: "right",
          slot: true,
          "min-width": "100px",
        },
      ],
      // 分页
      page: {
        page: 1,
        limit: 30,
        total: 50,
      },
      "page-sizes": [10, 20, 30, 40, 50],
    };
    // 校验手机号
    const checkPhone = (rule: any, value: any, callback: any) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号码不符合规范，请输入正确号码"));
      } else {
        callback();
      }
    };
    const model = reactive({
      rules: {
        name: [
          { required: true, message: "名称不能为空", trigger: "change" }
        ],
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "change" },
          { validator: checkPhone, trigger: "blur" },
        ],
        city: [
          { required: true, message: "所属城市不能为空", trigger: "change" },
        ]
      },
      tableDatas: []
    })
    return {
      model,
      attrs,
      listLoading
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取数据
    getData() {
      this.model.tableDatas = [
        { name: '小明', mobile: '13000000000', city: '北京市' },
        { name: '小明2', mobile: '13000000000', city: '北京市' }
      ]
    },
    // 点击事件
    click(scope: any) {
      ElMessage({
        message: '点击了第' + scope.index + '列的按钮',
        type: 'success'
      });
    }
  }
};
</script>