import React from 'react'
import { useDispatch } from 'react-redux';
import Slider from "react-slick";
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from '../../redux/types/MovieType';
// import Film from '../../pages/Home/HomeMenu/Film';
import Film_Flip from '../Film/Film_Flip';


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

const dispatch = useDispatch();

  return (
    <div className="w-4/5 mx-auto mb-5">
      <Slider {...settings} >
        {props.arrFilm.map((item, index) => {
          return <Film_Flip  item={item} key={index}/>
        })}
      </Slider>
    </div>
  )
}

