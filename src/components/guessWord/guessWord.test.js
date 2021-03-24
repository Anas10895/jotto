import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import {findByTestAttr, checkProp} from '../../test/testUtil'
import  GuessWord from './index'
import Congrats from '../congrats'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

/**
 * 
 * Factory Function to create a GuessWord for Congrats component
 * @function setup 
 * @param {opject} props - Component props specific  for this component
 * @returns {shallowWrapper} 
 */

const defaultProps = {
    guessedWords : [{
        guessedWord : 'train',
        litterMatchCount : 3

    }]
}
const setup = (props={}) => {
    
    const setupProps = { ...defaultProps , ...props}
    return shallow(<GuessWord {...setupProps}/>)
}

test('render wihout error', () => {
    checkProp(GuessWord, defaultProps)
})

describe('if there are no words guessd', () => {
    let wrapper
    beforeEach( () => {
         wrapper = setup({guessedWords: []})

    })
    test('render wihout error', () => {
        const component = findByTestAttr(wrapper, 'component-guessd-words')
        expect(component.length).toBe(1)
    })
    test('render instruction to guess the word ', () => {
        const instuction = findByTestAttr(wrapper, 'guess-instuction')
        expect(instuction.text().length).not.toBe(0);
    })
})

describe('if there are words guessd', () => {
    
})