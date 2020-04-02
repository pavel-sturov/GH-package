import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { CUSTOMER_SETTINGS_ACTIONS } from "./actionTypes";
export default RequestActionHelper.createReducerActions(Object.values(CUSTOMER_SETTINGS_ACTIONS));