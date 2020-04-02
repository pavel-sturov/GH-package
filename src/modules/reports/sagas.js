import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { REPORTS_ACTIONS } from 'modules/reports/actionTypes'
import { ReportsApi } from 'modules/reports/api'

/**
 * Report info
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{report, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, ReportsApi.view)
}

/**
 * Generate report
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{report, type}>|CallEffect|PutEffect<{type}>>}
 */
function* generate(action)
{
	yield SagasHelper.defaultCreate(action, ReportsApi.generate)
}

export default [
	takeLatest(REPORTS_ACTIONS.VIEW, view),
	takeLatest(REPORTS_ACTIONS.GENERATE, generate),
]
