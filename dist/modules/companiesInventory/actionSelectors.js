import { COMPANIES_INVENTORY_ACTION } from "./actionTypes";
export var CompaniesInventorySelectors = {
  view: function view(state) {
    return state.companiesInventory[COMPANIES_INVENTORY_ACTION.VIEW];
  },
  products: function products(state) {
    return state.companiesInventory[COMPANIES_INVENTORY_ACTION.PRODUCTS];
  }
};