/**
 *
 * @param {T} obj
 * @param {(obj: T) => R} fn
 * @param {R} defaultValue
 * @returns {R}
 */
export function get<T, R>( obj : T, fn : ( obj : T ) => R, defaultValue? : R ) {
  try {
    const result = fn(obj);
    return fn(obj) === undefined ? defaultValue : result;
  } catch ( err ) {
    return defaultValue;
  }
}


/**
 *
 * @param {T} obj
 * @param {(o: T) => R} getFn
 * @returns {any}
 */
export function has<T, R>( obj : T, getFn : ( o : T ) => R ) {
  try {
    let result = getFn(obj);
    return result == undefined ? false : true;
  } catch ( err ) {
    return false;
  }
}