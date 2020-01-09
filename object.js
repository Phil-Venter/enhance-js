Object.extend = (...args) => {
    return Object.freeze(Object.assign({}, ...args));
}
