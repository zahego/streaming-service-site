import React, { Component } from 'react'
import HomeHeader from '../HomeHeader/HomeHeader'
import ItemCard from '../ItemCard/ItemCard'
import ItemCarousel from '../ItemCarousel/ItemCarousel'

import "./Home.scss"

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <HomeHeader></HomeHeader>
                <div id="home-content">
                    <p>This is home content section</p>
                    <ItemCard type="People"></ItemCard>
                    <ItemCard type="Movie"></ItemCard>
                    <ItemCarousel></ItemCarousel>
                </div>
            </div>
        )
    }
}

export default Home