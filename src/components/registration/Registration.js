import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import css from './Registration.module.css';

const Registration = () => {
   const isRegForm = useSelector(state => state.user.isRegForm)
   const [isForm, setForm] = useState(false)

   const [value, setValue] = useState({
      email: '',
      password: ''
   })

   const handleChange = (e) => {
      const fieldName = e.target.name;
      setValue({ ...value, [fieldName]: e.target.value })
   }

   // const handleForm = (e) => {

   // }

   const handleSubmitRegistration = async (e) => {
      e.preventDefault()
      console.log('submit')

      const user = {
         email: value.email,
         password: value.password
      }
      console.log('user=', user)
      await fetch("http://localhost/3001/register", {
         method: "POST",
         body: JSON.stringify({
            "email": `${user.email}`,
            "password": `${user.password}`
         }),
         headers: { "Content-Type": "application/json" }
      })
         .then(response => { return response.json() })
         .then(data =>
            console.log('data=', data))
      console.log('data=')
   }

   return (
      <>
         {isRegForm &&
            <div className={css.registration}>
               {/* <div className={css.cross}>
                  <div></div>
                  <FaTimes className={css.icon_cross} onClick={handleForm} />
               </div> */}
               {!isForm &&
                  <div className={css.wrapper}>
                     <h1 className={css.title}>СОЗДАТЬ БИЗНЕС</h1>
                     <button className={css.button_entry} onClick={() => setForm(true)}>ВОЙТИ</button>
                     <button className={css.button_reg} onClick={() => setForm(true)}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                  </div>
               }

               {isForm &&
                  <form className={css.form} onSubmit={handleSubmitRegistration}>
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
                           <button type='submit' className={css.button_submit}>{'Регистрация'}</button>
                        </div>
                     </div >
                  </form >
               }
            </div>
         }
      </>
   )
}
export default Registration;