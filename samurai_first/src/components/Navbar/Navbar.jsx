import React from 'react';
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav__main">
				<p><a href="#">Profile</a></p>
				<p><a href="#">News</a></p>
				<p><a href="#">Messages</a></p>
				<p><a href="#">Music</a></p>
			</div>
			<p className="nav__settings"><a href="#">Settings</a></p>
		</nav>
	);
}
export default Navbar;