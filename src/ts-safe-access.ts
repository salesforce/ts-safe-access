/**
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
 *
 * @example
 * const data = {its: {really: {really: {really: {nested : undefined}}}}, nested: {value: null}};
 * const result = get(data, data => data.its.really.really.really.nested, 'defaultValue');
 *
 * @param {ObjectType} object Source Object
 * @param {(object: ObjectType) => ReturnType} getFn Function to get the value at path of object
 * @param {ReturnType} defaultValue If the resolved value is undefined, the defaultValue is returned in its place
 * @param {boolean} excludeNull If the resolved value is null, the defaultValue is returned in its place
 * @returns {ReturnType}
 */
export function get<ObjectType, ReturnType>(object: ObjectType, getFn: (object: ObjectType) => ReturnType, defaultValue?: ReturnType, excludeNull = false): ReturnType {
    try {
        let result = getFn(object);
        result = excludeNull ? (result === null ? defaultValue : result) : result;
        return result === undefined ? defaultValue : result;
    } catch (err) {
        return defaultValue;
    }
}


/**
 * Checks if path is a direct property of object
 *
 * @example
 * const data = {its: {really: {really: {}}, b: {}};
 * const result = has(data, data => data.its.really.really.really.nested);
 * expect(result).toEqual(false);
 *
 * @param {ObjectType} object Source Object
 * @param {(o: ObjectType) => ReturnType} getFn Function to get the value at path of object
 * @returns {boolean}
 */
export function has<ObjectType, ReturnType>(object: ObjectType, getFn: (o: ObjectType) => ReturnType): boolean {
    try {
        let result = getFn(object);
        return result !== undefined;
    } catch (err) {
        return false;
    }
}
