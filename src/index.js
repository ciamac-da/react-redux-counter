import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//Reducer
const reducer = ( state=0 , action ) =>{
switch(action.type){
  case "INCREMENT":
    return state +1;
  case "DECREMENT":
    return state -1;
    default:
      return state;
}
}



//Action
const increment =() => ({type:"INCREMENT"})
const decrement =() => ({type:"DECREMENT"})



//Store
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//Dispatch
store.subscribe(()=> console.log(store.getState()));
store.dispatch(increment())
store.dispatch(decrement())




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

