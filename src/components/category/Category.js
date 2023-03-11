import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementCategoriesLevel, clearCurCategoriesArr, addCategoriesToCurCategoriesArr, addCategoryToArrayProductPath, saveFilterProducts } from '../../store/actions/categoryActions';
import categoriess from '../../data/categoriess';
import products from '../../data/products';
import css from './Category.module.css';
import { useState } from 'react';

const Category = () => {
   const dispatch = useDispatch()
   const [isProduct, setProduct] = useState(false)

   const currentCategories = useSelector(state => state.category.currentCategories)

   const productPath = useSelector(state => state.category.productPath)
   //const lastCategory = productPath[productPath.length - 1]  //последний элемент в массиве "путь товара"
   //console.log('lastCategory=', lastCategory)

   const level = useSelector(state => state.category.level)

   const chooseCategory = (category) => {
      console.log('categoty1=', category)
      dispatch(incrementCategoriesLevel())
      // dispatch(clearCurCategoriesArr())

      if (level === 2) {
         let filterCategory = categoriess.category3.filter(elem => elem.firstCategoryKey === productPath[productPath.length - 1].key)
         console.log('categories=', filterCategory)
         let categories = filterCategory.filter(elem => elem.categoryKey === category.key)
         if (categories.length) {
            console.log('categories=', categories)
            dispatch(clearCurCategoriesArr())
            dispatch(addCategoriesToCurCategoriesArr(categories))
         } else {
            setProduct(() => {
               return true
            })
         }
      } else if (level === 3) {
         let filterSecondCategory = categoriess.category4.filter(elem => elem.firstCategoryKey === productPath[productPath.length - 2].key)
         let filterCategory = filterSecondCategory.filter(elem => elem.secondCategoryKey === productPath[productPath.length - 1].key)
         if (filterCategory.length) {
            let categories = filterCategory.filter(elem => elem.categoryKey === category.key)
            dispatch(clearCurCategoriesArr())
            dispatch(addCategoriesToCurCategoriesArr(categories))
         } else {
            setProduct(() => {
               return true
            })
         }
      }
      dispatch(addCategoryToArrayProductPath(category));
   }

   return (
      <div className={css.categories}>
         <div className={css.wrapper}>
            {currentCategories.map(category => {
               return (
                  <div key={category.key} className={css.wrap}
                     onClick={() => chooseCategory(category)}>
                     <div className={css.category}>
                        {isProduct ?
                           <Link to='/choose' className={css.category}>
                              {category.name}
                           </Link> :
                           category.name}
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}
export default Category;
