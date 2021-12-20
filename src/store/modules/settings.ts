import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import elementVariables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

export interface ISettingsState {
  theme: string
  fixedHeader: boolean
  openNew: boolean
  showSettings: boolean
  showTagsView: boolean
  showSidebarLogo: boolean
  sidebarTextTheme: boolean
  isPC: boolean,
  tableHeight: number
}

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule implements ISettingsState {
  public theme = elementVariables.theme
  public fixedHeader = defaultSettings.fixedHeader
  public openNew = defaultSettings.openNew
  public showSettings = defaultSettings.showSettings
  public showTagsView = defaultSettings.showTagsView
  public showSidebarLogo = defaultSettings.showSidebarLogo
  public sidebarTextTheme = defaultSettings.sidebarTextTheme
  public isPC = defaultSettings.isPC
  public tableHeight = defaultSettings.tableHeight

  @Mutation
  private CHANGE_SETTING(payload: { key: string, value: any }) {
    const { key, value } = payload
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as any)[key] = value
    }
  }

  @Action
  public ChangeSetting(payload: { key: string, value: any}) {
    this.CHANGE_SETTING(payload)
  }

  @Action
  public ChangeOpenNew(payload: { key: string, value: any}) {
    this.CHANGE_SETTING(payload)
  }

  @Action
  public ChangeIsPC(payload: { key: string, value: any}) {
    this.CHANGE_SETTING(payload)
  }

  @Action
  public ChangeTableHeight(payload: { key: string, value: any}) {
    this.CHANGE_SETTING(payload)
  }
}

export const SettingsModule = getModule(Settings)
