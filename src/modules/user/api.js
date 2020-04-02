import { callApi } from 'modules/user/api'
import { CitiesApi } from 'modules/cities/api'
import { CustomersApi } from 'modules/customers/api'
import { CustomersSettingsApi } from 'modules/customersSettings/api'


export const UsersApi = {
    viewUser:        CustomersApi.view,
    viewCurrentUser: (searchQuery) => callApi(`/v1/customers/current`, searchQuery),
    viewSettings:    CustomersSettingsApi.view,
    updateUser:      CustomersApi.update,
    updateSettings:  CustomersSettingsApi.update,
    viewUserCity:    CitiesApi.defaultCity,
}
