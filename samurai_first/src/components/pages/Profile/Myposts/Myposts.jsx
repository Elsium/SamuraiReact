import React from 'react';
import style from './Myposts.module.scss'
import Post from './Post/Post'

const Myposts = (props) => {
	let postsData = [
		{
			id: 1,
			username: "Elsium",
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			text: "Heeey! brroooo!",
			like: "3",
		},
		{
			id: 2,
			username: "Kivorob",
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			text: "Heeey! man!",
			like: "7",
		},
		{
			id: 3,
			username: "Stepash",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BgREGwGBtdG9th6TjSLJu4PA7FaRkqfI2A&usqp=CAU",
			text: "Heeey! bro-man-MC!",
			like: "4",
		},
		{
			id: 4,
			username: "Kivorob",
			avatar: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
			text: "DUDEEEEE...",
			like: "1",
		},
		{
			id: 5,
			username: "Elsium",
			avatar: "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg",
			text: "mmmmmm",
			like: "3",
		},
	]
	
	return (
		<div className={style.posts}>
			{postsData.map(item => <Post username={item.username} avatar={item.avatar} text={item.text} like={item.like}/>)}
		</div>
	);
}
export default Myposts;