import { createStore } from 'redux';
import { reducers } from '../reducers/index';



//Store
export const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//Dispatch
store.subscribe(()=> console.log(store.getState()));
