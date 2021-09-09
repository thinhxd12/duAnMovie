import { GROUP_ID, http } from "../../util/settings";
import { SET_DANH_SACH_PHIM } from "../types/MovieType";

export const layDanhSachPhimAction =()=>{
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