import React from 'react';
import style from './Newpost.module.scss'

const Newpost = (props) => {
	return (
		<div className={style.newPost}>
			<form action="#" className={style.inputNews}>
				<textarea name="" id="" placeholder="Whats new?"></textarea>
				<button>Send</button>
			</form>
		</div>
	);
}
export default Newpost;