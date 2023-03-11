import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router";
import { getModal } from '../../store/actions/userActions';
import { openFeedbackForm } from '../../store/actions/cartActions';
import Feedback from '../feedback/Feedback';
import products from '../../data/products';
import css from './Feedbacks.module.css';

const Feedbacks = () => {
   const params = useParams();
   const { productId } = params;
   const navigate = useNavigate();
   const dispatch = useDispatch()
   //const [isFeedbackForm, setFeedbackForm] = useState(false);
   //const isFeedbackForm = useSelector(state => state.cart.isFeedbackForm);
   const item = products.products.find(product => product.id === parseFloat(productId))
   const feedbacks = useSelector(state => state.cart.feedbacks)

   const writeFeetback = () => {
      dispatch(openFeedbackForm())
      dispatch(getModal())
   }

   return (
      <div className={css.feedbacks}>
         <div className={css.wrapper}>
            <div className={css.buttons}>
               <button onClick={() => navigate(-1)}>Back</button>
               <button onClick={writeFeetback}>Написать отзыв</button>
            </div>
            <p className={css.feedbacks}>ОТЗЫВЫ</p>
            {feedbacks.map(feedback =>
               <div key={feedback.id}>
                  <Feedback feedback={feedback} style={{ height: 'auto' }} />
                  {feedback.photos.map((photo, index) => (
                     <img src={"../../../images/" + photo} alt=" " key={index} className={css.photo} />
                     //<img src={photo} alt=" " key={index} className={css.photo} />
                  ))}
               </div>
            )}
            {item.feedbacks.map(feedback =>
               <div key={feedback.id}>
                  <Feedback feedback={feedback} style={{ height: 'auto' }} />
                  {feedback.photos.map((photo, index) => (
                     <img src={"../../../images/" + photo} alt=" " key={index} className={css.photo} />
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}
export default Feedbacks;