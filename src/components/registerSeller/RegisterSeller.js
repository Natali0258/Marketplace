import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRequest } from '../../fatch/cteateRequest';
import { getRegAndLogForm } from '../../store/actions/userActions';
import { closeRegFormSeller } from '../../store/actions/sellerActions';
import { FaTimes } from 'react-icons/fa';
import MessageAboutResult from '../messageAboutResult/MessageAboutResult';
import css from './RegisterSeller.module.css';

const RegisterSeller = () => {
   const isRegFormSeller = useSelector(state => state.seller.isRegFormSeller)
   const isRegErrorSeller = useSelector(state => state.seller.isRegErrorSeller)
   const isRegSeller = useSelector(state => state.seller.isRegSeller)

   const dispatch = useDispatch()

   const [value, setValue] = useState({
      name: '',
      inn: '',
      email: '',
      password: '',
      type: ''
   })

   const handleChange = (e) => {
      const fieldName = e.target.name;
      setValue({ ...value, [fieldName]: e.target.value })
   }

   const closeForm = (e) => {
      dispatch(closeRegFormSeller())
      dispatch(getRegAndLogForm())
   }

   const handleSubmitRegistr = async (e) => {
      e.preventDefault()

      const seller = {
         name: value.name,
         inn: value.inn,
         email: value.email,
         password: value.password,
         type: 'seller'
      }

      createRequest("signup", "POST",
         {
            "name": `${seller.name}`,
            "inn": `${seller.inn}`,
            "email": `${seller.email}`,
            "password": `${seller.password}`,
            "type": `${seller.type}`
         }, false, dispatch)
   }
   return (
      <>
         {isRegFormSeller &&
            <div className={css.register}>
               <div className={css.cross}>
                  <div></div>
                  <FaTimes className={css.icon_cross} onClick={closeForm} />
               </div>
               {(!isRegErrorSeller && !isRegSeller) &&
                  <form className={css.form} onSubmit={handleSubmitRegistr}>
                     <div className={css.container}>
                        <label htmlFor="name" className={css.label}>Имя:</label>
                        <input id="name"
                           type="text"
                           name="name"
                           value={value.name}
                           placeholder="DNS"
                           onChange={handleChange} />
                        <label htmlFor="inn" className={css.label}>ИНН:</label>
                        <input id="inn"
                           type="text"
                           name="inn"
                           value={value.inn}
                           placeholder="54001134"
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
               {/* {isRegError && <MessageAboutResult />} */}
               {(!isRegErrorSeller && isRegSeller) && <MessageAboutResult />}
            </div>
         }
      </>
   )
}
export default RegisterSeller;