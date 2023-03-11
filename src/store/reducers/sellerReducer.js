import { SELLER_ACTIONS } from "../actions/sellerActions";

const initialState = {
   isSeller: false,
   isAuthSeller: false,
   //isAuthSeller: true,
}
const sellerReducer = (state = initialState, action) => {
   switch (action.type) {
      //Перейти в интерфейс продавца
      case SELLER_ACTIONS.GO_TO_SELLER_INTERFACE:
         return {
            ...state,
            isSeller: true,
         }
      //Выход
      case SELLER_ACTIONS.OUTPUT:
         return {
            ...state,
            isAuthSeller: false,
         }
      default: return state;
   }
}
export default sellerReducer;