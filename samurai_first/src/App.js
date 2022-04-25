import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/pages/Profile/Profile';
import Headerline from './components/Headerline/Headerline';
import Dialogs from './components/pages/Dialogs/Dialogs'

const App = (props) => {
	return (
	<div className="wrapper">
		<Headerline/>
		<Header/>
		<Navbar msg='0'/>
		<div className="wrapper_content">
			{/*<Profile/>*/}
			<Dialogs/>
		</div>
	</div>
);
}
export default App;
