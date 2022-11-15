import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Data } from "./reducer";


const reducers = combineReducers({
    data : Data
})

const middleWare = [thunk]
const store = createStore(reducers, applyMiddleware(...middleWare))

export default store;