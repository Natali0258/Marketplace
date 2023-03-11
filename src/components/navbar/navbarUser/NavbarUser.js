import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { goToSellerInterface } from '../../../store/actions/sellerActions';
import { getModal, getRegForm } from '../../../store/actions/userActions';
import { closeBurgerMenu } from '../../../store/actions/userActions';
import { FaUser } from 'react-icons/fa';
import css from './NavbarUser.module.css';

const NavbarUser = ({ active, menu }) => {
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.user.isAuth)
   // const menu = [
   //    {
   //       id: 1,
   //       path: "/orders",
   //       name: "Заказы"
   //    },
   //    {
   //       id: 2,
   //       path: "/favorites",
   //       name: "Избранное"
   //    },
   //    {
   //       id: 3,
   //       path: "/cart",
   //       name: "Корзина"
   //    }
   // ]

   const handleClick = (e) => {
      //console.log('корзина', e.target.path)
      // dispatch(goToSellerInterface());
      dispatch(closeBurgerMenu())
   }

   const openRegistrationForm = (e) => {
      dispatch(getModal())
      dispatch(getRegForm())
   }

   return (
      <div className={active ? css.navbarBurgerMenu : css.header_user}>
         <nav>
            <ul className={active ? css.navbarBurgerMenu : css.navbar_nav}>
               {menu.map(item =>
                  <li key={item.id}>
                     <p onClick={handleClick}>
                        <Link to={item.path}
                           className={active ? css.userBurgerMenu : css.navbar_user_item}>
                           {item.name}
                        </Link>
                     </p>
                  </li>
               )}
            </ul>
         </nav>

         <div className={css.profile}>
            <FaUser className={css.user} onClick={openRegistrationForm} />
         </div>

         {/* {isAuth &&
            (<>
               <button className={active ? css.authBurgerMenu : css.authorization} type='button'
                  onClick={() => {
                     dispatch(output());
                     navigate("/");
                     localStorage.removeItem('token')
                  }}>Выход</button>
            </>)
         } */}

      </div>
   )
}
export default NavbarUser; 