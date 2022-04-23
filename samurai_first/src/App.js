import React, {Component} from 'react';
import './App.css';

const App = () => {
	return (
	<div>
		<Headerr />
		<AnyComps />
	</div>
);
}

const Headerr = () => {
	return (
		<div>
			<a href="#">home </a>
			<a href="#">news </a>
			<a href="#">mes</a>
		</div>
	);
}

const AnyComps = () => {
	return (
		<div>
			<div>new div</div>
			<ul>
				<li>asd</li>
				<li>saf</li>
			</ul>
		</div>
	);
}

export default App;
