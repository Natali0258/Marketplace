import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createRequest } from '../../fatch/cteateRequest'
import { closeModal, closeRegForm, closeLogUserError, closeRegUserError } from '../../store/actions/userActions'
import { closeLogSellerError } from '../../store/actions/sellerActions'
import css from './MessageAboutResult.module.css'

const MessageAboutResult = () => {
   const isRegError = useSelector(state => state.user.isRegError)
   const isLogError = useSelector(state => state.user.isLogError)
   const isReg = useSelector(state => state.user.isReg)
   const isRegSeller = useSelector(state => state.seller.isRegSeller)
   const isLogErrorSeller = useSelector(state => state.seller.isLogErrorSeller)
   const isSeller = useSelector(state => state.seller.isSeller)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleSignin = async () => {
      await createRequest("login", "POST",
         {
            "email": `${localStorage.getItem('email')}`,
            "password": `${localStorage.getItem('password')}`
         }, false, dispatch)
      dispatch(closeRegUserError())
      dispatch(closeRegForm())
      dispatch(closeModal())
      navigate('/')
   }
   const openLogForm = () => {
      if (!isSeller) {
         dispatch(closeLogUserError())
      } else {
         dispatch(closeLogSellerError())
      }
   }

   return (

      <div className={css.message}>
         {isRegError && <>
            <h1 className={css.title}>Пользователь с таким email уже существует</h1>
            <button className={css.button_log}
               onClick={handleSignin}>ВОЙТИ</button>
         </>
         }
         {(isLogError || isLogErrorSeller) && <>
            <h1 className={css.title__log__error}>Неверный логин или пароль!</h1>
            <p className={css.text}>Повторите процедуру авторизации</p>
            <button className={css.button_log}
               onClick={openLogForm}>ВОЙТИ</button>
         </>
         }
         {isReg && <>
            <h1 className={css.title}>Пользователь зарегистрирован!</h1>
            <button className={css.button_log}
               onClick={handleSignin}>ВОЙТИ</button>
         </>
         }
         {isRegSeller && <>
            <h1 className={css.title}>Продавец зарегистрирован!</h1>
            <button className={css.button_log}
               onClick={handleSignin}>ВОЙТИ</button>
         </>
         }
      </div>

   )
}
export default MessageAboutResult;