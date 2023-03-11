export const USER_ACTIONS = {
   //Вызов бургер-меню
   GET_BURGERMENU: 'GET_BURGERMENU',
   //Закрыть бургер-меню
   CLOSE_BURGERMENU: 'CLOSE_BURGERMENU',
   //Открыть DropDown
   OPEN_DROPDOWN: 'OPEN_DROPDOWN',
   //Закрыть DropDown
   CLOSE_DROPDOWN: 'CLOSE_DROPDOWN',
   //Изменить DropDown
   CHANGE_DROPDOWN: 'CHANGE_DROPDOWN',
   //Выход
   OUTPUT: 'OUTPUT',
   //Вызов модального окна
   GET_MODAL: 'GET_MODAL',
   //Закрытие модального окна
   CLOSE_MODAL: 'CLOSE_MODAL',
   //Вызов формы регистрации/авторизации
   GET_REG_FORM: 'GET_REG_FORM',
   //Закрыть форму регистрации/авторизации
   CLOSE_REG_FORM: 'CLOSE_REG_FORM',
   //Регистрация пользователя
   REG_USER_STARTED: 'REG_USER_STARTED',
   REG_USER_SUCCESS: 'REG_USER_SUCCESS',
   REG_USER_ERROR: 'REG_USER_ERROR'
}

//Вызов бургер-меню
export const getBurgerMenu = () => {
   return {
      type: USER_ACTIONS.GET_BURGERMENU,
   }
}

//Закрыть бургер-меню
export const closeBurgerMenu = () => {
   return {
      type: USER_ACTIONS.CLOSE_BURGERMENU,
   }
}
//Открыть DropDown
export const openDropDown = () => {
   return {
      type: USER_ACTIONS.OPEN_DROPDOWN,
   }
}

//Закрыть DropDown
export const closeDropDown = () => {
   return {
      type: USER_ACTIONS.CLOSE_DROPDOWN,
   }
}

//Изменить DropDown
export const changeDropDown = () => {
   return {
      type: USER_ACTIONS.CHANGE_DROPDOWN,
   }
}

//Выход
export const output = () => {
   return {
      type: USER_ACTIONS.OUTPUT
   }
}
//Вызов модального окна
export const getModal = () => {
   return {
      type: USER_ACTIONS.GET_MODAL
   }
}
//Закрытие модального окна
export const closeModal = () => {
   return {
      type: USER_ACTIONS.CLOSE_MODAL
   }
}
//Вызов формы регистрации/авторизации
export const getRegForm = () => {
   return {
      type: USER_ACTIONS.GET_REG_FORM
   }
}
//Закрыть форму регистрации/авторизации
export const closeRegForm = () => {
   return {
      type: USER_ACTIONS.CLOSE_REG_FORM
   }
}
//Регистрация пользователя
export const regUserStarted = () => {
   return {
      type: USER_ACTIONS.REG_USER_STARTED
   }
}
export const regUserSuccess = (id, email, password) => {
   return {
      type: USER_ACTIONS.REG_USER_SUCCESS,
      id, email, password
   }
}
export const regUserError = (id, email, password) => {
   return {
      type: USER_ACTIONS.REG_USER_ERROR,
      id, email, password
   }
}