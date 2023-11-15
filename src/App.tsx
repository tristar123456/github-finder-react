import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './components/layout/Navbar';
import {Footer} from './components/layout/Footer';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';
import {Alert} from './components/layout/Alert';
import {User} from './pages/User';

function App() {
	return (
		<AlertProvider>
			<GithubProvider>
				<BrowserRouter>
					<div className="flex flex-col justify-between h-screen">
						<Navbar/>

						<main className="container mx-auto px-3 pb-12">
							<Alert />
							<Routes>
								<Route path="/" Component={Home}/>
								<Route path="/about" Component={About}/>
								<Route path="/notfound" Component={NotFound}/>
								<Route path="/user/:login" Component={User}/>
								<Route path="/*" Component={NotFound}/>
							</Routes>
						</main>

						<Footer/>
					</div>
				</BrowserRouter>
			</GithubProvider>
		</AlertProvider>
	);
}

export default App;
