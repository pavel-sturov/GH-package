/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PROPERTIES_GROUPS_ACTIONS } from 'modules/propertiesGroups/actionTypes'
import { PropertiesGroupsApi } from 'modules/propertiesGroups/api'

/**
 * Create property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesGroups, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, PropertiesGroupsApi.create)
}

/**
 * View property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesGroups, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, PropertiesGroupsApi.view)
}

/**
 * List properties
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesGroups, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, PropertiesGroupsApi.list)
}

/**
 * Update property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesGroups, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, PropertiesGroupsApi.update)
}

/**
 * Delete property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesGroups, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, PropertiesGroupsApi.delete)
}

export default [
	takeLatest(PROPERTIES_GROUPS_ACTIONS.CREATE, create),
	takeLatest(PROPERTIES_GROUPS_ACTIONS.VIEW, view),
	takeLatest(PROPERTIES_GROUPS_ACTIONS.LIST, list),
	takeLatest(PROPERTIES_GROUPS_ACTIONS.UPDATE, update),
	takeLatest(PROPERTIES_GROUPS_ACTIONS.DELETE, deleteModel),
]
