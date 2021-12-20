import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import vue from 'vue'
import { login, logout, getUserInfo, resetPwd } from '@/api/users'
import { getToken, setToken, removeToken, setUser, getPermission } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { PermissionModule } from './permission'
import { TagsViewModule } from './tags-view'
import { Message } from 'element-ui'
import store from '@/store'

export interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
  isWeakPwd:boolean
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || ''
  public uuid = ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''
  public isWeakPwd = JSON.parse(window.localStorage.getItem('isWeakPwd') as string) || false

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_UUID(uuid: string) {
    this.uuid = uuid
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Mutation
  private SET_PWD(isWeakPwd: boolean) {
    this.isWeakPwd = isWeakPwd
  }

  @Action
  public async Login(userInfo: { username: string, password: string}) {
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password, systemtype: '0' })
    // const data = {
    //   success: true,
    //   data: {
    //     flag: true,
    //     token: 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySW5mbyI6ImV5SmhZMk52ZFc1MFRtOXVSWGh3YVhKbFpDSTZkSEoxWlN3aVlXTmpiM1Z1ZEU1dmJreHZZMnRsWkNJNmRISjFaU3dpWVhWMGFHVnVkR2xqWVhSbFpDSTZkSEoxWlN3aVkybDBlVWxrSWpveExDSmpiM0p3VlhObGNrbGtJam9pSWl3aVkzSmxZWFJsUkdGMFpTSTZNVFl3TkRBME5EUXdNVEF3TUN3aVkzSmxZWFJsU1dRaU9qSXhOamdzSW1OeVpXUmxiblJwWVd4elRtOXVSWGh3YVhKbFpDSTZkSEoxWlN3aVkzSnRWWE5sY2tsa0lqb2lNVFEzTkRZd09UZzJNekk1TlRZMU1DSXNJbVJsYkVac1lXY2lPakFzSW1WdVlXSnNaV1FpT25SeWRXVXNJbWxrSWpveU1UWTRMQ0p0YjJKcGJHVWlPaUl4TXpJd01EQXdNREF3TUNJc0ltNXBZMnRPWVcxbElqb2k1N083NTd1ZjU2Nmg1NUNHNVpHWUlpd2liMlptYVdObFNXUWlPakUyTENKd1lYTnpkMjl5WkNJNklpSXNJbkp2YkdWSlpDSTZOeXdpYzJWMGRHbHVaMFpzWVdjaU9qRXNJbk4wWVhSMWN5STZNU3dpZEhsd1pTSTZNQ3dpZFhCa1lYUmxSR0YwWlNJNk1UWXlOVEV3TVRrM056QXdNQ3dpZFhCa1lYUmxTV1FpT2pJeE5qZ3NJblZ6WlhKdVlXMWxJam9pTVRNeU1EQXdNREF3TURBaWZRPT0iLCJzdWIiOiIxMzIwMDAwMDAwMCIsImV4cCI6MTYyODM0MTQyNX0.neSAZIlGwEb05X0eUZxU39D72_AodOom26KqqK9I-SoQ4k_A9mG5pW3XBv54QpZ8yUHOUn7VX0PnNz4SS1sXug',
    //     roleName: 'asd',
    //     stringPermissions: [],
    //     avatar: '',
    //     uuid: '',
    //     bssLoginName: '22',
    //     isWeakPwd: true,
    //     msg: ''
    //   },
    //   errorMsg: ''
    // }
    if (data.code === 0) {
      if (data.data.flag) {
        // if (!data.data.settingFlag) {
        //   return data.data
        // }

        data.data.avatar = 'https://mor-express-test.oss-cn-beijing.aliyuncs.com/mf-aliyun-oss/logo/64x64.png'
        data.data.stringPermissions.push('root')
        // console.log(data.data.stringPermissions)
        setToken(data.data.token)
        setUser(data.data)
        let roleName = data.data.roleName

        this.SET_EMAIL(roleName)
        this.SET_PWD(data.data.isWeakPwd)
        this.SET_TOKEN(data.data.token)
        this.SET_UUID(data.data.uuid)
        this.SET_AVATAR(data.data.avatar)

        this.SET_NAME(data.data.bssLoginName ? data.data.bssLoginName : '暂无名称')
        this.SET_ROLES(data.data.stringPermissions)
        PermissionModule.GenerateRoutes(this.roles)
        // Add generated routes
        router.addRoutes(PermissionModule.dynamicRoutes)
        // // Reset visited views and cached views
        TagsViewModule.delAllViews()
        if (data.data.isWeakPwd) {
          return data.data
        }
      } else {
        Message.error(data.data.msg)
      }
    } else {
      Message.error(data.msg)
    }
  }

  @Action
  public async ResetPassword({ token, password } : any) {
    const { data } = await resetPwd(token, password)
    return data
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    this.SET_ROLES(getPermission())

    let bssLoginName = (localStorage.getItem('bssLoginName') as any)
    // let busiPermission = (localStorage.getItem('role') as any).split(',')
    let uuid = (localStorage.getItem('uuid') as any)
    let roleName = (localStorage.getItem('roleName') as any)

    let avatar = (localStorage.getItem('avatar') as any)
    this.SET_EMAIL(roleName)
    this.SET_NAME(bssLoginName)
    this.SET_UUID(uuid)
    this.SET_AVATAR(avatar)
  }

  @Action
  public async ChangeRoles(role: string) {
    // Dynamically modify permissions
    const token = role + '-token'
    this.SET_TOKEN(token)
    setToken(token)
    await this.GetUserInfo()
    resetRouter()
    // Generate dynamic accessible routes based on roles
    PermissionModule.GenerateRoutes(this.roles)
    // Add generated routes
    router.addRoutes(PermissionModule.dynamicRoutes)
    // Reset visited views and cached views
    TagsViewModule.delAllViews()
  }

  @Action
  public async LogOut() {
    // if (this.token === '') {
    //   throw Error('LogOut: token is undefined!')
    // }
    // await logout()
    removeToken()
    resetRouter()
    this.SET_TOKEN('')
    this.SET_ROLES([])
    localStorage.clear()
  }
}

export const UserModule = getModule(User)
