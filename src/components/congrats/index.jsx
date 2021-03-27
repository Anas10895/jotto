import React from 'react'
import PropTypes from 'prop-types'
/**
 * functional react component for congratulatory message
 * @function
 * @param {opject} props -  react Props
 * @returns {JSX.Element} - rendred component or null if no right answer been givein 
**/

const Congrats =  (props) => {
   
        if(props.success){
            return (
            <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">
                Congrats!! you guessd the word!!!
            </span>
        </div>)



        }else{
            return <div data-test="component-congrats"></div>
        }
        
    
}
Congrats.propTypes={
    success:PropTypes.bool.isRequired,

}
export default Congrats;