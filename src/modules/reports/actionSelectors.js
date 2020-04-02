import { REPORTS_ACTIONS } from 'modules/reports/actionTypes'

export const ReportsStateSelectors = {
	view:     (state) => state.reports[REPORTS_ACTIONS.VIEW],
	generate: (state) => state.reports[REPORTS_ACTIONS.GENERATE],
}
