import { AUTH_ACTION } from 'modules/auth/actionTypes'

export const AuthStateSelectors = {
    isAuth:     (state) => state.auth[AUTH_ACTION.SIGN_IN],
    isLogOut:   (state) => state.auth[AUTH_ACTION.LOG_OUT],
    renewToken: (state) => state.auth[AUTH_ACTION.RENEW_TOKEN],
}
