<template>
  <div :class="isPC ? 'CustomItem' : 'CustomItem-m'">
    <el-col
      :span="isPC ? pccol : 24"
    >
      <el-form-item
        v-if="params.type === 1"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
      >
        <el-input
          v-model="ruleForm[params.prop]"
          :type="params.kind"
          v-bind="params.attrs || {}"
          v-on="params.listeners"
        />
      </el-form-item>
      <el-form-item
        v-if="params.type === 2"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
        :required="params.required"
      >
        <el-date-picker
          v-model="ruleForm[params.prop]"
          :type="params.kind"
          range-separator="至"
          value-format="timestamp"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :placeholder="params.placeholder"
          v-bind="params.attrs || {}"
          v-on="params.listeners"
        />
      </el-form-item>

      <el-form-item
        v-if="params.type === 3"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
      >
        <el-radio-group v-model="ruleForm[params.prop]">
          <el-radio
            v-for="(item,index) in params.radio"
            :key="'radio-'+item.type+'-'+index"
            :label="item.type"
            v-bind="params.attrs || {}"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item
        v-if="params.type === 4"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
      >
        <cascaderMore
          :zindex="+params.kind"
          :iswrite="params.iswrite"
          @onGetcity="onGetcity"
        />
      </el-form-item>

      <el-form-item
        v-if="params.type === 5"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
      >
        <el-select
          v-model="ruleForm[params.prop]"
          v-bind="params.attrs || {}"
          v-on="params.listeners"
        >
          <el-option
            v-for="(sub,index) in params.options"
            :key="'select-'+sub.value+'-'+index"
            :label="sub.label"
            :value="sub.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        v-if="params.type === 6"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
      >
        <el-checkbox-group
          v-model="ruleForm[params.prop]"
          v-bind="params.attrs || {}"
          v-on="params.listeners"
        >
          <el-checkbox
            v-for="(subs,index) in params.options"
            :key="'checkbox-'+subs.label+'-'+index"
            :label="subs.type"
          >
            {{ subs.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item
        v-if="params.type === 7"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
      >
        <el-time-select
          v-model="ruleForm[params.prop].workingTimeStart"
          style="margin-right:10px"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '23:45'
          }"
          v-bind="params.attrs || {}"
          placeholder="开始日期"
          v-on="params.listeners"
        />
        <el-time-select
          v-model="ruleForm[params.prop].workingTimeEnd"
          :picker-options="{
            start: '00:00',
            step: '00:15',
            end: '23:45'
          }"
          v-bind="params.attrs || {}"
          placeholder="结束日期"
          v-on="params.listeners"
        />
      </el-form-item>

      <el-form-item
        v-if="params.type === 8 && params.isShow"
        :class="isPC ? '' : 'formWarp'"
        :label-width="width+'px'"
        :label="params.label+'：'"
        :prop="params.prop"
      >
        <el-cascader
          v-model="ruleForm[params.prop]"
          v-bind="params.attrs || {}"
          :options="params.options"
          v-on="params.listeners"
        />
      </el-form-item>
    </el-col>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SettingsModule } from '@/store/modules/settings'
import CascaderMore from '@/components/Essential/CascaderMore.vue'
import '@/styles/common.scss'
interface params {
  prop:string,
  type:number,
  label:string,
  kind?:string,
  radio?:any[],
  placeholder?:string,
  iswrite?:boolean
  options?:any[]
}

    @Component({
      name: 'CustomItem',
      components: {
        CascaderMore
      }
    })
export default class CustomItem extends Vue {
  @Prop({ default: {} }) ruleForm!:any
  @Prop({ default: () => {} }) params!:params

  @Prop({ default: 8 }) pccol!:number
  @Prop({ default: 180 }) width!:number
  get
  isPC() {
    return SettingsModule.isPC
  }
  private onGetcity(obj:any) {
  }
}
</script>
<style lang="scss" scoped>
.CustomItem-m{
      .el-input, .el-date-editor, .el-textarea {
    width: 80%;
  }
}
</style>
<style scoped>
.CustomItem >>>.el-form-item__label,.CustomItem-m >>>.el-form-item__label{
  font-size: 14px;
  color: #4A4A4A;
}
.CascaderMore{
  flex: 1;
}
.CustomItem >>> .el-form-item__content {
    display: flex;
    flex: 1;
  }
  .CustomItem >>> .el-input {
    display: flex;
    flex: 1;
  }
  .CustomItem >>> .el-select {
    display: flex;
    flex: 1;
  }
  .CustomItem >>> .el-date-editor {
    display: flex;
    flex: 1;
  }
  .CustomItem >>> .el-radio {
    height:36px;
    line-height: 36px;
  }
  .CustomItem >>> .el-col-8{
    float: left!important
  }
  .formWarp{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: auto;
    align-content: flex-start;
  }
    .formWarp >>> .el-form-item__content{
       margin-left: 0!important;
       width: 100%;
    }
    .formWarp >>> .el-form-item__label{
      text-align: left!important;
    }
    .formWarp >>> .el-select,.el-input,.el-cascader,.el-textarea{
      width: 100%!important;
    }
    .formWarp >>> .el-radio{
      margin-bottom: 5px;
    }
  </style>
