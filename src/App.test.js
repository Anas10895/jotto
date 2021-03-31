import Enzyme,{shallow} from 'enzyme'
import {findByTestAttr} from './test/testUtil'
import App from './App'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

/**
 * 
 * Factory Function to create a GuessWord for Congrats component
 * @function setup 
 * @returns {shallowWrapper} 
 */

const setup = () => {
    return shallow(<App />)
}

test('render without an error', () => {
    const warpper = setup();
    const appComponent  = findByTestAttr(warpper, 'app-component')
    expect(appComponent.length).toBe(1)
})