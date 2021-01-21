import appReducer from "./app-reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const store = createStore(appReducer,applyMiddleware(thunk))

export default store