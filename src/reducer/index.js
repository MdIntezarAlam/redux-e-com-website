//IT IS THE MAIN REDUCER FILE WHICH SHOULD BE ONLY ONE 
//AFTER THAT IMPORT IT IN TO THTE STORE FILE

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
    productReducer: productReducer,
    selectedProductReducer: selectedProductReducer

})
export default rootReducer