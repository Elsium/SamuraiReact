import React from 'react';
import style from './Newpost.module.scss'

const Newpost = (props) => {
	
	let newPostElem = React.createRef();
	
	const send = () => {
		debugger;
		let text = newPostElem.current.value;
		props.addPost(text);
	}
	
	return (
		<div className={style.newPost}>
			<form action="#" className={style.inputNews}>
				<textarea ref={newPostElem} name="" id="" placeholder="Whats new?"></textarea>
				<button onClick={send}>Send</button>
			</form>
		</div>
	);
}
export default Newpost;