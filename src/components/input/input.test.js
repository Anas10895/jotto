import React from 'react'
import {findByTestAttr, checkProp} from '../../test/testUtil'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{shallow} from 'enzyme';
import Input from './index'

Enzyme.configure({ adapter: new Adapter() });

//mock entire module for destruction useState on import //// 
const mockCurrentGuess = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockCurrentGuess]
}))
/**
 * 
 * Factory Function to create a Input  for Input Component 
 * @function setup 
 * @param {opject} props - Component props specific  for this component
 * @returns {shallowWrapper} 
 */
//return to lec m=number 60 if you want to make an orignal state 


const setup = (success=false, secretWord="party") => {
    return shallow(<Input success={success} secretWord={secretWord}/>)
}
describe('render' , () => {
    


    describe('success is true' , () => {
        let warpper;
        beforeEach(() => {
            warpper = setup(true);
        })
        test("render without error", () => {
            const component = findByTestAttr(warpper, "component-input")
            expect(component.length).toBe(1)
        })
        test('input box dose not show', () => {
            const inputBox = findByTestAttr(warpper, 'input-box')
            expect(inputBox.exists()).toBe(false)
        })
        test('submit button dose not show', () => {
            const submitButton = findByTestAttr(warpper, 'submit-button')
            expect(submitButton.exists()).toBe(false)
        })
    })
    describe('success is false', () => {
        let warpper;
        beforeEach(() => {
            warpper = setup(false);
        })
        test("render without error", () => {
            const component = findByTestAttr(warpper, "component-input")
            expect(component.length).toBe(1)
        })
        test('input box dose not show', () => {
            const inputBox = findByTestAttr(warpper, 'input-box')
            expect(inputBox.exists()).toBe(true)
        })
        test('submit button dose not show', () => {
            const submitButton = findByTestAttr(warpper, 'submit-button')
            expect(submitButton.exists()).toBe(true)
        })
    })
})

test('dose not throw error with unexpected props', () => {
    checkProp(Input, {secretWord:"test"})
})

describe('state controlled input field ', () => {
        let warpper;
        let mockEvent;
        beforeEach(() => {
             warpper = setup();

        })
    test('state update with value of the input field' , () => {

        const inputBox = findByTestAttr(warpper, "input-box");

        mockEvent = {target : {value: "train"}}
        inputBox.simulate("change", mockEvent)

        expect(mockCurrentGuess).toHaveBeenCalledWith('train')

});

    test('state come with empty string when submit button is clicked', () => {

        const submitButton = findByTestAttr(warpper, 'submit-button')
        
        submitButton.simulate("click")

        expect(mockCurrentGuess).toHaveBeenCalledWith('');
    })
});