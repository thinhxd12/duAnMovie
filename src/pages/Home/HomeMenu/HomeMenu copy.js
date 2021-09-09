import React, { useEffect } from 'react'
import { Tabs } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachPhimAction } from '../../../redux/actions/LayDanhSachPhimAction';

import MultipleRowSlick from '../../../components/RSlick/MultipleRowSlick';
import { SET_DANH_SACH_PHIM_DANG_CHIEU, SET_DANH_SACH_PHIM_HOT, SET_DANH_SACH_PHIM_SAP_CHIEU } from '../../../redux/types/MovieType';



export default function HomeMenu(props) {
    const { arrFilm } = useSelector(state => state.LayDanhSachPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LayDanhSachPhimAction());
       
    }, [])

    const { TabPane } = Tabs;



    return (
        <div className="container mt-2">
            <Tabs defaultActiveKey="1" onChange={(activeKey) => {
                if (activeKey === "1") {
                    dispatch({
                        type: SET_DANH_SACH_PHIM_DANG_CHIEU,
                    })
                }
                else if (activeKey === "2") {
                    dispatch({
                        type: SET_DANH_SACH_PHIM_SAP_CHIEU,
                    })
                }
                else if (activeKey === "3") {
                    dispatch({
                        type: SET_DANH_SACH_PHIM_HOT,
                    })
                }
            }}>
                <TabPane tab="Phim đang chiếu" key="1">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </TabPane>
                <TabPane tab="Phim sắp chiếu" key="2">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </TabPane>
                <TabPane tab="Phim hot" key="3">
                    <MultipleRowSlick arrFilm={arrFilm} />
                </TabPane>
            </Tabs>

        </div>
    )
}
