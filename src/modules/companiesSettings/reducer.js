import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COMPANIES_SETTINGS_ACTIONS } from 'modules/companiesSettings/actionTypes'

export default RequestActionHelper.createReducerActions(Object.values(COMPANIES_SETTINGS_ACTIONS))
