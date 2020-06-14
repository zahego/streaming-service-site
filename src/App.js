import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Swiper from 'swiper'

import MainNav from './components/MainNav/MainNav'
import Home from './components/Home/Home'
import Discover from './components/Discover/Discover'
import UserProfile from './components/UserProfile/UserProfile'
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    var mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 6,
        loop: true,
        spaceBetween: 10,
        observer: true,

        breakpoints: {
          1024: {
            slidesPerView: 6
          },
          575: {
            slidesPerView: 4
          },
          375: {
            slidesPerView: 2
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    })
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

export default App
