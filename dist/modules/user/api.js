import { callApi } from "./api";
import { CitiesApi } from "../cities/api";
import { CustomersApi } from "../customers/api";
import { CustomersSettingsApi } from "../customersSettings/api";
export var UsersApi = {
  viewUser: CustomersApi.view,
  viewCurrentUser: function viewCurrentUser(searchQuery) {
    return callApi("/v1/customers/current", searchQuery);
  },
  viewSettings: CustomersSettingsApi.view,
  updateUser: CustomersApi.update,
  updateSettings: CustomersSettingsApi.update,
  viewUserCity: CitiesApi.defaultCity
};