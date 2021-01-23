import {combineReducers} from "redux";
import { loginReducer } from './login';
import { counterReducer } from './counter';

export const reducers = combineReducers({
   counter: counterReducer,
   login:   loginReducer,
})