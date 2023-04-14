export const PRODUCTS_ACTIONS = {
   //Добавить продукт в базу продавца
   ADD_PRODUCT_STARTED: 'ADD_PRODUCT_STARTED',
   ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
   ADD_PRODUCT_ERROR: 'ADD_PRODUCT_ERROR',
}
//Добавить продукт в базу продавца
export const addProductStarted = () => {
   return {
      type: PRODUCTS_ACTIONS.ADD_PRODUCT_STARTED
   }
}
export const addProductSuccess = (id, name, price, sizes, compound, brend, description, selectedCategoryId) => {
   return {
      type: PRODUCTS_ACTIONS.ADD_PRODUCT_SUCCESS,
      payload: {
         id,
         name,
         price,
         sizes,
         compound,
         brend,
         description,
         selectedCategoryId
      }
   }
}
export const addProductError = (error) => {
   return {
      type: PRODUCTS_ACTIONS.ADD_PRODUCT_ERROR,
      error
   }
}