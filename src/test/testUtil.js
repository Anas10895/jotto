/**
 * Return nods with given data-test attribute.
 * @param {ShallowWarpper} - enzym Shallow Warpper
 * @param {val} - the data-test attribute value for serach
 * @returns {ShallowWarpper}
 */

 export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
 }