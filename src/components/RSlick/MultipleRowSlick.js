import React from 'react'
import Slider from "react-slick";
import Film from '../../pages/Home/HomeMenu/Film';


export default function MultipleRowSlick(props) {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='slick__next__arrow'
        onClick={onClick}
        style={{ transform: 'translateX(100%)' }}
      />
    );
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='slick__prev__arrow'
        onClick={onClick}
        style={{ transform: 'translateX(-100%)' }}
      />
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };



  return (
    <div className="w-3/4 mx-auto">
      <Slider {...settings}>
        {props.arrFilm.map((item, index) => {
          return <Film item={item} key={index} />
        })}
      </Slider>
    </div>
  )
}

