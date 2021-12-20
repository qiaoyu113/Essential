
import Vue from 'vue'

export const isPC = () => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return false
  } else {
    return true
  }
}

export const filterDetail = (objective: any, original: any) => {
  /**
   * * objective need passed array in this object，include {key: 'key', name: '中文名称'}
   * * original is original object, need recycle this object of key to judge and get value
   * *
   * */
  let obj = objective.map((item: any) => {
    for (var key in original) {
      if (item.key === key) {
        return {
          name: item.name,
          value: original[key],
          type: item.type || '',
          slot: item.slot || false,
          pcCol: item.pcCol || 6
        }
      }
    }
  })
  return obj
}
// 清空对象内属性
export function resetForm(obj:any) {
  for (var k in obj) {
    var ctor = obj[k] && obj[k].constructor
    if (ctor === Object) resetForm(obj[k])
    else if (ctor === Number) obj[k] = ''
    else if (ctor) obj[k] = ctor()
  }
  return obj
}
