//IT IS THE STORE FILE WHICH ACCEPT STATE, ACTION, REDUCER 
//IT IS ALSO ONLY ONE IN THE ENTIRE APPLICATIONS

import { createStore } from "redux";
import rootReducer from "../reducer/index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store 