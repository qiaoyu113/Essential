import Cookies from 'js-cookie'
import { Message } from 'element-ui'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language: string) => Cookies.set(languageKey, language)

const sizeKey = 'size'
export const getSize = () => Cookies.get(sizeKey)
export const setSize = (size: string) => Cookies.set(sizeKey, size)

const setCookie = 'None'
export const setCookies = (size: string) => Cookies.set('SameSite', setCookie)

// User
const tokenKey = 'token'
// export class User {
//     token: string
//     busiPermission: string[]
//     hash: string
//     query: Dictionary<string | (string | null)[]>
//     params: Dictionary<string>
//     fullPath: string
//     matched: RouteRecord[]
//     redirectedFrom?: string
//     meta?: any
// }
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const setUser = (user: any) => {
  if (!user.stringPermissions.length) {
    Message.error('该账号无任何菜单权限，无法访问')
    // 本地开发出现无权限账号使用
    user.stringPermissions = ['root']
  }
  localStorage.setItem(tokenKey, user.token)
  localStorage.setItem('role', user.busiPermission)
  localStorage.setItem('permission', user.stringPermissions)
  localStorage.setItem('bssLoginName', user.bssLoginName)
  localStorage.setItem('uuid', user.uuid)
  localStorage.setItem('roleName', user.roleName)
  localStorage.setItem('avatar', user.avatar)
  localStorage.setItem('isWeakPwd', String(user.isWeakPwd))
}
export const removeToken = () => Cookies.remove(tokenKey)

export const getPermission = () => {
  let str:string = localStorage.getItem('permission') || ''
  if (str) {
    return str.split(',')
  }
  return []
}
