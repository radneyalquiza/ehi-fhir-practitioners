import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProfileDetail } from './features/profile/profile-detail/ProfileDetail';
import { Profile } from './features/profile/Profile';

function App() {
  return (
		<BrowserRouter>
			<div className="App">
				<header>
					<h2>Practitioners</h2>
				</header>
				<div className="main-sections">
					<Switch>
						<Route path="/" exact component={Profile} />
						<Route
							path="/profile"
							render={(props: any) => {
								return <ProfileDetail {...props} />;
							}}
						/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
  );
}

export default App;
