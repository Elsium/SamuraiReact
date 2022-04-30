import React from 'react';
import {Link} from 'react-router-dom';
import style from './Messages.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MSGItem from './MSGItem/MSGItem';

const Messages = (props) => {
	
	return (
		<div className={style.content}>
			<div className={style.dialogs}>
				{props.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)}
			</div>
			<div className={style.dialogPlace}>
				<div className={style.dialog}>
					{props.msgData.map(item => <MSGItem avatar={item.avatar} msg={item.msg} sender={item.sender}/>)}
				</div>
				<div className={style.send}>
					<form action="#">
						<input type="text" name="" id="" placeholder="type msg..."/>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Messages;