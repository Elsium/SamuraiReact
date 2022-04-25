import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/pages/Profile/Profile';
import Headerline from './components/Headerline/Headerline';
import Messages from './components/pages/Messages/Messages'

const App = (props) => {
	return (
	<div className="wrapper">
		<Headerline/>
		<Header/>
		<Navbar msg='0'/>
		<div className="wrapper_content">
			{/*<Profile/>*/}
			<Messages/>
		</div>
	</div>
);
}
export default App;
