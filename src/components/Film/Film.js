import React from "react";
import { history } from '../../App'
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { SET_VIDEO_MODAL } from "../../redux/types/MovieType";
import { NavLink } from "react-router-dom";


export default function Film(props) {
  const { item } = props;
  let stars = Number(item.danhGia) / 2;
  const dispatch = useDispatch();


  return (

    // <div className="max-w-sm rounded p-2 overflow-hidden cursor-pointer bg-gradient-to-br from-white to-gray-200" style={{ width: '235px', height: '440px', }} >
<div className="rounded m-2 p-2 overflow-hidden cursor-pointer bg-gradient-to-br from-white to-gray-200" >


      <div className="h-60 lg:h-72 mx-auto rounded relative cursor-pointer" style={{
        
        backgroundImage: `url(${item.hinhAnh})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
        <div className="film-point absolute top-1 right-1">
          {item.danhGia}
          <Rate disabled allowHalf="true" defaultValue={stars} style={{ fontSize: 8, }} />
        </div>

        <div className="rounded opacity-0 hover:opacity-100 transition-all duration-200 flex items-center justify-center" style={{
          position: 'relative',
          top: '0',
          zIndex: '0',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top,#000,transparent 100%)',
        }} onClick={() => {
          dispatch({
            type: SET_VIDEO_MODAL,
            isOpenModal: true,
            modalTrailer: item.trailer
          })
        }}>

          <button className="hover:opacity-70 absolute z-50">
            <img src="./img/play-video.png" alt="..." width={50} height={50} />
          </button>

        </div>

      </div>
      <div className="px-4 py-2 h-28" onClick={() => {
        history.push(`/detail/${item.maPhim}`)
      }}>
        <NavLink to={`/detail/${item.maPhim}`} className="font-bold text-sm capitalize h-12 line-clamp-2 mb-2 hover:text-black">
          <span className="bg-red-500 text-white leading-7 px-2 py-1 rounded-md mr-2">C18</span>
          {item.tenPhim}
        </NavLink>
        <p className="text-gray-700 text-xs line-clamp-2">
          {item.moTa}
        </p>
      </div>
    </div>

  );
}
