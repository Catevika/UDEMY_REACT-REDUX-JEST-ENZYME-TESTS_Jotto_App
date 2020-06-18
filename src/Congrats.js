import React from 'react';
import PropTypes from 'prop-types';

/**
* Functional Component for congratulatory message
@function
@param {object} props - React props.
@returns {JSX.element} - Rendered component {or null in 'success' prop is false}
*/

const Congrats = ({ success }) =>
	success ? (
		<div data-test='component-congrats' className='alert alert-success'>
			<span success='true' data-test='congrats-message'>
				Congratulations, you guessed the word!
			</span>
		</div>
	) : (
		<div data-test='component-congrats'></div>
	);

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
};

export default Congrats;
