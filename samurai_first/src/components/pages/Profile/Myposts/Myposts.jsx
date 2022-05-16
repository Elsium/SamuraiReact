import React from 'react';
import style from './Myposts.module.scss'
import Post from './Post/Post'

const Myposts = (props) => {
	let newPostElem = React.createRef();
	
	const send = async (event) =>{
		props.sendPost(event);
	}
	
	const onPostChange = () => {
		let text = newPostElem.current.value;
		props.updatePostText(text);
	}
	
	return (
		<section>
			<form className={style.inputNews}>
			<textarea ref={newPostElem} placeholder="Whats new?" value={props.newText}
					  onChange={onPostChange}/>
				<button onClick={send}>Send</button>
			</form>
			
			<div className={style.posts}>
				{props.postsData.map(item => <Post key={item.id} username={item.username} avatar={item.avatar} text={item.text}
												   like={item.like}/>)}
			</div>
		</section>
	);
}
export default Myposts;