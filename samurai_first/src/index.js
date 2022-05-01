import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import {addPost} from './Redux/state'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App postsData={state.profilePage.postsData} dialogsData={state.dialogsPage.dialogsData} msgData={state.dialogsPage.msgData} addPost={addPost}/>
	</React.StrictMode>
);
reportWebVitals();
