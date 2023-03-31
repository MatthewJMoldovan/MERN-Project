import { CreateUser } from './views/CreateOne';
import { AllUsers } from './views/ViewAll';
import { Workout } from './views/ViewWorkout';
import { Home } from './views/Main';
import { OneUser } from './views/ViewOne';

import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="Container">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top justify-content-between mb-4 px-4 rounded border border-2">
        <h1 className="navbar-brand mb-0 fs-1">Welcome</h1>
        <div className="navbar-nav">
          <Link to="/user/new" className="btn btn-success mx-1">
            Add a client
          </Link>
          <Link to="/user/all" className="btn btn-primary mx-1">
            Your Clients
          </Link>
          <Link to="/" className="btn btn-primary mx-1">
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
