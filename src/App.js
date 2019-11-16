import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import UsersPage from './pages/Users'
import Navbar from './components/Navbar'
import UserLayout from './layouts/UserLayout'
import PrivateRoute from './privateRoute'

function App() {
  const broj = 20
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path='/' component={HomePage} />
        <PrivateRoute exact path='/users' RenderComponent={UsersPage} />
        <Route path='/users/:id' component={UsersPage} />
        <Route path='/nestedUsers/:id' component={UserLayout} />
      </Router>
    </div>
  );
}

export default App;
