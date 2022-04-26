import React from 'react';
import {Link} from 'react-router-dom';
import style from './Messages.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MSGItem from './MSGItem/MSGItem';

const Messages = (props) => {
	return (
		<div className={style.content}>
			<div className={style.dialogs}>
				<DialogItem name="Denis" id="1"/>
				<DialogItem name="Stepa" id="2"/>
				<DialogItem name="Dima" id="3"/>
			</div>
			<div className={style.dialogPlace}>
				<div className={style.dialog}>
					<MSGItem avatar="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" msg="Hi hi hi hihasod; ifoweh ;vs;f hrodh vposhz ;ogh ;oashf ohasf hsldfhshdg; sh guhsdgh sudgh;uohgs ;ouhg ;usdhg; uoshd;gough;osgh" sender="1"/>
					<MSGItem avatar="https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" msg="Hey"/>
					<MSGItem avatar="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" msg="What`s up?" sender="1"/>
					<MSGItem avatar="https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" msg="Fine ^^"/>
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