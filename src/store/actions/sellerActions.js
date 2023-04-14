export const SELLER_ACTIONS = {
   //Перейти в интерфейс продавца
   GO_TO_SELLER_INTERFACE: 'GO_TO_SELLER_INTERFACE',
   //Выход
   OUTPUT_SELLER: 'OUTPUT_SELLER',
   //Вызов формы регистрации/авторизации
   GET_REG_AND_LOG_FORM_SELLER: 'GET_REG_AND_LOG_FORM_SELLER',
   //Закрыть форму регистрации/авторизации
   CLOSE_REG_AND_LOG_FORM_SELLER: 'CLOSE_REG_AND_LOG_FORM_SELLER',
   //Вызов формы регистрации
   GET_REG_FORM_SELLER: 'GET_REG_FORM_SELLER',
   //Закрыть форму регистрации
   CLOSE_REG_FORM_SELLER: 'CLOSE_REG_FORM_SELLER',
   //Вызов формы авторизации
   GET_LOG_FORM_SELLER: 'GET_LOG_FORM_SELLER',
   //Закрыть форму авторизации
   CLOSE_LOG_FORM_SELLER: 'CLOSE_LOG_FORM_SELLER',
   //Регистрация продавца
   REG_SELLER_STARTED: 'REG_SELLER_STARTED',
   REG_SELLER_SUCCESS: 'REG_SELLER_SUCCESS',
   REG_SELLER_ERROR: 'REG_SELLER_ERROR',
   //Закрыть сообщение об ошибке регистрации
   CLOSE_REG_SELLER_ERROR: 'CLOSE_REG_SELLER_ERROR',
   //Авторизация продавца
   LOG_SELLER_STARTED: 'LOG_SELLER_STARTED',
   LOG_SELLER_SUCCESS: 'LOG_SELLER_SUCCESS',
   LOG_SELLER_ERROR: 'LOG_SELLER_ERROR',
   //Закрыть сообщение об ошибке авторизации
   CLOSE_LOG_SELLER_ERROR: 'CLOSE_LOG_SELLER_ERROR'
}

//Перейти в интерфейс продавца
export const goToSellerInterface = () => {
   return {
      type: SELLER_ACTIONS.GO_TO_SELLER_INTERFACE,
   }
}
//Выход
export const outputSeller = () => {
   return {
      type: SELLER_ACTIONS.OUTPUT_SELLER
   }
}
//Вызов формы регистрации/авторизации
export const getRegAndLogFormSeller = () => {
   return {
      type: SELLER_ACTIONS.GET_REG_AND_LOG_FORM_SELLER
   }
}
//Закрыть форму регистрации/авторизации
export const closeRegAndLogFormSeller = () => {
   return {
      type: SELLER_ACTIONS.CLOSE_REG_AND_LOG_FORM_SELLER
   }
}
//Вызов формы регистрации
export const getRegFormSeller = () => {
   return {
      type: SELLER_ACTIONS.GET_REG_FORM_SELLER
   }
}
//Закрыть форму регистрации
export const closeRegFormSeller = () => {
   return {
      type: SELLER_ACTIONS.CLOSE_REG_FORM_SELLER
   }
}
//Вызов формы авторизации
export const getLogFormSeller = () => {
   return {
      type: SELLER_ACTIONS.GET_LOG_FORM_SELLER
   }
}
//Закрыть форму авторизации
export const closeLogFormSeller = () => {
   return {
      type: SELLER_ACTIONS.CLOSE_LOG_FORM_SELLER
   }
}
//Регистрация продавца
export const regSellerStarted = () => {
   return {
      type: SELLER_ACTIONS.REG_SELLER_STARTED
   }
}
export const regSellerSuccess = (id, email, password) => {
   return {
      type: SELLER_ACTIONS.REG_SELLER_SUCCESS,
      id, email, password
   }
}
export const regSellerError = () => {
   return {
      type: SELLER_ACTIONS.REG_SELLER_ERROR
   }
}
//Закрыть сообщение об ошибке регистрации
export const closeRegSellerError = () => {
   return {
      type: SELLER_ACTIONS.CLOSE_REG_SELLER_ERROR
   }
}
//Авторизация продавца
export const logSellerStarted = () => {
   return {
      type: SELLER_ACTIONS.LOG_SELLER_STARTED
   }
}
export const logSellerSuccess = (id, name, inn, email, password) => {
   console.log(id, name, inn, email, password)
   return {
      type: SELLER_ACTIONS.LOG_SELLER_SUCCESS,
      id, name, inn, email, password
   }
}
export const logSellerError = () => {
   return {
      type: SELLER_ACTIONS.LOG_SELLER_ERROR
   }
}
//Закрыть сообщение об ошибке авторизации
export const closeLogSellerError = () => {
   return {
      type: SELLER_ACTIONS.CLOSE_LOG_SELLER_ERROR
   }
}
