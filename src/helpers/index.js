/** 
* @method getLetterMatchCount
* @param {string} guessedWord
* @param {string} secretWord
* @return the number of matching letter between the guessdWord and secretWord
*/

export function getLetterMatchCount(guessedWord, secretWord){
        let secretLetters = secretWord.split('')
        let guessdLetterSet = new Set(guessedWord)
        return secretLetters.filter(letter => guessdLetterSet.has(letter)).length
};