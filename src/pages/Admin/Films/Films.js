import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input } from 'antd';
import { AudioOutlined, EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';
import { layDanhSachPhimAction, xoaPhimAction } from '../../../redux/actions/QuanlyPhimAction';
import { history } from '../../../App';

const { Search } = Input;


const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
}

export default function Films(props) {

    const { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [dispatch])

    const onSearch = value => {
        // console.log(value)
        dispatch(layDanhSachPhimAction(value));
    };

    const data = arrFilmDefault;

    const columns = [
        {
            title: '#',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: '10%',
            key: 1
        },
        {
            title: 'Image',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <Fragment key={index}>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/50" }} />
                </Fragment>
            },
            width: '10%',
            key: 2
        },
        {
            title: 'Title',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            with: '20%',
            key: 3
        }, {
            title: 'Description',
            dataIndex: 'moTa',
            render: (text, film, index) => {
                return <Fragment key={index}>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                </Fragment>
            },
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '40%',
            key: 4
        },
        {
            title: 'Actions',
            dataIndex: 'hanhDong',
            render: (text, film, index) => {
                return <Fragment key={index}>
                    <NavLink className="mr-2 text-2xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined /></NavLink>
                    <span className="mr-2 text-2xl text-red-500" style={{ cursor: 'pointer' }} onClick={() => {
                        if (window.confirm('Bạn có muốn xoá phim ' + film.tenPhim)) {
                            // console.log(film.maPhim)
                            xoaPhimAction(film.maPhim);
                        }
                        dispatch(layDanhSachPhimAction());
                    }}><DeleteOutlined /></span>
                    <NavLink className="mr-2 text-2xl text-green-500" to={`/admin/films/showtime/${film.maPhim}`} onClick={() => {
                        localStorage.setItem('filmParams', JSON.stringify(film))
                    }}><CalendarOutlined /></NavLink>

                </Fragment>
            },
            width: '20%',
            align: 'center',
            key: 5
        },
    ];



    return (
        <div className="col-span-full xl:col-span-6">
            <header className="flex justify-between px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800 text-xl">Movie Management</h2>
                <div className="flex items-center">
                    <Search placeholder="Search movie" size="large" allowClear="true" onSearch={onSearch} style={{ width: 200, outline: 'none' }} />
                    <button className="ml-2 inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500" onClick={() => {
                        history.push('/admin/addfilm');
                    }}>
                        <svg className="mr-1 w-3 h-3 fill-current flex-shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        Add film
                    </button>
                </div>
            </header>
            <div className="p-3 w-full">
                <Table columns={columns} dataSource={data} onChange={onChange} rowKey={uniqueId} />
            </div>
        </div>
    )
}