import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
	state = {
		//this is a component state
		title: '',
	};

	onSubmit = (e) => {
		e.preventDefault(); //prevent reload of page
		this.props.addTodo(this.state.title); //send input up to app
		this.setState({ title: '' }); //reset state for next input
	};

	//dynamic, so long as the target element's name is same as key of state, can update
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	render() {
		return (
			<form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
				<input
					type="text"
					name="title"
					placeholder="Add Todo ..."
					style={{ flex: '10', padding: '5px' }}
					value={this.state.title}
					//onchange update state
					onChange={this.onChange}
				></input>
				<input
					type="submit"
					value="Submit"
					className="btn"
					style={{ flex: '1' }}
				></input>
			</form>
		);
	}
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
