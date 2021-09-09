import { http } from "../../util/settings"


export const ThemPhimAction = (frmData) => {
    try {
        const result = http.post('/api/QuanLyPhim/ThemPhimUploadHinh', frmData)
        console.log(result.data)
    } catch (error) {
        console.log(error.response?.data)
    }
}