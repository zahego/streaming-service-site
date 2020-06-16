import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import { postTMDBConfig } from './actions/postTMDBConfigAction'

import MainNav from './components/MainNav/MainNav'
import Home from './components/Home/Home'
import Discover from './components/Discover/Discover'
import UserProfile from './components/UserProfile/UserProfile'
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  componentDidMount() {
    this.props.postTMDBConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
  }
  render(){
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
    )
  }
}

const mapStateToProps = state => ({
  apiKey: state.postTMDBConfig.apiKey
});

const mapDispatcherToProps = dispatch => ({
  postTMDBConfig: url => dispatch(postTMDBConfig(url))
});

export default connect(mapStateToProps, mapDispatcherToProps)(App);
