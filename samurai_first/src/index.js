import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import store from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerender = () => {
	root.render(
		<React.StrictMode>
			<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
		</React.StrictMode>
	);
}
store.subscribe(rerender);
rerender();
