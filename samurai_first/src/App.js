import React, {Component} from 'react';
import './App.css';
import An from './AnyComps'
import Hee from './He'

const App = () => {
	return (
	<div>
		<An />
		<Hee />
		{/*<Headerr />*/}
		{/*<AnyComps />*/}
	</div>
);
}

// const Headerr = () => {
// 	return (
// 		<div>
// 			<a href="#">home </a>
// 			<a href="#">news </a>
// 			<a href="#">mes</a>
// 		</div>
// 	);
// }

// const AnyComps = () => {
// 	return (
// 		<div>
// 			<div>new div</div>
// 			<ul>
// 				<li>asd</li>
// 				<li>saf</li>
// 			</ul>
// 		</div>
// 	);
// }

export default App;
