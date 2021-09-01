import { ADD_COMMENT } from "../types/FakeBookType";

const initialState = {
    arrComment:[
        // {name:'Sĩ',content:'Ahhihi',image:'https://picsum.photos/id/1/200/200'},
        // {name:'Tuân',content:'hello',image:'https://picsum.photos/id/2/200/200'},
    ]
}

export const FakeBookReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_COMMENT: {
            state.arrComment = [...state.arrComment,action.userComment];

            return {...state};
        }

        default:
            return state
    }
}
