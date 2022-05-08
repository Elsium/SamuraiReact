import React from 'react';
import style from './Newpost.module.scss'
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../Redux/profileReducer";



const Newpost = (props) => {
	let newPostElem = React.createRef();
	
	const send = async (event) =>{
		event.preventDefault();
		props.dispatch(addPostActionCreator());
	}
	
	const onPostChange = () => {
		let text = newPostElem.current.value;
		props.dispatch(updatePostTextActionCreator(text));
	}
	
	return (
		<form className={style.inputNews}>
			<textarea ref={newPostElem} placeholder="Whats new?" value={props.newText}
					  onChange={onPostChange}/>
			<button onClick={send}>Send</button>
		</form>
	);
}
export default Newpost;