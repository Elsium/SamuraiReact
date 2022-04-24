import React from 'react';
import './Header.css'
import logo from './logo.png'

const Header = () => {
	return (
		<header className="header">
			<a href="#">
				<img src={logo} alt=""/>
				<p className="header__title">Social-network</p>
			</a>
		</header>
	);
}
export default Header;