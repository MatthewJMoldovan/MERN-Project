import { CreateUser } from './views/CreateOne';
import { AllUsers } from './views/ViewAll';
import { Workout } from './views/ViewWorkout';
import { Home } from './views/Main';
import { OneUser } from './views/ViewOne';

import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="Container" style={{ fontFamily: 'optima, sans-serif' }}>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top justify-content-between mb-4 px-4 rounded border"
        style={{ backgroundColor: 'white' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="./FitnessLogo.png"
            alt="logo"
            className="d-inline-block align-text-top"
            style={{ height: '50px' }}
          />
          <h1 className="navbar-brand mb-0 fs-1 ms-2">WorkoutWiz</h1>
        </div>
        <div className="navbar-nav">
          <Link to="/user/new" className="nav-link mx-1">
            Add Client
          </Link>
          <Link to="/user/all" className="nav-link mx-1">
            Your Clients
          </Link>
          <Link to="/" className="nav-link mx-1">
            Home
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/all" element={<AllUsers />} />
        <Route path="/user/new" element={<CreateUser />} />
        <Route path="/user/:id" element={<OneUser />} />
        <Route path="/user/:id/workout" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default App;
