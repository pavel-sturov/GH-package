import { COMPANIES_INVENTORY_ACTION } from 'modules/companiesInventory/actionTypes'

export const CompaniesInventorySelectors = {
	view:     (state) => state.companiesInventory[COMPANIES_INVENTORY_ACTION.VIEW],
	products: (state) => state.companiesInventory[COMPANIES_INVENTORY_ACTION.PRODUCTS],
}
