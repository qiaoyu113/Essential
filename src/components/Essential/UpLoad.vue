<template>
  <div style="display: flex;">
    <el-upload
      ref="upLoad"
      action="http://mor-express-test.oss-cn-beijing.aliyuncs.com"
      list-type="picture-card"
      style="flex: 1;"
      :http-request="fnUploadRequest"
      :limit="limit"
      :multiple="multiple"
      :show-file-list="show"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-remove="handleRemove"
      :on-exceed="handleExceed"
      v-bind="tagAttrs"
      v-on="listeners"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model, Watch } from 'vue-property-decorator'
import OSS from 'ali-oss'
    @Component({
      name: 'UpLoad',
      components: {
      }
    })
export default class extends Vue {
  @Prop({ default: () => 6 }) limit: any
  @Prop({ default: () => false }) multiple: any
  @Prop({ default: () => true }) show: any
  @Prop({ default: () => {} }) tagAttrs: any
  @Prop({ default: () => {} }) listeners: any
  private imageUrl: any = []
  private dialogVisible = false
  // 首先第一行引入 ali-oss 插件并配置：
  // private bucket: any = 'dev-mf-common-bucket'
  private bucket: any = (() => {
    let buckets = 'dev-mf-common-bucket'
    if (window.location.host === 'h5.morexpress.com.cn') {
      buckets = 'prod-mf-common-bucket'
    }
    return buckets
  })

  private client = new OSS({
    // accessKeyId: 'LTAI5tRFGQb2V3yFw31tD1eG', // 查看你自己的阿里云KEY
    // accessKeySecret: 'crU3xffIcGyIpnoPu1WFYq8kJVghp9',
    // bucket: 'mor-express-test', // 你的 OSS bucket 名称
    // region: 'oss-cn-beijing' // bucket 所在地址，我的是 华北2 北京
    region: 'oss-cn-hangzhou',
    // region: 'oss-cn-beijing',
    //   region: 'oss.shanci.tech',
    accessKeyId: 'LTAI5t8VLUa4qUiWFYfMUn48',
    accessKeySecret: 'GweTQJW5NDA77qi8OJWJCJnaUCHQOv',
    // bucket: 'mor-express-test'
    bucket: this.bucket()
  });

  @Model('success') value!: boolean
  @Watch('value', { immediate: true })
  getVisible(newVal: any, oldVal: any) {
    // console.log('newVal', newVal, 'oldVal', oldVal)
  }
  @Emit('success')
  changeValue(res: any) {}

  // 图片上传成功回调
  handleAvatarSuccess(res: any) {
    if (res) {
      this.dialogVisible = true
      this.imageUrl.push(res.url)
      this.changeValue(this.imageUrl.toString())
    }
  }

  beforeAvatarUpload(file: any) {
    // 上传文件之前校验图片格式和大小
    const isJPG =
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/gif' ||
        file.type === 'image/jpg'
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isJPG) {
      this.$message.error('上传图片只能是 JPG、JPEG、PNG、GIF 格式!')
      return false
    }
    if (!isLt2M) {
      this.$message.error('上传图片大小不能超过2MB!')
      return false
    }
  }

  // 删除
  handleRemove(file: any, fileList: any) {
    this.dialogVisible = false
    //* 1. 获取将要删除的图片的临时路径
    const url = file.response ? file.response.url : ''
    //* 2. 从 pics 数组中，找到这个图片对应的索引值
    const i = this.imageUrl.findIndex((item: any) => item.pic === url)
    //* 3. 调用数组的splice方法，把图片信息对象组中移除
    this.imageUrl.splice(i, 1)
    this.changeValue(this.imageUrl.toString())
  }

  // 限制
  handleExceed() {
    this.$message.error('最多只能上传' + this.limit + '张图片!')
  }

  async fnUploadRequest(options: any) {
    try {
      let file = options.file // 拿到 file
      let fileName = file.name.substr(0, file.name.lastIndexOf('.'))
      let date = new Date().getTime()
      let fileNames = `${date}_${fileName}` // 拼接文件名，保证唯一，这里使用时间戳+原文件名
      let datas = new Date()
      let year = String(datas.getFullYear()) + String(datas.getMonth()) + String(datas.getDate())
      // 上传文件,这里是上传到OSS的 uploads文件夹下
      this.client.put('bss/' + year + '/' + fileNames, file).then((res: any) => {
        if (res.res.statusCode === 200) {
          options.onSuccess(res)
        } else {
          options.onError('上传失败')
        }
      })
    } catch (e) {
      options.onError('上传失败')
    }
  }
}
</script>

<style scoped lang="scss">
.image__preview{
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    margin: 0 8px 8px 0;
    display: inline-block;
    position: relative;
    .delet {
      position: absolute;
      right: 3px;
      top: 3px;
      color: red;
      cursor:pointer;
    }
}
</style>
