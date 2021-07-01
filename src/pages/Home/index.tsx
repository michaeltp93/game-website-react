import React, { ReactElement } from 'react';
import Games from 'containers/Games';
import withErrorBoundary from 'hoc/withErrorBoundary';

const Home = (): ReactElement => (
	<main>
		<Games />
	</main>
);

export default withErrorBoundary(Home);
