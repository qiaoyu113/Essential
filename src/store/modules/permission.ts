import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router'
import { UserModule } from '@/store/modules/user'
import store from '@/store'

const hasPermission = (roles: string[], route: RouteConfig) => {
  // if (route.meta && route.meta.roles) {
  //   return roles.some(role => route.meta.roles.includes(role))
  // } else {
  //   return true
  // }
  let roleArr = (localStorage.getItem('permission') && (window as any).localStorage.getItem('permission').split(','))
  let a = (localStorage.getItem('permission') as any).split(',')
  if (!roleArr.length) {
    localStorage.clear()
    UserModule.ResetToken()
    // location.reload()
  }
  if (route.meta.apiUrl === 'root') {
    return true
  }
  if (isInArray(roleArr, route.meta.apiUrl)) {
    return true
  } else {
    return false
  }
}

const isInArray = (arr: string[], value: string|Array<string>) => {
  if (typeof value === 'string') {
    value = [value]
  }
  return value.some(item => {
    const inx = arr.indexOf(item)
    return inx >= 0
  })
}

export const filterAsyncRoutes = (routes: RouteConfig[], roles: string[]) => {
  const res: RouteConfig[] = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[]
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes)
    this.dynamicRoutes = routes
  }

  @Action
  public GenerateRoutes(roles: string[]) {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    this.SET_ROUTES(accessedRoutes)
  }
}

export const PermissionModule = getModule(Permission)
