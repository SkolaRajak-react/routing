import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import UsersPage from './pages/Users'
import Navbar from './components/Navbar'
import UserLayout from './layouts/UserLayout'
import PrivateRoute from './privateRoute'
import ProductList from './pages/Products'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path='/' render={() => <HomePage hasError={false}/>} />
        <PrivateRoute exact path='/users' RenderComponent={UsersPage} />
        <Route path='/users/:id' component={UsersPage} />
        <Route path='/nestedUsers/:id' component={UserLayout} />
        <Route path='/products' component={ProductList} />
      </Router>
    </div>
  );
}

export default App;
