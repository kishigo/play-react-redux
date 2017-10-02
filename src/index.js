import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore, {history} from './store';
import { ConnectedRouter } from 'react-router-redux'

const target = document.querySelector('#root');
let store = configureStore();

let testRoute = true;
if (testRoute) {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<App />
				</div>
			</ConnectedRouter>
		</Provider>,
		target
	);
}
else {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
			<App />
			</ConnectedRouter>
		</Provider>,
		target
	);
}


registerServiceWorker();
