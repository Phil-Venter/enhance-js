/*!
 * Revealing Module Pattern Boilerplate
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
const utilities = (function () {
  'use strict';

  const publicAPIs = {};

  /**
   * Returns the javascript type of the value passed
   *
   * @param {Any} val - any variable or value
   * @returns {String} - type
   */
  publicAPIs.rawType = Object.freeze((val) => ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase());

  /**
   * Returns if the javascript type of the value passed matches the type specified
   *
   * @param {Any} val - any variable or value
   * @param {String} type - the type in string format to evaluate against
   * @returns {Boolean}
   */
  publicAPIs.isType = Object.freeze((val, type) => rawType(type) === 'string' && rawType(val) === type.toLowerCase());

  /**
   * Returns if the javascript types in the array passed matches the type specified
   *
   * @param {Array[Any]} arr - array of values
   * @param {String} type - the type in string format to evaluate against
   * @returns {Boolean}
   */
  publicAPIs.isArrayOf = Object.freeze((arr, type) => andBooleanArray([isArray(arr), isString(type)]) ? andBooleanArray(arr.map(val => isType(val, type))) : false);

  /**
   * Returns if the javascript type of the value passed is string
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isString = Object.freeze((val) => isType(val, 'string'));

  /**
   * Returns if the javascript type of all the values in the array is string
   *
   * @param {Array[String]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isStringArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isString)) : false);

  /**
   * Returns if the javascript type of the value passed is number
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isNumber = Object.freeze((val) => isType(val, 'number') && Number.isFinite(val));

  /**
   * Returns if the javascript type of all the values in the array is number
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isNumberArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNumber)) : false);

  /**
   * Returns if the value is greater than 0
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isPositive = Object.freeze((val) => isNumber(val) ? val > 0 : false);

  /**
   * Returns if all the values in an array is greater than 0
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isPositiveArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositive)) : false);

  /**
   * Returns if the value is less than 0
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isNegative = Object.freeze((val) => isNumber(val) ? val < 0 : false);

  /**
   * Returns if all the values in an array is less than 0
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isNegativeArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNegative)) : false);

  /**
   * Returns if the value is an integer
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isInt = Object.freeze((val) => andBooleanArray([isNumber(val), val === Number.parseInt(val)]));

  /**
   * Returns if all the values in an array are integers
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isIntArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isInt)) : false);

  /**
   * Returns if the value is greater than 0
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isPositiveInt = Object.freeze((val) => isInt(val) ? isPositive(val) : false);

  /**
   * Returns if all the values in an array are greater than 0
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isPositiveIntArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositiveInt)) : false);

  /**
   * Returns if the value is less than 0
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isNegativeInt = Object.freeze((val) => isInt(val) ? isNegative(val) : false);

  /**
   * Returns if all the values in an array are less than 0
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isNegativeIntArray = Object.freeze((arr) => !isArray(arr) ? andBooleanArray(arr.map(isNegativeInt)) : false);

  /**
   * Returns if the value is a float
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isFloat = Object.freeze((val) => andBooleanArray([isNumber(val), val === Number.parseFloat(val)]));

  /**
   * Returns if all the values in an array are floats
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isFloat)) : false);

  /**
   * Returns if the value is greater than 0
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isPositiveFloat = Object.freeze((val) => isFloat(val) ? isPositive(val) : false);

  /**
   * Returns if all the values in an array are greater than 0
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isPositiveFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositiveFloat)) : false);

  /**
   * Returns if the value is less than 0
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isNegativeFloat = Object.freeze((val) => isFloat(val) ? isNegative(val) : false);

  /**
   * Returns if all the values in an array are less than 0
   *
   * @param {Array[Number]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isNegativeFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNegativeFloat)) : false);

  /**
   * Returns if the value is not an arr
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isArray = Object.freeze((val) => isType(val, 'array'));

  /**
   * Returns if all the values in an array are arrs
   *
   * @param {Array[Array]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isArrayArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isArray)) : false);

  /**
   * Returns if the value is in arr
   *
   * @param {Any} val - any variable or value
   * @param {Array} arr - arr to test against
   * @returns {Boolean}
   */
  publicAPIs.inArray = Object.freeze((val, arr) => isArray(arr) && arr.indexOf(val) !== -1);

  /**
   * Returns if the value is of type function
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isFunction = Object.freeze((val) => isType(val, 'function'));

  /**
   * Returns if all the values in an array are of type function
   *
   * @param {Array[Function]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isFunctionArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isFunction)) : false);

  /**
   * Returns if the value is of type object
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isObject = Object.freeze((val) => isType(val, 'object'));

  /**
   * Returns if all the values in an array are of type object
   *
   * @param {Array[Object]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isObjectArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isObject)) : false);

  /**
   * Returns if the value is empty
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isEmpty = Object.freeze((val) => !val);

  /**
   * Returns if all the values in an array are empty or if arr is empty
   *
   * @param {Array[Any]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isEmptyArray = Object.freeze((arr) => isArray(arr) ? isEmpty(arr) ? true : andBooleanArray(arr.map(isEmpty)) : false);

  /**
   * Returns if the value is of type null
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isNull = Object.freeze((val) => isType(val, 'null'));

  /**
   * Returns if all the values in an array are of type null
   *
   * @param {Array[Any]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isNullArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNull)) : false);

  /**
   * Returns if the value is of type undefined
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isUndefined = Object.freeze((val) => isType(val, 'undefined'));

  /**
   * Returns if all the values in an array are of type undefined
   *
   * @param {Array[Any]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isUndefinedArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isUndefined)) : false);

  /**
   * Returns if the value is of type boolean
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isBoolean = Object.freeze((val) => isType(val, 'boolean'));

  /**
   * Returns if all the values in an array are of type boolean
   *
   * @param {Array[Boolean]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isBooleanArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isBoolean)) : false);


  /**
   * Evaluates all vals in arr with &&
   *
   * @param {Array[Boolean]} arr
   * @returns {Boolean}
   */
  publicAPIs.andBooleanArray = Object.freeze((arr) => isBooleanArray(arr) ? arr.every(_ => _) : false);

  /**
   * Evaluates all vals in arr with ||
   *
   * @param {Array[Boolean]} arr
   * @returns {Boolean}
   */
  publicAPIs.orBooleanArray = Object.freeze((arr) => isBooleanArray(arr) ? arr.some(_ => _) : false);

  /**
   * Returns if the value is of type regular expression
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isRegExp = Object.freeze((val) => isType(val, 'regexp'));

  /**
   * Returns if all the values in an array are of type regular expression
   *
   * @param {Array[RegExp]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isRegExpArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isRegExp)) : false);

  /**
   * Returns arr of strings that match the regex pattern in the val
   *
   * @param {String} val - any variable or value
   * @param {RegExp} regex - regular expression
   * @returns {Array[String]}
   */
  publicAPIs.matchRegex = Object.freeze((val, regex) => andBooleanArray([isString(val), isRegExp(regex)]) ? val.match(regex) : false);

  /**
   * Returns if the value is of type error
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isError = Object.freeze((val) => isType(val, 'error'));

  /**
   * Returns if all the values in an array are of type error
   *
   * @param {Array[Error]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isErrorArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isError)) : false);

  /**
   * Returns if the value is of type date
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isDate = Object.freeze((val) => isType(val, 'date'));

  /**
   * Returns if all the values in an array are of type date
   *
   * @param {Array[Date]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isDateArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isDate)) : false);

  /**
   * Returns if the value is of type symbol
   *
   * @param {Any} val - any variable or value
   * @returns {Boolean}
   */
  publicAPIs.isSymbol = Object.freeze((val) => isType(val, 'symbol'));

  /**
   * Returns if all the values in an array are of type symbol
   *
   * @param {Array[Symbol]} arr - array to test against
   * @returns {Boolean}
   */
  publicAPIs.isSymbolArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isSymbol)) : false);

  /**
   * Brains of compose and pipe functions
   *
   * @param {Function} fn - a function that will be ran in the future
   * @param {Function} gn - a function that will be ran in the future
   * @returns {Function}
   */
  var _buildComposition = Object.freeze((fn1, fn2) => (...args) => fn2(fn1(...args)));

  /**
   * Compose function builder
   *
   * @param {...Function} fn - a slew of functions that will be ran in the future from right to left
   * @returns {Function}
   */
  publicAPIs.compose = Object.freeze((...fn) => fn.reduceRight(_buildComposition));

  /**
   * Pipe function builder
   *
   * @param {...Function} fn - a slew of functions that will be ran in the future from left to right
   * @returns {Function}
   */
  publicAPIs.pipe = Object.freeze((...fn) => fn.reduce(_buildComposition));

  /**
   * Memoize function wrapper
   *
   * @param {Function} fn - function to memoize
   * @returns {Function}
   */
  publicAPIs.memoize = Object.freeze((fn) => {
    if (!isFunction(fn)) throw new Error('');
    let cache = {};
    return (arg) => {
      if (arg in cache) return cache[arg];
      return cache[arg] = fn(arg);
    };
  });

  /**
   * Flatten Array, deeply nested arrays will still persist
   *
   * @param {Array} arr - Array to flatten
   * @returns {Array}
   */
  publicAPIs.flatten = Object.freeze((arr) => isArray(arr) ? arr.flat() : arr);

  /**
   * Deep Flatten Array to just a single array
   *
   * @param {Array} arr - Array to flatten
   * @returns {Array}
   */
  publicAPIs.deepFlatten = Object.freeze((arr) => isArray(arr) ? arr.flat(Infinity) : arr);

  return publicAPIs;

})();