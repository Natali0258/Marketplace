import { FaUser } from 'react-icons/fa';
import css from './Feedback.module.css';

const Feedback = ({ feedback, style }) => {

   return (
      <div className={css.feedback} style={style}>
         <div className={css.feedback_wrap}>
            <div className={css.wrap}>
               <div className={css.profile}>
                  <FaUser className={css.boyer} />
               </div>
               <div className={css.info}>
                  <p className={css.boyerName}>{feedback.boyerName}</p>
                  <p className={css.date}>{feedback.date}</p>
               </div>
            </div>
            <div className={css.text}>{feedback.text}</div>
         </div>
      </div >
   )
}
export default Feedback;