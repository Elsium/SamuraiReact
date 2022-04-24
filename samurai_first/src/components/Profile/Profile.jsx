import React from 'react';
import style from './Profile.module.css'

const Profile = () => {
	return (
		<main className={style.content}>
			<div className={style.content__banner}>
				<img src="https://shapka-youtube.ru/wp-content/uploads/2020/10/exotanks.jpg" alt=""/>
			</div>
			<div className={style.content__avadesc}>
				ava + description
			</div>
			<div className={style.content__newpost}>
				new post
			</div>
			<div className={style.content__posts}>
				<div className={style.posts__post}>
					post
				</div>
			</div>
		</main>
	);
}
export default Profile;