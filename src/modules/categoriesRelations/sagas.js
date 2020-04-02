/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { CATEGORIES_RELATIONS_ACTIONS } from 'modules/categoriesRelations/actionTypes'
import { CategoriesRelationsApi } from 'modules/categoriesRelations/api'

/**
 * Create category relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CategoriesRelationsApi.create)
}

/**
 * Get category relations
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CategoriesRelationsApi.list)
}

/**
 * Delete category relation
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{categoriesRelations, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CategoriesRelationsApi.delete)
}

export default [
	takeLatest(CATEGORIES_RELATIONS_ACTIONS.CREATE, create),
	takeLatest(CATEGORIES_RELATIONS_ACTIONS.LIST, list),
	takeLatest(CATEGORIES_RELATIONS_ACTIONS.DELETE, deleteModel),
]
