import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'

const App = () => {
	return (
	<div className="wrapper">
		<Header/>
		<Navbar/>
		<Aside/>
	</div>
);
}
export default App;
