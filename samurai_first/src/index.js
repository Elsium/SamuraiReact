import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
		text: "Привет",
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App postsData={postsData} dialogsData={dialogsData} msgData={msgData}/>
	</React.StrictMode>
);
reportWebVitals();
