import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />

				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/appointments' element={<Appointments />} />
			</Routes>
		</div>
	);
}

export default App;
