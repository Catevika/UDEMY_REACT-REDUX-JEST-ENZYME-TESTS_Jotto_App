import React from 'react';

/*
* Functional Component for congratulatory message
@function
@param {object} props - React props.
@returns {JSX.element} - Rendered component {or null in 'success' prop is false}
*/

const Congrats = ({ success }) =>
	success ? (
		<div data-test='component-congrats'>
			<span data-test='congrats-message'>
				Congratulations, you guessed the word!
			</span>
		</div>
	) : (
		<div data-test='component-congrats'></div>
	);

export default Congrats;
