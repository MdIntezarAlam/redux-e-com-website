//HERE DEFIEN THE ACTION
//AND IMPORT THE ACTIONTYPE WHICH IS DEFINED AS A GLOBAL
// AFTER THAT IMPOIRT IT IN TO THE REDUCER FILE


import { ActionType } from "../constant/actionType"

export const setProduct = (product) => {
    return {
        type: ActionType.SELECT_PRODUCT,
        payload: product
    }
}

//selected product action 
export const selectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product
    }
}
//remove selected product action for cleanup 
export const removeSelectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
    }
}
