import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/pages/Profile/Profile';
import Headerline from './components/Headerline/Headerline';
import Music from './components/pages/Music/Music';
import News from './components/pages/News/News';
import Settings from './components/pages/Settings/Settings';
import MessagesContainer from "./components/pages/Messages/MessagesContainer";

const App = () => {
	return (
			<div className="wrapper">
				<Headerline/>
				<Header/>
				<Navbar msg='0'/>
				<div className="wrapper_content">
					<Routes>
						<Route path={`/profile`} element={<Profile/>}/>
						<Route path={`/news`} element={<News/>}/>
						<Route path={`/messages/*`} element={<MessagesContainer/>}/>
						<Route path={`/music`} element={<Music/>}/>
						<Route path={`/settings`} element={<Settings/>}/>
					</Routes>
				</div>
			</div>
	);
}
export default App;
