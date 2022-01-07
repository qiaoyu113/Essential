<template>
  <div :class="isPC ? 'dialog' : 'dialog-m'">
    <el-dialog
      v-model="show"
      :width="isPC ? width : '90%'"
      :close-on-click-modal="false"
      :custom-class="`${isPC ? customClass : customClass + 'dialog-content-m'}`"
      v-bind="$attrs"
      :title="title"
    >
      <div class="dialog-body">
        <slot />
      </div>
      <div
        v-if="showConfirmButton || showCancelButton"
        slot="footer"
        class="dialog-footer"
      >
        <el-button v-if="showCancelButton" @click="onCancel">
          {{ cancelButtonText }}
        </el-button>
        <el-button v-if="showOtherButton" :type="otherType" @click="onOther">
          {{ otherButtonText }}
        </el-button>
        <el-button
          v-if="showConfirmButton"
          type="primary"
          :disabled="sumbitAgain"
          @click="onConfirm"
        >
          {{ confirmButtonText }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
export default defineComponent({
  name: "EsDialog",
  props: {
    show: {
      type: Boolean,
      // required: true,
      default: false,
    },
    showCancelButton: {
      type: Boolean,
      default: true,
    },
    showOtherButton: {
      type: Boolean,
      default: false,
    },
    showConfirmButton: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "50%",
    },
    cancelButtonText: {
      type: String,
      default: "取消",
    },
    confirmButtonText: {
      type: String,
      default: "确定",
    },
    otherButtonText: {
      type: String,
      default: "其他",
    },
    title: {
      type: String,
      default: "提示",
    },
    customClass: {
      type: String,
      default: "",
    },
    otherType: {
      type: String,
      default: "",
    },
    cancel:[Boolean, Function],
    other:[Boolean, Function] ,
    confirm: [Boolean, Function],
    sumbitAgain: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update'],
  setup(props, context) {
    const show = ref(computed({
      get() {
        return props.show;
      },
      set(val) {
        if (val != props.show) {
          context.emit("update", { show: val });
        }
      }
    }))
    return {
      show,
      inheritAttrs: false,
      isPC: true,
    };
  },
  created() {
    this.isPC = this.getIsPc();
  },
  methods: {
    // 区分设备
    getIsPc() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false;
      } else {
        return true;
      }
    },
    onConfirm() {
      this.confirm && typeof this.confirm === "function"
        ? this.confirm(() => {
            this.show = false;
          })
        : this.hideDialog();
    },
    onCancel() {
      this.cancel && typeof this.cancel === "function"
        ? this.cancel(() => {
            this.show = false;
          })
        : this.hideDialog();
    },
    onOther() {
      this.other && typeof this.other === "function"
        ? this.other(() => {
            this.show = false;
          })
        : this.hideDialog();
    },
    hideDialog() {
      this.show = false;
    },
  },
});
</script>

<style lang="scss">
.dialog,
.dialog-m {
  .el-dialog__header {
    padding: 0;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    background: linear-gradient(to right, #2f448a, #409eff);
    border-radius: 2px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
  }
  .el-dialog__headerbtn {
    top: 10px;
    .el-dialog__close {
      color: #fff;
      font-size: 20px;
    }
  }
  .el-dialog__body {
    padding: 15px 20px;
  }
  .el-dialog {
    border-radius: 6px;
    overflow: hidden;
  }
  .dialog-footer{
    margin-top: 10px;
  }
  .el-dialog__title{
    color: #fff;
  }
}
.dialog-m {
  .el-dialog__wrapper {
    display: flex;
    align-items: center;
  }
  .el-dialog__header {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .el-dialog__footer {
    position: sticky;
    float: right;
    bottom: 0;
    background: #fff;
    z-index: 10;
  }
  .el-dialog {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .dialog-content-m {
    max-height: 80vh;
    overflow: auto;
  }
  .el-button--medium {
    margin-bottom: 10px;
  }
}
</style>
