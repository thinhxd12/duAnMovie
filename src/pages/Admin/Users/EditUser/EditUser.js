import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    Form,
    Input,
    Radio,
    Select,
    Button,
} from 'antd';

import {
    ArrowLeftOutlined
} from '@ant-design/icons';

import { history } from '../../../../App';
import { http } from '../../../../util/setting';
import { capNhatThongTinNguoiDung } from '../../../../redux/actions/QuanLyNguoiDungAction';
import { useSelector } from 'react-redux';


export default function EditUser(prop) {
    const { Option } = Select;

    const [componentSize, setComponentSize] = useState('default');
    const { userModify } = useSelector(state => state.QuanLyNguoiDungReducer)
    const [state, setState] = useState({
        arrLoaiNguoiDung: []
    })

    useEffect(async () => {
        try {
            let result = await http.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
            setState({
                ...state, arrLoaiNguoiDung: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }, [])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userModify.taiKhoan,
            matKhau: userModify.matKhau,
            email: userModify.email,
            soDt: userModify.soDt,
            maNhom: userModify.maNhom,
            maLoaiNguoiDung: userModify.maLoaiNguoiDung,
            hoTen: userModify.hoTen
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6 - 32 ký tự'),
            email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng !'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !').matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/, 'Họ tên không được chứa số !'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống !').matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}$/, 'Số điện thoại phải đúng định dạng!')
        }),
        onSubmit: (values) => {
            console.log({ values })
            capNhatThongTinNguoiDung(values);
        }
    })

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };






    return (
        <div className="container">
            <h3 className="text-3xl mb-3 text-left">Cập nhật thông người dùng</h3>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tài khoản">
                    <Input name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                        <div className="text-red-500">{formik.errors.taiKhoan}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} />
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className="text-red-500">{formik.errors.matKhau}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} />
                    {formik.touched.hoTen && formik.errors.hoTen ? (
                        <div className="text-red-500">{formik.errors.hoTen}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Email">
                    <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500">{formik.errors.email}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input name="soDt" onChange={formik.handleChange} value={formik.values.soDt} />
                    {formik.touched.soDt && formik.errors.soDt ? (
                        <div className="text-red-500">{formik.errors.soDt}</div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Loại người dùng">
                    <Select onChange={(value) => { formik.setFieldValue('maLoaiNguoiDung', value) }} value={formik.values.maLoaiNguoiDung}>
                        {state.arrLoaiNguoiDung.map((item, index) => {
                            return <Option value={item.maLoaiNguoiDung} key={index}>{item.tenLoai}</Option>
                        })}
                    </Select>
                </Form.Item>

                <div className="text-center flex justify-between w-3/4">
                    <Button type="primary" htmlType="button" className="mr-2" onClick={history.goBack}>
                        <ArrowLeftOutlined /> Go back
                    </Button>
                    <Button type="primary" htmlType="submit" className="mr-2">
                        Cập nhật thông tin
                    </Button>
                </div>
            </Form>
        </div>
    )
}