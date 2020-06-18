import { actionTypes } from '../actions/index';

/**
 * @function successReducer
 *
 * @param {array} state - Array of Guessed Words
 * @param {object} action - Action to be reduced
 * @returns {boolean} - New success state
 */

const success = (state = false, action) => {
	switch (action.type) {
		case actionTypes.CORRECT_GUESS:
			return true;
		default:
			return state;
	}
};

export default success;
