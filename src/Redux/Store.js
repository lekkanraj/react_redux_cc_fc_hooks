import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducers/index';

const mylogger=(store)=>(next)=>(action)=>{
    console.log("Logged",action);
    next(action);
}

const store=createStore(rootReducer,
    applyMiddleware(mylogger)
    );

export default store;