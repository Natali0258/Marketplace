import { useDispatch, useSelector } from 'react-redux'
import { getRegFormSeller, getLogFormSeller, closeRegAndLogFormSeller } from '../../store/actions/sellerActions'
import css from './RegAndLogFormSeller.module.css'

const RegAndLogFormSeller = () => {
   const isRegAndLogFormSeller = useSelector(state => state.seller.isRegAndLogFormSeller)

   const dispatch = useDispatch()

   const openLogForm = () => {
      dispatch(closeRegAndLogFormSeller())
      dispatch(getLogFormSeller())
   }
   const openRegForm = () => {
      dispatch(closeRegAndLogFormSeller())
      dispatch(getRegFormSeller())
   }

   return (
      <>
         {isRegAndLogFormSeller &&
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
export default RegAndLogFormSeller;