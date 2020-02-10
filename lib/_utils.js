"use strict";

var utilities = function () {
  'use strict';

  var publicAPIs = {};
  publicAPIs.rawType = Object.freeze(function (val) {
    return {}.toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  });
  publicAPIs.isType = Object.freeze(function (val, type) {
    return rawType(type) === 'string' && rawType(val) === type.toLowerCase();
  });
  publicAPIs.isArrayOf = Object.freeze(function (arr, type) {
    return andBooleanArray([isArray(arr), isString(type)]) ? andBooleanArray(arr.map(function (val) {
      return isType(val, type);
    })) : false;
  });
  publicAPIs.isString = Object.freeze(function (val) {
    return isType(val, 'string');
  });
  publicAPIs.isStringArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isString)) : false;
  });
  publicAPIs.isNumber = Object.freeze(function (val) {
    return isType(val, 'number') && Number.isFinite(val);
  });
  publicAPIs.isNumberArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isNumber)) : false;
  });
  publicAPIs.isPositive = Object.freeze(function (val) {
    return isNumber(val) ? val > 0 : false;
  });
  publicAPIs.isPositiveArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isPositive)) : false;
  });
  publicAPIs.isNegative = Object.freeze(function (val) {
    return isNumber(val) ? val < 0 : false;
  });
  publicAPIs.isNegativeArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isNegative)) : false;
  });
  publicAPIs.isInt = Object.freeze(function (val) {
    return andBooleanArray([isNumber(val), val === Number.parseInt(val)]);
  });
  publicAPIs.isIntArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isInt)) : false;
  });
  publicAPIs.isPositiveInt = Object.freeze(function (val) {
    return isInt(val) ? isPositive(val) : false;
  });
  publicAPIs.isPositiveIntArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isPositiveInt)) : false;
  });
  publicAPIs.isNegativeInt = Object.freeze(function (val) {
    return isInt(val) ? isNegative(val) : false;
  });
  publicAPIs.isNegativeIntArray = Object.freeze(function (arr) {
    return !isArray(arr) ? andBooleanArray(arr.map(isNegativeInt)) : false;
  });
  publicAPIs.isFloat = Object.freeze(function (val) {
    return andBooleanArray([isNumber(val), val === Number.parseFloat(val)]);
  });
  publicAPIs.isFloatArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isFloat)) : false;
  });
  publicAPIs.isPositiveFloat = Object.freeze(function (val) {
    return isFloat(val) ? isPositive(val) : false;
  });
  publicAPIs.isPositiveFloatArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isPositiveFloat)) : false;
  });
  publicAPIs.isNegativeFloat = Object.freeze(function (val) {
    return isFloat(val) ? isNegative(val) : false;
  });
  publicAPIs.isNegativeFloatArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isNegativeFloat)) : false;
  });
  publicAPIs.isArray = Object.freeze(function (val) {
    return isType(val, 'array');
  });
  publicAPIs.isArrayArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isArray)) : false;
  });
  publicAPIs.inArray = Object.freeze(function (val, arr) {
    return isArray(arr) && arr.indexOf(val) !== -1;
  });
  publicAPIs.isFunction = Object.freeze(function (val) {
    return isType(val, 'function');
  });
  publicAPIs.isFunctionArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isFunction)) : false;
  });
  publicAPIs.isObject = Object.freeze(function (val) {
    return isType(val, 'object');
  });
  publicAPIs.isObjectArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isObject)) : false;
  });
  publicAPIs.isEmpty = Object.freeze(function (val) {
    return !val;
  });
  publicAPIs.isEmptyArray = Object.freeze(function (arr) {
    return isArray(arr) ? isEmpty(arr) ? true : andBooleanArray(arr.map(isEmpty)) : false;
  });
  publicAPIs.isNull = Object.freeze(function (val) {
    return isType(val, 'null');
  });
  publicAPIs.isNullArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isNull)) : false;
  });
  publicAPIs.isUndefined = Object.freeze(function (val) {
    return isType(val, 'undefined');
  });
  publicAPIs.isUndefinedArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isUndefined)) : false;
  });
  publicAPIs.isBoolean = Object.freeze(function (val) {
    return isType(val, 'boolean');
  });
  publicAPIs.isBooleanArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isBoolean)) : false;
  });
  publicAPIs.andBooleanArray = Object.freeze(function (arr) {
    return isBooleanArray(arr) ? arr.every(function (_) {
      return _;
    }) : false;
  });
  publicAPIs.orBooleanArray = Object.freeze(function (arr) {
    return isBooleanArray(arr) ? arr.some(function (_) {
      return _;
    }) : false;
  });
  publicAPIs.isRegExp = Object.freeze(function (val) {
    return isType(val, 'regexp');
  });
  publicAPIs.isRegExpArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isRegExp)) : false;
  });
  publicAPIs.matchRegex = Object.freeze(function (val, regex) {
    return andBooleanArray([isString(val), isRegExp(regex)]) ? val.match(regex) : false;
  });
  publicAPIs.isError = Object.freeze(function (val) {
    return isType(val, 'error');
  });
  publicAPIs.isErrorArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isError)) : false;
  });
  publicAPIs.isDate = Object.freeze(function (val) {
    return isType(val, 'date');
  });
  publicAPIs.isDateArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isDate)) : false;
  });
  publicAPIs.isSymbol = Object.freeze(function (val) {
    return isType(val, 'symbol');
  });
  publicAPIs.isSymbolArray = Object.freeze(function (arr) {
    return isArray(arr) ? andBooleanArray(arr.map(isSymbol)) : false;
  });

  var _buildComposition = Object.freeze(function (fn1, fn2) {
    return function () {
      return fn2(fn1.apply(void 0, arguments));
    };
  });

  publicAPIs.compose = Object.freeze(function () {
    for (var _len = arguments.length, fn = new Array(_len), _key = 0; _key < _len; _key++) {
      fn[_key] = arguments[_key];
    }

    return fn.reduceRight(_buildComposition);
  });
  publicAPIs.pipe = Object.freeze(function () {
    for (var _len2 = arguments.length, fn = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fn[_key2] = arguments[_key2];
    }

    return fn.reduce(_buildComposition);
  });
  publicAPIs.memoize = Object.freeze(function (fn) {
    if (!isFunction(fn)) throw new Error('');
    var cache = {};
    return function (arg) {
      if (arg in cache) return cache[arg];
      return cache[arg] = fn(arg);
    };
  });
  publicAPIs.flatten = Object.freeze(function (arr) {
    return isArray(arr) ? arr.flat() : arr;
  });
  publicAPIs.deepFlatten = Object.freeze(function (arr) {
    return isArray(arr) ? arr.flat(Infinity) : arr;
  });
  return publicAPIs;
}();