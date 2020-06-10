import React, { Component } from 'react'
import HomeHeader from '../HomeHeader/HomeHeader'
import MovieCard from '../MovieCard/MovieCard'
import ItemCarousel from '../ItemCarousel/ItemCarousel'

class Home extends Component {
    render() {
        return (
            <div id="Home">
                <HomeHeader></HomeHeader>
                <p>This is home content section</p>
                <MovieCard></MovieCard>
                <ItemCarousel></ItemCarousel>
            </div>
        )
    }
}

export default Home