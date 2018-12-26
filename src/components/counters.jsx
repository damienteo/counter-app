import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 1 },
			{ id: 4, value: 0 }
		]
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters: counters });
	}

	handleReset = () => {
		const counters = this.state.counters.map
			(c => {
				c.value = 0; 
				return c;
			});
		this.setState({counters: counters});
	};

	render() {
		return(
			<div>
				<button 
					onClick={this.handleReset} 
					className="btn btn-primary btn-sm m-2"
					> 
					Reset
				</button>

				{this.state.counters.map(counter => 
					<Counter 
					key={counter.id}
					counter={counter}
					onDelete={this.handleDelete}>
					</Counter>
					)}
			</div>
			)
	}

}

export default Counters;

//In <counter/>, we used to have value={counter.value} id={counter.id}
//instead of adding on all these values separately, we can use counter={counter} instead. This object will encapsulate everything we need to know about the counter. the counter object is carrying everything we know about the counter.