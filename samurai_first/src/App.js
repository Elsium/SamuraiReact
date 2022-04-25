import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Headerline from './components/Headerline/Headerline'

const App = (props) => {
	return (
	<div className="wrapper">
		<Headerline/>
		<Header/>
		<Navbar msg='0'/>
		<Profile/>
	</div>
);
}
export default App;
