import React from 'react';
import MenuItems from '../menuItems/MenuItems';
import css from './DropDown.module.css';

/*много уровеней меню DropDown:*/
const DropDown = ({ submenus, depthLevel }) => {
   console.log('depthLevel=', depthLevel)
   return (
      <>
         {(depthLevel === 1) &&
            (<ul className={css.DropDown}>
               {
                  submenus.map(submenu => {
                     return (
                        (<MenuItems className={css.submenu} items={submenu} key={submenu.id} depthLevel={depthLevel} />)
                     )
                  })
               }
            </ul>)}
         {(depthLevel > 1) &&
            (<ul className={css.DropDownRight}>
               {
                  submenus.map(submenu => {
                     return (
                        (<MenuItems className={css.submenu} items={submenu} key={submenu.id} depthLevel={depthLevel} />)
                     )
                  })
               }
            </ul>)}
      </>
   )
}

export default DropDown;