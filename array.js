/**
 * @public Array.byObjectProp
 *
 * @description This is an auxiliary function that is used as the parameter in the Array.sort
 *      function. Pass the key as a string to the Array.byObjectProp function to sort the
 *      objects in the array by, switching from descending to ascending is as simple as prepending
 *      a '-' to the passed parameter.
 *
 *      e.g. [{id:2},{id:4},{id:1},{id:-1}].sort(Array.byObjectProp('-id'))
 *
 * @param {string} prop
 *
 * @returns {object[]}
 */
Array.byObjectProp = (prop) => {
    let order = 1;

    if(prop[0] === "-") {
        order = -1;
        prop = prop.substr(1);
    }

    return (a, b) => (order === 1) ?
        a[prop].localeCompare(b[prop]):
        b[prop].localeCompare(a[prop]);
}

/**
 * @public Array.range
 *
 * @description Array.range(x) => returns array of numbers from 0 to x, stepping by 1
 *              Array.range(x, y) => returns array of numbers from x to y, stepping by 1
 *              Array.range(x, y, z) => returns array of numbers from x to y, stepping by z
 *
 * @param {number} start
 * @param {(number|undefined)} end
 * @param {number} step
 *
 * @returns {number[]}
 */
Array.range = (start, end, step = 1) => {
    let returnArray = [];
    for (end || (end = start, start = 0); start <= end; start += step) returnArray.push(start);
    return returnArray;
};

/**
 * @public Array.prototype.concatAll
 *
 * @description flatten nested array
 *
 * @returns {any[]}
 */
Array.prototype.concatAll = function() {
    return [].concat(...this);
};

/**
 * @public Array.prototype.unique
 *
 * @description returns all the unique values of an array
 *
 * @return {any[]}
 *
 * @example [1,2,1,3,2].unique()
 */
Array.prototype.unique = function() {
    return [...new Set(this)];
}
