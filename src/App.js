import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

//import { v4 as uuid } from 'uuid';

class App extends Component {
	state = {
		//state is an object that dictates how comp behaves and what it renders
		todos: [
			//this is an array of objects that will be passed and rendered to one comp
			/*{
				id: uuid(),
				title: 'Take out the trash',
				completed: false,
			},
			{
				id: uuid(),
				title: 'Eat',
				completed: false,
			},
			{
				id: uuid(),
				title: 'Meet with boss',
				completed: false,
			},*/
		],
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((res) => this.setState({ todos: res.data }));
	}

	markComplete = (id) => {
		//toggle complete
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	delTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) =>
				this.setState({
					todos: [...this.state.todos.filter((todo) => todo.id !== id)],
				})
			);
	};

	addTodo = (title) => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false,
			})
			.then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
	};

	render() {
		//pass prop with {this.state.comp}
		return (
			//surround all with Router
			<Router>
				<div className="App">
					<div className="Container">
						<Header></Header>
						{/* this is a route, put components rendered in that route there and specify path and render func, use exact path so parent routes don't get matched too */}
						<Route
							exact
							path="/"
							render={(
								props //this the func that will render the 2 components AddTodo and Todos
							) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo}></AddTodo>
									<Todos
										todos={this.state.todos}
										//send functions as props
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									></Todos>
								</React.Fragment>
							)}
						></Route>
						<Route path="/about" component={About}></Route>{' '}
						{/*another way to make a route*/}
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
