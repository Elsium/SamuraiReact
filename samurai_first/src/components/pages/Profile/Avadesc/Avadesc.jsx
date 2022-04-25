import React from 'react';
import style from './Avadesc.module.scss'

const Avadesc = (props) => {
	return (
		<div className={style.avadesc}>
			<img src="" alt=""/>
			<div className={style.namedesc}>
				<p className={style.username}>Dima</p>
				<div className={style.description}>
					<div className={style.item}>
						<p className={style.title}>birthday</p>
						<p className={style.content}>19.08.2002</p>
					</div>
					<div className={style.item}>
						<p className={style.title}>city</p>
						<p className={style.content}>Vladivostok</p>
					</div>
				</div>
				<p className={style.more}>More...</p>
			</div>
		</div>
	);
}
export default Avadesc;