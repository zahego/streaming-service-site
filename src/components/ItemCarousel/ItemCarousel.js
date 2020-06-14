import React, { Component } from 'react';
import ItemCard from '../ItemCard/ItemCard'

import './ItemCarousel.scss';

class ItemCarousel extends Component {
  render() {
    return (
      <div className="swiper-container">
          <div className="swiper-wrapper">
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
              <div className="swiper-slide swiper-lazy"><ItemCard></ItemCard></div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
      </div>
    )
  }  
}

export default ItemCarousel;
