import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers=combineReducers({
    amount:amountReducer
})
export default reducers;

//this file is used to combine all the reducers you have