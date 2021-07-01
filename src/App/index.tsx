import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';

const App = (): ReactElement => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
