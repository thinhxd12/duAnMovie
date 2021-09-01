import React from 'react'

// const Default = (props) => {
//     return <p>
//         Default component
//     </p>
// }

const stateDefault = {
    Component: <p>Default</p>,
    handleSubmit: () => {
        alert('Default')
    }
}



export const ModalReducer = (state=stateDefault,action) =>{

    switch(action.type) {
        case 'OPEN_LOGIN' :{ 
            state.Component = action.Component;
            state.handleSubmit = action.handleSubmit;
            return {...state}
        }

        default: return {...state}
    }
}