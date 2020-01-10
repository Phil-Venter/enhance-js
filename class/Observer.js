/**
 * @class Observer
 *
 * @description Very simple implementation of Observables,
 *              Thanks Sheikh Irshad
 *              {@link https://www.initgrep.com/posts/javascript/design-patterns/publisher-Subscriber(pub-sub)}
 */
class Observer {
    /**
     * @description Creates an instance of Observer.
     *
     * @memberof Observer
     */
    constructor() {
        this.events = {};
    }

    /**
     * @public subscribe
     *
     * @description create event and add listener
     *
     * @param {String} event
     * @param {Function} listener
     *
     * @memberof Observer
     */
    subscribe(event, listener) {
        if (!listener || typeof listener !== 'function')
            throw new Error('listener was not a function');
        if (!this.events[event] || this.events[event].length < 1)
            this.events[event] = [];
        this.events[event].push(listener);
    }

    /**
     * @public publish
     *
     * @description pass data to events
     *
     * @param {String} event
     * @param {*} params
     *
     * @memberof Observer
     */
     publish(event, params) {
        if (!this.events[event] || this.events[event].length < 1)
            throw new Error('Event does not exist');
        if (!params)
            throw new Error('params was not set');
        this.events[event].forEach((listener) => {
            listener(params);
        });
    }
}
