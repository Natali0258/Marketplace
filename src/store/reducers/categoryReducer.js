import { CATEGORY_ACTIONS } from "../actions/categoryActions";

const initialState = {
   level: 2,
   productPath: [],
   currentCategories: [],
   products: [],
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
      //Добавить категорию в массив "путь продукта"
      case CATEGORY_ACTIONS.ADD_CATEGORY_TO_ARRAY_PRODUCT_PATH:
         return {
            ...state,
            productPath: [...state.productPath, action.category],
         }
      //Очистить массив "путь продукта"
      case CATEGORY_ACTIONS.CLEAR_ARRAY_PRODUCT_PATH:
         return {
            ...state,
            productPath: [],
         }
      //Добавить категории в массив текущие категории
      case CATEGORY_ACTIONS.ADD_CATEGORIES_TO_CUR_CATEGORIES_ARR:
         return {
            ...state,
            currentCategories: action.categories,
         }
      //Очистить массив текущие категории
      case CATEGORY_ACTIONS.CLEAR_CUR_CATEGORIES_ARR:
         return {
            ...state,
            currentCategories: [],
         }
      //Увеличить уровень категории
      case CATEGORY_ACTIONS.INCREMENT_CATEGORIES_LEVEL:
         return {
            ...state,
            level: state.level + 1
         }
      //Сбросить уровень категории
      case CATEGORY_ACTIONS.RESET_CATEGORIES_LEVEL:
         return {
            ...state,
            level: 2
         }
      //Сохранить выбранные товары
      case CATEGORY_ACTIONS.SAVE_FILTER_PRODUCTS:
         console.log('filterProducts=', action.filterProducts)
         return {
            ...state,
            products: action.filterProducts
         }
      default:
         return state
   }
}
export default reducer;