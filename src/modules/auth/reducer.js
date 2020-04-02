import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { AUTH_ACTION } from 'modules/auth/actionTypes'

export default RequestActionHelper.createReducerActions(Object.values(AUTH_ACTION))
