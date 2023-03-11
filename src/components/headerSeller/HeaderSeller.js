import { useDispatch, useSelector } from 'react-redux';
import { getBurgerMenu } from '../../store/actions/userActions';
import CityDroupDown from '../cityDroupDown/CityDroupDown';
import NavbarCompany from '../navbar/navbarCompany/NavbarCompany';
import NavbarUser from '../navbar/navbarUser/NavbarUser';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { getModal, getRegForm } from '../../store/actions/userActions';
import css from './HeaderSeller.module.css';
import { sellerMenu, sellerLightMenu } from '../../data/constants';

const HeaderSeller = () => {
   const dispatch = useDispatch();
   const isBurgerMenu = useSelector(state => state.user.isBurgerMenu);
   console.log("isBurgerMenu=", isBurgerMenu)
   const isAuthSeller = useSelector(state => state.seller.isAuthSeller)
   console.log('isAuthSeller=', isAuthSeller)

   const openRegistrationForm = (e) => {
      dispatch(getModal())
      dispatch(getRegForm())
   }

   return (
      <div className={css.header}>
         <div className={css.header_dark}>
            <div className={css.header_dark_wrap}>
               <div className={css.header_dark_left}>
                  <button className={css.language}>RU</button>
                  <CityDroupDown />
                  <div className={css.logo}><span>МАРКЕТ ПЛЕЙС</span></div>

                  <button className={css.enter_second}
                     onClick={openRegistrationForm}>ВОЙТИ</button>
               </div>

               <div className={css.header_dark_right}>
                  <NavbarCompany active={isBurgerMenu} menu={sellerMenu} />
                  <button className={css.enter_first}
                     onClick={openRegistrationForm}>ВОЙТИ</button>
               </div>

               <nav className={css.burgerMenu}>
                  <div className={css.burgerButton} onClick={() => dispatch(getBurgerMenu())} >
                     <span />
                  </div>
                  {isBurgerMenu && <BurgerMenu />}
               </nav>
            </div>
         </div>
         {isAuthSeller &&
            <div className={css.header_light}>
               <div className={css.header_light_wrap}>
                  <NavbarCompany menu={sellerLightMenu} activ={isBurgerMenu} />
               </div>
            </div>
         }
      </div >
   )
}
export default HeaderSeller; 