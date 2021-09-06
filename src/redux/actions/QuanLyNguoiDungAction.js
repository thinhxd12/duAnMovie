import { http, TOKEN_CYBERSOFT } from "../../util/setting";
import axios from "axios";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: thongTinDangNhap,
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      });

      if(result.data.statusCode === 200) {
          dispatch({
              type: DANG_NHAP_ACTION,
              thongTinDangNhap: result.data.content
          })
      }
      console.log("result", result);
    } catch (error) {
      alert("Tài khoản không tồn tại!");
      console.log("error", error.response?.data);
    }
  };
};
