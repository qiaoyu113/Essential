import request from '@/utils/request'
const baseURL = '/common'
// const baseCenterUrl = '/mock/11'
const baseCenterUrl = '/common'
export const GetDictionary = (data: any) =>
  request({
    // url: `${baseURL}/v3/base/dict/dictData/list`, //旧 12.10
    url: `${baseCenterUrl}/open/v3/dict/dictData/list`,
    method: 'get',
    params: data
  })
// 批量查询字典
export const GetDictionaryList = (data: any) =>
  request({
    url: `${baseCenterUrl}/v3/dict/list/types`,
    method: 'post',
    data
  })
// 获取加盟经理列表
export const GetJoinManageList = (params: any) =>
  request({
    url: `${baseURL}/v3/base/user/getCurrUserAuthList?url=${params.uri}`,
    method: 'post'
  })

// 地区
export const GetArea = (data: any) =>
  request({
    url: `${baseURL}/v3/base/city/getCityByCode`,
    method: 'post',
    data
  })

// 获取工作城市
export const GetOpenCityData = () => request({
  url: `${baseURL}/v3/base/office/getCurrentLowerOfficeCityData`,
  method: 'get'
})
// 获取字典城市
export const GetDictionaryCity = () => request({
  // url: `${baseURL}/v3/base/area/getOpenCityData`,//旧 12.10
  url: `${baseCenterUrl}/open/v3/area/getOpenCityData`,
  method: 'get'
})
// 运营经理
export const getOperManager = () =>
  request({
    url: `${baseURL}/v3/base/user/getOperManagerListByUserId`,
    method: 'post'
  })

/**
   *根据父级code获取子列表
   *
   */
export const GetCityByCode = (data: any) =>
  request({
    url: `${baseURL}/v3/base/city/getCityByCode`,
    method: 'post',
    data
  })

/**
   *
   *获取加盟经理列表
   */
export const GetManagerLists = (params:any) =>
  request({
    url: `${baseURL}/v3/base/user/getCurrUserAuthList?url=${params.uri}`,
    method: 'post'
  })
// 获取城市详情
export const detailCity = (data:any) =>
  request({
    // url: `${baseURL}/v3/base/area/getTownByCountryCode`,//旧 12.10
    url: `${baseCenterUrl}/open/v3/area/getTownByCountryCode`,
    method: 'get',
    params: data
  })

// 上传文件
export const Upload = (params: any, data: any) =>
  request({
    url: `core/v3/upload/uploadOSS/${params.folder}/${params.isEncode}/${params.expire}`,
    method: 'post',
    data
  })

// 获取支付方式
export const GetPayList = (data:any) =>
  request({
    url: `business_center/v3/order/getPayTypeList`,
    method: 'get',
    data
  })

/**
   *
   * 获取下载文件列表
   */
export const GetDownFileList = (data:any) =>
  request({
    // url: `/core/v3/core/exportDownRecord/selectByUserId`,
    url: `/common/v1/get/export/list`,
    method: 'post',
    data
  })

// 组织大区查询
export const getOfficeByType = (data:any) =>
  request({
    url: `base/v3/base/office/getOfficeByType`,
    method: 'get',
    params: data
  })

// 组织大区下城市查询
export const getOfficeByTypeAndOfficeId = (data:any) =>
  request({
    url: `base/v3/base/office/getOfficeByTypeAndOfficeId`,
    method: 'get',
    params: data
  })

// 加盟经理(1)  外销销售(2) 上岗经理(3)
export const GetSpecifiedRoleList = (data:any) =>
  request({
    url: `/common/v3/base/user/getSpecifiedLowerUserListByCondition`,
    method: 'post',
    data
  })
// 获取业务线列表
export const GetDutyListByLevel = (data:any) =>
  request({
    url: `/common/v3/base/duty/getPartFirstDutyList`,
    method: 'get',
    data,
    params: data
  })
// 获取加盟经理（可塞选）
export const GetSpecifiedLowerUserListByCondition = (data:any) =>
  request({
    url: `/common/v3/base/user/getSpecifiedLowerUserListByCondition`,
    method: 'post',
    data
  })

// 查询加盟经理
export const getSpecifiedUserListByCondition = (data:any) =>
  request({
    url: `/common/v3/base/user/getSpecifiedUserListByCondition`,
    method: 'post',
    data
  })

// 根据城市、业务线获取小组
export const getGroupInfoByCityCodeAndProductLine = (params:any) =>
  request({
    url: `/common/v3/base/office/getGroupInfoByCondition`,
    method: 'get',
    params
  })

// 高德地图的请求
export const remoteLoad = (url:any) =>
  request({
    url: url,
    method: 'get'
  })

// 获取城市
export const GetMgrOrgListByCurrentUser = (data: any) =>
  request({
    url: '/common/v3/base/office/list/getMgrOrgListByCurrentUser',
    method: 'get',
    data
  })

// 获取客户
export const GetCustomerList = (data: any) =>
  request({
    url: '/project/v3/customer/suggest',
    method: 'post',
    data
  })

// 获取项目
export const GetProjectList = (data: any) =>
  request({
    url: '/project/v3/project/suggest',
    method: 'post',
    data
  })

// 项目名称
export const suggestByStatus = (data: any) =>
  request({
    url: `/project/v3/project/suggestByStatus`,
    method: 'post',
    data
  })

// 获取销售 / 运力经理
export const GetUserListByDutyId = (data: any) =>
  request({
    url: '/common/v3/userCentre/getUserListByDutyId',
    method: 'post',
    data
  })

// 全国城市获取
export const GetAreaByType = (data: any) =>
  request({
    url: '/common/v3/base/city/getAreaByType',
    method: 'post',
    data
  })
// 入账认领客户
export const getCustomerSuggest = (data: any) =>
  request({
    url: '/customer/v3/customer/suggestFromBillingPay',
    method: 'post',
    data
  })
