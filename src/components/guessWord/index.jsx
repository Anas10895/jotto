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
    }else{
        const guessedWordsRows = props.guessedWords.map((word, index) => 
            <tr data-test="guessd-word" key={index}>
            <td>{word.guessedWord}</td>
            <td>{word.litterMatchCount}</td>
            </tr> 
        )
        contents = (
            <div data-test="guessd-words">
            <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr><th>Guess</th><th>Match Litter</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordsRows}
                    </tbody>
                </table>

            </div>
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