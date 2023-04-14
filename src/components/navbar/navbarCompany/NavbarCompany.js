import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { goToSellerInterface } from '../../../store/actions/sellerActions';
import { closeBurgerMenu } from '../../../store/actions/userActions';
import css from './NavbarCompany.module.css';

const NavbarCompany = ({ active, menu }) => {
   //console.log('active=', active)
   //console.log('menu=', menu)
   const dispatch = useDispatch();

   const handleClick = (e) => {
      //console.log('лк', e.target)
      dispatch(goToSellerInterface());
      dispatch(closeBurgerMenu())
   }

   return (
      <div className={active ? css.navbarBurgerMenu : css.header_right}>
         <nav>
            <ul className={active ? css.navBurgerMenu : css.nav}>
               {menu.map(item =>
                  <li key={item.id} className={active ? css.companyBurgerMenu : css.navbar_company}>
                     <Link to={item.path} >
                        <p className={active ? css.companyBurgerMenu : css.navbar_company}
                           onClick={handleClick}>
                           {item.name}
                        </p>
                     </Link>
                  </li>
               )}
            </ul>
         </nav>
      </div>
   )
}
export default NavbarCompany; 