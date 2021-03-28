import React from 'react'
import {findByTestAttr, checkProp} from '../../test/testUtil'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{shallow} from 'enzyme';
import Input from './index'

Enzyme.configure({ adapter: new Adapter() });

/**
 * 
 * Factory Function to create a Input  for Input Component 
 * @function setup 
 * @param {opject} props - Component props specific  for this component
 * @returns {shallowWrapper} 
 */

const secretWord="party"

const setup = (props={}) => {
    return shallow(<Input secretWord={secretWord}/>)
}
test("render without error", () => {
    const warpper = setup();
    const component = findByTestAttr(warpper, "component-input")
    expect(component.length).toBe(1)
})

test('dose not throw error with unexpected props', () => {
    checkProp(Input, {secretWord:"test"})
})