import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/actions/cartActions';
import cart from '../../images/cart.svg';
import star from '../../images/star.svg';
import css from './Card.module.css';

const Card = ({ item }) => {
   const { id, images, name, price } = item;
   const dispatch = useDispatch();

   const addProductToCart = (e) => {
      dispatch(addToCart(item))
   }
   return (
      <div className={css.card}>
         <div className={css.box}>
            <Link to={`/choose/${id}`}>
               <img src={"../../images/" + images[0]} alt=" " className={css.image} />
            </Link>
         </div>
         <b>{price}руб</b>
         <h4>{name}</h4>
         <div className={css.icons}>
            <div className={css.stars}>
               <p>{'Отзывы'}</p>
               <img src={star} alt="" />
               <img src={star} alt="" />
               <img src={star} alt="" />
               <img src={star} alt="" />
               <img src={star} alt="" />
            </div>
            <img src={cart} alt="" className={css.app_to_cart}
               onClick={addProductToCart} />
         </div>
      </div>
   )
}
export default Card;