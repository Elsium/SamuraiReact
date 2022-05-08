import React from 'react';
import style from './Messages.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MSGItem from './MSGItem/MSGItem';
import {sendMSGActionCreator, updateMSGTextActionCreator} from "../../../Redux/dialogsReducer";

const Messages = (props) => {
	let newMSGElem = React.createRef();
	
	const sendMSG = async (event) =>{
		event.preventDefault();
		props.dispatch(sendMSGActionCreator());
	}
	const updateMSGText = () => {
		let text = newMSGElem.current.value;
		props.dispatch(updateMSGTextActionCreator(text));
	}
	return (
		<div className={style.content}>
			<div className={style.dialogs}>
				{props.data.dialogsData.map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>)}
			</div>
			<div className={style.dialogPlace}>
				<div className={style.dialog}>
					{props.data.msgData.map(item => <MSGItem key={item.id} avatar={item.avatar} msg={item.msg} sender={item.sender}/>)}
				</div>
				<div className={style.send}>
					<form>
						<textarea ref={newMSGElem} onChange={updateMSGText} value={props.data.curmsg} placeholder="type msg..."/>
						<button onClick={sendMSG} >Send</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Messages;