<template>
  <div
    :class="isPC ? 'pagination-container' : 'pagination-container-m'"
  >
    <Operation
      v-if="total>0"
      :operation-list="operationList"
      @olclick="olclick"
    />
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :default-page-size="limit"
      :layout="isPC ? layout : layoutmini"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from 'vue'
import { scrollTo } from '../../utils/scroll-to'
import Operation from './Operation.vue'

export default {
    name: 'Pagination',
    components: {
        Operation
    },
    props: {
        total: {
            type: Number,
            default: 0,
            required: true
        },
        page: {
            type: Number,
            default: 1
        },
        limit: {
            type: Number,
            default: 20
        },
        pageSizes: {
            type: Array,
            default: () => [10, 20, 30, 40, 50]
        },
        layout: {
            type: String,
            default: 'total, sizes, prev, pager, next, jumper'
        },
        layoutmini: {
            type: String,
            default: 'prev, pager, next'
        },
        isPC: {
            type: Boolean,
            default: true
        },
        background: {
            type: Boolean,
            default: true
        },
        autoScroll: {
            type: Boolean,
            default: true
        },
        hidden: {
            type: Boolean,
            default: false
        },
        operationList: {
            type: Array,
            default: []
        },
    },
    setup(props, context) {
        const data = reactive({
            showList: false,
            buttonArrayTem: [{}],
            currentPage: computed({
              get() {
                return props.page;
              },
              set(val) {
                context.emit("update:page", val);
                return props.page || []
              }
            }),
            pageSize: computed({
              get() {
                return props.limit;
              },
              set(val) {
                context.emit("update:listQuery.limit", val);
                return props.limit || []
              }
            }),
            handleSizeChange(value: number) {
                context.emit("pagination", { page: props.page, limit: value });
                if (props.autoScroll) {
                    scrollTo(0, 800)
                }
            },
            handleCurrentChange(value: number) {
                context.emit("pagination", { page: value, limit: props.limit });
                if (props.autoScroll) {
                    scrollTo(0, 800)
                }
            },
            olclick(value: number) {
                context.emit("olclick", value);
            }
        });
        return {
            ...toRefs(data),
        };
    }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  background: #fff;
  padding: 18px 32px;
  box-sizing: border-box;
  text-align: right;
  display: flex;
  .operation{
    flex: 1;
    text-align: left;
    position: relative;
    z-index: 10;
    .operation-main{
      width: 100px;
      height: 28px;
      line-height: 28px;
      border-radius: 25px;
      text-align: center;
      background: #649CEE;
      color: #fff;
      font-size: 13px;
      box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    }
    .operation-main:hover{
      cursor: pointer;
    }
    .operation-main:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: inherit;
    }
    .operation-list{
      width:100%;
      position: absolute;
      bottom: 32px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      .ol{
        position: relative;
        .ol-icon{
          width:32px;
          height:32px;
          line-height: 32px;
          text-align: center;
          overflow: hidden;
          background: #649CEE;
          border-radius: 100%;
          box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
          color:#fff;
          margin:12px 0;
        }
        span{
          position: absolute;
          left: 40px;
          top:6px;
          font-size: 10px;
          color: #fafafa;
          background: #757575;
          display: inline;
          padding:4px 6px;
          border-radius: 6px;
        }
      }
    }
    .operation-list:hover{
      cursor: pointer;
    }
  }
  .el-pagination{
    flex: 6;
  }
}

.pagination-container-m{
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  .operation{
    flex: 1;
    text-align: left;
    position: relative;
    z-index: 10;
    .operation-main{
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 25px;
      text-align: center;
      background:#649CEE;
      color: #fff;
      font-size: 13px;
      box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
      span{
        display: none;
      }
    }
    .operation-main:hover{
      cursor: pointer;
    }
    .operation-main:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: inherit;
    }
    .operation-list{
      position: absolute;
      bottom: 32px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      .ol{
        position: relative;
        .ol-icon{
          width:32px;
          height:32px;
          line-height: 32px;
          text-align: center;
          overflow: hidden;
          background: #649CEE;
          border-radius: 100%;
          box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
          color:#fff;
          margin:12px 0;
        }
        span{
          min-width: max-content;
          position: absolute;
          left: 40px;
          top:6px;
          font-size: 10px;
          color: #fafafa;
          background: #757575;
          display: inline;
          padding:4px 6px;
          border-radius: 6px;
        }
      }
    }
    .operation-list:hover{
      cursor: pointer;
    }
  }
  .el-pagination{
    flex: 4;
  }
}

.pagination-container.hidden {
  display: none;
}
</style>

<style scoped>

  @media screen and (max-width: 700px){
    .pagination-container-m :deep() .el-pagination {
      overflow-x: auto;
    }
  }

</style>
