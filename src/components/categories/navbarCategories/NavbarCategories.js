import React from 'react';
import categories from '../../../data/categories.json';
import css from './NavbarCategories.module.css';
import MenuItems from '../menuItems/MenuItems';

const NavbarCategories = () => {
   for (let i = 0; i <= 5; i++) {
      localStorage.removeItem(`${i}`)
   }

   let depthLevel = 0; /*глубина меню- для определения расположения выпадающего списка (depthLevel=1-внизу, depthLevel>1-справа)*/
   if (window.innerWidth > 651) {
      depthLevel = 0; /*глубина меню- для определения расположения выпадающего списка (depthLevel=1-внизу, depthLevel>1-справа)*/
   } else {
      depthLevel = 1;
   }
   return (
      <nav className={css.wrapper}>
         <div>
            <ul className={css.categories}>
               {categories.map((menu) => {
                  return (<MenuItems items={menu} key={menu.id} depthLevel={depthLevel} />
                  )
               })}
            </ul>
         </div>
      </nav >
   )
}
export default NavbarCategories;