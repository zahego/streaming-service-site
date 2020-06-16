import React, { Component } from 'react'
import PropTypes from 'prop-types';

import "./ItemCard.scss"

class ItemCard extends Component {
    ratingRender = (type, item) => {
        if(type==="Movie"||type==="TV") {
            return (
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                {(Math.round(item.vote_average * 100) / 100).toFixed(1)}
            </span>)
        }
    }

    contentRender = (type, item) => {
        if(type==="Movie"||type==="TV") {
            return (
                <div>
                    <h3>{item.title}</h3>
                    <p>Item Genres</p>
                </div> 
            )
        } else {
            return (
                <div>
                    <h3>{item.name}</h3>
                </div>
            )
        }
    }

    altRender = (type, item) => {
        if(type==="Movie"||type==="TV") {
            return item.title
        } else {
            return item.name
        }
    }

    render() {
        const item = this.props.item
        const type = this.props.type
        return (
            <div className="item-card">
                <div className="image-container">
                    <img src={this.props.imgSrc} alt={this.altRender(type, item)}/>
                    {this.ratingRender(type, item)}
                </div>
                {this.contentRender(type, item)}
            </div>
        )
    }
}

ItemCard.defaultProps = {
    type: "Movie"
}

ItemCard.propTypes = {
    type: PropTypes.oneOf(["Movie", "TV", "People"]).isRequired,
    item: PropTypes.object.isRequired,
    imgSrc: PropTypes.string.isRequired
}


export default ItemCard