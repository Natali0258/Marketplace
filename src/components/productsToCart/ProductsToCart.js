import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletefromCart } from '../../store/actions/cartActions.js';
import { FaTrash } from 'react-icons/fa';
import css from './ProductsToCart.module.css';

const ProductsToCart = () => {
   const productsToCart = useSelector(state => state.cart.cart.products);
   const summa = useSelector(state => state.cart.cart.price);
   const dispatch = useDispatch();

   const showShopping = (productsToCart) => {
      return (
         <div>
            {productsToCart.map(item =>
               <div key={item.id} className={css.product}>
                  <Link to={`/choose/${item.id}`}>
                     <img src={"../../images/" + item.images[0]} alt=" " className={css.image} />
                  </Link>
                  <div className={css.text}>
                     <p>{item.name}</p>
                     <b>{item.price} руб</b>
                  </div>
                  <FaTrash className={css.delete_icon}
                     onClick={() => { dispatch(deletefromCart(item)) }} />
               </div>
            )}
            {/* <p className={css.summa}>Сумма: {summa} руб</p> */}
            {/* //для корректного вывода суммы с двумя знаками после запятой */}
            <p className={css.summa}>Сумма: {new Intl.NumberFormat().format(summa)} руб</p>
         </div>
      )
   }

   const showNithing = () => {
      return (
         <h2 className={css.showNithing}>В корзине нет товара</h2>
      )
   }

   return (
      <div className={css.myShopping}>
         {productsToCart.length > 0 ? showShopping(productsToCart) : showNithing()}
      </div>
   )
}
export default ProductsToCart;