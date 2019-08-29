import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';

const Router = () => (
	<HashRouter>
		<Switch>
			<Route path="/" component={HomePage}></Route>
		</Switch>
	</HashRouter>
);

export default Router;