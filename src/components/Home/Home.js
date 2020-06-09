import React, { Component } from 'react'
import HomeHeader from '../HomeHeader/HomeHeader'

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <HomeHeader></HomeHeader>
                <p>This is home content section</p>
            </div>
        )
    }
}

export default Home