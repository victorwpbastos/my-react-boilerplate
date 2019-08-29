import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';
import MainLayout from './layouts/Main';

import './assets/styles/styles.scss';

const App = () => (
	<MainLayout>
		<Router />
	</MainLayout>
);

ReactDOM.render(<App />, document.getElementById('root'));