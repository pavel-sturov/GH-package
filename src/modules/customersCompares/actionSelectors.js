import { COMPARES_ACTION } from 'modules/customersCompares/actionTypes'

export const CustomerComparesSelectors = {
	list:         (state) => state.customersCompares[COMPARES_ACTION.LIST],
	create:       (state) => state.customersCompares[COMPARES_ACTION.CREATE],
	view:         (state) => state.customersCompares[COMPARES_ACTION.VIEW],
	delete:       (state) => state.customersCompares[COMPARES_ACTION.DELETE],
	deleteAll:    (state) => state.customersCompares[COMPARES_ACTION.DELETE_ALL],
	hierarchical: (state) => state.customersCompares[COMPARES_ACTION.HIERARCHICAL],
	products:     (state) => state.customersCompares[COMPARES_ACTION.PRODUCTS],
}
