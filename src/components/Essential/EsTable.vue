<template>
  <div
    class="EsTable"
  >
    <el-table
      ref="multipleTable"
      v-bind="$attrs"
      style="width: 100%; "
    >
      <el-table-column
        v-if="indexes"
        label="序号"
        type="index"
        width="50"
        align="center"
      />
      <el-table-column
        v-if="select"
        :reserve-selection="true"
        type="selection"
        width="50"
        :selectable="func"
      />
      <el-table-column
        v-for="item in columns"
        :key="item.key"
        :prop="item.key"
        :align="item.align || 'center'"
        :min-width="item.width || 100"
        :label="item.label"
        :fixed="item.fixed"
        v-bind="item.attrs"
      >
        <template
            v-if="item.slot"
            #default="scope"
        >
          <template v-if="item.moreOp && item.moreOp.length > 0">
            <el-dropdown @command="(e) => handleCommand(e,scope.row)">
              <span class="el-dropdown-link">
                <slot
                  v-if="item.slot"
                  :name="item.key"
                  :row="scope.row"
                  :$index="scope.$index"
                />
                <template v-else>
                  {{ scope.row[item.key] }}
                </template>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(sub,index) in item.moreOp"
                  :key="'dropdown-'+sub.value+index"
                  :command="sub.value"
                  v-bind="sub.tagAttrs || {}"
                >
                  <template v-if="isPC">
                    {{ sub.label }}
                  </template>
                  <i
                    v-else
                    :class="sub.icon"
                  />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <template v-else>
            <slot
              v-if="item.slot"
              :name="item.key"
              :row="scope.row"
              :index="scope.$index"
            />
            <template v-else>
              {{ scope.row[item.key] }}
            </template>
          </template>
        </template>
      </el-table-column>
      <div
        v-if="empty"
        slot="empty"
      >
        <p class="emptyText">
          请筛选用户~
        </p>
      </div>
    </el-table>
    <Pagination
      v-show="page.total>0"
      :isPC="isPC"
      :operation-list="operationList"
      :operation-name="operationName"
      :total="page.total"
      :page.sync="page.page"
      :page-sizes="pageSize"
      :limit.sync="page.limit"
      @olclick="handleOlClick"
      @pagination="handlePageSizeChange"
    />
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'

function disabledCheckBox(row:any, index:number):boolean {
  if (row.disabled) return false
  return true
}

function tableHeight(row:any, index:number):any {
    let otherHeight = 340 // 计算后的高度
    let isPC  = true
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        isPC = false
    } else {
        isPC = true
    }
    if (isPC) {
        otherHeight = 340
    } else {
        otherHeight = 300 // 移动端计算后的高度
    }
    return document.body.offsetHeight - otherHeight || document.documentElement.offsetHeight - otherHeight;
}

interface PageObj {
  page:Number,
  limit:Number,
  total?:Number
}

export default {
    name: 'EsTable',
    props: {
        tableData: {
            type: Array,
            default: []
        },
        columns: {
            type: Array,
            default: []
        },
        pageSize: {
            type: Array,
            default: [10, 20, 30, 40, 50]
        },
        func: {
            type: Function,
            default: disabledCheckBox
        },
        select: {
            type: Boolean,
            default: true
        },
        indexes: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        rowKey: {
            type: String,
            default: ''
        },
        height: {
            type: null,
            default: tableHeight
        },
        operationList: {
            type: null,
            default: () => []
        },
        operationName: {
            type: String,
            default: '批量操作'
        },
        page: {
            type: Object,
            default: { current: 1, size: 30, total: 0 }
        },
        multipleSelection: {
            type: Array,
            default: []
        }
    },
    setup(props, context) {
        // 监听title发生改变
        let multipleSelections: any = ref('')
        watch(
            () => props.multipleSelection,
            (val) => {
                multipleSelections = val
            },
            { deep: true, immediate: true }
        );
        return {
            isPC: true,
            multipleSelections,
            handlePageSizeChange(key: Number) {
                // 第一种方法
                context.emit("onPageSize", key);
            },
            /**
             * 批量操作
             */
            handleOlClick(val: any) {
                context.emit("operationClick", val);
            }
        }
    },
    created() {
        this.setting()
    },
    methods: {
        setting() {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                this.isPC = false
            } else {
                this.isPC = true
            }
            /**
             * 处理iOS 微信客户端6.7.4 键盘收起页面未下移bug
             */
            (/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener('blur', (e:any) => {
            // 这里加了个类型判断，因为a等元素也会触发blur事件
                ['input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false)
            }, true)
        },
        /**
         * 勾选中的item
         */
        handleSelectionChange(val: any) {
            this.multipleSelections = val
        },
        /**
         * 切换勾选
         */
        toggleRowSelection(rows:any[]) {
            if (rows) {
                rows.forEach(row => {
                    (this.$refs.multipleTable as any).toggleRowSelection(row)
                })
            } else {
                (this.$refs.multipleTable as any).clearSelection()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
  .EsTable{
    background: #FFFFFF;
    // box-shadow: 4px 4px 10px 0 rgba(218,218,218,0.50);
    overflow: hidden;
  }
</style>

<style scoped>
   .EsTable :deep() .emptyText{
     color: aquamarine;
     font-weight: bold;
     font-size: 20px;
   }
</style>
