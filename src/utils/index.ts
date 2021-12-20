// Parse the time to string
import Vue from 'vue'
import { Message } from 'element-ui'
import {
  getOfficeByTypeAndOfficeId,
  getOfficeByType,
  GetDictionaryCity,
  getGroupInfoByCityCodeAndProductLine,
  GetSpecifiedRoleList,
  GetAreaByType } from '@/api/common'

let context = new Vue()
interface IState {
  [key: string]: any;
}
interface DictData {
  label:string;
  value:number;
}

export const parseTime = (
  time?: object | string | number,
  cFormat?: string
): string | null => {
  if (time === undefined) {
    return null
  }
  if (time === null) {
    return ''
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date: Date
  if (typeof time === 'object') {
    date = time as Date
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj: { [key: string]: number } = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      return '0' + value
    }
    return String(value) || '0'
  })
  return timeStr
}

export const Timestamp = (timestamp: any) => {
  if (typeof timestamp === 'string') {
    timestamp = (+new Date(timestamp)) || (+new Date(timestamp.replace(/-/g, '/'))) || Number(timestamp)
  }
  const change = (t: any) => {
    if (t < 10) {
      return '0' + t
    } else {
      return t
    }
  }
  const isRealNum = (val: any) => {
    if (val === '' || val == null) {
      return false
    }
    if (!isNaN(val)) {
      return true
    } else {
      return false
    }
  }
  if (isRealNum(timestamp)) {
    if (timestamp) {
      var date = new Date(timestamp)
      const Y = date.getFullYear() + '-'
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      const D = change(date.getDate()) + ' '
      const h = change(date.getHours()) + ':'
      const m = change(date.getMinutes()) + ':'
      const s = change(date.getSeconds())
      return Y + M + D + h + m + s
    } else {
      return '暂无数据'
    }
  } else {
    return timestamp
  }
}

export const TimestampYMD = (timestamp: any) => {
  if (typeof timestamp === 'string') {
    timestamp = (+new Date(timestamp)) || (+new Date(timestamp.replace(/-/g, '/'))) || Number(timestamp)
  } else {
    timestamp = Number(timestamp)
  }
  const change = (t: any) => {
    if (t < 10) {
      return '0' + t
    } else {
      return t
    }
  }
  const isRealNum = (val: any) => {
    if (val === '' || val == null) {
      return false
    }
    if (!isNaN(val)) {
      return true
    } else {
      return false
    }
  }
  if (isRealNum(timestamp)) {
    if (timestamp) {
      var date = new Date(timestamp)
      const Y = date.getFullYear() + '-'
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      const D = change(date.getDate()) + ' '
      const h = change(date.getHours()) + ':'
      const m = change(date.getMinutes()) + ':'
      const s = change(date.getSeconds())
      return Y + M + D
    } else {
      return '暂无数据'
    }
  } else {
    return timestamp
  }
}

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

// Format and filter json data using filterKeys array
export const formatJson = (filterKeys: any, jsonData: any) =>
  jsonData.map((data: any) => filterKeys.map((key: string) => {
    if (key === 'timestamp') {
      return parseTime(data[key])
    } else {
      return data[key]
    }
  }))

// Check if an element has a class
export const hasClass = (ele: HTMLElement, className: string) => {
  return !!ele.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

// Add class to element
export const addClass = (ele: HTMLElement, className: string) => {
  if (!hasClass(ele, className)) ele.className += ' ' + className
}

// Remove class from element
export const removeClass = (ele: HTMLElement, className: string) => {
  if (hasClass(ele, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

// Toggle class for the selected element
export const toggleClass = (ele: HTMLElement, className: string) => {
  if (!ele || !className) {
    return
  }
  let classString = ele.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  ele.className = classString
}

// 列表过去时间转换
export const formatTime = (time: object | string | number, option?: any) => {
  time = +time * 1000
  const d: any = new Date(time)
  const now = Date.now()
  const diff = (now - d) / 1000
  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

// 过滤分页
export const HandlePages = (str: any) => {
  if (str === null || str === undefined || str === '') {
    Vue.prototype.$message({
      message: 'page返回信息为null,请检查接口',
      type: 'error'
    })
    let page = {
      total: 0
    }
    return page
  } else {
    return str
  }
}

/**
 * 获取label
 */
export const getLabel = (formItem:any[], listQuery:any, key:string, prop = {
  label: 'label',
  value: 'value'
}) => {
  let label:string = ''
  for (let i = 0; i < formItem.length; i++) {
    let item = formItem[i]
    if (item.key === key) {
      if ([1, 6, 11].includes(item.type)) { // input、date  // 处理input和选择日期
        label = listQuery[key]
        break
      } else if ([2, 4, 5].includes(item.type)) { // 下拉框、 radio、checkbox
        if (item.options && item.options.length > 0) {
          for (let j = 0; j < item.options.length; j++) {
            let sub = item.options[j]
            if (sub.value === listQuery[key]) {
              label = sub.label
              break
            }
          }
          break
        }
      } else if ([3].includes(item.type)) { // 处理日期区间
        let time:any[] = []
        if (listQuery[key].length === 2) {
          for (let i = 0; i < listQuery[key].length; i++) {
            let item = listQuery[key][i]
            time.push(parseTime(item, '{y}-{m}-{d}'))
          }
          label = time.join('-')
        }
        break
      } else if ([10].includes(item.type)) {
        let time:any[] = []
        if (listQuery[key].length === 2) {
          for (let i = 0; i < listQuery[key].length; i++) {
            let item = listQuery[key][i]
            time.push(parseTime(item, '{h}:{i}'))
          }
          label = time.join('-')
        }
        break
      } else if ([12].includes(item.type)) {
        if (listQuery[key].jobStartDate && listQuery[key].jobEndDate) {
          let jobStartDate = listQuery[key].jobStartDate
          let jobEndDate = listQuery[key].jobEndDate
          label = `${jobStartDate}-${jobEndDate}`
        }
        break
      }
    }
  }

  return label
}

export const phoneReg = /^[1][3-9][0-9]{9}$/

/**
 * 表单数字范围校验
 * @param {number} min
 * @param {number} max
 * @returns {(rule: any, value: string, callback: Function) => any}
 */
export function validatorNumberRange(min:number, max:number) {
  return function(rule: any, value: string, callback: Function) {
    if (!Number.isInteger(Number(value))) {
      return callback(new Error('请输入正整数的数字'))
    }
    if (Number(value) < min || Number(value) > max) {
      return callback(new Error(`请输入${min}-${max}之间的数字`))
    }
    callback()
  }
}

// 验证密码强度
export const isValidPassWord = /^.*(?=.{8,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/

// 手机号
export const phoneRegExp = /^[1][3-9][0-9]{9}$/

// 字母数字校验
export const IdRegExp = /^[0-9a-zA-Z]*$/

// 验证司机
export function validatorValue(array:any[], vm:any) {
  for (let i = 0; i < array.length; i++) {
    let item:any = array[i]
    if (item.value === '') {
      continue
    }
    let str:string = String(item.value)
    let reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
    if (reg.test(item.value) && str.length > 1) {
      continue
    } else if (str.length > 5) {
      continue
    }
    vm.$message.warning(item.message)
    return false
  }
  return true
}

// 睡眠函数
function sleep(time = 0) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

/**
 *
 * @param target 防止重复点击
 * @param key
 * @param desc
 */
export function lock(target:any, key:string, desc:any) {
  const fn = desc.value
  desc.value = async function() {
    if (this.$lock) return
    this.$lock = true // 上锁 🔐
    await fn.apply(this, [...arguments]).finally(async() => {
      // 此处的延时时在dialog关闭动画结束后在解锁 🔓
      await sleep(350)
      this.$lock = false
    })
    return target
  }
}

// 大区城市联动 级联选择器方法
export async function showWork(node: any, resolve: any) {
  let query: any = {
    parentId: ''
  }
  if (node.level > 0) {
    query.parentId = node.value
  }
  try {
    if (node.level === 0) {
      let nodes = await areaAddress({ type: 2 })
      resolve(nodes)
    } else if (node.level === 1) {
      let nodes = await cityDetail(query, node)
      resolve(nodes)
    }
  } catch (err) {
    resolve([])
  }
}

async function areaAddress(params: any) {
  try {
    let { data: res } = await getOfficeByType(params)
    if (res.success) {
      const nodes = res.data.map(function(item: any) {
        return {
          value: item.id,
          label: item.name,
          leaf: false
        }
      })
      return nodes
    }
  } catch (err) {
    console.log(`load city by code fail:${err}`)
  }
}

async function cityDetail(params: any, node: any) {
  let { data: city } = await getOfficeByTypeAndOfficeId(params)
  if (city.success) {
    const nodes = city.data.map((item: any) => {
      return {
        value: item.areaCode,
        label: item.name,
        leaf: true
      }
    })
    return nodes
  }
}

// 获取城市、小组、跟进人
export async function showCityGroupPerson(node: any, resolve: any) {
  if (node.level === 0) {
    let citys = await getOpenCitys()
    resolve(citys)
  } else if (node.level === 1) {
    let groups = await GroupInfoByCityCodeAndProductLine(+node.value)
    resolve(groups)
  } else if (node.level === 2) {
    let [groupId, busiType] = node.value.split(',')
    let users = await getGmOptions(node.parent.value, busiType, groupId)
    resolve(users)
  }
}
// 获取开通城市
async function getOpenCitys() {
  try {
    let { data: res } = await GetDictionaryCity()
    if (res.success) {
      return res.data.map((item:any) => ({
        value: item.code,
        label: item.name
      }))
    } else {
      context.$message.error(res.errorMsg)
    }
  } catch (err) {
    console.log(`get open city fail:${err}`)
  } finally {
    //
  }
}
// 获取小组
async function GroupInfoByCityCodeAndProductLine(cityCode:number) {
  try {
    let params:any = {
      busiLine: [0, 1].toString(),
      cityCode
    }
    let { data: res } = await getGroupInfoByCityCodeAndProductLine(params)
    if (res.success) {
      return res.data.map((item:any) => ({
        value: item.id + ',' + item.dutyId,
        label: item.name
      }))
    } else {
      context.$message.error(res.errorMsg)
    }
  } catch (err) {
    console.log(`get group fail:${err}`)
  } finally {
    //
  }
}
// 获取小组下的人
async function getGmOptions(cityCode:number, busiType:number, groupId:number) {
  try {
    let params:any = {
      roleTypes: [1, 4],
      cityCode,
      busiType,
      groupId,
      uri: '/v3/clueH5/updateFollowerByMarketClueId/queryFollowerList'
    }

    let { data: res } = await GetSpecifiedRoleList(params)
    if (res.success) {
      return res.data.map(function(item: any) {
        return {
          label: item.status === 2 ? item.name + `(停用)` : item.name + `(${item.mobile})`,
          value: item.id,
          disabled: item.status === 2,
          leaf: true
        }
      })
    } else {
      context.$message.error(res.errorMsg)
    }
  } catch (err) {
    console.log(err)
  }
}

// 异步搜索suggest公共方法(input)
export async function querySearchAsync(query: string, cb: Function, key: any, Api: any, option: any) {
  let options: any = []
  let params = {
    [key]: query,
    notLoading: true
  }
  let { data } = await Api(params)
  if (data.data && data.data.length) {
    options = data.data.map(function(ele: any) {
      return { label: ele[option.labelName], value: ele[option.labelValue] }
    })
    setTimeout(() => {
      cb(options)
    }, 1000)
  } else {
    setTimeout(() => {
      cb(options)
    }, 1000)
  }
}

// 异步搜索suggest公共方法(select)
export async function querySearchAsyncSelect(query: string, key: any, Api: any, option: any, otherParams: any) {
  let options: any = []
  if (query !== '') {
    let params = {
      [key]: query,
      notLoading: true
    }
    params = Object.assign(params, otherParams)
    let { data } = await Api(params)
    if (data.data && data.data.length) {
      options = data.data.map(function(ele: any) {
        if (option.labelName === 'projectName') {
          return { label: ele[option.labelName] + ' / ' + ele[option.labelValue], value: ele[option.labelValue] }
        } else if (option.labelName === 'customerList') {
          return { label: ele['name'] + ' / ' + ele[option.labelValue], value: ele[option.labelValue] }
        } else if (option.labelName === 'projectManager') {
          return { label: ele['nickName'] + ' / ' + ele['mobile'], value: ele[option.labelValue] }
        } else if (option.labelName === 'saleManager') {
          return { label: ele['nickName'] + ' / ' + ele['mobile'], value: ele[option.labelValue] }
        } else {
          return { label: ele[option.labelName], value: ele[option.labelValue] }
        }
      })
      return options
    } else {
      return options
    }
  } else {
    return options
  }
}
// 获取省、市、县三级联动
export async function getProviceCityCountryData(node: any) {
  let citys: any = []
  if (node === 0) {
    let params = {
      'type': 2,
      'parentAreaId': ''
    }
    citys = await getProvinceList(params, false, true)
    return citys
  } else {
    let params = {
      'type': 3,
      'parentAreaId': node
    }
    let groups = await getProvinceList(params, true, false)
    return groups
  }
}

// 获取省、市二级联动
export async function getProviceCityData(node: any) {
  let citys: any = []
  if (node === 0) {
    let params = {
      'type': 2,
      'parentAreaId': ''
    }
    citys = await getProvinceList(params, false, true)
    return citys
  } else {
    let params = {
      'type': 3,
      'parentAreaId': node
    }
    let groups = await getProvinceList(params, false, true)
    return groups
  }
}

// 分别获取省、市、县公共接口
export async function getProvinceList(params:any, leaf?:boolean, disabled?:boolean) {
  try {
    let { data: res } = await GetAreaByType(params)
    let code = res.data[0].code.split('')
    code = Number(code[code.length - 1])
    let leafs = code > 0 ? true : leaf
    let disableds = code > 0 ? false : disabled
    let arr:DictData[] = res.data.map((item:IState) => ({
      leaf: leafs,
      label: item.name,
      value: +item.id,
      disabled: disableds
    }))
    return arr
  } catch (err) {
    console.log(`get list fail:${err}`)
  } finally {
    //
  }
}
