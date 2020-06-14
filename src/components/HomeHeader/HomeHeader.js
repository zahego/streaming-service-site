import React, { Component } from 'react'

import Slider from '../Slider/Slider'
import Images from '../../dev-res/images'

class HomeHeader extends Component {
    render() {
        return (
            <div>
                <Slider images={Images}></Slider>
            </div>
        )
    }
}

export default HomeHeader