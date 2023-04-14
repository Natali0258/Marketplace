import { SELLER_ACTIONS } from "../actions/sellerActions";

const initialState = {
   clientId: null,
   name: null,
   inn: null,
   email: null,
   password: null,
   isSeller: false,
   isAuthSeller: false,
   isErrorSeller: false,
   isRegSeller: false,
   isRegFormSeller: false,
   isRegErrorSeller: false,
   isLogFormSeller: false,
   isLogErrorSeller: false,
   isRegAndLogFormSeller: false,
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
      case SELLER_ACTIONS.OUTPUT_SELLER:
         return {
            ...state,
            isAuthSeller: false,
            isSeller: false,
         }
      //Вызов формы регистрации/авторизации
      case SELLER_ACTIONS.GET_REG_AND_LOG_FORM_SELLER:
         return {
            ...state,
            isRegAndLogFormSeller: true,
         }
      //Закрыть форму регистрации/авторизации
      case SELLER_ACTIONS.CLOSE_REG_AND_LOG_FORM_SELLER:
         return {
            ...state,
            isRegAndLogFormSeller: false,
         }

      //Вызов формы регистрации
      case SELLER_ACTIONS.GET_REG_FORM_SELLER:
         return {
            ...state,
            isRegFormSeller: true,
         }
      //Закрыть форму регистрации
      case SELLER_ACTIONS.CLOSE_REG_FORM_SELLER:
         return {
            ...state,
            isRegFormSeller: false,
         }
      //Вызов формы регистрации
      case SELLER_ACTIONS.GET_LOG_FORM_SELLER:
         return {
            ...state,
            isLogFormSeller: true,
         }
      //Закрыть форму регистрации
      case SELLER_ACTIONS.CLOSE_LOG_FORM_SELLER:
         return {
            ...state,
            isLogFormSeller: false,
         }
      //Регистрация продавца
      case SELLER_ACTIONS.REG_SELLER_STARTED:
         return {
            ...state,
            isLoading: true,
         }
      case SELLER_ACTIONS.REG_SELLER_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isRegSeller: true,
         }
      case SELLER_ACTIONS.REG_SELLER_ERROR:
         return {
            ...state,
            isLoading: false,
            isRegSeller: false,
            isRegErrorSeller: true,
         }
      //Закрыть сообщение об ошибке регистрации
      case SELLER_ACTIONS.CLOSE_REG_SELLER_ERROR:
         return {
            ...state,
            isRegErrorSeller: false,
         }
      //Авторизация продавца
      case SELLER_ACTIONS.LOG_SELLER_STARTED:
         return {
            ...state,
            isLogErrorSeller: false,
            isLoading: true,
         }
      case SELLER_ACTIONS.LOG_SELLER_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isAuthSeller: true,
            isErrorSeller: false,
            clientId: action.id,
            name: action.name,
            inn: action.inn,
            email: action.email,
            password: action.password,
         }
      case SELLER_ACTIONS.LOG_SELLER_ERROR:
         return {
            ...state,
            isLoading: false,
            isAuthSeller: false,
            isLogErrorSeller: true,
         }
      //Закрыть сообщение об ошибке авторизации
      case SELLER_ACTIONS.CLOSE_LOG_SELLER_ERROR:
         return {
            ...state,
            isLogErrorSeller: false,
         }
      default: return state;
   }
}
export default sellerReducer;