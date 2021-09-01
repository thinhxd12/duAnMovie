import axios from "axios"
import { http } from "../../util/settings"





//closure function : connect()()

export const layDanhSachPhimAction = (maNhom='GP01') => {
    return (dispatch2) => {

        let promise = http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
        // let promise = axios({
        //     url: `http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        //     method: 'GET',
        //     headers: {
        //         "TokenCybersoft": TOKEN_CYBERSOFT
        //     }
        // })
        promise.then(result => {
            console.log('result',result);
            console.log('result', result.data)
            //Sau khi call api thành công lấy dữ liệu api set vào state mangPhim
            dispatch2({
                type: 'LAY_DANH_SACH_PHIM',
                mangPhim: result.data.content
            })
        })
        promise.catch(error => {
            console.log('error',{error})
            // console.log('error', error.response.data)
        })
    }

}


