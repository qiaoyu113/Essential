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
          :label-width="item.w"
          :class="item.class"
        >
          <!-- 输入框 -->
          <el-input
            v-if="item.type === 'es-input'"
            v-model.trim="listQuery[item.key]"
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
          />
          <!-- 输入框 -->
          <el-input-number
            v-if="item.type === 'es-input-number'"
            v-model.number="listQuery[item.key]"
            style="width:100%"
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
          />
          <el-input
            v-if="item.type === 13"
            v-model.trim="listQuery[item.key]"
            type="textarea"
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
          />
          <!-- 下拉框 -->
          <el-select
            v-else-if="item.type === 2"
            v-model="listQuery[item.key]"
            class="el-selects"
            v-bind="item.tagAttrs || {}"
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
            v-bind="item.tagAttrs || {}"
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
              v-bind="item.tagAttrs || {}"
            >
              {{ sub.label }}
            </el-radio>
          </el-radio-group>
          <el-checkbox-group
            v-else-if="item.type ===5"
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
          <!-- 选择日期 -->
          <el-date-picker
            v-else-if="item.type ===6"
            v-model="listQuery[item.key]"
            v-bind="item.tagAttrs || {}"
            :editable="false"
            type="date"
            value-format="timestamp"
            v-on="item.listeners"
          />
          <!-- 显示文本 -->
          <span
            v-else-if="item.type ===7"
            style="padding-left: 10px; color: #333;"
            v-bind="item.tagAttrs || {}"
            v-text="canNull(listQuery[item.key],item.isNull)"
          />
          <el-cascader
            v-else-if="item.type ===8"
            ref="cascader"
            v-model="listQuery[item.key]"
            v-bind="item.tagAttrs || {}"
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
            v-bind="item.tagAttrs || {}"
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
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
          />
          <el-autocomplete
            v-else-if="item.type ===11"
            v-model="listQuery[item.key]"
            v-bind="item.tagAttrs || {}"
            v-on="item.listeners"
          />
          <template
            v-else-if="item.type ===12"
          >
            <el-time-select
              v-model="listQuery[item.key]"
              class="timeSelect"
              v-bind="item.tagAttrs || {}"
              v-on="item.listeners"
            />
          </template>
          <!-- <UpLoad
            v-else-if="item.type ===15"
            ref="UpLoad"
            v-model="listQuery[item.key]"
            :limit="item.limit"
            :multiple="item.multiple"
            :show="item.show"
            :tag-attrs="item.tagAttrs || {}"
            :listeners="item.listeners"
            @success="SuccessUpLoad(item.ref)"
          >
            <template>
              <div v-html="item.template" />
            </template>
          </UpLoad> -->
          <!-- <UpLoadFiled
            v-else-if="item.type ===16"
            ref="UpLoadFiled"
            v-model="listQuery[item.key]"
            :limit="item.limit"
            :multiple="item.multiple"
            :show="item.show"
            :but-text="item.butText"
            :tip="item.tip"
            :tag-attrs="item.tagAttrs || {}"
            :listeners="item.listeners"
            @success="SuccessUpLoad(item.ref)"
          >
            <template>
              <div v-html="item.template" />
            </template>
          </UpLoadFiled> -->
          <el-popover
            v-else-if="item.type === 17"
            placement="right-start"
            :width="item.w || 240"
            trigger="focus"
            :content="item.content"
          >
            <el-select
              slot="reference"
              v-model="listQuery[item.key]"
              v-bind="item.tagAttrs || {}"
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
          <!-- <LazyCascader
            v-else-if="item.type === 18"
            ref="LazyCascader"
            v-model="listQuery[item.key]"
            filterable
            :props="item.tagAttrs.props"
          /> -->
          <slot
            v-else-if="item.slot"
            :name="item.type"
            :row="{...item,...listQuery,...{key: item.key},...{tagAttrs: item.tagAttrs || {}}, ...{listeners: item.listeners}}"
          />
        </el-form-item>
      </el-col>
      <slot name="btn" />
      <div class="clearfix" />
    </el-form>
  </el-row>
</template>
<script set lang="ts">
// import { Vue, Component, Prop, Emit, Watch, Model } from 'vue-property-decorator'
// import UpLoad from '@/components/Essential/UpLoad.vue'
// import UpLoadFiled from '@/components/Essential/UpLoadFiled.vue'
// import CustomCity from '@/components/Essential/CustomCity.vue'
// import LazyCascader from '@/components/cascader/LazyCascader.vue'
import { DataIsNull } from '../../utils/index'
// import '@/styles/common.scss'

export default {
  name: "customForm",
  components: {
    // UpLoad,
    // UpLoadFiled,
    // CustomCity,
    // LazyCascader,
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
  data() {
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
}

  // interface IState {
  //   [key: string]: any;
  // }

  // @Component({
  //   name: 'EsForm',
  //   components: {
  //     UpLoad,
  //     UpLoadFiled,
  //     CustomCity,
  //     LazyCascader
  //   }
  // })
  
// export default class extends Vue {
//     // 判断是否是PC
//     @Prop({ default: () => {} }) listQuery!:IState
//     @Prop({ default: () => [] }) formItem!:any[]
//     @Prop({ default: 6 }) pcCol!:Number
//     @Prop({ default: () => {} }) rules!:IState
//     @Prop({ default: 'top' }) position!:IState
//     @Prop({ default: false }) mBlock!:boolean
//     @Prop({ default: false }) pcBlock!:boolean
//     @Watch('formItem', { deep: true, immediate: true })
//     getFormItem(val: any) {
//       // console.log(1, val)
//     }
//     @Watch('listQuery', { deep: true, immediate: true })
//     getListQuery(val: any) {
//       // console.log(2, val)
//     }
//     // 区分设备
//     get isPC() {
//       if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
//         return false
//       } else {
//         return true
//       }
//     }

//     // 没有数据的情况下，是否展示暂无数据，默认展示否则为空
//     canNull(val:any, isNull:any) {
//       if (isNull) {
//         if (val || val === 0) {
//           return val
//         } else {
//           return ''
//         }
//       } else {
//         return DataIsNull(val)
//       }
//     }
//     // 提交表单
//     private async submitForm(args:any) {
//       let type = false;
//       ((this.$refs['ruleForm']) as any).validate((valid:boolean) => {
//         if (valid) {
//           this.handlePass(valid, args)
//           type = true
//         } else {
//           console.log('error submit!!')
//           type = false
//         }
//       })
//       return type
//     }
//     // 上传图片成功后的重置
//     SuccessUpLoad(ref: any) {
//       ((this.$refs[ref]) as any)[0].clearValidate()
//     }

//     // 省市区选择成功后的绑定值
//     CustomCityVal(val: any, data: any) {
//       // console.log(val, data)
//       // data = val.value
//     }
//     // 重置表单
//     resetForm() {
//       if ((this.$refs['UpLoad'] as any) && (this.$refs['UpLoad'] as any)[0] && (this.$refs['UpLoad'] as any)[0].$children && (this.$refs['UpLoad'] as any)[0].$children[0]) {
//         ((this.$refs['UpLoad'] as any)[0].$children[0]).clearFiles()
//       }
//       if ((this.$refs['UpLoadFiled'] as any) && (this.$refs['UpLoadFiled'] as any)[0] && (this.$refs['UpLoadFiled'] as any)[0].$children && (this.$refs['UpLoadFiled'] as any)[0].$children[0]) {
//         ((this.$refs['UpLoadFiled'] as any)[0].$children[0]).clearFiles()
//       }
//       ((this.$refs['ruleForm']) as any).resetFields()
//     }
//     clearValidate(props:Array<string>|string) {
//       (this.$refs['UpLoad'] as any).clearFiles();
//       (this.$refs['UpLoadFiled'] as any).clearFiles();
//       ((this.$refs['ruleForm']) as any).clearValidate(props)
//     }
//     @Emit('onPass')
//     handlePass(isPass:boolean, args:any) {
//     }
// }
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
