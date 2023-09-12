// import logo from './logo.svg';
// import './App.css';
// import Authentication from './firebase/Authentication';
// import ChatComponent from './firebase/Chat';

// function App() {
//   return (
//     <div className="App">
//      <Authentication/>
//      <ChatComponent/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import {Router,Route} from "react-router-dom"
import Login from './dashboard/Login';
import Dashboard from './dashboard/Dashboard';


function App() {
  // Implement user authentication and role handling
  const isAuthenticated = true; // Example: Check if the user is authenticated

  return (
    <Router>
      <div>
  
          <Route path="/login" component={Login} />
          <Route path="/dashboard">
            {isAuthenticated ? <Dashboard /> : <Login />} {/* Redirect to login if not authenticated */}
          </Route>
       
      </div>
    </Router>
    
  );
}

export default App;

