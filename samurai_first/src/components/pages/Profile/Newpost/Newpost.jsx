import React from 'react';
import style from './Newpost.module.scss'

const Newpost = (props) => {
	return (
		<div className={style.newPost}>
			<form action="#">
				<textarea name="" id="" cols="30" rows="10" placeholder="Whats new?" className={style.inputNews}></textarea>
				<button className={style.sendButton}>Send</button>
			</form>
		</div>
	);
}
export default Newpost;