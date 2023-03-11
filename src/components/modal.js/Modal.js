import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/actions/userActions';
import css from './Modal.module.css';

const Modal = ({ active, children }) => {
   const dispatch = useDispatch();
   console.log('active=', active)
   return (
      <div className={active ? css.modalactive : css.modal}
         onClick={() => {
            dispatch(closeModal());
            // dispatch(closeRegistration());
            // dispatch(closeAuthorization());
         }
         }>
         <div className={active ? css.modal__contentaction : css.modal__content}
            onClick={(e) => { e.stopPropagation() }}>
            {children}
         </div>
      </div >

   );
};

export default Modal;