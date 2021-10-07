import React, {  useEffect } from 'react'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { layThongTinLichChieuHeThongRapAction } from '../../../redux/actions/QuanLyRapAction';
import { history } from '../../../App';

export default function Cinema(props) {
    const { TabPane } = Tabs;
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layThongTinLichChieuHeThongRapAction());
    }, [])
    
    return (
        <div className="container w-3/4" style={{ height: '700px'}}>
            <Tabs tabPosition="left">
                {heThongRapChieu.map((heThongRapChieu, index) => {
                    return <TabPane key={index} tab={<img src={heThongRapChieu.logo} alt={heThongRapChieu.maHeThongRap} className="rounded-full" width={50} />}>
                        <Tabs tabPosition="left">

                            {heThongRapChieu.lstCumRap.slice(0,6).map((cumRap, index) => {
                                return <TabPane key={cumRap.maCumRap} tab={
                                    <div className="flex items-center">
                                        <img src={cumRap.hinhAnh} alt={cumRap.tenCumRap} style={{ width: '50px', height: '50px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/50" }} />
                                        <div className="ml-2 text-left">
                                            <p className="text-gray-800 text-base">{cumRap.tenCumRap}</p>
                                            <p className="text-gray-500 text-sm">{cumRap.diaChi.length > 50 ? cumRap.diaChi.substr(0, 50) + '...' : cumRap.diaChi}</p>
                                            <a href="/" className="text-red-500 text-sm">[chi tiết]</a>
                                        </div>
                                    </div>}>

                                    <div style={{ height: '600px', overflow: 'auto' }}>
                                        {cumRap.danhSachPhim.map((phim) => {
                                            return <div className="m-2 flex" key={phim.tenPhim}>
                                                <img src={phim.hinhAnh} alt={phim.tenPhim} style={{width:'50px',height:'70px'}} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75" }} />
                                                <div className="ml-2">
                                                    <h4 className="text-xl text-green-700 pb-1 cursor-pointer" onClick={()=>{
                                                        history.push(`/detail/${phim.maPhim}`)
                                                    }}>{phim.tenPhim}</h4>
                                                    <p className="font-semibold text-sm">{cumRap.diaChi}</p>
                                                    <div className="grid grid-cols-6 gap-6">
                                                        {phim.lstLichChieuTheoPhim.slice(0, 12).map((lichChieu, index2) => {
                                                            return <NavLink key={index2} className="text-sm text-green-400" to={`/checkout/${lichChieu.maLichChieu}`}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </TabPane>
                            })}
                        </Tabs>
                    </TabPane>
                })}
            </Tabs>
        </div >
    )
}
