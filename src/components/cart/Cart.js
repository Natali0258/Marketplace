// import { useDispatch, useSelector } from 'react-redux';
//import { deletefromCart } from '../../store/actions/cartActions.js';
import recommendations from '../../data/products.js';
import offer from '../../data/offer.js';
import ProductsToCart from '../productsToCart/ProductsToCart';
import Card from '../card/Card.js';
import OfferCard from '../offerCard/OfferCard.js';
//import { FaTrash } from 'react-icons/fa';
import css from './Cart.module.css';

const Cart = () => {
   return (
      <div className={css.cart}>
         <div className={css.wrapper}>
            <h2 className={css.name}>Мои покупки</h2>
            <div className={css.container}>
               <ProductsToCart />
               <div className={css.go_to_checkout}>
                  <button className={css.button}>Перейти к оформлению</button>
               </div>
            </div>

            <h2>Рекомендации</h2>
            <div className={css.recommendations}>
               {recommendations.products.map(el => (
                  <Card key={el.id} item={el} />
               ))
               }
            </div>

            <div className={css.offer}>
               {offer.offer.map(el => (
                  <OfferCard key={el.id} item={el}
                     style={{}} />
               ))
               }
            </div>
         </div>
      </div>
   )
}
export default Cart;  
