import { CATEGORIES_RELATIONS_ACTIONS } from 'modules/categoriesRelations/actionTypes'

export const CategoriesRelationsStateSelectors = {
	list:   (state) => state.categoriesRelations[CATEGORIES_RELATIONS_ACTIONS.LIST],
	create: (state) => state.categoriesRelations[CATEGORIES_RELATIONS_ACTIONS.CREATE],
	delete: (state) => state.categoriesRelations[CATEGORIES_RELATIONS_ACTIONS.DELETE],
}
