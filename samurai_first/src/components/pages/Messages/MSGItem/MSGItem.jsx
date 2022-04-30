import React from 'react';
import {Link} from 'react-router-dom';
import style from './MSGItem.module.scss';


const MSGItem = (props) => {
	let msgStyle = style.item;
	if (props.sender > 0) msgStyle += " " + style.msgFrom;
	else msgStyle += " " + style.msgTo;
	
	return (
		<div className={style.msg}>
			<div className={msgStyle}>
				<img src={props.avatar} alt=""/>
				<p>{props.msg}</p>
			</div>
		</div>
	);
}

export default MSGItem;