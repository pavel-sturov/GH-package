/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { CATEGORIES_ENTITIES_ACTIONS } from 'modules/categoriesEntities/actionTypes'
import { CategoriesEntitiesApi } from 'modules/categoriesEntities/api'

/**
 * Create category entity
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CategoriesEntitiesApi.create)
}

/**
 * List categories entities
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CategoriesEntitiesApi.list)
}

/**
 * Delete category entity
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CategoriesEntitiesApi.delete)
}

export default [
	takeLatest(CATEGORIES_ENTITIES_ACTIONS.CREATE, create),
	takeLatest(CATEGORIES_ENTITIES_ACTIONS.LIST, list),
	takeLatest(CATEGORIES_ENTITIES_ACTIONS.DELETE, deleteModel),
]
