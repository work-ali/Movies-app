import React from 'react'
import SlickSlider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
};

const Slider = ({ children, ...props }) => {
    return (
        <SlickSlider {...settings} {...props}>
            {children}
        </SlickSlider>
    )
}

export default Slider