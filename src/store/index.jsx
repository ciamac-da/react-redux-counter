import { createStore } from 'redux';
import { counterReducer } from '../reducers/counter';



//Store
export const store = createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//Dispatch
store.subscribe(()=> console.log(store.getState()));
