import React from 'react';
import {Link} from 'react-router-dom';
import style from './Messages.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MSGItem from './MSGItem/MSGItem';

const Messages = (props) => {
	
	let dialogsData = [
		{id: 1, name: 'Denis'},
		{id: 2, name: 'Stepa'},
		{id: 3, name: 'Dima'}
	];
	let msgData = [
		{
			id: 1,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "Hi hi!",
			sender: "1"
		},
		{
			id: 2,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "Hey",
			sender: ""
		},
		{
			id: 3,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "What`s up?",
			sender: "1"
		},
		{
			id: 4,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "Fine ^^",
			sender: ""
		},
		{
			id: 5,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "And u?",
			sender: ""
		},
		{
			id: 6,
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			msg: "Its hard",
			sender: "1"
		},
		{
			id: 6,
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			msg: "oh",
			sender: ""
		}
	]
	
	return (
		<div className={style.content}>
			<div className={style.dialogs}>
				{ dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>) }
			</div>
			<div className={style.dialogPlace}>
				<div className={style.dialog}>
					{ msgData.map(item => <MSGItem avatar={item.avatar} msg={item.msg} sender={item.sender}/>) }
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