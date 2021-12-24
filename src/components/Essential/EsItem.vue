<template>
  <div
    :class="isPC ? 'DetailItem' : 'DetailItem-m'"
  >
    <div class="detail-title">
      {{ name }}
    </div>
    <el-image
      v-if="type === 'image' && valueName"
      style="width: 100%"
      :src="valueName"
      :preview-src-list="[valueName]"
    />
    <div
      v-else-if="type === 'YN'"
      class="detail-value"
    >
      {{ valueName === 1 ? '是' : '否' }}
    </div>
    <div
      v-else
      class="detail-value"
    >
      {{ valueName }}
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {ref, watch} from 'vue'

export default {
  name: 'EsItem',
  props: {
    name: {
        type: String,
        default: ''
    },
    value: {
        type: null,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
  },
  setup(props) {
    // 监听title发生改变
    let valueName: any = ref('')
    watch(
        () => props.value,
        (val) => {
            if (!val) {
                if (typeof (val) === 'number') {
                    valueName = val
                } else {
                    valueName = '暂无数据'
                }
            } else {
                valueName = val
            }
        },
        { deep: true, immediate: true }
    );
    return {
      isPC: true,
      valueName
    }
  },
  created() {
    this.isPC = this.getIsPc()
  },
  methods: {
    // 区分设备
    getIsPc() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scope>
.DetailItem {
  width: 100%;
  padding: 0 15px 10px;
  box-sizing: border-box;
  .detail-title {
    // flex: 1;
    font-size: 13px;
    color: #9e9e9e;
    font-weight: 400;
    // text-align: right;
    padding-right: 16px;
    box-sizing: border-box;
    padding-bottom: 6px;
    line-height: 36px;
  }
  .detail-value {
    // flex: 2;
    font-size: 14px;
    color: #333;
    font-weight: 500;
    overflow-wrap: break-word;
    // line-height: 36px;
  }
}
</style>

<style lang="scss" scope>
.DetailItem-m {
  width: 100%;
  padding: 10px 14px;
  box-sizing: border-box;
  border-bottom: 1px solid #f8f9fa;
  .detail-title {
    width: 100%;
    font-size: 12px;
    color: #666;
    font-weight: 400;
    text-align: left;
    padding-right: 15px;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .detail-value {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
