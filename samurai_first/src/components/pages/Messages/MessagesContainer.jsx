import React from 'react';
import {sendMSGActionCreator, updateMSGTextActionCreator} from "../../../Redux/dialogsReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
	debugger
	const sendMSG = async (event) =>{
		event.preventDefault();
		props.dispatch(sendMSGActionCreator());
	}
	const updateMSGText = (text) => {
		props.dispatch(updateMSGTextActionCreator(text));
	}
	return (
		<Messages sendMSG={sendMSG} updateMSGText={updateMSGText} data={props.data}/>
	);
}

export default MessagesContainer;