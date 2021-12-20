<template>
  <div class="CascaderMore">
    <el-cascader
      v-model="cascaders"
      :props="props"
      :options="cascaderOptions"
      v-bind="tagAttrs"
      v-on="listeners"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Emit, Model } from 'vue-property-decorator'
import { GetAreaByType } from '@/api/common'
@Component({
  name: 'CascaderMore'
})
export default class extends Vue {
  // @Prop({ default: [] }) private cascader: any
  @Prop({ default: '请选择地区' }) private placeholder?:string
  @Prop({ default: 1 }) private zindex!:number
  @Prop({ default: () => {} }) tagAttrs: any
  @Prop({ default: () => {} }) listeners: any
  private cascaders:any = []
  private props:any = {
    multiple: this['tagAttrs'].multiple,
    lazy: true,
    lazyLoad: this.lazyLoad
  }
  private cascaderOptions: any = []
  @Model('el-cascader') value!: boolean
  @Watch('value', { immediate: true })
  getVisible(newVal: any, oldVal: any) {
    // console.log('newVal', newVal, 'oldVal', oldVal)
    if (newVal.length) {
      let ap = newVal.map((el: any) => {
        el = el.split(',')
        if (el.length) {
          el = el.map((e: any) => {
            e = Number(e)
            return e
          })
        }
        return el
      })
      this.cascaders = ap
      this.loadOptions(ap)
    }
  }
  // 递归加载子类目
  private async loadOptions(category: any) {
    // let array = []
    // let node = {}
    // for (let i = 0; i < category.length; i++) {
    //   if (category[i].length > 0) {
    //     category[i].forEach((el: any, index: any) => {
    //       console.log('3ee', el, index)
    //       if (index === 1) {

    //       }
    //     })
    //   }
    //   // array.push(category[i])
    // }
    // return array
  }
  @Watch('cascaders')
  private cascadersWatch(newVal: any, oldVal: any) {
    console.log('newVal', newVal, 'oldVal', oldVal)
    if (this['tagAttrs']['multiple-limit'] && newVal.length > this['tagAttrs']['multiple-limit']) {
      this.$message({
        message: '最多只支持选择' + this['tagAttrs']['multiple-limit'] + '项',
        duration: 1500,
        type: 'warning'
      })
      this.$nextTick(() => {
        this.cascaders = oldVal
      })
    }
  }
  private async lazyLoad(node:any, resolve:any) {
    const { level, data, hasChildren, children } = node
    if (level === 0) {
      const { data } = await GetAreaByType({
        'type': 2,
        'parentAreaId': ''
      })// 获取省接口
      let nodes: any = data.data.map((item: any) => {
        return {
          value: item.id,
          label: item.name,
          leaf: level >= this.zindex
        }
      })
      this.cascaderOptions = nodes
      resolve(nodes)
    } else if (level === 1) {
      const { data } = await GetAreaByType({
        'type': 3,
        'parentAreaId': node.data.value
      })// 获取市接口
      let nodes: any = data.data.map((item: any) => {
        return {
          value: item.id,
          label: item.name,
          leaf: level >= this.zindex
        }
      })
      //   nodes.unshift({
      //     value: 0,
      //     label: '全部',
      //     leaf: true
      //   })
      resolve(nodes)
    } else if (level === 2) {
      const { data } = await GetAreaByType({
        'type': 4,
        'parentAreaId': node.data.value
      })// 获取区/县接口
      let nodes: any = data.data.map((item: any) => {
        return {
          value: item.id,
          label: item.name,
          leaf: level >= this.zindex
        }
      })
      //   nodes.unshift({
      //     value: 0,
      //     label: '全部',
      //     leaf: true
      //   })
      resolve(nodes)
    }
  }

  created() {

  }
}
</script>
<style lang="scss" scoped>
.CascaderMore{
    width: 100%;
    align-items: center;
    .inputbox{
        flex: 1;
        span{
        width: 100px;
        margin-left: 20px;
        }
    }
    .el-cascader {
        flex: 0.6;
    }
    .inputbox > div{
        display: flex;
        align-items: center;
    }
}
</style>
