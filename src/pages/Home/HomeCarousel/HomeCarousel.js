import React, { Component } from "react";
import Slider from "react-slick";



export default function HomeCarousel(props) {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={'slick-next-arrow '}
                onClick={onClick}
            />
        );
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={'slick-prev-arrow'}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="container">
            <Slider {...settings}>
                <div>
                    <img src="https://picsum.photos/id/1/500/200" className="w-full" alt="..." />
                </div>
                <div>
                    <img src="https://picsum.photos/id/2/500/200" className="w-full" alt="..." />
                </div>

                <div>
                    <img src="https://picsum.photos/id/3/500/200" className="w-full" alt="..." />
                </div>

                <div>
                    <img src="https://picsum.photos/id/4/500/200" className="w-full" alt="..." />
                </div>


            </Slider>
        </div>

    )
}
