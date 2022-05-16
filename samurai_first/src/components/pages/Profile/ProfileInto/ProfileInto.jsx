import React from 'react';
import style from './ProfileInto.module.scss'

const ProfileInto = () => {
	return (
		<div className={style.avadesc}>
			<img src="https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg"
				 alt=""/>
			<div className={style.namedesc}>
				<p className={style.username}>Elsium</p>
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
export default ProfileInto;