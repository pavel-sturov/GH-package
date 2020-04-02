/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PROPERTIES_TYPES_ACTIONS } from 'modules/propertiesTypes/actionTypes'
import { PropertiesTypesApi } from 'modules/propertiesTypes/api'

/**
 * Create property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesTypes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, PropertiesTypesApi.create)
}

/**
 * View property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesTypes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, PropertiesTypesApi.view)
}

/**
 * List properties
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesTypes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, PropertiesTypesApi.list)
}

/**
 * Update property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesTypes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, PropertiesTypesApi.update)
}

/**
 * Delete property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesTypes, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, PropertiesTypesApi.delete)
}

export default [
	takeLatest(PROPERTIES_TYPES_ACTIONS.CREATE, create),
	takeLatest(PROPERTIES_TYPES_ACTIONS.VIEW, view),
	takeLatest(PROPERTIES_TYPES_ACTIONS.LIST, list),
	takeLatest(PROPERTIES_TYPES_ACTIONS.UPDATE, update),
	takeLatest(PROPERTIES_TYPES_ACTIONS.DELETE, deleteModel),
]
