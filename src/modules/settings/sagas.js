import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { SettingsActions } from 'modules/settings/actionCreators'
import { SettingsStateSelectors } from 'modules/settings/actionSelectors'
import { SETTINGS_ACTION } from 'modules/settings/actionTypes'
import { SettingsApi } from 'modules/settings/api'

/**
 * List available settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{settings, type}>|CallEffect|PutEffect<{type}>>}
 */
function* listAvailable(action)
{
	yield SagasHelper.defaultView(action, SettingsApi.listAvailable)
}

/**
 * Update setting
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{settings, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, SettingsApi.update, null, function* (...params) {
		yield SagasHelper.afterMergeModels(...params, SettingsStateSelectors.list, SettingsActions.setList)
	})
}

/**
 * Get settings list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{settings, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, SettingsApi.list)
}

/**
 * View settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{properties, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, SettingsApi.view)
}

export default [
	takeLatest(SETTINGS_ACTION.LIST_AVAILABLE, listAvailable),
	takeLatest(SETTINGS_ACTION.UPDATE, update),
	takeLatest(SETTINGS_ACTION.LIST, list),
	takeLatest(SETTINGS_ACTION.VIEW, view),
]
