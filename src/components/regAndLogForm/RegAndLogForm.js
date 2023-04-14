import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRegForm, closeRegAndLogForm, getLogForm } from '../../store/actions/userActions'
import css from './RegAndLogForm.module.css';

const RegAndLogForm = () => {
   const isRegAndLogForm = useSelector(state => state.user.isRegAndLogForm)

   const dispatch = useDispatch()

   const openLogForm = () => {
      dispatch(closeRegAndLogForm())
      dispatch(getLogForm())
   }
   const openRegForm = () => {
      dispatch(closeRegAndLogForm())
      dispatch(getRegForm())
   }

   return (
      <>
         {isRegAndLogForm &&
            <div className={css.form}>
               {/* <div className={css.cross}>
                  <div></div>
                  <FaTimes className={css.icon_cross} onClick={handleForm} />
               </div> */}
               <div className={css.wrapper}>
                  <h1 className={css.title}>СОЗДАТЬ БИЗНЕС</h1>
                  <button className={css.button_log}
                     onClick={openLogForm}>ВОЙТИ</button>
                  <button className={css.button_reg}
                     onClick={openRegForm}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
               </div>
            </div>
         }
      </>
   )
}
export default RegAndLogForm;