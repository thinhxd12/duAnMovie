import { http } from "../../util/setting";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
import {history} from "../../App"

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

