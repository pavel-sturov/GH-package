import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { REPORTS_ACTIONS } from 'modules/reports/actionTypes'

export default RequestActionHelper.createReducerActions(Object.values(REPORTS_ACTIONS))
