import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { CustomerNotificationsActions } from 'modules/customersNotifications/actionCreators'
import { CustomerNotificationsSelectors } from 'modules/customersNotifications/actionSelectors'
import { NOTIFICATIONS_ACTIONS } from 'modules/customersNotifications/actionTypes'
import { CustomerNotificationsApi } from 'modules/customersNotifications/api'

/**
 * Get customer notifications
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CustomerNotificationsApi.list)
}

/**
 * Update customer notification
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CustomerNotificationsApi.update, null, function* (...params) {
		yield SagasHelper.afterMergeModels(...params, CustomerNotificationsSelectors.list, CustomerNotificationsActions.setList)
		yield SagasHelper.afterMergeModels(...params, CustomerNotificationsSelectors.smartList, CustomerNotificationsActions.setSmartList)
	})
}

/**
 * View customer notification
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{user, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CustomerNotificationsApi.view)
}

export default [
	takeLatest(NOTIFICATIONS_ACTIONS.LIST, list),
	takeLatest(NOTIFICATIONS_ACTIONS.SMART_LIST, list),
	takeLatest(NOTIFICATIONS_ACTIONS.VIEW, view),
	takeLatest(NOTIFICATIONS_ACTIONS.UPDATE, update),
]
