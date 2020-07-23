import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: 'tpx #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		};
	};

	markComplete = (e) => {
		console.log(this.props);
	};
	render() {
		const { id, title } = this.props.todo;
		//inline styling requires 2 {}
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						// Have to call function as a prop that was passed and move up the tree to app, bind is what you are sending back, always this as 1st arg
						onChange={this.props.markComplete.bind(this, id)}
					></input>
					{' ' + title}
					<button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
						x
					</button>
				</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
	background: 'red',
	color: 'white',
	border: 'none',
	padding: '5px 8px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
};

export default TodoItem;
