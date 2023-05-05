import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    user:null,
    token:localStorage.getItem('token'), 
  };

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      localStorage.setItem('token',action.payload)  
      return { ...state, token: action.payload };

    case "CLEAR_TOKEN":
        localStorage.removeItem('token');
        return { ...state, token: null };
    default:
      return state;
  }
}

const store = createStore(authReducer,composeWithDevTools());

export default store;
