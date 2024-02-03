// App.js

import React from 'react';
import UserList from './UserList';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
