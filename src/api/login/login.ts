import hRequest from '@/utils/request/index'

import { IAccount, LoginInfo } from '@/api/login/type'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

/**
 * 登录
 * @param account
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function accountLoginRequest (account: IAccount) {
  return hRequest.post<LoginInfo>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

/**
 * 根据id查用户信息
 * @param id
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function requestUserInfoById (id: number) {
  return hRequest.get<LoginInfo>({
    url: loginAPI.LoginUserInfo + id
  })
}

/**
 * 根据角色id获取路由列表
 * @param id
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function requestUserMenusByRoleId (id: number) {
  return hRequest.get<LoginInfo>({
    url: loginAPI.UserMenus + id + '/menu'
  })
}
