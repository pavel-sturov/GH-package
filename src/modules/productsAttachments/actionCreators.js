import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_ATTACHMENTS_ACTIONS } from 'modules/productsAttachments/actionTypes'

export const ProductsAttachmentsActions = {
	view:   RequestActionHelper.getActionCreatorFetch(PRODUCTS_ATTACHMENTS_ACTIONS.VIEW),
	list:   RequestActionHelper.getActionCreatorFetch(PRODUCTS_ATTACHMENTS_ACTIONS.LIST),
	create: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ATTACHMENTS_ACTIONS.CREATE),
	delete: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ATTACHMENTS_ACTIONS.DELETE),
	update: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE),
}
