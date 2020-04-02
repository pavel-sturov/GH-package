import { PRODUCTS_ATTACHMENTS_ACTIONS } from 'modules/productsAttachments/actionTypes'

export const ProductsAttachmentsStateSelectors = {
	view:   (state) => state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.VIEW],
	list:   (state) => state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.LIST],
	create: (state) => state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.CREATE],
	delete: (state) => state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.DELETE],
	update: (state) => state.productsAttachments[PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE],
}
