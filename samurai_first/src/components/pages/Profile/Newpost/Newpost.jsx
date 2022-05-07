import React from 'react';
import style from './Newpost.module.scss'

const Newpost = (props) => {
	
	let newPostElem = React.createRef();
	
	const send = () => {
		props.dispatch({type: 'ADD-POST'});
	}
	
	const onPostChange = () => {
		let text = newPostElem.current.value;
		props.dispatch({type: 'UPDATE-POST-TEXT', newText: text});
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