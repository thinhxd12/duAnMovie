import React, { useEffect, useState } from 'react'
import { Form, Button, DatePicker, InputNumber } from 'antd';

import { Select } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';

import * as Yup from 'yup'
import { taoLichChieuAction } from '../../../../redux/actions/QuanLyDatVeAction';
import { http } from '../../../../util/setting';


export default function ShowTime(props) {

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        validationSchema: Yup.object({
            giaVe: Yup.number().required('Giá vé không được bỏ trống!').min(75000, 'Giá vé từ 75000 đến 200000!').max(200000, 'Giá vé từ 75000 đến 200000!')
        }),
        onSubmit: (values) => {
            console.log('values', values)
            taoLichChieuAction(values)
        }
    })

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    });

    useEffect(async () => {
        try {
            let result = await http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
            setState({
                ...state, heThongRapChieu: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleChangeHeThongRap = async (value) => {
        try {
            let result = await http.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`);
            setState({
                ...state, cumRapChieu: result.data.content
            })
        } catch (error) {
            console.log(error)
        }

    }

    const handleChangeCumRap = value => {
        formik.setFieldValue('maRap', value)
    }

    const handleChangeDatePicker = (date, dateString) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(date).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onOk = () => {

    }

    const handleChangeInputNumber = value => {
        formik.setFieldValue('giaVe', value)
    }

    let film = {};
    if (localStorage.getItem('filmParams')) {
        film = JSON.parse(localStorage.getItem('filmParams'))
    }

    return (
        <div>
            <h3 className="text-2xl mb-4 ml-16">Tạo lịch chiếu - {film.tenPhim}</h3>
            <div className="flex">
                <img src={film.hinhAnh} alt="..." width={200} className="w-1/4" />
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                    onSubmitCapture={formik.handleSubmit}
                    className="w-3/4"
                >

                    <Form.Item label="Hệ thống rạp:">
                        <Select options={state.heThongRapChieu?.map((item, index) => ({ label: item.tenHeThongRap, value: item.maHeThongRap }))} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                    </Form.Item>
                    <Form.Item label="Cụm rạp:">
                        <Select options={state.cumRapChieu.map((item, index) => ({ label: item.tenCumRap, value: item.maCumRap }))} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />
                    </Form.Item>
                    <Form.Item label="Ngày chiếu giờ chiếu:">
                        <DatePicker showTime onChange={handleChangeDatePicker} onOk={onOk} />
                    </Form.Item>
                    <Form.Item label="Giá vé:">
                        <InputNumber name="giaVe" onChange={handleChangeInputNumber} />
                        {formik.touched.giaVe && formik.errors.giaVe ? (
                            <div className="text-red-500">{formik.errors.giaVe}</div>
                        ) : null}
                    </Form.Item>
                    <Form.Item label="Chức năng:">
                        <Button type="primary" htmlType="submit">
                            Tạo lịch chiếu
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}
