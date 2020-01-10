/**
 * @public Object.extend
 *
 * @description a way combine objects and return a new immutable object
 *
 * @param {objects} args
 *
 * @return object
 */
Object.extend = (...args) => {
    return Object.freeze(Object.assign({}, ...args));
}
