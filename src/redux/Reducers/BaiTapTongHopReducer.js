const initialState = {
    open: false,
    monAn: <p>Default</p>
}

export const BaiTapTongHopReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'OPEN_MODAL': {
            state.open = action.open;
            state.monAn = action.monAn;
            return { ...state }
        }
        case 'CLOSE_MODAL': {
            state.open = action.open;
            return { ...state }
        }

        default:
            return state
    }
}
