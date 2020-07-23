import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		//map the array of props given to make each object its own comp
		return this.props.todos.map((todo) => (
			<TodoItem
				key={todo.id}
				todo={todo}
				//send functions as props from app
				markComplete={this.props.markComplete}
				delTodo={this.props.delTodo}
			></TodoItem>
		));
	}
}

Todos.propTypes = {
	//define what type the prop is and if required
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};

export default Todos;
