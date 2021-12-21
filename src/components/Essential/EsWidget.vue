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
            style="width:100%"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <el-input
            v-if="item.type === 13"
            v-model.trim="listQuery[item.key]"
            type="textarea"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <!-- 下拉框 -->
          <el-select
            v-else-if="item.type === 2"
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
          <!-- 日期区间控件 -->
          <el-date-picker
            v-else-if="item.type ===3"
            v-model="listQuery[item.key]"
            :editable="false"
            v-bind="item.attrs || {}"
            :type="item.dateType || 'daterange'"
            :value-format="item.format || 'timestamp'"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-on="item.listeners"
          />

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
          <el-checkbox-group
            v-else-if="item.type ===5"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
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
          <!-- 选择日期 -->
          <el-date-picker
            v-else-if="item.type ===6"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
            :editable="false"
            type="date"
            value-format="timestamp"
            v-on="item.listeners"
          />
          <!-- 显示文本 -->
          <span
            v-else-if="item.type ===7"
            style="padding-left: 10px; color: #333;"
            v-bind="item.attrs || {}"
            v-text="canNull(listQuery[item.key],item.isNull)"
          />
          <el-cascader
            v-else-if="item.type ===8"
            ref="cascader"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
            :options="item.options"
            v-on="item.listeners"
          />
          <!-- 选择日期时分秒 -->
          <el-date-picker
            v-else-if="item.type ===9"
            v-model="listQuery[item.key]"
            :editable="false"
            type="datetime"
            value-format="timestamp"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <el-time-picker
            v-else-if="item.type ===10"
            v-model="listQuery[item.key]"
            :editable="false"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
            value-format="timestamp"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <el-autocomplete
            v-else-if="item.type ===11"
            v-model="listQuery[item.key]"
            v-bind="item.attrs || {}"
            v-on="item.listeners"
          />
          <template
            v-else-if="item.type ===12"
          >
            <el-time-select
              v-model="listQuery[item.key]"
              class="timeSelect"
              v-bind="item.attrs || {}"
              v-on="item.listeners"
            />
          </template>
          <el-popover
            v-else-if="item.type === 17"
            placement="right-start"
            :width="item.width || 240"
            trigger="focus"
            :content="item.content"
          >
            <el-select
              slot="reference"
              v-model="listQuery[item.key]"
              v-bind="item.attrs || {}"
              v-on="item.listeners"
            >
              <el-option
                v-for="(sub,index) in item.options"
                :key="'select-'+sub.value+'-'+index"
                :label="sub.label"
                :value="sub.value"
              />
            </el-select>
          </el-popover>
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
import { DataIsNull } from '../../utils/index'

export default defineComponent ({
  name: "customForm",
  components: {
  },
  props: {
    msg: String,
    listQuery: Object,
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
