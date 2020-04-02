import { FAQ_CATEGORIES_ACTIONS } from 'modules/faqCategories/actionTypes'

export const FaqCategoriesStateSelectors = {
	create: (state) => state.faq.categories[FAQ_CATEGORIES_ACTIONS.CREATE],
	view:   (state) => state.faq.categories[FAQ_CATEGORIES_ACTIONS.VIEW],
	list:   (state) => state.faq.categories[FAQ_CATEGORIES_ACTIONS.LIST],
	update: (state) => state.faq.categories[FAQ_CATEGORIES_ACTIONS.UPDATE],
	delete: (state) => state.faq.categories[FAQ_CATEGORIES_ACTIONS.DELETE],
}
