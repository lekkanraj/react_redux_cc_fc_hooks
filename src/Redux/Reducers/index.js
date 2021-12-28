import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import PostReducer from './PostReducer';

const rooRreducer=combineReducers({user:UserReducer,post:PostReducer});
export default rooRreducer;