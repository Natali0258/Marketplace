import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getModal, closeBurgerMenu, getRegAndLogForm, output } from '../../../store/actions/userActions';
import { FaUser } from 'react-icons/fa';
import css from './NavbarUser.module.css';

const NavbarUser = ({ active, menu }) => {
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.user.isAuth)

   const navigate = useNavigate()

   const handleClick = (e) => {
      //console.log('корзина', e.target.path)
      // dispatch(goToSellerInterface());
      dispatch(closeBurgerMenu())
   }

   const handleSignin = (e) => {
      dispatch(getModal())
      dispatch(getRegAndLogForm())
   }

   const handleOutput = (e) => {
      dispatch(output())
      navigate('/')
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
            <FaUser className={css.user} />
         </div>

         {isAuth ?
            <button className={css.btn} onClick={handleOutput}>Выйти</button> :
            <button className={css.btn} onClick={handleSignin}>Войти</button>}

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