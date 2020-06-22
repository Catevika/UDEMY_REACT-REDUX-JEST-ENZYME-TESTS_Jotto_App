import { actionTypes } from '../actions/index';

/**
 * @function secretWord reducer
 *
 * @param {string} state - State before Reducer
 * @param {object} action - Action sent to Reducer
 * @returns {string} - New State (secret word payload for action)
 */

const secretWord = (state = null, action) => {
	switch (action.types) {
		case actionTypes.SET_SECRET_WORD:
			return action.payload;
		default:
			return state;
	}
};

export default secretWord;
