import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { CUSTOMER_SETTINGS_ACTIONS } from 'modules/customersSettings/actionTypes'
import { CustomersSettingsApi } from 'modules/customersSettings/api'

/**
 * View customer settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CustomersSettingsApi.view)
}

/**
 * Update customer settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CustomersSettingsApi.update)
}

export default [
	takeLatest(CUSTOMER_SETTINGS_ACTIONS.VIEW, view),
	takeLatest(CUSTOMER_SETTINGS_ACTIONS.UPDATE, update),
]
