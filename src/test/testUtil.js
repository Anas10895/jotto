import checkPropTypes from 'check-prop-types'

/**
 * Return nods with given data-test attribute.
 * @param {ShallowWarpper} - enzym Shallow Warpper
 * @param {val} - the data-test attribute value for serach
 * @returns {ShallowWarpper}
 */

 export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
 }


 export const checkProp = (component, confirmProps) => {
     const propError = checkPropTypes(
         component.propTypes,
         confirmProps,
         'prop',
         component.name); 
         expect(propError).toBeUndefined();
 }