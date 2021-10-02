import { http } from "../../util/setting";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
import {history} from "../../App";
import { notificationFunction } from "../../templates/Notification/Notification";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);

      if(result.data.statusCode === 200) {
          dispatch({
              type: DANG_NHAP_ACTION,
              thongTinDangNhap: result.data.content
          });
          //Chuyển hướng đăng nhập về trang trước đó
          history.goBack()
      }
      console.log("result", result);
    } catch (error) {
      alert("Tài khoản không tồn tại!");
      console.log("error", error.response.data);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);

      if(result.data.statusCode === 200) {
          dispatch({
              type: SET_THONG_TIN_NGUOI_DUNG,
              thongTinNguoiDung: result.data.content
          });
      }
      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const dangKyNguoiDungAction = (formDangKy) => {
  return async(dispatch) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/DangKy`,formDangKy);
      console.log({ result });
      notificationFunction("success", "Register is successful");
      history.push("/login");
    } catch (error) {
      notificationFunction("error", "Register is unsuccessful");
      console.log("error", error.response?.data);
    }
  }
}

