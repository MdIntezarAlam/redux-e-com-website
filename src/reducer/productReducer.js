// IT SAYS HOW TO DO 
// IT TAKES TWO THING STATE AND ACTION AND RETURN AN UPDATED STATE
//AFTER THAT IPMPORT IT INTO THE REDUCER FILE > INDEX.JS 
import { ActionType } from "../constant/actionType"

//before api uses...
// const initialState = {
//     product: [{
//         id: 1,
//         title: "Intezar",
//         category: "Developer",
//     }]
// }

// export const productReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionType.SELECT_PRODUCT:
//             return state
//         default:
//             return state
//     }
// }



// =>>>>>>>>>>>>>>>>>>>>>>>>//after api using and set the product in return state=>>>>>>>>>>
const initialState = {
    product: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SELECT_PRODUCT:
            return { ...state, product: payload }
        default:
            return state
    }
}
//selected Product reducer 
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionType.REMOVE_SELECTED_PRODUCT: //for cleanup the function and return  an empty object
            return {}
        default: return state
    }
}