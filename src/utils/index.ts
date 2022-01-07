/* 过滤是否为空 */
export const DataIsNull = (value: any) => {
  
  if (value === 0) {
    return value
  }
  // 2021-12-06 zhh return '暂无数据'
  if (!value && value !== undefined) {
    return ' '
  }
  if (value === undefined) {
    return 'Loading...'
  }
  if (value === '') {
    return '暂无数据'
  }
  return value
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
