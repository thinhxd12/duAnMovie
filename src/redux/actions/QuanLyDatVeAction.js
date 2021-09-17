import { httpBearer } from "../../util/setting";

export const taoLichChieuAction = async (thongTinLichChieu) => {
    try {
        const result = await httpBearer.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
        alert(result.data.content)
    } catch (error) {
        console.log( error.response?.data.content);
    }
};