import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr, checkProp} from '../../test/testUtil'
import Congrats from './index'
import checkPropTypes from 'check-prop-types'
Enzyme.configure({ adapter: new Adapter() });

const defualtProps = { success : false }
/**
 * 
 * Factory Function to create a shallowWrapper for Congrats component
 * @function setup 
 * @param {opject} props - Component props specific  for this component
 * @returns {shallowWrapper} 
 */


const setup = (props={}) => {
    const setupProps = {...defualtProps , ...props}
    return shallow(<Congrats {...setupProps}/>)
}

test('render without error', () => {
const warpper = setup();
const component = findByTestAttr(warpper, 'component-congrats')
expect(component.length).toBe(1)
});

test('render no text when "success" prop is false ', () => {
    const warpper = setup({success: false});
    const component = findByTestAttr(warpper, 'component-congrats')
    expect(component.text()).toBe('')
})

test('render congrats messagse when  prop is true', () => {
    const warpper = setup({success: true});
    const component = findByTestAttr(warpper, 'congrats-message')
    expect(component.text().length).not.toBe(0);
})

test('dosent throw worning with expected props ',() => {
    const expectedProps = {success: false};
    checkProp(Congrats, expectedProps);
})
