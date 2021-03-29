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



const setup = (secretWord="party") => {
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

describe('state controlled input field ', () => {

    test('state update with value of the input field' , () => {
        const mockCurrentGuess = jest.fn();
        React.useState = jest.fn(() =>  ["" , mockCurrentGuess])

        const warpper = setup();
        const inputBox = findByTestAttr(warpper, "input-box");

        const mockEvent = {target : {value: "train"}}
        inputBox.simulate("change", mockEvent)

        expect(mockCurrentGuess).toHaveBeenCalledWith('train')

});
});