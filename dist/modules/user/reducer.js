"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.object.values");

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _PersistHelper = _interopRequireDefault(require("helpers/Redux/PersistHelper"));

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'user',
  whitelist: [_actionTypes.USER_ACTION.USER, _actionTypes.USER_ACTION.USER_CITY, _actionTypes.USER_ACTION.USER_SETTINGS]
};

var _default = _PersistHelper["default"].persist(persistConfig, _RequestActionHelper["default"].createReducerActions(Object.values(_actionTypes.USER_ACTION)));

exports["default"] = _default;