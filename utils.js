/**
 * Returns the javascript type of the value passed
 *
 * @param {Any} value - any variable or value
 * @returns {String} - type
 */
function rawType(value) {
  return ({}).toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 * Returns if the javascript type of the value passed matches the type specified
 *
 * @param {Any} value - any variable or value
 * @param {String} type - the type in string format to evaluate against
 * @returns {Boolean}
 */
function isType(value, type) {
  return isString(type) && rawType(value) === type.toLowerCase();
}

/**
 * Returns if the javascript types in the array passed matches the type specified
 *
 * @param {Array[Any]} array - array of values
 * @param {String} type - the type in string format to evaluate against
 * @returns {Boolean}
 */
function isArrayOf(array, type) {
  return isArray(array) && isString(type) ? array.every(value => isType(value, type)) : false;
}

/**
 * Returns if the javascript type of the value passed is string
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isString(value) {
  return isType(value, 'string');
}

/**
 * Returns if the javascript type of all the values in the array is string
 *
 * @param {Array[String]} array - any variable or value
 * @returns {Boolean}
 */
function isStringArray(array) {
  return isArray(array) ? array.every(isString) : false;
}

/**
 * Returns if the javascript type of the value passed is number
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isNumber(value) {
  return isType(value, 'number') && Number.isFinite(value);
}

/**
 * Returns if the javascript type of all the values in the array is number
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isNumberArray(array) {
  return isArray(array) ? array.every(isNumber) : false;
}

/**
 * Returns if the value is greater than 0
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isPositive(value) {
  return isNumber(value) ? value > 0 : false;
}

/**
 * Returns if all the values in a array is greater than 0
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isPositiveArray(array) {
  return isArray(array) ? array.every(isPositive) : false;
}

/**
 * Returns if the value is less than 0
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isNegative(value) {
  return isNumber(value) ? value < 0 : false;
}

/**
 * Returns if all the values in a array is less than 0
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isNegativeArray(array) {
  return isArray(array) ? array.every(isNegative) : false;
}

/**
 * Returns if the value is an integer
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isInt(value) {
  return isNumber(value) && value === Number.parseInt(value);
}

/**
 * Returns if all the values in a array are integers
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isIntArray(array) {
  return isArray(array) ? array.every(isInt) : false;
}

/**
 * Returns if the value is greater than 0
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isPositiveInt(value) {
  return isInt(value) ? isPositive(value) : false;
}

/**
 * Returns if all the values in a array are greater than 0
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isPositiveIntArray(array) {
  return isArray(array) ? array.every(isPositiveInt) : false;
}

/**
 * Returns if the value is less than 0
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isNegativeInt(value) {
  return isInt(value) ? isNegative(value) : false;
}

/**
 * Returns if all the values in a array are less than 0
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isNegativeIntArray(array) {
  return !isArray(array) ? array.every(isNegativeInt) : false;
}

/**
 * Returns if the value is a float
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isFloat(value) {
  return isNumber(value) && value === Number.parseFloat(value);
}

/**
 * Returns if all the values in a array are floats
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isFloatArray(array) {
  return isArray(array) ? array.every(isFloat) : false;
}

/**
 * Returns if the value is greater than 0
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isPositiveFloat(value) {
  return isFloat(value) ? isPositive(value) : false;
}

/**
 * Returns if all the values in a array are greater than 0
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isPositiveFloatArray(array) {
  return isArray(array) ? array.every(isPositiveFloat) : false;
}

/**
 * Returns if the value is less than 0
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isNegativeFloat(value) {
  return isFloat(value) ? isNegative(value) : false;
}

/**
 * Returns if all the values in a array are less than 0
 *
 * @param {Array[Number]} array - any variable or value
 * @returns {Boolean}
 */
function isNegativeFloatArray(array) {
  return isArray(array) ? array.every(isNegativeFloat) : false;
}

/**
 * Returns if the value is not an array
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isArray(value) {
  return isType(value, 'array');
}

/**
 * Returns if all the values in a array are arrays
 *
 * @param {Array[Array]} array - any variable or value
 * @returns {Boolean}
 */
function isArrayArray(array) {
  return isArray(array) ? array.every(isArray) : false;
}

/**
 * Returns if the value is in array
 *
 * @param {Any} value - any variable or value
 * @param {Array} array - array to test against
 * @returns {Boolean}
 */
function inArray(value, array) {
  return isArray(haystack) && haystack.indexOf(needle) !== -1;
}

/**
 * Returns if the value is of type function
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isFunction(value) {
  return isType(value, 'function');
}

/**
 * Returns if all the values in a array are of type function
 *
 * @param {Array[Function]} array - any variable or value
 * @returns {Boolean}
 */
function isFunctionArray(array) {
  return isArray(array) ? array.every(isFunction) : false;
}

/**
 * Returns if the value is of type object
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isObject(value) {
  return isType(value, 'object');
}

/**
 * Returns if all the values in a array are of type object
 *
 * @param {Array[Object]} array - any variable or value
 * @returns {Boolean}
 */
function isObjectArray(array) {
  return isArray(array) ? array.every(isObject) : false;
}

/**
 * Returns if the value is of type object
 *
 * @param {String} value - any variable or value
 * @param {Object} object - any variable or value
 * @returns {Boolean}
 */
function inObject(value, object) {
  return isObject(object) && isString(value) && object.hasOwnProperty(value);
}

/**
 * Returns if the value is empty
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isEmpty(value) {
  return !value;
}

/**
 * Returns if all the values in a array are empty or if array is empty
 *
 * @param {Array[Any]} array - any variable or value
 * @returns {Boolean}
 */
function isEmptyArray(array) {
  return isArray(array) ? isEmpty(array) ? true : array.every(isEmpty) : false;
}

/**
 * Returns if the value is of type null
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isNull(value) {
  return isType(value, 'null');
}

/**
 * Returns if all the values in a array are of type null
 *
 * @param {Array[Any]} array - any variable or value
 * @returns {Boolean}
 */
function isNullArray(array) {
  return isArray(array) ? array.every(isNull) : false;
}

/**
 * Returns if the value is of type undefined
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isUndefined(value) {
  return isType(value, 'undefined');
}

/**
 * Returns if all the values in a array are of type undefined
 *
 * @param {Array[Any]} array - any variable or value
 * @returns {Boolean}
 */
function isUndefinedArray(array) {
  return isArray(array) ? array.every(isUndefined) : false;
}

/**
 * Returns if the value is of type boolean
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isBoolean(value) {
  return isType(value, 'boolean');
}

/**
 * Returns if all the values in a array are of type boolean
 *
 * @param {Array[Boolean]} array - any variable or value
 * @returns {Boolean}
 */
function isBooleanArray(array) {
  return isArray(array) ? array.every(isBoolean) : false;
}

/**
 * Evaluates all values in array with &&
 *
 * @param {Array[Boolean]} array
 * @returns {Boolean}
 */
function andBooleanArray(array) {
  return isBooleanArray(array) ? array.every(_ => _) : false;
}

/**
 * Evaluates all values in array with ||
 *
 * @param {Array[Boolean]} array
 * @returns {Boolean}
 */
function orBooleanArray(array) {
  return isBooleanArray(array) ? array.some(_ => _) : false;
}

/**
 * Returns if the value is of type regular expression
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isRegExp(value) {
  return isType(value, 'regexp');
}

/**
 * Returns if all the values in a array are of type regular expression
 *
 * @param {Array[RegExp]} array - any variable or value
 * @returns {Boolean}
 */
function isRegExpArray(array) {
  return isArray(array) ? array.every(isRegExp) : false;
}

/**
 * Returns array of strings that match the regex pattern in the value
 *
 * @param {String} value - any variable or value
 * @param {RegExp} regex - regular expression
 * @returns {Array[String]}
 */
function matchRegex(value, regex) {
  return isString(value) && isRegExp(regex) ? value.match(regex) : false;
}

/**
 * Returns if the value is of type error
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isError(value) {
  return isType(value, 'error');
}

/**
 * Returns if all the values in a array are of type error
 *
 * @param {Array[Error]} array - any variable or value
 * @returns {Boolean}
 */
function isErrorArray(array) {
  return isArray(array) ? array.every(isError) : false;
}

/**
 * Returns if the value is of type date
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isDate(value) {
  return isType(value, 'date');
}

/**
 * Returns if all the values in a array are of type date
 *
 * @param {Array[Date]} array - any variable or value
 * @returns {Boolean}
 */
function isDateArray(array) {
  return isArray(array) ? array.every(isDate) : false;
}

/**
 * Returns if the value is of type symbol
 *
 * @param {Any} value - any variable or value
 * @returns {Boolean}
 */
function isSymbol(value) {
  return isType(value, 'symbol');
}

/**
 * Returns if all the values in a array are of type symbol
 *
 * @param {Array[Symbol]} array - any variable or value
 * @returns {Boolean}
 */
function isSymbolArray(array) {
  return isArray(array) ? array.every(isSymbol) : false;
}

/**
 * Expose the functions
 */
export {
  rawType,
  isType,
  isArrayOf,
  isString,
  isStringArray,
  isNumber,
  isNumberArray,
  isPositive,
  isPositiveArray,
  isNegative,
  isNegativeArray,
  isInt,
  isIntArray,
  isPositiveInt,
  isPositiveIntArray,
  isNegativeInt,
  isNegativeIntArray,
  isFloat,
  isFloatArray,
  isPositiveFloat,
  isPositiveFloatArray,
  isNegativeFloat,
  isNegativeFloatArray,
  isArray,
  isArrayArray,
  inArray,
  isFunction,
  isFunctionArray,
  isObject,
  isObjectArray,
  inObject,
  isEmpty,
  isEmptyArray,
  isNull,
  isNullArray,
  isUndefined,
  isUndefinedArray,
  isBoolean,
  isBooleanArray,
  andBooleanArray,
  orBooleanArray,
  isRegExp,
  isRegExpArray,
  matchRegex,
  isError,
  isErrorArray,
  isDate,
  isDateArray,
  isSymbol,
  isSymbolArray
};
