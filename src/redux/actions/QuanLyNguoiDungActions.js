import axios from 'axios'
import { history } from '../../App';
import { ACCESS_TOKEN, http, TOKEN_CYBERSOFT, USER_LOGIN } from '../../util/settings'





export const dangKyAction = (thongTinNguoiDung, history) => {
    // console.log({thongTinNguoiDung})
    // return ;
    //promise sẽ dùng trong tình huống gọi các api không phụ thuộc giá trị nhau
    return (dispatch) => {

        const promise = axios({
            url: `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: thongTinNguoiDung,
            headers: {
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        });


        promise.then(result => {
            console.log({ result })
            //thành công => chuyển hướng trang
            alert('Đăng ký thành công !');
            history.push('/login');
        })



        promise.catch(error => {
            console.log('result', error.response?.data)

            console.log({ error })

        })

    }
}






export const dangKyAsyncAction = (thongTinNguoiDung, history) => {
    // console.log({thongTinNguoiDung})
    // return ;
    //async await dùng khi những api cần thực hiện tuần tự 
    return async (dispatch) => {
        try {
            // const result = await axios({
            //     url: `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            //     method: 'POST',
            //     data: thongTinNguoiDung,
            //     headers: {
            //         'TokenCybersoft': TOKEN_CYBERSOFT
            //     }
            // });
            const result = await http.post(`/api/QuanLyNguoiDung/DangKy`,thongTinNguoiDung)
         
            alert('Đăng ký thành công !');
            history.push('/login');

            
        } catch (error) {
            console.log({error})
        }


    }
}



export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch,getState) => {

        try {
            const result = await axios({
                url:'http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/dangnhap',
                method:'POST',
                data:thongTinDangNhap,
                headers: {
                    'TokenCybersoft': TOKEN_CYBERSOFT
                }
            })

            //Lưu vào localstorage thông tin đăng nhập
            localStorage.setItem(ACCESS_TOKEN,result.data.content.accessToken);

            const sUserLogin = JSON.stringify(result.data.content);

            localStorage.setItem(USER_LOGIN,sUserLogin);
            //Sau khi lưu vào store sẽ đưa dữ liệu lên redux
            dispatch({
                type:'LOGIN',
                userLogin: result.data.content
            })

            console.log('result',result)

        }catch(error) {
            console.log({error})
        }

    }
}