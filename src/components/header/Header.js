import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBurgerMenu } from '../../store/actions/userActions';
import CityDroupDown from '../cityDroupDown/CityDroupDown';
import NavbarCompany from '../navbar/navbarCompany/NavbarCompany';
import { buyerMenu, userMenu } from '../../data/constants';
import NavbarUser from '../navbar/navbarUser/NavbarUser';
import NavbarCategories from '../navbarCategories/NavbarCategories';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import css from './Header.module.css';

const Header = () => {
   const [value, setValue] = useState('');
   console.log('menu=', buyerMenu)
   const dispatch = useDispatch();
   const isBurgerMenu = useSelector(state => state.user.isBurgerMenu);
   //console.log('isBurgerMenu=', isBurgerMenu)

   const handleAddress = (e) => {
      setValue(...value, e.target.value)
      console.log(e.target.value)
   }

   return (
      <header className={css.header}>
         <>
            <div className={css.header_dark}>
               <div className={css.header_dark_wrap}>
                  <div className={css.header_left}>
                     <div className={css.language_city}>
                        <button className={css.language}>RU</button>
                        <CityDroupDown />
                     </div>
                     <input type="text" className={css.address} placeholder='укажите адрес доставки'
                        onChange={handleAddress} />
                  </div>

                  <NavbarCompany active={false} menu={buyerMenu} />

                  <nav className={css.burgerMenu}>
                     <div className={css.burgerButton} onClick={() => dispatch(getBurgerMenu())} >
                        <span />
                     </div>
                     {isBurgerMenu && <BurgerMenu />}
                  </nav>
               </div>
            </div>

            <div className={css.header_light}>
               <div className={css.header_light_wrap}>
                  <div className={css.navbar}>
                     <Link to={'/'} className={css.logo}><span>МАРКЕТ ПЛЕЙС</span></Link>
                     <div className={css.catalog}>КАТАЛОГ</div>
                     <div className={css.search}>Искать</div>
                     <NavbarUser menu={userMenu} />
                  </div>

                  <NavbarCategories />
               </div>
            </div>
         </>
      </header >
   )
}
export default Header;