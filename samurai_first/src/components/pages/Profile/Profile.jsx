import React from 'react';
import style from './Profile.module.scss'
import Myposts from './Myposts/Myposts'
import ProfileInto from './ProfileInto/ProfileInto'
import Banner from './Banner/Banner'
import NewpostContainer from "./Newpost/NewpostContainer";

const Profile = (props) => {
	return (
		<main className={style.content}>
			<Banner/>
			<ProfileInto/>
			<NewpostContainer dispatch={props.dispatch} newText={props.profilePage.newText}/>
			<Myposts postsData={props.profilePage.postsData}/>
		</main>
	);
}
export default Profile;