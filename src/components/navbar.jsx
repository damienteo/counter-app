import React, { Component } from 'react';

//stateless functional component -> wherein the component is only getting all the information via props
//note: need to add 'props' as a parameter, and remove 'this' subsequently, in order for the component to work

const NavBar = (props) => {
	return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Navbar
					<span className="badge badge-pill badge-secondary m-2">
						{props.totalCounters}
					</span>
				</a>
			</nav>
		);
};

export default NavBar;