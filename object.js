/**
 * @public Object.extend
 *
 * @description a way combine objects and return a new immutable object
 *
 * @param {objects} args
 *
 * @return {object}
 *
 * @example Object.extend({id: 1, name: 'John'}, {id: 3, surname: 'Doe'})
 *      => {id: 3, name: 'John', surname: 'Doe'}
 */
Object.extend = (...args) => {
    return Object.freeze(Object.assign({}, ...args));
}

/**
 * @public Object.prototype.extend
 *
 * @description a way extend a object and return a new immutable object
 *
 * @param {objects} args
 *
 * @return {object}
 *
 * @example {id: 1, name: 'John'}.extend({id: 3, surname: 'Doe'})
 *      => {id: 3, name: 'John', surname: 'Doe'}
 */
Object.prototype.extend = function(...args) {
    return Object.extend(this, ...args);
}
