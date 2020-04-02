import { USER_ACTION } from 'modules/user/actionTypes'

export const UsersStateSelectors = {
    getUser:            (state) => state.user[USER_ACTION.USER],
    getUserCity:        (state) => state.user[USER_ACTION.USER_CITY],
    getUserSettings:    (state) => state.user[USER_ACTION.USER_SETTINGS],
    updateUserFields:   (state) => state.user[USER_ACTION.UPDATE_USER_FIELDS],
    updateUserSettings: (state) => state.user[USER_ACTION.UPDATE_USER_SETTINGS],
    updateMainUserInfo: (state) => state.user[USER_ACTION.UPDATE_MAIN_USER_INFO]
}
