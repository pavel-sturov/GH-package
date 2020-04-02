import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import PersistHelper from 'helpers/Redux/PersistHelper';
import { USER_ACTION } from "./actionTypes";
var persistConfig = {
  key: 'user',
  whitelist: [USER_ACTION.USER, USER_ACTION.USER_CITY, USER_ACTION.USER_SETTINGS]
};
export default PersistHelper.persist(persistConfig, RequestActionHelper.createReducerActions(Object.values(USER_ACTION)));