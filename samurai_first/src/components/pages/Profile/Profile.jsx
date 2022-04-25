import React from 'react';
import style from './Profile.module.css'
import Myposts from './Myposts/Myposts'
import Newpost from './Newpost/Newpost'
import Avadesc from './Avadesc/Avadesc'
import Banner from './Banner/Banner'

const Profile = (props) => {
	return (
		<main className={style.content}>
			<Banner/>
			<Avadesc/>
			<Newpost/>
			<Myposts/>
		</main>
	);
}
export default Profile;