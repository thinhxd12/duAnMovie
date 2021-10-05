import React, { useEffect, useState } from 'react'
import './HomeMenu.css'
import { useDispatch, useSelector } from 'react-redux';

import MultipleRowSlick from '../../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanlyPhimAction';
import { SET_PHIM_DANG_CHIEU, SET_PHIM_HOT, SET_PHIM_SAP_CHIEU, SET_VIDEO_MODAL } from '../../../redux/types/MovieType';


import ModalVideo from 'react-modal-video'


export default function HomeMenu(props) {
    const { arrFilm, isOpenModal, modalTrailer } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, []);


    return (
        <div className="container mt-2">
            <div class="btn-container">
                <button class="glass-btn" onClick={() => {
                    dispatch({ type: SET_PHIM_DANG_CHIEU })
                }}><span>Phim đang chiếu</span></button>
                <button class="glass-btn" onClick={() => {
                    dispatch({ type: SET_PHIM_SAP_CHIEU })
                }}><span>Phim sắp chiếu</span></button>
                <button class="glass-btn" onClick={() => {
                    dispatch({ type: SET_PHIM_HOT })
                }}><span>Phim hot</span></button>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpenModal} videoId={modalTrailer} onClose={() => {
                dispatch({
                    type: SET_VIDEO_MODAL,
                    isOpenModal: false
                })
            }} />
            <MultipleRowSlick arrFilm={arrFilm} />
        </div>
    )
}
