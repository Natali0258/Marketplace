import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { closeLogFormSeller, getRegAndLogFormSeller } from '../../store/actions/sellerActions'
import { createRequest } from '../../fatch/cteateRequest'
import css from './LoginSeller.module.css'
import MessageAboutResult from '../messageAboutResult/MessageAboutResult'

const LoginSeller = () => {
   const isLogFormSeller = useSelector(state => state.seller.isLogFormSeller)
   const isLogErrorSeller = useSelector(state => state.seller.isLogErrorSeller)

   const dispatch = useDispatch()

   const [value, setValue] = useState({
      email: '',
      password: ''
   })

   const handleChange = (e) => {
      const fieldName = e.target.name;
      setValue({ ...value, [fieldName]: e.target.value })
   }

   const closeForm = (e) => {
      dispatch(closeLogFormSeller())
      dispatch(getRegAndLogFormSeller())
   }

   const handleSubmitLogin = async (e) => {
      e.preventDefault()

      const user = {
         email: value.email,
         password: value.password
      }

      await createRequest("signin", "POST",
         {
            "email": `${user.email}`,
            "password": `${user.password}`
         }, false, dispatch)

      setValue({
         email: '',
         password: ''
      })
   }

   return (
      <>
         {isLogFormSeller &&
            <div className={css.login}>
               <div className={css.cross}>
                  <div></div>
                  <FaTimes className={css.icon_cross} onClick={closeForm} />
               </div>
               {!isLogErrorSeller &&
                  <form className={css.form} onSubmit={handleSubmitLogin}>
                     <div className={css.container}>
                        <label htmlFor="email" className={css.label}>E-mail:</label>
                        <input id="email"
                           type="text"
                           name="email"
                           value={value.email}
                           placeholder="IvanovIvan@mail.ru"
                           onChange={handleChange} />
                        <label htmlFor="password" className={css.label}>Пароль:</label>
                        <input id="password"
                           type="text"
                           name="password"
                           value={value.password}
                           placeholder="********"
                           minLength={'8'} //минимальное кол-во знаков
                           required={'required'}
                           onChange={handleChange} />
                        <div className={css.btn}>
                           <button type='submit' className={css.button_submit}>{'Авторизация'}</button>
                        </div>
                     </div >
                  </form >
               }
               {isLogErrorSeller && <MessageAboutResult />}
            </div>
         }
      </>
   )
}
export default LoginSeller;