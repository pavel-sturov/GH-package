import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { LogsActions } from 'modules/logs/actionCreators'
import { LogsStateSelectors } from 'modules/logs/actionSelectors'
import { LOGS_ACTION } from 'modules/logs/actionTypes'
import { LogsApi } from 'modules/logs/api'

/**
 * Get companies list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, LogsApi.list)
}

/**
 * View company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, LogsApi.view)
}

/**
 * Delete company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, LogsApi.delete, null, function* (...params) {
		yield SagasHelper.afterDeleteModelFromList(...params, LogsStateSelectors.list, LogsActions.setList)
	})
}


/**
 * Delete all favorites
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{log, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteAll(action)
{
	yield SagasHelper.defaultDeleteAll(
		action,
		LogsApi.deleteAll,
		null,
		function* (...params) {
			yield SagasHelper.afterClearState(...params, LogsActions.list)
		},
	)
}

export default [
	takeLatest(LOGS_ACTION.LIST, list),
	takeLatest(LOGS_ACTION.VIEW, view),
	takeLatest(LOGS_ACTION.DELETE, deleteModel),
	takeLatest(LOGS_ACTION.DELETE_ALL, deleteAll),
]
