import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { closeBurgerMenu, getModal, getRegForm } from '../../store/actions/userActions';
import { output } from '../../store/actions/userActions';
import NavbarCompany from '../navbar/navbarCompany/NavbarCompany';
import NavbarUser from '../navbar/navbarUser/NavbarUser';
import { buyerMenu } from '../../data/constants';
import { userMenu } from '../../data/constants';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
   const [isNavbarActive, setNavbarActiv] = useState(true)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const isBurgerMenu = useSelector(state => state.user.isBurgerMenu)
   const isAuth = useSelector(state => state.user.isAuth)
   console.log('userMenu=', userMenu)
   return (
      <>
         {isBurgerMenu &&
            (<div className={css.menu}>
               <div className={css.content}>
                  <div className={css.menuTop}>
                     <div className={css.logo}>МАРКЕТ ПЛЕЙС</div>
                     <div className={css.close}
                        onClick={() => {
                           dispatch(closeBurgerMenu())
                           setNavbarActiv(false)
                        }}
                     >&#10006;
                     </div>
                  </div>
                  <div className={css.wrapper}>
                     <div>
                        <NavbarCompany active={isNavbarActive} menu={buyerMenu} />
                        <NavbarUser active={isNavbarActive} menu={userMenu} />

                        <div className={css.buttons}>
                           {!isAuth &&
                              // (<>
                              //    <button className={css.reg} type='button'
                              //       onClick={() => {
                              //          dispatch(getModal());
                              //          dispatch(getRegForm())
                              //       }}>Регистрация</button>

                              //    <button className={css.auth} type='button'
                              //       onClick={() => {
                              //          dispatch(getModal());
                              //          //dispatch(getAuthorization());
                              //       }}>Вход</button>
                              // </>)

                              <button className={css.reg} type='button'
                                 onClick={() => {
                                    dispatch(getModal());
                                    dispatch(getRegForm())
                                 }}>ЛИЧНЫЙ КАБИНЕТ</button>
                           }

                           {isAuth &&
                              (<>
                                 <button className={css.auth} type='button'
                                    onClick={() => {
                                       dispatch(output());
                                       navigate("/");
                                       localStorage.removeItem('token')
                                    }}>Выход</button>
                              </>)
                           }
                        </div>
                     </div>
                  </div>
               </div>
            </div>)
         }
      </>
   )
}
export default BurgerMenu;