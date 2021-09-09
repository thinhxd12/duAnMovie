import { http } from "../../util/setting";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);

      if(result.data.statusCode === 200) {
          dispatch({
              type: DANG_NHAP_ACTION,
              thongTinDangNhap: result.data.content
          })
      }
      console.log("result", result);
    } catch (error) {
      alert("Tài khoản không tồn tại!");
      console.log("error", error.response.data);
    }
  };
};
