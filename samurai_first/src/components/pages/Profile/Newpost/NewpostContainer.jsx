import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../Redux/profileReducer";
import Newpost from "./Newpost";



const NewpostContainer = (props) => {
	debugger;
	const sendPost = async (event) =>{
		event.preventDefault();
		props.dispatch(addPostActionCreator());
	}
	const updatePostText = (text) => {
		props.dispatch(updatePostTextActionCreator(text));
	}
	return (
		<Newpost updatePostText={updatePostText} sendPost={sendPost} newText={props.newText}/>
	);
}
export default NewpostContainer;