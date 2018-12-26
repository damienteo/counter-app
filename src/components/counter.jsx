import React, { Component } from 'react';

class Counter extends Component {

	state = {
		count: 0,
		// tags: ['tag1', 'tag2', 'tag3']
	}
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

	handleIncrement = () => {
		console.log("Increment Clicked!", this);
	}

	render() {

		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

			</div>
			)
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.state.count === 0) ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}
//what is rendered is not a string. It is a React expression (React.createElement('div'))
//Instead of div, we can also use <React.Fragment>
//within the curly braces, can put any javascript expression, an expression is anything which produces a value

export default Counter;