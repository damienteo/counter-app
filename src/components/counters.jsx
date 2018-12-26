import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

	render() {
		const { onReset, counters, onIncrement, onDecrement, onDelete } = this.props;

		return(
			<div>
				<button 
					onClick={onReset} 
					className="btn btn-primary btn-sm m-2"
					> 
					Reset
				</button>

				{counters.map(counter => 
					<Counter 
					key={counter.id}
					counter={counter}
					onIncrement={onIncrement}
					onDecrement={onDecrement}
					onDelete={onDelete}>
					</Counter>
					)}
			</div>
			)
	}

}

//before destructuring
// render() {
// 		return(
// 			<div>
// 				<button 
// 					onClick={this.props.onReset} 
// 					className="btn btn-primary btn-sm m-2"
// 					> 
// 					Reset
// 				</button>

// 				{this.props.counters.map(counter => 
// 					<Counter 
// 					key={counter.id}
// 					counter={counter}
// 					onIncrement={this.props.onIncrement}
// 					onDelete={this.props.onDelete}>
// 					</Counter>
// 					)}
// 			</div>
// 			)
// 	}

export default Counters;

//In <counter/>, we used to have value={counter.value} id={counter.id}
//instead of adding on all these values separately, we can use counter={counter} instead. This object will encapsulate everything we need to know about the counter. the counter object is carrying everything we know about the counter.