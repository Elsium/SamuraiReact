import React from 'react';
import style from './Banner.module.scss'

const Banner = (props) => {
	return (
		<div className={style.banner}>
			<img src="https://shapka-youtube.ru/wp-content/uploads/2020/10/exotanks.jpg" alt=""/>
		</div>
	);
}
export default Banner;