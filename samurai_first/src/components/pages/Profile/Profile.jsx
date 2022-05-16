import React from 'react';
import style from './Profile.module.scss'
import ProfileInto from './ProfileInto/ProfileInto'
import Banner from './Banner/Banner'
import PostContainer from "./Myposts/PostContainer";

const Profile = () => {
	return (
		<main className={style.content}>
			<Banner/>
			<ProfileInto/>
			<PostContainer/>
		</main>
	);
}
export default Profile;