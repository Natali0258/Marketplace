import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import Castegory from '../category/Category.js';
import { resetCategoriesLevel, clearCurCategoriesArr, clearArrayProductPath, addCategoryToArrayProductPath, addCategoriesToCurCategoriesArr } from '../../store/actions/categoryActions.js';
//import categories from '../../data/categories.js';
import categoriess from '../../data/categoriess.js';
import css from './NavbarCategories.module.css';

const NavbarCategories = () => {
   const dispatch = useDispatch()

   const chooseCategory = (category) => {
      console.log('categoty1=', category)
      dispatch(clearCurCategoriesArr())
      dispatch(clearArrayProductPath())
      dispatch(resetCategoriesLevel())
      let categories = categoriess.category2.filter(elem => elem.categoryKey === category.key)
      dispatch(addCategoriesToCurCategoriesArr(categories))
      console.log('categotyFirst=', categories)
      dispatch(addCategoryToArrayProductPath(category));
      // dispatch(openMenuCategories())
   }
   return (
      <nav className={css.categories}>
         <div>
            <ul className={css.wrapper}>
               {categoriess.category1.map(category => {
                  return (
                     <button value={category.name} key={category.key}
                        className={css.link}
                        onClick={() => chooseCategory(category)}>
                        <Link to={'/category'}>
                           {category.name}
                        </Link>
                     </button>
                  )
               })}

               {/* {categoriess.category1.map((category) => {
                  return (<button value={category.name} key={category.id}
                     className={css.link}>
                     <Link to={'/choose'}>
                        {category.name}
                     </Link></button>
                  )
               })} */}

            </ul>
         </div>
      </nav >
   )
}
export default NavbarCategories;


{/* {categories.category1.map((category) => {
                  return (<button value={category.name} key={category.id}
                     className={css.link}
                  // onClick={goToChooseCategory}
                  >
                     <Link to={'/choose'}>
                        {category.name}
                     </Link></button>
                  )
               })} 
               */}

