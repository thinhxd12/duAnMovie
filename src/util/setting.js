
import axios from "axios";
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIwNS8wMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDQwMTkyMDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0NDE2NjgwMH0.iIk4OcH5Y7-xv_PZiazsjcBJkUj-eyGHjgFCfmWNnL0";
export const GROUP_ID = 'GP01'
export const USER_LOGIN = 'userLogin';
export const ACCESS_TOKEN = 'accessToken';
export const DOMAIN = 'https://movienew.cybersoft.edu.vn'

//Cấu hình interceptor cho axios (Tất cả request gọi = axios đều được cấu hình) (1 dự án làm 1 duy nhất)

export const http = axios.create({
    baseURL:'https://movienew.cybersoft.edu.vn',
    timeout:30000,
})

http.interceptors.request.use((config)=>{
    config.headers = {
        ...config.headers,
        'TokenCybersoft':TOKEN_CYBERSOFT,
        'Authorization':'Bearer '+ localStorage.getItem(ACCESS_TOKEN)  //Token mà người dùng đăng nhập
    }
    return config
}, (errors) => {
    return Promise.reject(errors)
})

