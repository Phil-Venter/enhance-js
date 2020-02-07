"use strict";

var rawType = Object.freeze(function (val) {
  return {}.toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
});
var isType = Object.freeze(function (val, type) {
  return rawType(type) === 'string' && rawType(val) === type.toLowerCase();
});
var isArrayOf = Object.freeze(function (arr, type) {
  return andBooleanArray([isArray(arr), isString(type)]) ? andBooleanArray(arr.map(function (val) {
    return isType(val, type);
  })) : false;
});
var isString = Object.freeze(function (val) {
  return isType(val, 'string');
});
var isStringArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isString)) : false;
});
var isNumber = Object.freeze(function (val) {
  return isType(val, 'number') && Number.isFinite(val);
});
var isNumberArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isNumber)) : false;
});
var isPositive = Object.freeze(function (val) {
  return isNumber(val) ? val > 0 : false;
});
var isPositiveArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isPositive)) : false;
});
var isNegative = Object.freeze(function (val) {
  return isNumber(val) ? val < 0 : false;
});
var isNegativeArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isNegative)) : false;
});
var isInt = Object.freeze(function (val) {
  return andBooleanArray([isNumber(val), val === Number.parseInt(val)]);
});
var isIntArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isInt)) : false;
});
var isPositiveInt = Object.freeze(function (val) {
  return isInt(val) ? isPositive(val) : false;
});
var isPositiveIntArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isPositiveInt)) : false;
});
var isNegativeInt = Object.freeze(function (val) {
  return isInt(val) ? isNegative(val) : false;
});
var isNegativeIntArray = Object.freeze(function (arr) {
  return !isArray(arr) ? andBooleanArray(arr.map(isNegativeInt)) : false;
});
var isFloat = Object.freeze(function (val) {
  return andBooleanArray([isNumber(val), val === Number.parseFloat(val)]);
});
var isFloatArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isFloat)) : false;
});
var isPositiveFloat = Object.freeze(function (val) {
  return isFloat(val) ? isPositive(val) : false;
});
var isPositiveFloatArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isPositiveFloat)) : false;
});
var isNegativeFloat = Object.freeze(function (val) {
  return isFloat(val) ? isNegative(val) : false;
});
var isNegativeFloatArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isNegativeFloat)) : false;
});
var isArray = Object.freeze(function (val) {
  return isType(val, 'array');
});
var isArrayArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isArray)) : false;
});
var inArray = Object.freeze(function (val, arr) {
  return isArray(arr) && arr.indexOf(val) !== -1;
});
var isFunction = Object.freeze(function (val) {
  return isType(val, 'function');
});
var isFunctionArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isFunction)) : false;
});
var isObject = Object.freeze(function (val) {
  return isType(val, 'object');
});
var isObjectArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isObject)) : false;
});
var isEmpty = Object.freeze(function (val) {
  return !val;
});
var isEmptyArray = Object.freeze(function (arr) {
  return isArray(arr) ? isEmpty(arr) ? true : andBooleanArray(arr.map(isEmpty)) : false;
});
var isNull = Object.freeze(function (val) {
  return isType(val, 'null');
});
var isNullArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isNull)) : false;
});
var isUndefined = Object.freeze(function (val) {
  return isType(val, 'undefined');
});
var isUndefinedArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isUndefined)) : false;
});
var isBoolean = Object.freeze(function (val) {
  return isType(val, 'boolean');
});
var isBooleanArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isBoolean)) : false;
});
var andBooleanArray = Object.freeze(function (arr) {
  return isBooleanArray(arr) ? arr.every(function (_) {
    return _;
  }) : false;
});
var orBooleanArray = Object.freeze(function (arr) {
  return isBooleanArray(arr) ? arr.some(function (_) {
    return _;
  }) : false;
});
var isRegExp = Object.freeze(function (val) {
  return isType(val, 'regexp');
});
var isRegExpArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isRegExp)) : false;
});
var matchRegex = Object.freeze(function (val, regex) {
  return andBooleanArray([isString(val), isRegExp(regex)]) ? val.match(regex) : false;
});
var isError = Object.freeze(function (val) {
  return isType(val, 'error');
});
var isErrorArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isError)) : false;
});
var isDate = Object.freeze(function (val) {
  return isType(val, 'date');
});
var isDateArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isDate)) : false;
});
var isSymbol = Object.freeze(function (val) {
  return isType(val, 'symbol');
});
var isSymbolArray = Object.freeze(function (arr) {
  return isArray(arr) ? andBooleanArray(arr.map(isSymbol)) : false;
});

var _buildComposition = Object.freeze(function (fn1, fn2) {
  return function () {
    return fn2(fn1.apply(void 0, arguments));
  };
});

var compose = Object.freeze(function () {
  for (var _len = arguments.length, fn = new Array(_len), _key = 0; _key < _len; _key++) {
    fn[_key] = arguments[_key];
  }

  return fn.reduceRight(_buildComposition);
});
var pipe = Object.freeze(function () {
  for (var _len2 = arguments.length, fn = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fn[_key2] = arguments[_key2];
  }

  return fn.reduce(_buildComposition);
});
var memoize = Object.freeze(function (fn) {
  if (!isFunction(fn)) throw new Error('');
  var cache = {};
  return function (arg) {
    if (arg in cache) return cache[arg];
    return cache[arg] = fn(arg);
  };
});
var flatten = Object.freeze(function (arr) {
  return isArray(arr) ? arr.flat() : arr;
});
var deepFlatten = Object.freeze(function (arr) {
  return isArray(arr) ? arr.flat(Infinity) : arr;
});
module.exports = {
  andBooleanArray: andBooleanArray,
  compose: compose,
  deepFlatten: deepFlatten,
  flatten: flatten,
  inArray: inArray,
  isArray: isArray,
  isArrayArray: isArrayArray,
  isArrayOf: isArrayOf,
  isBoolean: isBoolean,
  isBooleanArray: isBooleanArray,
  isDate: isDate,
  isDateArray: isDateArray,
  isEmpty: isEmpty,
  isEmptyArray: isEmptyArray,
  isError: isError,
  isErrorArray: isErrorArray,
  isFloat: isFloat,
  isFloatArray: isFloatArray,
  isFunction: isFunction,
  isFunctionArray: isFunctionArray,
  isInt: isInt,
  isIntArray: isIntArray,
  isNegative: isNegative,
  isNegativeArray: isNegativeArray,
  isNegativeFloat: isNegativeFloat,
  isNegativeFloatArray: isNegativeFloatArray,
  isNegativeInt: isNegativeInt,
  isNegativeIntArray: isNegativeIntArray,
  isNull: isNull,
  isNullArray: isNullArray,
  isNumber: isNumber,
  isNumberArray: isNumberArray,
  isObject: isObject,
  isObjectArray: isObjectArray,
  isPositive: isPositive,
  isPositiveArray: isPositiveArray,
  isPositiveFloat: isPositiveFloat,
  isPositiveFloatArray: isPositiveFloatArray,
  isPositiveInt: isPositiveInt,
  isPositiveIntArray: isPositiveIntArray,
  isRegExp: isRegExp,
  isRegExpArray: isRegExpArray,
  isString: isString,
  isStringArray: isStringArray,
  isSymbol: isSymbol,
  isSymbolArray: isSymbolArray,
  isType: isType,
  isUndefined: isUndefined,
  isUndefinedArray: isUndefinedArray,
  matchRegex: matchRegex,
  memoize: memoize,
  orBooleanArray: orBooleanArray,
  pipe: pipe,
  rawType: rawType
};