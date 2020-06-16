import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from 'swiper';
import HomeHeader from '../HomeHeader/HomeHeader'
import ItemCarousel from '../ItemCarousel/ItemCarousel'
import postMoviesUpcoming from '../../actions/movieActions/postMoviesUpcoming';
import setItemType from '../../actions/setItemType'

import "./Home.scss"

class Home extends Component {
    componentDidMount() {
        this.props.postMoviesUpcoming(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiKey}&language=en-US&page=1`)
    }
    render() {
        (() => {
            const sliderEl = document.querySelectorAll('.swiper-container');
             if(!sliderEl){
               return;
            }
            // eslint-disable-next-line
            const mySwiper = new Swiper (sliderEl, {
                init: true,
                slidesPerView: 6,
                loop: true,
                spaceBetween: 10,
                autoplay: { delay: 5000 },
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
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
            })
        })()

        return (
            <div id="Home">
                <HomeHeader></HomeHeader>
                <div id="home-content">
                    <p>This is home content section</p>
                    <ItemCarousel items={this.props.moviesUpcoming.results} type={this.props.itemType}></ItemCarousel>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apiKey: state.postTMDBConfig.apiKey,
    itemType: state.setItemType.itemType,
    moviesUpcoming: state.postMoviesUpcoming
})
  
const mapDispatchToProps = dispatch => ({
    setItemType: type => dispatch(setItemType(type)),
    postMoviesUpcoming: url => dispatch(postMoviesUpcoming(url))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)