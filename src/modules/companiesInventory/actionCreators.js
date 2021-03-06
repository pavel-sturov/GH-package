import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COMPANIES_INVENTORY_ACTION } from 'modules/companiesInventory/actionTypes'

export const CompaniesInventoryActions = {
	view:         RequestActionHelper.getActionCreatorFetch(COMPANIES_INVENTORY_ACTION.VIEW),
	setInventory: RequestActionHelper.getActionCreatorSuccess(COMPANIES_INVENTORY_ACTION.VIEW),
	products:     RequestActionHelper.getActionCreatorFetch(COMPANIES_INVENTORY_ACTION.PRODUCTS),
	setProducts:  RequestActionHelper.getActionCreatorSuccess(COMPANIES_INVENTORY_ACTION.PRODUCTS),
}
