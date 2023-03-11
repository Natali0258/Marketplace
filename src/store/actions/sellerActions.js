export const SELLER_ACTIONS = {
   //Перейти в интерфейс продавца
   GO_TO_SELLER_INTERFACE: 'GO_TO_SELLER_INTERFACE',
   //Выход
   OUTPUT: 'OUTPUT',
}

//Перейти в интерфейс продавца
export const goToSellerInterface = () => {
   return {
      type: SELLER_ACTIONS.GO_TO_SELLER_INTERFACE,
   }
}
//Выход
export const output = () => {
   return {
      type: SELLER_ACTIONS.OUTPUT
   }
}
