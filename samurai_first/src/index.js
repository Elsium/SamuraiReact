import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import postsData from './Data/postsData.json'
import dialogsData from './Data/dialogsData.json'
import msgData from './Data/msgData.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App postsData={postsData} dialogsData={dialogsData} msgData={msgData}/>
	</React.StrictMode>
);
reportWebVitals();
