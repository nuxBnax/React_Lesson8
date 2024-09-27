import React from 'react';
import './App.css';
import PublicGists from './PublicGistsEx2'
import GistList from './GistListEx2';

function App() {
	return (
		<div className="App">
			<GistList />
			<PublicGists />
		</div>
	)
}

export default App;