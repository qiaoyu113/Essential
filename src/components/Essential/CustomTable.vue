<template>
  <div
    class="CustomTable"
    :style="{
      padding: isPC && isP30 ? '0px 30px' :'0px'
    }"
  >
    <el-table
      ref="multipleTable"
      :row-style="{height: '20px'}"
      :cell-style="{padding: '5px 0'}"
      :data="tableData"
      :border="isPC"
      :row-key="row => {
        return row[rowKey]
      }"
      size="mini"
      fit
      stripe
      highlight-current-row
      v-bind="$attrs"
      style="width: 100%; "
      empty-text=" "
      v-on="$listeners"
    >
      <el-table-column
        v-if="indexes"
        label="序号"
        type="index"
        width="50"
        align="center"
      />
      <el-table-column
        v-if="index"
        :reserve-selection="true"
        type="selection"
        width="50"
        :disable="func"
      />
      <el-table-column
        v-for="item in columns"
        :key="item.key"
        :align="item.align || 'center'"
        :min-width="item.width || 100"
        :label="item.label"
        :fixed="item.fixed"
        v-bind="item.attrs"
      >
        <template
          slot-scope="scope"
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
              :$index="scope.$index"
            />
            <template v-else>
              {{ scope.row[item.key] | DataIsNull }}
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
    <pagination
      v-show="page.total>0"
      :operation-list="operationList"
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
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import Pagination from '@/components/Pagination/index.vue'
import { SettingsModule } from '@/store/modules/settings'

function disabledCheckBox(row:any, index:number):boolean {
  if (row.disabled) return false
  return true
}

interface PageObj {
  page:Number,
  limit:Number,
  total?:Number
}
@Component({
  name: 'CustomTable',
  components: {
    Pagination
  }
})

export default class extends Vue {
  @Prop({ default: () => [] }) tableData!:any[]
  @Prop({ default: () => [] }) columns!:any[]
  @Prop({ default: () => [10, 20, 30, 40, 50] }) pageSize?:any[]
  @Prop({ default: () => disabledCheckBox }) func!:Function
  @Prop({ default: true }) index!:boolean
  @Prop({ default: true }) isP30!:boolean
  @Prop({ default: false }) indexes!:boolean;
  @Prop({ default: false }) empty?:boolean;
  @Prop({ default: '' }) rowKey?:string;
  @Prop({ default: () => SettingsModule.tableHeight }) height!:number;
  @Prop({ default: () => [
    { icon: 'el-icon-phone', name: '1', color: '#999' },
    { icon: 'el-icon-star-off', name: '2', color: '#978374' }
  ] }) operationList!:any[]
  @Prop({ default: () => ({ current: 1, size: 20, total: 0 }) }) page!:PageObj

  // 区分设备
  get isPC() {
    return SettingsModule.isPC
  }

  // 多选数组
  multipleSelection:any[] =[]
  @Watch('multipleSelection', { deep: true })
  private onchange(val:any) {
    // console.log(val)
  }

  /**
   * 分页和切换页码
   */
  @Emit('onPageSize')
  handlePageSizeChange(value:PageObj) {
  }
   @Emit('onCommand')
  handleCommand(command:any, row:any) {
  }
   @Emit('olclick')
   handleOlClick(value:any) {
   }
   /**
   * 勾选中的item
   */
   handleSelectionChange(val:any) {
     this.multipleSelection = val
   }
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
</script>
<style lang="scss" scoped>
  .CustomTable{
    background: #FFFFFF;
    // box-shadow: 4px 4px 10px 0 rgba(218,218,218,0.50);
    overflow: hidden;
  }
</style>

<style scoped>
  .CustomTable >>> .pagination-container {
    padding-left: 0px;
    padding-right: 0px;
  }
   .CustomTable >>> .emptyText{
     color: aquamarine;
     font-weight: bold;
     font-size: 20px;
   }
</style>
