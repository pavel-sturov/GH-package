import { LOGS_ACTION } from 'modules/logs/actionTypes'

export const LogsStateSelectors = {
	list:      (state) => state.logs[LOGS_ACTION.LIST],
	view:      (state) => state.logs[LOGS_ACTION.VIEW],
	delete:    (state) => state.logs[LOGS_ACTION.DELETE],
	deleteAll: (state) => state.logs[LOGS_ACTION.DELETE_ALL],
}
