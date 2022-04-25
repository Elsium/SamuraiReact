import React from 'react';
import style from './Header.module.scss'
import logo from './logo.png'

const Header = (props) => {
	return (
		<header className={style.header}>
			<a href="/news">
				<img className="item" src={logo} alt=""/>
				<p className={style.header__title}>Social-network</p>
			</a>
		</header>
	);
}
export default Header;