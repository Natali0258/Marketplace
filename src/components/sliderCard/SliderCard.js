import { Link } from 'react-router-dom';
import css from './SliderCard.module.css';

const SliderCard = (props) => {
   const { id, images, name } = props.item;

   return (
      <div className={css.card}>
         <div className={css.box} >
            <Link to={`/choose/${id}`}>
               <img src={"../../images/" + images[0]} alt=" " className={css.image} />
            </Link>
         </div>
         <h2 className={css.product}>{name}</h2>
      </div>
   )
}
export default SliderCard;