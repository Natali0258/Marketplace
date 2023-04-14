import { PRODUCTS_ACTIONS } from "../actions/productsActions";

const initialState = {
   products: [],
   isLoading: false,
   isError: false
}

const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      //Добавить продукт в базу продавца
      case PRODUCTS_ACTIONS.ADD_PRODUCT_STARTED:
         return {
            ...state,
            isLoading: true,
         }
      case PRODUCTS_ACTIONS.ADD_PRODUCT_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isError: false,
            products: [...state, action.payload],
         }
      case PRODUCTS_ACTIONS.ADD_PRODUCT_ERROR:
         return {
            ...state,
            isLoading: false,
            isError: action.error
         }
      default: return state;
   }
}
export default productsReducer;