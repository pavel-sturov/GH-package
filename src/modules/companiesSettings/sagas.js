import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { COMPANIES_SETTINGS_ACTIONS } from 'modules/companiesSettings/actionTypes'
import { CompaniesSettingsApi } from 'modules/companiesSettings/api'

/**
 * View company settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CompaniesSettingsApi.view)
}

/**
 * Update company settings
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CompaniesSettingsApi.update)
}

export default [
	takeLatest(COMPANIES_SETTINGS_ACTIONS.VIEW, view),
	takeLatest(COMPANIES_SETTINGS_ACTIONS.UPDATE, update),
]
