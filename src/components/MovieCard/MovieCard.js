import React, { Component } from 'react'

import TestImg from '../../dev-res/test-img.jpg'

import "./MovieCard.scss"

class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card">
                <div>
                    <img src={TestImg} alt="Test"/>
                    <span>4.5</span>
                </div>
                <div>
                    <h3>Movie Title</h3>
                    <p>Movie Genres</p>
                </div>
            </div>
        )
    }
}

export default MovieCard