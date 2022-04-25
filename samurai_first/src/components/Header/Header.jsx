import React from 'react';
import {Link} from 'react-router-dom';
import style from './Header.module.scss'
import logo from './logo.png'

const Header = (props) => {
	return (
		<header className={style.header}>
			<Link to="/news">
				<img className="item" src={logo} alt=""/>
				<p className={style.header__title}>Social-network</p>
			</Link>
		</header>
	);
}
export default Header;