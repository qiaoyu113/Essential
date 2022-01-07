<template>
  <div class="lazy-cascader" :style="{ width: width }">
    <!-- 禁用状态 -->
    <div
      v-if="props.disabled"
      class="el-input__inner lazy-cascader-input lazy-cascader-input-disabled"
    >
      <span v-show="placeholderVisible" class="lazy-cascader-placeholder">
        {{ placeholder }}
      </span>
      <div v-if="props.multiple" class="lazy-cascader-tags">
        <el-tag
          v-for="(item, index) in labelArray"
          :key="index"
          class="lazy-cascader-tag"
          type="info"
          disable-transitions
          closable
        >
          <span> {{ item.label.join(separator) }}</span>
        </el-tag>
      </div>
      <div v-else class="lazy-cascader-label">
        <el-tooltip
          placement="top-start"
          :content="labelObject.label.join(separator)"
        >
          <span>{{ labelObject.label.join(separator) }}</span>
        </el-tooltip>
      </div>
    </div>
    <!-- 禁用状态 -->
    <!-- 可选状态 -->
    <el-popover placement="bottom-start" :width="400" trigger="click">
      <template #reference>
        <div
          class="el-input__inner lazy-cascader-input"
          :class="props.disabled ? 'lazy-cascader-input-disabled' : ''"
        >
          <!-- <span v-show="placeholderVisible" class="lazy-cascader-placeholder">
            {{ placeholder }}
            </span> -->
          <div v-if="props.multiple" class="lazy-cascader-tags">
            <el-tag
              v-for="(item, index) in labelArray"
              :key="index"
              class="lazy-cascader-tag"
              type="info"
              size="small"
              disable-transitions
              closable
              @close="handleClose(item)"
            >
              <span> {{ item.label.join(separator) }}</span>
            </el-tag>
          </div>
          <div v-else class="lazy-cascader-label">
            <el-tooltip
              placement="top-start"
              :content="labelObject.label.join(separator)"
            >
              <span>{{ labelObject.label.join(separator) }}</span>
            </el-tooltip>
          </div>
          <span
            v-if="clearable && current.length > 0"
            class="lazy-cascader-clear"
            @click.stop="clearBtnClick"
          >
            <i class="el-icon-close" />
          </span>
        </div>
      </template>
      <div class="lazy-cascader-panel">
        <el-cascader-panel
          ref="panel"
          v-model="current"
          :options="options"
          :props="currentProps"
          @change="change"
        />
      </div>
    </el-popover>
    <!-- 可选状态 -->
  </div>
</template>
<script lang="ts">
import { ref, watch, computed, reactive, onMounted } from "vue";
export default {
  name: "EsCascader",
  props: {
    value: {
      type: Array,
      default: () => {
        return [];
      },
    },
    separator: {
      type: String,
      default: " > ",
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    width: {
      type: String,
      default: "400px",
    },
    filterable: Boolean,
    clearable: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    props: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    let options = ref([]); // 面板配置数据
    let current = ref([]); // 选中的值
    let labelArray = ref([]); // 选中项的label
    let labelObject = ref({ label: [], value: [] });
    // 初始化数据
    const initOptions = () => {
      props.props.lazyLoad(0, (list: any) => {
        options.value = list;
        if (props.props.multiple) {
          (current as any).value = [...props.value];
        } else {
          (current as any).value = props.value;
        }
      });
    };
    initOptions();
    const getLabelArray = () => {
        if (props.props.multiple) {
          let array = [];
          console.log('current.value.length', current.value.length);
          for (let i = 0; i < current.value.length; i++) {
            let obj = getObject(current.value[i]);
            array.push(obj);
          }
          (labelArray as any).value = array;
          // console.log('array', labelArray.value);
          //  emit("input", current.value);
          if (!props.props.disabled) {
            //   this.$nextTick(() => {
            //     this.$refs.popover.updatePopper()
            //   })
          }
        } else {
          (labelObject as any) = getObject(current.value || []);
        //   emit("input", current.value);
        }
      },
      /** 格式化id=>object */
      getObject = async (id: any) => {
        try {
          console.log("id==>", id);
          let nameArray: any = [];
          for (let i = 0; i < id.length; i++) {
            //  找到选中值的索引
            let index = options.value.findIndex((item: any) => {
              return item[props.props.value] === id[i];
            });
            //  拿到选中值的lable
            nameArray.push(options.value[index][props.props.label]);
            // children取值
            if ( i < id.length - 1 && (options as any).value[index].children === undefined ) {
              let list = new Promise((resolve) => {
                props.props.lazyLoad(id[i], (list: any) => {
                  resolve(list);
                });
              });
              let lists = await list;
              console.log("lists", lists);

              // this.$set(options[index], 'children', await list)
              // (options as any).value[index].children = lists
              // options = (options as any).value[index].children
            } else {
              // 如果有children直接赋值
              options = (options as any).value[index].children;
              console.log("options2", options);
            }
          }
          return { value: id, label: nameArray };
        } catch (e) {
          console.log("e", e);
          (current as any).value = [];
          return { value: [], label: [] };
        }
      };
    // 监听选中的值
    watch([current, props.value], (newValues, prevValues) => {
        (current as any).value = prevValues
        console.log(current.value);
        // getLabelArray()
    })

    // 懒加载数据
    const lazyLoad = (node: any, resolve: any) => {
      //   let current = current
      console.log('懒加载数据current', current.value);
      
      if (props.props.multiple) {
        current.value = [...current.value];
      }
      if (node.root) {
        resolve();
      } else if (node.data[props.props.leaf]) {
        resolve();
      } else if (node.data.children) {
        if (props.props.multiple) {
          current = current;
        }
        resolve();
      } else {
        props.props.lazyLoad(node.value, (list: any) => {
          node.data.children = list;
          if (props.props.multiple) {
            (current as any).value = current;
          }
          resolve(list);
        });
      }
    };
    return {
      options,
      current,
      labelObject,
      labelArray,
      currentProps: ref({
        multiple: props.props.multiple,
        checkStrictly: props.props.checkStrictly,
        value: props.props.value,
        label: props.props.label,
        leaf: props.props.leaf,
        lazy: true,
        lazyLoad: lazyLoad,
      })
    };
  },
  methods: {
      // 删除多选值
    /** 删除**/
    handleClose (item: any) {
      let index = (this.current as any).findIndex((obj: any) => {
        return obj.join() === item.value.join();
      });
      if (index > -1) {
        // this.$refs.panel.clearCheckedNodes()
        this.current.splice(index, 1)
        this.$emit("change", this.current);
      }
    },
    // 点击清空按钮
    clearBtnClick() {
        // this.$refs.panel.clearCheckedNodes()
      (this.current as any) = [];
      this.$emit("change", this.current);
    },
    change () {
      this.$emit("change", this.current);
    }
  }
};
</script>
<style lang="scss">
.lazy-cascader {
  display: inline-block;
  width: 300px;
  .lazy-cascader-input {
    position: relative;
    width: 100%;
    background: #fff;
    height: auto;
    min-height: 34px;
    padding: 5px;
    line-height: 1;
    cursor: pointer;
    > .lazy-cascader-placeholder {
      padding: 0 10px;
      line-height: 24px;
      color: #999;
      font-size: 14px;
    }
    > .lazy-cascader-label {
      padding: 0 2px;
      line-height: 28px;
      color: #606266;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > .lazy-cascader-clear {
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
  .lazy-cascader-input-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
    > .lazy-cascader-label {
      color: #c0c4cc;
    }
    > .lazy-cascader-placeholder {
      color: #c0c4cc;
    }
  }
}
.lazy-cascader-tag {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  margin: 2px;
  text-overflow: ellipsis;
  background: #f0f2f5;
  > span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > .el-icon-close {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    background-color: #c0c4cc;
    color: #fff;
  }
}
.lazy-cascader-panel {
  // margin-top: 10px;
  display: inline-block;
}
.suggestions-popper-class {
  width: auto !important;
  min-width: 200px;
}
.lazy-cascader-search {
  .empty {
    width: calc(100% - 24px);
    box-sizing: border-box;
    background-color: #fff;
    color: #999;
    text-align: center;
    position: absolute;
    z-index: 999;
    padding: 12px 0;
    margin-top: 12px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    &:before {
      content: "";
      position: absolute;
      top: -12px;
      left: 36px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid transparent;
      border-bottom: 6px solid #fff;
      filter: drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.02));
    }
  }
}
</style>
