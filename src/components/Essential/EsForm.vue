<template>
  <el-row
    :gutter="20"
    class="EsForm"
    :class="{
      pc: pcBlock,
      mobile: mBlock,
      p15: isPC
    }"
  >
    <el-form
      ref="ruleForm"
      :model="listQuery"
      v-bind="$attrs"
      :rules="rules"
      :label-position="position"
    >
      <el-col
        v-for="item in formItem"
        :key="item.label || item.key"
        :span="isPC ? item.col || pcCol : 24"
        :class="item.class"
      >
        <el-form-item
          :ref="item.ref"
          :label="item.label"
          :prop="item.key"
          :label-width="item.width"
          :class="item.class"
        >
          <!-- 输入框 -->
          <el-input
            v-if="item.type === 'es-input'"
            v-model.trim="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <!-- 输入框 -->
          <el-input-number
            v-if="item.type === 'es-input-number'"
            v-model.number="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <!-- 自动补全输入框 -->
          <el-autocomplete
            v-if="item.type === 'es-autocomplete'"
            v-model.trim="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          >
            <template v-if="item.suffix" #suffix>
              <el-icon class="el-input__icon" v-on="item.listenersIcon || {}">
                <edit />
              </el-icon>
            </template>
            <template v-if="item.default" #default="{ item }">
              <div class="value">{{ item.value }}</div>
              <span class="link">{{ item.link }}</span>
            </template>
          </el-autocomplete>
          <!-- radio -->
          <el-radio-group
            v-else-if="item.type === 'es-radio'"
            v-model="listQuery[item.key]"
            v-on="item.listeners"
          >
            <el-radio
              v-for="(sub,index) in item.options"
              :key="'radio-'+sub.value+'-'+index"
              :label="sub.value"
              v-bind="item.attrs || {}"
            >
              {{ sub.label }}
            </el-radio>
          </el-radio-group>
          <!-- rate -->
          <el-rate 
            v-if="item.type === 'es-rate'"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners" 
          />
          <!-- select下拉框 -->
          <el-select
            v-else-if="item.type === 'es-select'"
            v-model="listQuery[item.key]"
            class="el-selects"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          >
            <el-option
              v-for="(sub,index) in item.options"
              :key="'select-'+sub.value+'-'+index"
              :style="'max-width:700px'"
              :label="sub.label"
              :value="sub.value"
            />
          </el-select>
          <!-- selectV2下拉框 -->
          <el-select-v2
            v-else-if="item.type === 'es-select-v2'"
            v-model="listQuery[item.key]"
            :options="item.options"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <!-- el-slider -->
          <el-slider
            v-else-if="item.type === 'es-slider'"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <!-- el-switch -->
          <el-switch
            v-else-if="item.type === 'es-switch'"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <!-- el-checbox -->
          <el-checkbox-group
            v-else-if="item.type === 'es-checkbox'"
            v-model="listQuery[item.key]"
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
          >
            <el-checkbox
              v-for="(sub,index) in item.options"
              :key="'checkbox-'+sub.value+'-'+index"
              :label="sub.value"
            >
              {{ sub.label }}
            </el-checkbox>
          </el-checkbox-group>
          <!--time-picker-->
          <el-time-picker
            v-else-if="item.type === 'es-time-picker'"
            v-model="listQuery[item.key]"
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
          />
          <!--el-time-select-->
          <el-time-select
            v-else-if="item.type === 'es-time-select'"
            v-model="listQuery[item.key]"
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
            />
          <!--transfer-->
          <div 
            style="text-align: center"
            v-else-if="item.type === 'es-transfer'"
          >
            <el-transfer
              v-model="listQuery[item.key].leftValue"
              style="text-align: left; display: inline-block"
              v-bind="item.attrs || {}"
              v-on="item.listeners"
            >
              <template #left-footer>
                <el-button
                  class="transfer-footer" 
                  size="small" 
                  v-on="item.operationLeft">
                  {{ item.operationLeftName }}
                </el-button>
              </template>
              <template #right-footer>
                <el-button
                  class="transfer-footer" 
                  size="small" 
                  v-on="item.operationRight">
                  {{ item.operationRightName }}
                </el-button>
              </template>
            </el-transfer>
          </div>
          <!-- 日期区间控件 -->
          <el-date-picker
            v-else-if="item.type === 'es-date-picker'"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <!--上传-->
          <!-- <UpLoad
            v-else-if="item.type === 'es-upload'"
            ref="UpLoad"
            v-model="listQuery[item.key]"
            :limit="item.limit"
            :multiple="item.multiple"
            :show="item.show"
            :tag-attrs="item.tagAttrs || {}"
            v-on="item.listeners"
            @success="SuccessUpLoad(item.ref)"
          >
            <template>
              <div v-html="item.template" />
            </template>
          </UpLoad> -->
          <slot
            v-else-if="item.slot"
            :name="item.type"
            :row="{...item,...listQuery,...{key: item.key},...{attrs: item.attrs || {}}, ...{listeners: item.listeners}}"
          />
        </el-form-item>
      </el-col>
      <slot name="btn" />
      <div class="clearfix" />
    </el-form>
  </el-row>
</template>
<script set lang="ts">
import { ref, defineComponent } from 'vue'
import { Edit } from '@element-plus/icons-vue'
// import UpLoad from '@/components/Essential/UpLoad.vue'
// import UpLoadFiled from '@/components/Essential/UpLoadFiled.vue'

export default defineComponent ({
  name: "EsForm",
  components: {
    Edit
    // UpLoad
    // UpLoadFiled
  },
  props: {
    msg: String,
    listQuery: null,
    formItem: null,
    pcCol:Number,
    rules:Object,
    position:Object,
    mBlock:Boolean,
    pcBlock:Boolean,
  },
  setup() {
    return {
      isPC: true
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
})
</script>

<style lang="scss" scoped>
  .EsForm {
    padding-bottom: 0;
    .contents{
      display: contents;
    }
    .grid{
      display: grid;
    }
    .block{
      display: block;
    }
   .clearfix {
     display: block;
     content:'';
     overflow: hidden;
     clear: both;
   }
  }
</style>

<style scoped>
  .EsForm :deep() .el-form {
    display: contents;
  }
  .EsForm :deep() .el-form-item__label {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #4A4A4A;
  }
  .EsForm :deep() .el-form-item__content {
    display: flex;
    flex: 1;
  }
  .EsForm :deep() .el-input {
    display: flex;
    flex: 1;
  }
  .EsForm :deep() .el-select {
    display: flex;
    flex: 1;
  }
  .EsForm :deep() .el-date-editor {
    display: flex;
    flex: 1;
  }
  .EsForm :deep() .el-cascader {
    display: flex;
    flex: 1;
  }

  .EsForm :deep() .el-autocomplete {
    display: flex;
    flex: 1;
  }

  /* .EsForm :deep() .el-radio {
    height:36px;
    line-height: 36px;
  } */

  .el-selects :deep() .el-input__inner{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  @media screen and (max-width: 700px){
    .mobile :deep() .el-form-item {
      display: flex;
      flex-direction: column;
    }

    .mobile :deep() .el-form-item__label {
      text-align: left;
    }

    .mobile :deep() .el-form-item__content {
      margin-left: 0px!important;
    }
  }
  @media screen and (min-width: 700px){
    .pc :deep() .el-form-item {
      display: flex;
      flex-direction: column;
    }

    .pc :deep() .el-form-item__label {
      text-align: left;
    }

    .pc :deep() .el-form-item__content {
      margin-left: 0px!important;
    }
  }
</style>

<style>
  @media screen and (max-width: 700px) {
    .el-picker-panel{
      left: 0 !important;
      width: 100%!important;
      overflow-x: auto;
    }
  }
  .el-popover{
    color: #E6A23C;
  }
</style>
