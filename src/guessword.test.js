import React from 'react'
import Enzyme,{mount} from 'enzyme'

import App from './App'
import {findByTestAttr} from './test/testUtil'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
/**
 * raete wrapper with specified inital condtion, 
 * then submit a guessed word of 'train'
 * @function
 * @param {object} state - inital condtion .
 * @returns {Wrapper} - enzyme wrapper of mounted App component.
 */

    const setup = (state = {}) =>  {

    // TODO: apply state    
    const wrapper = mount(<App />);

    // add value to input box 
    const inputBox = findByTestAttr(wrapper , 'input-box' );
    inputBox.simulate('change', { target:{ value: 'train'} });

    //simulate click on submit button 
    const submitButton  = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {preventDefault() {}});
    return wrapper;
    }


    describe.skip('no words guessed' , () =>{
        let wrapper;
        beforeEach( () => {
            wrapper = setup({
                secretWord:'party',
                success:false,
                guessedWords:[]
            })
        })

        test('creates GuessedWord table with one row', () => {
            const GuessedWordRows = findByTestAttr(wrapper, 'guessd-word')
            expect(GuessedWordRows).toHaveLength(1);
        })
    })

    describe.skip('some words guessed' , () =>{
        let wrapper;
        beforeEach( () => {
            wrapper = setup({
                secretWord:'party',
                success:false,
                guessedWords:[ {guessedWord : 'train', litterMatchCount : 3}]
            })
        })

        test('adds a row to GuessedWord table', () => {
            const GuessedWordRows = findByTestAttr(wrapper, 'guessd-word')
            expect(GuessedWordRows).toHaveLength(2);
        })
    })

    describe.skip('guess scecret word ' , () =>{
        let wrapper;
        beforeEach( () => {
            wrapper = setup({
                secretWord:'party',
                success:true,
                guessedWords:[ {guessedWord : 'train', litterMatchCount : 3}]
            })
            const inputBox = findByTestAttr(wrapper , 'input-box' );
            inputBox.simulate('change', { target:{ value: 'party'} });
        
            //simulate click on submit button 
            const submitButton  = findByTestAttr(wrapper, 'submit-button');
            submitButton.simulate('click', {preventDefault() {}});
        })
        test('adds a row to GuessedWord table', () => {
            const GuessedWordRows = findByTestAttr(wrapper, 'guessd-word')
            expect(GuessedWordRows).toHaveLength(3);
        })
        test(' show congrats component ', () => {
            const congratsConpnent = findByTestAttr(wrapper, 'component-congrats')
            expect(congratsConpnent.text().length).toBeGreaterThan(0);
        })
        test('dose not show input component', () => {
            const inputComponent = findByTestAttr(wrapper, 'input-box')
            expect(inputComponent.exists()).toBe(false)

            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.exists()).toBe(false)
        })

    })