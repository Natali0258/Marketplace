import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { regUserSuccess, regUserError, closeRegForm, getRegAndLogForm } from '../../store/actions/userActions';
import { createRequest } from '../../fatch/cteateRequest';
import MessageAboutResult from '../messageAboutResult/MessageAboutResult';
import css from './Register.module.css';

const Register = () => {
   const isRegForm = useSelector(state => state.user.isRegForm)
   const isRegError = useSelector(state => state.user.isRegError)
   const isReg = useSelector(state => state.user.isReg)

   const dispatch = useDispatch()

   const [value, setValue] = useState({
      nickname: '',
      email: '',
      password: '',
      type: ''
   })

   const handleChange = (e) => {
      const fieldName = e.target.name;
      setValue({ ...value, [fieldName]: e.target.value })
   }

   const closeForm = (e) => {
      dispatch(closeRegForm())
      dispatch(getRegAndLogForm())
   }

   const handleSubmitRegistr = async (e) => {
      e.preventDefault()

      const user = {
         nickname: value.nickname,
         email: value.email,
         password: value.password,
         type: 'user'
      }

      createRequest("register", "POST",
         {
            "nickname": `${user.nickname}`,
            "email": `${user.email}`,
            "password": `${user.password}`,
            "type": `${user.type}`
         }, false, dispatch)
   }

   return (
      <>
         {isRegForm &&
            <div className={css.register}>
               <div className={css.cross}>
                  <div></div>
                  <FaTimes className={css.icon_cross} onClick={closeForm} />
               </div>
               {(!isRegError && !isReg) &&
                  <form className={css.form} onSubmit={handleSubmitRegistr}>
                     <div className={css.container}>
                        <label htmlFor="nickname" className={css.label}>Имя:</label>
                        <input id="nickname"
                           type="text"
                           name="nickname"
                           value={value.nickname}
                           placeholder="Ivan"
                           onChange={handleChange} />
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
                           <button type='submit' className={css.button__submit}>{'Регистрация'}</button>
                        </div>
                     </div >
                  </form >
               }
               {isRegError && <MessageAboutResult />}
               {(!isRegError && isReg) && <MessageAboutResult />}
            </div>
         }
      </>
   )
}
export default Register;