import React from 'react';
import style from './Post.module.scss'

const Post = (props) => {
	return (
		<div className={style.item}>
			<div className={style.post}>
				<img src={`${props.avatar}`} alt=""/>
				<div>
					<p className={style.username}>{props.username}</p>
					<p>{props.text}</p>
				</div>
			</div>
			<div className={style.like}>
				<p>{props.like}</p>
				<span>Like</span>
			</div>
		</div>
	);
}
export default Post;