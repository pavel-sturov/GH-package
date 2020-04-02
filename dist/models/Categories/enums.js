"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.levelsTitle = exports.levels = void 0;

require("core-js/modules/es6.object.define-property");

var _levelsTitle;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Category levels
 *
 * @type {{}}
 */
var levels = {
  one: 'one',
  two: 'two',
  three: 'three'
};
exports.levels = levels;
var levelsTitle = (_levelsTitle = {}, _defineProperty(_levelsTitle, levels.one, 'Раздел'), _defineProperty(_levelsTitle, levels.two, 'Подраздел'), _defineProperty(_levelsTitle, levels.three, 'Категория'), _levelsTitle);
exports.levelsTitle = levelsTitle;