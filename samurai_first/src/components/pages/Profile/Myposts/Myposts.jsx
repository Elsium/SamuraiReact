import React, {useState} from 'react';
import style from './Myposts.module.scss'
import Post from './Post/Post'

const Myposts = (props) => {
	
	return (
		<div className={style.posts}>
			{props.postsData.map(item => <Post key={item.id} username={item.username} avatar={item.avatar} text={item.text}
										 like={item.like}/>)}
		</div>
	);
}
export default Myposts;