export const CATEGORY_ACTIONS = {
   //Добавить категорию в массив "путь продукта"
   ADD_CATEGORY_TO_ARRAY_PRODUCT_PATH: 'ADD_CATEGORY_TO_ARRAY_PRODUCT_PATH',
   //Очистить массив "путь продукта"
   CLEAR_ARRAY_PRODUCT_PATH: 'CLEAR_ARRAY_PRODUCT_PATH',
   //Добавить категории в массив текущие категории
   ADD_CATEGORIES_TO_CUR_CATEGORIES_ARR: 'ADD_CATEGORIES_TO_CUR_CATEGORIES_ARR',
   //Очистить массив текущие категории
   CLEAR_CUR_CATEGORIES_ARR: 'CLEAR_CUR_CATEGORIES_ARR',
   //Увеличить уровень категории
   INCREMENT_CATEGORIES_LEVEL: 'INCREMENT_CATEGORIES_LEVEL',
   //Сбросить уровень категории
   RESET_CATEGORIES_LEVEL: 'RESET_CATEGORIES_LEVEL',
   //Сохранить выбранные товары
   SAVE_FILTER_PRODUCTS: 'SAVE_FILTER_PRODUCTS'
}

//Добавить категорию в массив "путь продукта"
export const addCategoryToArrayProductPath = (category) => {
   return {
      type: CATEGORY_ACTIONS.ADD_CATEGORY_TO_ARRAY_PRODUCT_PATH,
      category
   }
}
//Очистить массив "путь продукта"
export const clearArrayProductPath = () => {
   return {
      type: CATEGORY_ACTIONS.CLEAR_ARRAY_PRODUCT_PATH
   }
}
//Добавить категории в массив текущие категории
export const addCategoriesToCurCategoriesArr = (categories) => {
   return {
      type: CATEGORY_ACTIONS.ADD_CATEGORIES_TO_CUR_CATEGORIES_ARR,
      categories
   }
}
//Очистить массив текущие категории
export const clearCurCategoriesArr = () => {
   return {
      type: CATEGORY_ACTIONS.CLEAR_CUR_CATEGORIES_ARR
   }
}
//Увеличить уровень категории
export const incrementCategoriesLevel = () => {
   return {
      type: CATEGORY_ACTIONS.INCREMENT_CATEGORIES_LEVEL
   }
}
//Сбросить уровень категории
export const resetCategoriesLevel = () => {
   return {
      type: CATEGORY_ACTIONS.RESET_CATEGORIES_LEVEL
   }
}
//Сохранить выбранные товары
export const saveFilterProducts = (filterProducts) => {
   return {
      type: CATEGORY_ACTIONS.SAVE_FILTER_PRODUCTS,
      filterProducts
   }
}