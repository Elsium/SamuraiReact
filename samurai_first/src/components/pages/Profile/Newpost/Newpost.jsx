import React from 'react';
import style from './Newpost.module.scss'
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../Redux/store";



const Newpost = (props) => {
	debugger;
	let newPostElem = React.createRef();
	
	const send = () => {
		props.dispatch(addPostActionCreator());
	}
	
	const onPostChange = () => {
		let text = newPostElem.current.value;
		props.dispatch(updatePostTextActionCreator(text));
	}
	
	return (
		<form action="#" className={style.inputNews}>
			<textarea ref={newPostElem} name="" id="" placeholder="Whats new?" value={props.newText}
					  onChange={onPostChange}/>
			<button onClick={send}>Send</button>
		</form>
	);
}
export default Newpost;