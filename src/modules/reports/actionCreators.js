import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { REPORTS_ACTIONS } from 'modules/reports/actionTypes'

export const ReportsActions = {
	view:     RequestActionHelper.getActionCreatorFetch(REPORTS_ACTIONS.VIEW),
	generate: RequestActionHelper.getActionCreatorFetch(REPORTS_ACTIONS.GENERATE),
}
