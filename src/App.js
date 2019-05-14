import React from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';
function App() {
	return (
		<HashRouter>
			<div>
				<NavBar />
				{routes}
			</div>
		</HashRouter>
	);
}

export default App;
