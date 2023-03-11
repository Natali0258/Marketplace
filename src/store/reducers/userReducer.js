import { USER_ACTIONS } from "../actions/userActions";

const initialState = {
   email: null,
   password: null,
   clientId: null,
   isAuth: false,
   isReg: false,
   isRegForm: false,
   isLoading: false,
   isBurgerMenu: false,
   isDropDown: false,
   isModalActive: false,
}
const userReducer = (state = initialState, action) => {
   switch (action.type) {
      //Вызов бургер-меню
      case USER_ACTIONS.GET_BURGERMENU:
         return {
            ...state,
            isBurgerMenu: true,
         }

      //Закрытие бургер-меню
      case USER_ACTIONS.CLOSE_BURGERMENU:
         return {
            ...state,
            isBurgerMenu: false,
         }

      //Открыть DropDown
      case USER_ACTIONS.OPEN_DROPDOWN:
         return {
            ...state,
            isDropDown: true,
         }

      //Закрыть DropDown
      case USER_ACTIONS.CLOSE_DROPDOWN:
         return {
            ...state,
            isDropDown: false,
         }

      //Изменить DropDown
      case USER_ACTIONS.CHANGE_DROPDOWN:
         return {
            ...state,
            isDropDown: !(state.isDropDown),
         }

      //Выход
      case USER_ACTIONS.OUTPUT:
         localStorage.removeItem('token');
         return {
            ...state,
            isAuth: false,
         }
      //Вызов модального окна
      case USER_ACTIONS.GET_MODAL:
         return {
            ...state,
            isModalActive: true,
         }
      //Закрытие модального окна
      case USER_ACTIONS.CLOSE_MODAL:
         return {
            ...state,
            isModalActive: false,
         }
      //Вызов формы регистрации/авторизации
      case USER_ACTIONS.GET_REG_FORM:
         return {
            ...state,
            isRegForm: true,
         }
      //Закрыть форму регистрации/авторизации
      case USER_ACTIONS.CLOSE_REG_FORM:
         return {
            ...state,
            isRegForm: false,
         }
      //Регистрация пользователя
      case USER_ACTIONS.REG_USER_STARTED:
         return {
            ...state,
            isLoading: true,
            error: null,
         }
      case USER_ACTIONS.REG_USER_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isReg: true,
            error: null,
         }
      case USER_ACTIONS.REG_USER_ERROR:
         return {
            ...state,
            isLoading: false,
            isReg: false,
            isError: action.error,
         }
      default: return state;
   }
}
export default userReducer; 