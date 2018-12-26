import React, { Component } from 'react';

class Counter extends Component {

	// state = {
	// 	value: this.props.counter.value
	// 	// tags: ['tag1', 'tag2', 'tag3']
	// }
	//state is an object that includes any data the component needs

	// styles = {
	// 	fontSize: 50,
	// 	fontWeight: "bold"
	// };
	// style={this.styles}
	// style={{ fontSize: 30 }}

	// renderTags() {
	// 	if (this.state.tags.length === 0) return <p>There are no tags!</p>;
	// 	return <ul>
	// 				{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
	// 			</ul>
	// }
	// 			{this.state.tags.length === 0 && "Please create a new tag"}
	// 			{this.renderTags()}

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }
	//obj.method(); 'this' will refer to obj
	//function(); 'this' will refer to the window

	// handleIncrement = () => {
	// 	this.setState({ value: this.state.value + 1 })
	// }

//setState is required to change the data in state, cannot simply use this.state.count++; setState will also initiate a call to the render method to update accordingly

//whenever you need to pass a parameter into the function from the body of an event handler, you need to use an arrow function
// onClick={() => this.handleIncrement(product)}
// {this.props.children}
// <h4>Counter #{counter.id} </h4>

	render() {
		return (
			<div className="row">
				<div className="col-1 m-2">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>	
				</div>
				<div className="col">
					<button 
						onClick={() => this.props.onIncrement(this.props.counter)} 
						className="btn btn-secondary btn-sm">
						+
					</button>
					<button 
						onClick={() => this.props.onDecrement(this.props.counter)} 
						className="btn btn-secondary btn-sm m-2"
						disabled={this.props.counter.value === 0 ? 'disabled':''}
						>
						-
					</button>
					<button 
						onClick={() => this.props.onDelete(this.props.counter.id)} 
						className="btn btn-danger btn-sm">
						Delete
					</button>
				</div>
			</div>
			)
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0) ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}
//what is rendered is not a string. It is a React expression (React.createElement('div'))
//Instead of div, we can also use <React.Fragment>
//within the curly braces, can put any javascript expression, an expression is anything which produces a value

export default Counter;