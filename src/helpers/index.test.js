import {getLetterMatchCount} from './index'

describe('getLetterMatchCount', () => {
    const secretWord = "party";
    test('return correct count when there are no matching letters', () => {
        const getLetterCount = getLetterMatchCount('bones', secretWord);
        expect(getLetterCount).toBe(0);
    })
    test('return correct count when there three letter matching', () => {
        const getLetterCount = getLetterMatchCount('train', secretWord);
        expect(getLetterCount).toBe(3);
    })
    test('return correct count when all letter match', () => {
        const getLetterCount = getLetterMatchCount('party', secretWord);
        expect(getLetterCount).toBe(secretWord.length);
    })
})
