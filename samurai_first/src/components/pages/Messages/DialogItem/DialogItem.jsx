import React from 'react';
import {Link} from 'react-router-dom';
import style from './DialogItem.module.scss';

const DialogItem = (props) => {
	let id = "/messages/" + props.id;
	
	return (
		<div className={style.item}>
			<Link to={id}>
				<div>
					<p className={style.title}>{props.name}</p>
					<p className={style.last}>Last msg</p>
				</div>
				<div>
					<span className={style.new}>·</span>
				</div>
			</Link>
		</div>
	);
}

export default DialogItem;