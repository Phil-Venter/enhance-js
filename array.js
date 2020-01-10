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
Array.range = function(start, end, step = 1){
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
