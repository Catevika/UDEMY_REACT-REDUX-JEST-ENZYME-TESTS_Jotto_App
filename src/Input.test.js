import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';

import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial State for this setup
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />)
		.dive()
		.dive();
	return wrapper;
};

describe('render', () => {
	describe('word has NOT been guessed', () => {
		test('renders component without error', () => {});
		test('renders input box', () => {});
		test('renders submit button', () => {});
	});
	describe('word has been guessed', () => {
		test('does NOT render component without error', () => {});
		test('does NOT render input box', () => {});
		test('does NOT render submit button', () => {});
	});
});
describe('update state', () => {});
