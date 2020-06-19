import { actionTypes } from '../actions/index';

/**
 * @function guessedWords
 *
 * @param {array} state - Array of Guessed Words
 * @param {object} action - Action to be reduced
 * @returns {array} - New guessedWords state
 */

const guessedWords = (state = [], action) => {
	switch (action.type) {
		case actionTypes.GUESS_WORD:
			return [...state, action.payload];
		default:
			return state;
	}
};
export default guessedWords;
