import { GROUP_ID, http } from "../../util/setting";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/MovieType";

export const layDanhSachPhimAction = () => {
    return async (dispatch2) => {
        try {
            const result = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
            dispatch2({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (error) {
            console.log('error', error)
        }

    }
}


export const ThemPhimAction = (frmData) => {
    try {
        const result = http.post('/api/QuanLyPhim/ThemPhimUploadHinh', frmData)
        console.log(result.data)
    } catch (error) {
        console.log(error.response?.data.content)
    }
}


export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch2) => {
        try {
            const result = await http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
            console.log(result.data)
            dispatch2({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content
            })
        } catch (error) {
            console.log(error.response?.data.content)
        }

    }
}