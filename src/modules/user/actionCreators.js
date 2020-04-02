import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { USER_ACTION } from 'modules/user/actionTypes'

export const UsersActions = {
	// Change only in store (for save city in backend, call setUserFields)
	setUserCity: RequestActionHelper.getActionCreatorSuccess(USER_ACTION.USER_CITY),
	// Send request to backend
	getUserCity: RequestActionHelper.getActionCreatorFetch(USER_ACTION.USER_CITY),

	// Send request to backend
	updateUserFields: RequestActionHelper.getActionCreatorFetch(USER_ACTION.UPDATE_USER_FIELDS),

	// Send request to backend
	updateUserSettings: RequestActionHelper.getActionCreatorFetch(USER_ACTION.UPDATE_USER_SETTINGS),
	updateMainUserInfo: RequestActionHelper.getActionCreatorFetch(USER_ACTION.UPDATE_MAIN_USER_INFO),

	// Change only store
	setUser: RequestActionHelper.getActionCreatorSuccess(USER_ACTION.USER),
	getUser: RequestActionHelper.getActionCreatorFetch(USER_ACTION.USER),

	// Settings
	setUserSettings: RequestActionHelper.getActionCreatorSuccess(USER_ACTION.USER_SETTINGS),
	getUserSettings: RequestActionHelper.getActionCreatorFetch(USER_ACTION.USER_SETTINGS),

	updatePushToken: RequestActionHelper.getActionCreatorFetch(USER_ACTION.UPDATE_PUSH_TOKEN),
}
