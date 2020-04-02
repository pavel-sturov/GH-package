import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { SETTINGS_ACTION } from 'modules/settings/actionTypes'

export default RequestActionHelper.createReducerActions(Object.values(SETTINGS_ACTION))
