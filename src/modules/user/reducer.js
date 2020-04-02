import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import PersistHelper from 'helpers/Redux/PersistHelper'
import { USER_ACTION } from 'modules/user/actionTypes'

const persistConfig = {
	key:       'user',
	whitelist: [
		USER_ACTION.USER,
		USER_ACTION.USER_CITY,
		USER_ACTION.USER_SETTINGS,
	],
}

export default PersistHelper.persist(persistConfig, RequestActionHelper.createReducerActions(Object.values(USER_ACTION)))
