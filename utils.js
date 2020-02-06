/**
 * Returns the javascript type of the val passed
 *
 * @param {Any} val - any variable or val
 * @returns {String} - type
 */
var rawType = Object.freeze((val) => ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase());

/**
 * Returns if the javascript type of the val passed matches the type specified
 *
 * @param {Any} val - any variable or val
 * @param {String} type - the type in string format to evaluate against
 * @returns {Boolean}
 */
var isType = Object.freeze((val, type) => rawType(type) === 'string' && rawType(val) === type.toLowerCase());

/**
 * Returns if the javascript types in the arr passed matches the type specified
 *
 * @param {Array[Any]} arr - arr of vals
 * @param {String} type - the type in string format to evaluate against
 * @returns {Boolean}
 */
var isArrayOf = Object.freeze((arr, type) => andBooleanArray([isArray(arr), isString(type)]) ? andBooleanArray(arr.map(val )=> isType(val, type)) : false);

/**
 * Returns if the javascript type of the val passed is string
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isString = Object.freeze((val) => isType(val, 'string'));

/**
 * Returns if the javascript type of all the vals in the arr is string
 *
 * @param {Array[String]} arr - any variable or val
 * @returns {Boolean}
 */
var isStringArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isString)) : false);

/**
 * Returns if the javascript type of the val passed is number
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isNumber = Object.freeze((val) => isType(val, 'number') && Number.isFinite(val));

/**
 * Returns if the javascript type of all the vals in the arr is number
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isNumberArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNumber)) : false);

/**
 * Returns if the val is greater than 0
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isPositive = Object.freeze((val) => isNumber(val) ? val > 0 : false);

/**
 * Returns if all the vals in a arr is greater than 0
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isPositiveArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositive)) : false);

/**
 * Returns if the val is less than 0
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isNegative = Object.freeze((val) => isNumber(val) ? val < 0 : false);

/**
 * Returns if all the vals in a arr is less than 0
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isNegativeArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNegative)) : false);

/**
 * Returns if the val is an integer
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isInt = Object.freeze((val) => andBooleanArray([isNumber(val), val === Number.parseInt(val)]));

/**
 * Returns if all the vals in a arr are integers
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isIntArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isInt)) : false);

/**
 * Returns if the val is greater than 0
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isPositiveInt = Object.freeze((val) => isInt(val) ? isPositive(val) : false);

/**
 * Returns if all the vals in a arr are greater than 0
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isPositiveIntArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositiveInt)) : false);

/**
 * Returns if the val is less than 0
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isNegativeInt = Object.freeze((val) => isInt(val) ? isNegative(val) : false);

/**
 * Returns if all the vals in a arr are less than 0
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isNegativeIntArray = Object.freeze((arr) => !isArray(arr) ? andBooleanArray(arr.map(isNegativeInt)) : false);

/**
 * Returns if the val is a float
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isFloat = Object.freeze((val) => andBooleanArray([isNumber(val), val === Number.parseFloat(val)]));

/**
 * Returns if all the vals in a arr are floats
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isFloat)) : false);

/**
 * Returns if the val is greater than 0
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isPositiveFloat = Object.freeze((val) => isFloat(val) ? isPositive(val) : false);

/**
 * Returns if all the vals in a arr are greater than 0
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isPositiveFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isPositiveFloat)) : false);

/**
 * Returns if the val is less than 0
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isNegativeFloat = Object.freeze((val) => isFloat(val) ? isNegative(val) : false);

/**
 * Returns if all the vals in a arr are less than 0
 *
 * @param {Array[Number]} arr - any variable or val
 * @returns {Boolean}
 */
var isNegativeFloatArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNegativeFloat)) : false);

/**
 * Returns if the val is not an arr
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isArray = Object.freeze((val) => isType(val, 'array'));

/**
 * Returns if all the vals in a arr are arrs
 *
 * @param {Array[Array]} arr - any variable or val
 * @returns {Boolean}
 */
var isArrayArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isArray)) : false);

/**
 * Returns if the val is in arr
 *
 * @param {Any} val - any variable or val
 * @param {Array} arr - arr to test against
 * @returns {Boolean}
 */
var inArray = Object.freeze((val, arr) => isArray(arr) && arr.indexOf(val) !== -1);

/**
 * Returns if the val is of type function
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isFunction = Object.freeze((val) => isType(val, 'function'));

/**
 * Returns if all the vals in a arr are of type function
 *
 * @param {Array[Function]} arr - any variable or val
 * @returns {Boolean}
 */
var isFunctionArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isFunction)) : false);

/**
 * Returns if the val is of type object
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isObject = Object.freeze((val) => isType(val, 'object'));

/**
 * Returns if all the vals in a arr are of type object
 *
 * @param {Array[Object]} arr - any variable or val
 * @returns {Boolean}
 */
var isObjectArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isObject)) : false);

/**
 * Returns if the val is of type object
 *
 * @param {String} val - any variable or val
 * @param {Object} object - any variable or val
 * @returns {Boolean}
 */
var inObject = Object.freeze((val, object) => andBooleanArray([isObject(object), isString(val), object.hasOwnProperty(val)]));

/**
 * Returns if the val is empty
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isEmpty = Object.freeze((val) => !val);

/**
 * Returns if all the vals in a arr are empty or if arr is empty
 *
 * @param {Array[Any]} arr - any variable or val
 * @returns {Boolean}
 */
var isEmptyArray = Object.freeze((arr) => isArray(arr) ? isEmpty(arr) ? true : andBooleanArray(arr.map(isEmpty)) : false);

/**
 * Returns if the val is of type null
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isNull = Object.freeze((val) => isType(val, 'null'));

/**
 * Returns if all the vals in a arr are of type null
 *
 * @param {Array[Any]} arr - any variable or val
 * @returns {Boolean}
 */
var isNullArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isNull)) : false);

/**
 * Returns if the val is of type undefined
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isUndefined = Object.freeze((val) => isType(val, 'undefined'));

/**
 * Returns if all the vals in a arr are of type undefined
 *
 * @param {Array[Any]} arr - any variable or val
 * @returns {Boolean}
 */
var isUndefinedArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isUndefined)) : false);

/**
 * Returns if the val is of type boolean
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isBoolean = Object.freeze((val) => isType(val, 'boolean'));

/**
 * Returns if all the vals in a arr are of type boolean
 *
 * @param {Array[Boolean]} arr - any variable or val
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
 * Returns if the val is of type regular expression
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isRegExp = Object.freeze((val) => isType(val, 'regexp'));

/**
 * Returns if all the vals in a arr are of type regular expression
 *
 * @param {Array[RegExp]} arr - any variable or val
 * @returns {Boolean}
 */
var isRegExpArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isRegExp)) : false);

/**
 * Returns arr of strings that match the regex pattern in the val
 *
 * @param {String} val - any variable or val
 * @param {RegExp} regex - regular expression
 * @returns {Array[String]}
 */
var matchRegex = Object.freeze((val, regex) =>  andBooleanArray([isString(val), isRegExp(regex)]) ? val.match(regex) : false);

/**
 * Returns if the val is of type error
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isError = Object.freeze((val) => isType(val, 'error'));

/**
 * Returns if all the vals in a arr are of type error
 *
 * @param {Array[Error]} arr - any variable or val
 * @returns {Boolean}
 */
var isErrorArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isError)) : false);

/**
 * Returns if the val is of type date
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isDate = Object.freeze((val) => isType(val, 'date'));

/**
 * Returns if all the vals in a arr are of type date
 *
 * @param {Array[Date]} arr - any variable or val
 * @returns {Boolean}
 */
var isDateArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isDate)) : false);

/**
 * Returns if the val is of type symbol
 *
 * @param {Any} val - any variable or val
 * @returns {Boolean}
 */
var isSymbol = Object.freeze((val) => isType(val, 'symbol'));

/**
 * Returns if all the vals in a arr are of type symbol
 *
 * @param {Array[Symbol]} arr - any variable or val
 * @returns {Boolean}
 */
var isSymbolArray = Object.freeze((arr) => isArray(arr) ? andBooleanArray(arr.map(isSymbol)) : false);

/**
 * Brains of compose an pipe
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
