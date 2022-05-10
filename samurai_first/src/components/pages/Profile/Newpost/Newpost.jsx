import React from 'react';
import style from './Newpost.module.scss'



const Newpost = (props) => {
	debugger;
	let newPostElem = React.createRef();
	
	const send = async (event) =>{
		props.sendPost(event);
	}
	
	const onPostChange = () => {
		let text = newPostElem.current.value;
		props.updatePostText(text);
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