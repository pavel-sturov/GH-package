import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CUSTOMER_SETTINGS_ACTIONS } from 'modules/customersSettings/actionTypes'

export default RequestActionHelper.createReducerActions(Object.values(CUSTOMER_SETTINGS_ACTIONS))
