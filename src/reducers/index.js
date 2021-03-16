import { combineReducers } from 'redux';
import UserReducer from "./user"
import ProductsReducer from './product';
const rootReducer = combineReducers({
  isUserLoggedIn:UserReducer,
  products:ProductsReducer,
    currentProduct:ProductsReducer
});

export default rootReducer;
