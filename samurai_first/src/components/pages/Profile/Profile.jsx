import React from 'react';
import style from './Profile.module.scss'
import Myposts from './Myposts/Myposts'
import Newpost from './Newpost/Newpost'
import ProfileInto from './ProfileInto/ProfileInto'
import Banner from './Banner/Banner'

const Profile = (props) => {
	return (
		<main className={style.content}>
			<Banner/>
			<ProfileInto/>
			<Newpost/>
			<Myposts postsData={props.postsData}/>
		</main>
	);
}
export default Profile;