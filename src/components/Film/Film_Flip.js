import React from "react";
import "./Film_Flip.css";
import { history } from '../../App'
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { SET_VIDEO_MODAL } from "../../redux/types/MovieType";


export default function Film_Flip(props) {
  const { item } = props;
  let stars = Number(item.danhGia) / 2;
  const dispatch = useDispatch();


  return (
    <div className="card__content">
      <div className="card">
        <div className="card__img"
          style={{
            backgroundImage: `url(${item.hinhAnh})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "240px",
            borderRadius: "18px"
          }}
        >
          <div className="card__info" onClick={() => {
            dispatch({
              type: SET_VIDEO_MODAL,
              isOpenModal: true,
              modalTrailer: item.trailer
            })
          }}>
            <img src="./img/play-video.png" alt="..." width={50} height={50} />
          </div>
        </div>
        <h4 className="card__name">{item.tenPhim.length > 18 ? item.tenPhim.substr(0, 15) + '...' : item.tenPhim}</h4>
        <Rate disabled allowHalf="true" defaultValue={stars} />
        <p className="card__desc">{item.tenPhim.length > 50 ? item.tenPhim.substr(0, 50) + '...' : item.tenPhim}</p>
        <button className="card__btn" onClick={() => {
          history.push(`/detail/${item.maPhim}`)
        }}><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>

  );
}
