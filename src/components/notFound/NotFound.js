import css from './NotFound.module.css'

const NotFound = () => {
   return (
      <div className={css.not__found} >
         <div className={css.wrapper} >
            <h1 className={css.title}>404</h1>
            <p className={css.text}>Страница не существует.</p>
            <p className={css.text}>Кликните пункт меню "МАРКЕТПЛЕЙС".</p>
         </div>
      </div >
   )
}
export default NotFound;