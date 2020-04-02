"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.define-property");

var _reduxPersist = require("redux-persist");

var _config = require("config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isClient = _config.BUILD_TARGET === 'client';
/**
 * Redux persister helper
 */

var PersistHelper = function PersistHelper() {
  _classCallCheck(this, PersistHelper);
};

_defineProperty(PersistHelper, "storage", null);

_defineProperty(PersistHelper, "persist", function (config, reducer) {
  var disable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (disable || !isClient) {
    return reducer;
  }

  if (!config.storage) {
    if (PersistHelper.storage === null) {
      PersistHelper.storage = require('@kakadu-dev/base-frontend-helpers/storage/AsyncStorage')["default"];
    }

    config.storage = PersistHelper.storage;
  }

  return (0, _reduxPersist.persistReducer)(config, reducer);
});

var _default = PersistHelper;
exports["default"] = _default;