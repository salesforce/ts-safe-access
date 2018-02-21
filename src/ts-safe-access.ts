/**
 *
 * @param {T} obj
 * @param {(obj: T) => R} fn
 * @param {R} defaultValue
 * @param {boolean} excludeNull
 * @returns {R}
 */
export function get<T, R>(obj: T, fn: (obj: T) => R, defaultValue?: R, excludeNull = false) {
    try {
        let result = fn(obj);
        result = excludeNull ? (result === null ? defaultValue : result) : result;
        return result === undefined ? defaultValue : result;
    } catch (err) {
        return defaultValue;
    }
}


/**
 *
 * @param {T} obj
 * @param {(o: T) => R} getFn
 * @returns {any}
 */
export function has<T, R>(obj: T, getFn: (o: T) => R) {
    try {
        let result = getFn(obj);
        return result !== undefined;
    } catch (err) {
        return false;
    }
}
