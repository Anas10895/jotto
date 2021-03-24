import React from 'react'
import PropTypes from 'prop-types'

const GuessWord = (props) => {
    let contents

    if(props.guessedWords.length === 0){
        contents = (
            <span data-test="guess-instuction">
                try to guess the word
            </span>
        )
    }
    return (
        <div data-test="component-guessd-words">
            {contents}
        </div>

        
    )
}
GuessWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord : PropTypes.string.isRequired,
            litterMatchCount : PropTypes.number.isRequired,
        })
    ).isRequired,
};
export default GuessWord;