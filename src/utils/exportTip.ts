import Vue from 'vue'

interface vm extends Vue {
  times:number;
}
export function exportFileTip(vm:vm, cb:Function) {
  vm.$confirm('是否确认导出?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async() => {
    if (vm.times === 10) {
      try {
        // eslint-disable-next-line no-inner-declarations
        function sucFun() {
          let overTime = setInterval(() => {
            if (vm.times > 1) {
              vm.times = vm.times - 1
            } else {
              vm.times = 10
              clearInterval(overTime)
            }
          }, 1000)
          const h = vm.$createElement
          const i = vm.$createElement
          const c = vm.$createElement
          vm.$notify({
            title: '导出成功',
            message: i(
              'i',
              { style: 'color: teal;font-style: normal;' },
              [
                '导出文件正在生成，请前往',
                h(
                  'i',
                  {
                    class: 'el-icon-download',
                    style:
                    'color: #333; font-weight:bold;font-size:24px;'
                  },
                  ''
                ),
                c(
                  'i',
                  { style: 'color: teal;font-style: normal;' },
                  '下载工具进行下载'
                )
              ]
            ),
            duration: 0,
            offset: 100
          })
        }
        await cb(sucFun)
      } catch (err) {
        // eslint-disable-next-line require-atomic-updates
        vm.times = 10
      }
    }
  }).catch(() => {
    vm.$message({
      type: 'info',
      message: '已取消'
    })
  })
}
