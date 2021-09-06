import { applyMiddleware, combineReducers, createStore } from 'redux';
//Cấu hình middlewrare (Để có thể dispatch redux 1 action là function)
import thunk from 'redux-thunk'
import { CarouselReducer } from './Reducers/CarouselReducer'
import { LayDanhSachPhimReducer } from './Reducers/LayDanhSachPhimReducer'
import { QuanLyNguoiDungReducer } from './Reducers/QuanLyNguoiDungReducer';
import { QuanLyRapReducer } from './Reducers/QuanLyRapReducer'

const rootReducer = combineReducers({
    //Khai báo reducer
    CarouselReducer,
    LayDanhSachPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

