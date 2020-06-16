import checkPropTypes from 'check-prop-types';

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
