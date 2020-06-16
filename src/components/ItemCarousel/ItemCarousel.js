import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemCard from '../ItemCard/ItemCard'
import PropTypes from 'prop-types';
import backup from './image-not-available.jpg'

import './ItemCarousel.scss';

class ItemCarousel extends Component {
  imageRender = (type, item, config) => {
    let path
    if(type==="Movie"||type==="TV") {
        path = item.poster_path ? item.poster_path: ''
    } else {
        path = item.profile_path ? item.profile_path: ''
    }
    return config.images ? `${config.images.secure_base_url}${config.images.poster_sizes[1]}${path}` : backup
  }

  render() {
    return (
      <div className="swiper-container">
          <div className="swiper-wrapper">
            {this.props.items.map((item, index) => (
              <div key={item.id} className="swiper-slide"><ItemCard item={item} type={this.props.type} imgSrc={this.imageRender(this.props.type, item, this.props.MDBConfig)}></ItemCard></div>
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
      </div>
    )
  }  
}

ItemCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["Movie", "TV", "People"]).isRequired,
}

const mapStateToProps = state => ({
  MDBConfig: state.postTMDBConfig
})

export default connect(mapStateToProps)(ItemCarousel)
