import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { closeLogForm, getRegAndLogForm } from '../../store/actions/userActions'
import { createRequest } from '../../fatch/cteateRequest'
import css from './Login.module.css'
import MessageAboutResult from '../messageAboutResult/MessageAboutResult'

const Login = () => {
   const isLogForm = useSelector(state => state.user.isLogForm)
   const isLogError = useSelector(state => state.user.isLogError)

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
      dispatch(closeLogForm())
      dispatch(getRegAndLogForm())
   }

   const handleSubmitLogin = async (e) => {
      e.preventDefault()

      const user = {
         email: value.email,
         password: value.password
      }

      await createRequest("login", "POST",
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
         {isLogForm &&
            <div className={css.login}>
               <div className={css.cross}>
                  <div></div>
                  <FaTimes className={css.icon_cross} onClick={closeForm} />
               </div>
               {!isLogError &&
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
               {isLogError && <MessageAboutResult />}
            </div>
         }
      </>
   )
}
export default Login;