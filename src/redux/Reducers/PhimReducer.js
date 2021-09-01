
const stateDefault = {
    mangPhim: [
        {maPhim:1,tenPhim:'Xmen',hinhAnh:'https://picsum.photos/id/1/200/200'},
        {maPhim:2,tenPhim:'End Game',hinhAnh:'https://picsum.photos/id/2/200/200'},

    ]

}

export const PhimReducer = (state = stateDefault, action) => {

    switch(action.type) {

        case 'LAY_DANH_SACH_PHIM': {
            state.mangPhim = action.mangPhim;
            return {...state}            
        }
        default : return state
    }
}