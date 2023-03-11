import { CART_ACTIONS } from "../actions/cartActions";

const initialState = {
   favouritedIds: [],
   cart: {
      count: 0,
      price: 0,
      products: [],
   },
   isFeedbackForm: false,
   feedbacks: []
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Добавить товар в корзину
      case CART_ACTIONS.ADD_TO_CART:
         return {
            ...state,
            cart: {
               ...state.cart,
               count: state.cart.count + 1,
               price: state.cart.price + action.item.price,
               products: [...state.cart.products, action.item]
            }
         }
      //Удалить товар из корзины
      case CART_ACTIONS.DELETE_FROM_CART:
         const filterProduct = state.cart.products.filter(el => el.id !== action.item.id)
         return {
            ...state,
            cart: {
               ...state.cart,
               count: state.cart.count - 1,
               price: state.cart.price - action.item.price,
               products: filterProduct
            }
         }
      //Открыть форму для отзыв
      case CART_ACTIONS.OPEN_FEEDBACK_FORM:
         return {
            ...state,
            isFeedbackForm: true,
         }
      //Открыть форму для отзыв
      case CART_ACTIONS.CLOSE_FEEDBACK_FORM:
         return {
            ...state,
            isFeedbackForm: false,
         }
      //Добавить отзыв
      case CART_ACTIONS.ADD_FEEDBACK:
         console.log("value=", action.feedback)
         return {
            ...state,
            feedbacks: [...state.feedbacks, action.feedback]
         }
      default:
         return state
   }
}
export default reducer;