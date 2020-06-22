import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import Input from './Input';
import GuessedWords from './GuessedWords';
import { getSecretWord } from './actions/index';

import './App.css';

export class UnconnectedApp extends Component {
	/**
	 * @method copmponentDidMount
	 * @returns undefined
	 */
	componentDidMount() {
		// get the secret word
		this.props.getSecretWord();
	}
	render() {
		return (
			<div className='container'>
				<h1>Jotto</h1>
				<Congrats success={this.props.success} />
				<Input />
				<GuessedWords guessedWords={this.props.guessedWords} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { success, guessedWords, secretWord } = state;
	return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
