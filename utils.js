/**
 * Returns the javascript type of the value passed
 *
 * @param {Any} val - any variable or value
 * @returns {String} - type
 */
var rawType = Object.freeze((val) => ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase());

/**
 * Returns if the javascript type of the value passed matches the type specified
 *
 * @param {Any} val - any variable or value
 * @param {String} type - the type in string format to evaluate against
 * @returns {Boolean}
 */
var isType = Object.freeze((val, type) => rawType(type) === 'string' && rawType(val) === type.toLowerCase());

/**
 * Returns if the javascript types in the array passed matches the type specified
 *
 * @param {Array[Any]} arr - array of values
 * @param {String} type - the type in string format to evaluate against
 * @returns {Boolean}
 */
var isArrayOf = Object.freeze((arr, type) => andBooleanArray([isArray(arr), isString(type)]) ? andBooleanArray(arr.map(val => isType(val, type))) : false);

/**
 * Returns if the javascript type of the value passed is string
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isString = Object.freeze((val) => isType(val, 'string'));

/**
 * Returns if the javascript type of all the values in the array is string
 *
 * @param {Array[String]} arr - array to test against
 * @returns {Boolean}
 */
var isStringArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isString)) : false);

/**
 * Returns if the javascript type of the value passed is number
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isNumber = Object.freeze((val) => isType(val, 'number') && Number.isFinite(val));

/**
 * Returns if the javascript type of all the values in the array is number
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isNumberArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNumber)) : false);

/**
 * Returns if the value is greater than 0
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isPositive = Object.freeze((val) => isNumber(val) ? val > 0 : false);

/**
 * Returns if all the values in an array is greater than 0
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isPositiveArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositive)) : false);

/**
 * Returns if the value is less than 0
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isNegative = Object.freeze((val) => isNumber(val) ? val < 0 : false);

/**
 * Returns if all the values in an array is less than 0
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isNegativeArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNegative)) : false);

/**
 * Returns if the value is an integer
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isInt = Object.freeze((val) => andBooleanArray([isNumber(val), val === Number.parseInt(val)]));

/**
 * Returns if all the values in an array are integers
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isIntArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isInt)) : false);

/**
 * Returns if the value is greater than 0
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isPositiveInt = Object.freeze((val) => isInt(val) ? isPositive(val) : false);

/**
 * Returns if all the values in an array are greater than 0
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isPositiveIntArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositiveInt)) : false);

/**
 * Returns if the value is less than 0
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isNegativeInt = Object.freeze((val) => isInt(val) ? isNegative(val) : false);

/**
 * Returns if all the values in an array are less than 0
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isNegativeIntArray = Object.freeze((arr) => !isArray(arr) ? andBooleanArray(arr.map(isNegativeInt)) : false);

/**
 * Returns if the value is a float
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isFloat = Object.freeze((val) => andBooleanArray([isNumber(val), val === Number.parseFloat(val)]));

/**
 * Returns if all the values in an array are floats
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isFloat)) : false);

/**
 * Returns if the value is greater than 0
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isPositiveFloat = Object.freeze((val) => isFloat(val) ? isPositive(val) : false);

/**
 * Returns if all the values in an array are greater than 0
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isPositiveFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositiveFloat)) : false);

/**
 * Returns if the value is less than 0
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isNegativeFloat = Object.freeze((val) => isFloat(val) ? isNegative(val) : false);

/**
 * Returns if all the values in an array are less than 0
 *
 * @param {Array[Number]} arr - array to test against
 * @returns {Boolean}
 */
var isNegativeFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNegativeFloat)) : false);

/**
 * Returns if the value is not an arr
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isArray = Object.freeze((val) => isType(val, 'array'));

/**
 * Returns if all the values in an array are arrs
 *
 * @param {Array[Array]} arr - array to test against
 * @returns {Boolean}
 */
var isArrayArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isArray)) : false);

/**
 * Returns if the value is in arr
 *
 * @param {Any} val - any variable or value
 * @param {Array} arr - arr to test against
 * @returns {Boolean}
 */
var inArray = Object.freeze((val, arr) => isArray(arr) && arr.indexOf(val) !== -1);

/**
 * Returns if the value is of type function
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isFunction = Object.freeze((val) => isType(val, 'function'));

/**
 * Returns if all the values in an array are of type function
 *
 * @param {Array[Function]} arr - array to test against
 * @returns {Boolean}
 */
var isFunctionArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isFunction)) : false);

/**
 * Returns if the value is of type object
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isObject = Object.freeze((val) => isType(val, 'object'));

/**
 * Returns if all the values in an array are of type object
 *
 * @param {Array[Object]} arr - array to test against
 * @returns {Boolean}
 */
var isObjectArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isObject)) : false);

/**
 * Returns if the value is empty
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isEmpty = Object.freeze((val) => !val);

/**
 * Returns if all the values in an array are empty or if arr is empty
 *
 * @param {Array[Any]} arr - array to test against
 * @returns {Boolean}
 */
var isEmptyArray = Object.freeze((arr) => isArray(arr) ? isEmpty(arr) ? true : andBooleanArray(arr.map(isEmpty)) : false);

/**
 * Returns if the value is of type null
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isNull = Object.freeze((val) => isType(val, 'null'));

/**
 * Returns if all the values in an array are of type null
 *
 * @param {Array[Any]} arr - array to test against
 * @returns {Boolean}
 */
var isNullArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNull)) : false);

/**
 * Returns if the value is of type undefined
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isUndefined = Object.freeze((val) => isType(val, 'undefined'));

/**
 * Returns if all the values in an array are of type undefined
 *
 * @param {Array[Any]} arr - array to test against
 * @returns {Boolean}
 */
var isUndefinedArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isUndefined)) : false);

/**
 * Returns if the value is of type boolean
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isBoolean = Object.freeze((val) => isType(val, 'boolean'));

/**
 * Returns if all the values in an array are of type boolean
 *
 * @param {Array[Boolean]} arr - array to test against
 * @returns {Boolean}
 */
var isBooleanArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isBoolean)) : false);


/**
 * Evaluates all vals in arr with &&
 *
 * @param {Array[Boolean]} arr
 * @returns {Boolean}
 */
var andBooleanArray = Object.freeze((arr) => isBooleanArray(arr) ? arr.every(_ => _) : false);

/**
 * Evaluates all vals in arr with ||
 *
 * @param {Array[Boolean]} arr
 * @returns {Boolean}
 */
var orBooleanArray = Object.freeze((arr) => isBooleanArray(arr) ? arr.some(_ => _) : false);

/**
 * Returns if the value is of type regular expression
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isRegExp = Object.freeze((val) => isType(val, 'regexp'));

/**
 * Returns if all the values in an array are of type regular expression
 *
 * @param {Array[RegExp]} arr - array to test against
 * @returns {Boolean}
 */
var isRegExpArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isRegExp)) : false);

/**
 * Returns arr of strings that match the regex pattern in the val
 *
 * @param {String} val - any variable or value
 * @param {RegExp} regex - regular expression
 * @returns {Array[String]}
 */
var matchRegex = Object.freeze((val, regex) =>  andBooleanArray([isString(val), isRegExp(regex)]) ? val.match(regex) : false);

/**
 * Returns if the value is of type error
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isError = Object.freeze((val) => isType(val, 'error'));

/**
 * Returns if all the values in an array are of type error
 *
 * @param {Array[Error]} arr - array to test against
 * @returns {Boolean}
 */
var isErrorArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isError)) : false);

/**
 * Returns if the value is of type date
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isDate = Object.freeze((val) => isType(val, 'date'));

/**
 * Returns if all the values in an array are of type date
 *
 * @param {Array[Date]} arr - array to test against
 * @returns {Boolean}
 */
var isDateArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isDate)) : false);

/**
 * Returns if the value is of type symbol
 *
 * @param {Any} val - any variable or value
 * @returns {Boolean}
 */
var isSymbol = Object.freeze((val) => isType(val, 'symbol'));

/**
 * Returns if all the values in an array are of type symbol
 *
 * @param {Array[Symbol]} arr - array to test against
 * @returns {Boolean}
 */
var isSymbolArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isSymbol)) : false);

/**
 * Brains of compose and pipe functions
 *
 * @param {Function} fn - a function that will be ran in the future
 * @param {Function} gn - a function that will be ran in the future
 * @returns {Function}
 */
var _buildComposition = Object.freeze((fn, gn) => (...arguments) => gn(fn(...arguments)));

/**
 * Compose function builder
 *
 * @param {...Function} fn - a slew of functions that will be ran in the future from right to left
 * @returns {Function}
 */
var compose = Object.freeze((...fn) => fn.reduceRight(_buildComposition));

/**
 * Pipe function builder
 *
 * @param {...Function} fn - a slew of functions that will be ran in the future from left to right
 * @returns {Function}
 */
var pipe = Object.freeze((...fn) => fn.reduce(_buildComposition));