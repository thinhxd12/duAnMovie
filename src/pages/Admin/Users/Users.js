import React, { useEffect } from 'react'
import {  Table } from 'antd';
import { Input } from 'antd';
import { AudioOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';
import { layDanhSachNguoiDungAction, xoaNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction';
import { SET_THONG_TIN_NGUOI_DUNG } from '../../../redux/types/QuanLyNguoiDungType';

const { Search } = Input;


const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
}

export default function Users(props) {

    const { arrUser } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());
    }, [])

    const onSearch = value => {
        // console.log(value)
        dispatch(layDanhSachNguoiDungAction(value));
    };

    let datArrUser = arrUser.map((item, index) => {
        return { ...item, index: index + 1 }
    })

    const data = datArrUser;



    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            width: '5%',
            key: 1,
        },

        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let tenPhimA = a.taiKhoan.toLowerCase().trim();
                let tenPhimB = b.taiKhoan.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            with: '20%',
            key: 2
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            with: '20%',
            key: 2
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let tenPhimA = a.hoTen.toLowerCase().trim();
                let tenPhimB = b.hoTen.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            with: '20%',
            key: 2
        },
        {
            title: 'Email',
            dataIndex: 'email',
            with: '20%',
            key: 2
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            with: '20%',
            key: 2
        },
        {
            title: 'Thao tác',
            dataIndex: 'hanhDong',
            render: (text, record, index) => {
                return <Fragment key={index}>
                    <NavLink className="mr-2 text-2xl" to={`/admin/edituser`} onClick={() => {
                        dispatch({
                            type: SET_THONG_TIN_NGUOI_DUNG,
                            userModify: record
                        })
                    }}><EditOutlined /></NavLink>

                    <span className="mr-2 text-2xl text-red-500" style={{ cursor: 'pointer' }} onClick={() => {
                        if (window.confirm('Bạn có muốn xoá tài khoản ' + record.taiKhoan)) {
                            xoaNguoiDung(record.taiKhoan);
                        }
                        dispatch(layDanhSachNguoiDungAction());
                    }}><CloseOutlined/></span>
                </Fragment>
            },
            width: '10%',
            align: 'center',
            key: 5
        },
    ];



    return (
        <div>
            <h3 className="text-3xl mb-3">Quản lý người dùng</h3>
            <Search
                className="w-50 mb-3 block"
                placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
                enterButton="Tìm"
                size="large"
                onSearch={onSearch}
                allowClear="true"
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={uniqueId} />
        </div>
    )
}