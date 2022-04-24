import React from 'react';
import './Aside.css'

const Aside = () => {
	return (
		<main className="content">
			<div className="content__banner">
				<img src="https://shapka-youtube.ru/wp-content/uploads/2020/10/exotanks.jpg" alt=""/>
			</div>
			<div className="content__avadesc">
				ava + description
			</div>
			<div className="content__newpost">
				new post
			</div>
			<div className="content__posts">
				<div className="posts__post">
					post
				</div>
			</div>
		</main>
	);
}
export default Aside;