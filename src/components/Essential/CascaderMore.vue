<template>
  <div class="CascaderMore">
    <el-cascader
      v-model="cascader"
      :placeholder="placeholder"
      :options="option"
      filterable
      :props="props"
      @change="movechange"
    />
    <div class="inputbox">
      <div
        v-if="iswrite && inputStatus"
      >
        <span>具体区域范围：</span>
        <el-input
          v-model="inputVal"
          placeholder="请输入内容"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'
import { GetAreaByType } from '@/api/common'
@Component({
  name: 'CascaderMore'
})
export default class extends Vue {
  @Prop({ default: false }) private iswrite!:boolean
  @Prop({ default: 1 }) private zindex!:number
  @Prop({ default: '请选择地区' }) private placeholder?:string
  private inputStatus:boolean = false
  private inputVal: string = ''
  private cascader: string[]= []
  private cascaderVal: any = {}
  private option: any[] = []
  private props:any = {
    lazy: true,
    lazyLoad: this.lazyLoad
  }
  @Watch('inputVal')
  private onval(value:any) {
    let address = value
    this.cascaderVal.address = address
    this.emitData()
  }
  @Watch('cascader')
  private oncascader(value:any) {
    if (this.cascader.length === this.zindex + 1) {
      this.inputStatus = true
    } else {
      this.inputStatus = false
    }
    this.cascaderVal.city = this.cascader
    this.emitData()
  }
  private async lazyLoad(node:any, resolve:any) {
    const { level, data, hasChildren, children } = node
    if (node.level !== 0) {
      let parentId = data.value
    } else {
      return
    }
    if (data && data.children && data.children.length !== 0) {
      return resolve([])
    } else {
      let res = await GetAreaByType(node.path)
      if (res.data.success) {
        let list:any[] = res.data.data
        list.map(e => {
          const nodes = Array.from({ length: 1 })
            .map(item => ({
              value: e.code,
              label: e.name,
              leaf: level >= this.zindex
            }))
          resolve(nodes)
        })
      }
    }
  }
  private movechange() {
    this.inputVal = ''
    this.cascaderVal.address = ''
    this.inputStatus = false
  }
  private emitData() {
    if (this.iswrite) {
      if (this.inputVal === '') {
        console.log('no')
      } else {
        console.log('yes')
        this.emitfunc(this.cascaderVal)
      }
    } else {
      console.log('yes')
      this.emitfunc(this.cascaderVal)
    }
  }
   @Emit('onGetcity')
  private emitfunc(obj:any) {
  }
  // 获取城市
   private async getCity(val:any[]) {
     const { data } = await GetAreaByType(val)
     if (data.success) {
       let cityList:any[] = data.data
       cityList.map(item => {
         item.label = item.name
         item.value = item.code
         delete item.name
         delete item.code
       })
       this.option = cityList
     } else {
       this.$message.error(data)
     }
   }

   created() {
     this.getCity([])
   }
}
</script>
<style lang="scss" scoped>
.CascaderMore{
  display: flex;
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
