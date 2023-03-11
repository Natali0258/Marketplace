import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import sellerReducer from './sellerReducer';
import categoryReducer from './categoryReducer';


export default combineReducers({
   cart: cartReducer,
   user: userReducer,
   seller: sellerReducer,
   category: categoryReducer
})