import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeDropDown, changeDropDown } from '../../../store/actions/userActions';
import arrow from '../../../images/arrow.svg';
import ChooseProduct from '../../chooseProduct/ChooseProduct';
import DropDown from '../dropDown/DropDown';
import css from './MenuItems.module.css';

const MenuItems = ({ items, depthLevel }) => {
   const [isDropDown, setDropDown] = useState(false); /*false-раскывающееся меню закрыто, true-открыто */
   //const isDropDown = useSelector(state => state.user.isDropDown)
   const dispatch = useDispatch()

   /*Закрытие раскрывающегося меню, когда пользователь щелкает за его пределами.
   Передаем ref узлу li.
   В useEffect хуке мы проверяем, открыто ли раскрывающееся меню, а затем проверяем, находится ли 
   выбранный узел DOM за пределами раскрывающегося списка, после чего мы закрываем раскрывающийся список. */
   let ref = useRef();
   useEffect(() => {
      const handler = (event) => {
         if (isDropDown && ref.current && !ref.current.contains(event.target)) {
            setDropDown(false);
            //dispatch(closeDropDown())
         }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
         // Очистить прослушиватель событий
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
      };
   }, [isDropDown]);

   const valid = () => {
      if (depthLevel === 1) {
         for (let i = 0; i <= 5; i++) {
            localStorage.removeItem(`${i}`)
            console.log('depthLevel в valid=', localStorage.getItem(`${depthLevel}`))
         }
      }
   }

   depthLevel = depthLevel + 1;
   const hendleClick = () => {
      valid()
      setDropDown(!isDropDown);
      //dispatch(changeDropDown())
      console.log('isDropDown=', isDropDown)
      //console.log(items.name);
      //Запись в "уровень глубины категорий" название категории:
      localStorage.setItem(`${depthLevel}`, items.name);
   }
   //console.log('isDropDown=', isDropDown)
   //console.log('depthLevel в MenuItem=', depthLevel)
   //console.log('depthLevel из localStorage=', localStorage.getItem(`${depthLevel}`))

   const goToChooseProduct = () => {
      valid()
      localStorage.setItem(`${depthLevel}`, items.name);
      //setDropDown(false);
      dispatch(closeDropDown())
      console.log('isDropDown=', isDropDown)
   }
   return (
      <li ref={ref} className={css.menuItem}>
         {items.submenus ?
            (<>
               <button type='button' className={css.button} onClick={hendleClick}>
                  {items.name}{"  "}
                  {(depthLevel > 1 || window.innerWidth > '651px') ?
                     <img src={arrow} alt="arrow" className={css.arrow_right} />
                     : <img src={arrow} alt="arrow" />}
               </button>

               {isDropDown && (
                  <DropDown submenus={items.submenus} depthLevel={depthLevel} />)}
            </>
            ) : (
               <button type='button' className={css.button} onClick={goToChooseProduct}>
                  <Link to={`/choose`}>{items.name}</Link>
               </button>)
         }
      </li>
   )
}
export default MenuItems;