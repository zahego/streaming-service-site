import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TestImg from '../../dev-res/Test.jpg'

import "./ItemCard.scss"

class ItemCard extends Component {
    ratingRender = (type) => {
        if(type==="Movie"||type==="TV") {
            return (<span>4.5</span>)
        }
    }

    contentRender = (type) => {
        if(type==="Movie"||type==="TV") {
            return (
                <div>
                    <h3>Item Title</h3>
                    <p>Item Genres</p>
                </div> 
            )
        } else {
            return (
                <div>
                    <h3>People Name</h3>
                </div>
            )
        }
    }

    render() {
        var type = this.props.type
        return (
            <div className="item-card">
                <div className="image-container">
                    <img src={TestImg} alt="Test"/>
                    {this.ratingRender(type)}
                </div>
                {this.contentRender(type)}
            </div>
        )
    }
}

ItemCard.defaultProps = {
    type: "Movie"
};

ItemCard.propTypes = {
    type: PropTypes.oneOf(["Movie", "TV", "People"]).isRequired
}

export default ItemCard