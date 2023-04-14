import { USER_ACTIONS } from "../actions/userActions";

const initialState = {
   clientId: null,
   nickname: null,
   email: null,
   password: null,
   isLogError: false,
   isRegError: false,
   isAuth: false,
   isRegAndLogForm: false,
   isLogForm: false,
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
         localStorage.removeItem('email')
         localStorage.removeItem('password')
         return {
            ...state,
            isAuth: false,
            isReg: false,
            clientId: null,
            nickname: null,
            email: null,
            password: null
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
      case USER_ACTIONS.GET_REG_AND_LOG_FORM:
         return {
            ...state,
            isRegAndLogForm: true,
         }
      //Закрыть форму регистрации/авторизации
      case USER_ACTIONS.CLOSE_REG_AND_LOG_FORM:
         return {
            ...state,
            isRegAndLogForm: false,
         }
      //Вызов формы регистрации
      case USER_ACTIONS.GET_REG_FORM:
         return {
            ...state,
            isRegForm: true,
         }
      //Закрыть форму регистрации
      case USER_ACTIONS.CLOSE_REG_FORM:
         return {
            ...state,
            isRegForm: false,
         }
      //Вызов формы авторизации
      case USER_ACTIONS.GET_LOG_FORM:
         return {
            ...state,
            isLogForm: true,
         }
      //Закрыть форму авторизации
      case USER_ACTIONS.CLOSE_LOG_FORM:
         return {
            ...state,
            isLogForm: false,
         }
      //Регистрация пользователя
      case USER_ACTIONS.REG_USER_STARTED:
         return {
            ...state,
            isLoading: true,
         }
      case USER_ACTIONS.REG_USER_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isReg: true,
         }
      case USER_ACTIONS.REG_USER_ERROR:
         return {
            ...state,
            isLoading: false,
            isReg: false,
            isRegError: true,
         }
      //Закрыть сообщение об ошибке регистрации
      case USER_ACTIONS.CLOSE_REG_USER_ERROR:
         return {
            ...state,
            isRegError: false,
         }
      //Авторизация пользователя
      case USER_ACTIONS.LOG_USER_STARTED:
         return {
            ...state,
            isLogError: false,
            isLoading: true,
         }
      case USER_ACTIONS.LOG_USER_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isAuth: true,
            isError: false,
            clientId: action.id,
            nickname: action.nickname,
            email: action.email,
            password: action.password,
         }
      case USER_ACTIONS.LOG_USER_ERROR:
         return {
            ...state,
            isLoading: false,
            isAuth: false,
            isLogError: true,
         }
      //Закрыть сообщение об ошибке авторизации
      case USER_ACTIONS.CLOSE_LOG_USER_ERROR:
         return {
            ...state,
            isLogError: false,
         }
      default: return state;
   }
}
export default userReducer; 