"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.map");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Base model class
 */
var BaseModel = /*#__PURE__*/function () {
  /**
   * @property model
   * @private
   *
   * @type {(BaseModel | object)}
   */

  /**
   * @protected
   *
   * @type {(BaseModel | object)}
   */

  /**
   * Create new model
   *
   * @param {object} object
   *
   * @return {undefined}
   */
  function BaseModel(object) {
    var _this = this;

    _classCallCheck(this, BaseModel);

    _defineProperty(this, "model", {});

    _defineProperty(this, "relations", {});

    _defineProperty(this, "getRelation", function (name, model, instance) {
      var many = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!_this.relations[name]) {
        _this.relations[name] = !many ? new model(_this.model[name] || instance || {}) : model.createList(_this.model[name] || instance || []);
      }

      return _this.relations[name];
    });

    _defineProperty(this, "isExist", function () {
      return _this.model && !_lodash["default"].isEmpty(_this.model);
    });

    _defineProperty(this, "getRawModel", function () {
      return _this.model;
    });

    var obj = object && object.result || object && typeof object.fetching === 'undefined' && object || {};
    /**
     * Detect object like state
     * @private
     */

    this.model = obj;
  }
  /**
   * Create model
   *
   * @param {object} object
   *
   * @return {BaseModel}
   */


  _createClass(BaseModel, [{
    key: "primaryKey",

    /**
     * Return model primary key
     * Default: id
     *
     * @return {null}
     */
    value: function primaryKey() {
      return this.model.id;
    }
  }], [{
    key: "create",
    value: function create(object) {
      return new this(object);
    }
    /**
     * Create list models
     *
     * @param {object} objects
     *
     * @return {Array.<BaseModel>}
     */

  }, {
    key: "createList",
    value: function createList(objects) {
      var _this2 = this;

      return BaseModel.getArrayObjects(objects).map(function (object) {
        return new _this2(object);
      });
    }
    /**
     * Map models
     *
     * @param {Array.<object>} objects
     * @param {function(BaseModel, number): undefined} callback
     *
     * @return {Array.<object>}
     */

  }, {
    key: "map",
    value: function map(objects, callback) {
      var _this3 = this;

      return BaseModel.getArrayObjects(objects).map(function (object, index) {
        var modelInstance = _this3.create(object);

        return callback(modelInstance, index);
      });
    }
    /**
     * Get array objects
     *
     * @private
     *
     * @param {object} object
     *
     * @return {Array.<object>}
     */

  }, {
    key: "getArrayObjects",
    value: function getArrayObjects(object) {
      var list = Array.isArray(object && object.result && object.result.list) && object.result.list || Array.isArray(object && object.list) && object.list || Array.isArray(object && object.result) && object.result || Array.isArray(object) && object || [];
      return list;
    }
    /**
     * Get relation
     *
     * @param {string} name
     * @param {function} model
     * @param {(BaseModel | object)} instance
     * @param {boolean} many
     *
     * @return {object}
     */

  }]);

  return BaseModel;
}();

exports["default"] = BaseModel;