//Reducer
export const loginReducer = ( state= false , action ) =>{
    switch(action.type){
      case "LOGIN":
        return !state;
        default:
          return state;
    }
    }
    