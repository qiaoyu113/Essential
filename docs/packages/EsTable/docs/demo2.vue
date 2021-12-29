<template>
  <EsContainer
    title="EsTable全部用法"
  >
      
    <!-- 表格 -->
    <EsTable
      ref="EsTable"
      v-loading="listLoading"
      :data="tableData"
      v-bind="attrs"
      @operationClick="operationClick"
      @onPageSize="handlePageSize"
    >
      <template v-slot:op="scope">
        <el-button
          type="text"
          size="small"
          @click="click(scope)"
        >
          按钮
        </el-button>
      </template>
    </EsTable>
  </EsContainer>
</template>


<script lang="ts">
import { ElMessage } from 'element-plus'
import { reactive, toRefs } from 'vue'

export default {
  name: "Table",
  setup() {
    const tableData: any[] = []
    const attrs: any = {
      // 每行的key值
      'row-key': 'name',
      // 是否可以选择
      'select': true,  
      // 是否展示排序
      'indexes': true,
      // 批量操作按钮
      'operation-list': [
        { icon: 'edit', iconSize: 24, iconColor: '#FFFFFF', name: '按钮1', color: '#409EFF' },
        { icon: 'share', iconSize: 24, iconColor: '#FFFFFF', name: '按钮2', color: '#67C23A' }
      ],
      // 批量操作按钮展示文案
      'operation-name': '批量操作',
      // 表格列
      'columns': [
        {
          key: 'name',
          label: '姓名',
        },
        {
          key: 'mobile',
          label: '手机号',
        },
        {
          key: 'city',
          label: '所属城市',
        },
        {
          key: 'op',
          label: '操作',
          fixed: 'right',
          slot: true,
        }
      ],
      // 分页
      'page': {
        page: 1,
        limit: 30,
        total: 50
      },
      'page-sizes': [10, 20, 30, 40, 50]
    }
    const data = reactive({ 
      // 加载效果
      listLoading: false,
      // table数据
      tableData,
      // table配置项
      attrs
    })
    return {
      ...toRefs(data)
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 分页
    handlePageSize(page: any) {
      ElMessage({
        message: '已经选中：' + page.page,
        type: 'success'
      });
    },
    // 操作按钮
    operationClick(val: any) {
      console.log(val)
    },
    // 获取数据
    getData() {
      this.tableData = [
        { name: '小明', mobile: '13000000000', city: '北京市' },
        { name: '小明2', mobile: '13000000000', city: '北京市' },
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