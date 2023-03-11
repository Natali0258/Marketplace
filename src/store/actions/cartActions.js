export const CART_ACTIONS = {
   //Добавить товар в корзину
   ADD_TO_CART: 'ADD_TO_CART',
   //Удалить товар из корзины
   DELETE_FROM_CART: 'DELETE_FROM_CART',
   //Открыть форму для отзыв
   OPEN_FEEDBACK_FORM: 'OPEN_FEEDBACK_FORM',
   //Закрыть форму для отзыв
   CLOSE_FEEDBACK_FORM: 'CLOSE_FEEDBACK_FORM',
   //Добавить отзыв
   ADD_FEEDBACK: 'ADD_FEEDBACK'

}

//Добавить товар в корзину
export const addToCart = (item) => {
   return {
      type: CART_ACTIONS.ADD_TO_CART,
      item
   }
}
//Удалить товар из корзины
export const deletefromCart = (item) => {
   return {
      type: CART_ACTIONS.DELETE_FROM_CART,
      item
   }
}
//Открыть форму для отзыв
export const openFeedbackForm = () => {
   return {
      type: CART_ACTIONS.OPEN_FEEDBACK_FORM
   }
}
//Закрыть форму для отзыв
export const closeFeedbackForm = () => {
   return {
      type: CART_ACTIONS.CLOSE_FEEDBACK_FORM
   }
}
//Добавить отзыв
export const addFeedback = (feedback) => {
   return {
      type: CART_ACTIONS.ADD_FEEDBACK,
      feedback
   }
}