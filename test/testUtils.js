import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers/rootReducer';
import { createStore } from 'redux';

/**
 * Create a testing store with imported reducers, middleware and initial state
 * Global: rootReducer
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {store} - Redux store
 */

export const storeFactory = (initialState) => {
	return createStore(rootReducer, initialState);
};

/**
Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(
		// eslint-disable-next-line react/forbid-foreign-prop-types
		component.propTypes,
		expectedProps,
		'props',
		component.name
	);
	expect(propsErr).toBeUndefined();
};
