import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainNav from './components/MainNav/MainNav'
import Home from './components/Home/Home'
import Discover from './components/Discover/Discover'
import UserProfile from './components/UserProfile/UserProfile'
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/profile">
              <UserProfile/>
            </Route>
            <Route path="/discover">
              <Discover/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
