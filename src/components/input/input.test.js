import React from 'react'
import findByTestAttr from '../../test/testUtil'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme,{shallow} from 'enzyme';
import Input from './index'

Enzyme.configure({ adapter: new Adapter() });

// const defaultProps = {
//     input:""
// }

// const setup = (props={}) => {

//     const setupProps = {...defaultProps, ...props}
//     return shallow(<input {...setupProps } />)
// } 

test("render without error", () => {

})