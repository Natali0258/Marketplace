import css from './Favorites.module.css';

const Favorites = () => {

   return (
      <div className={css.favorites}>
         <div className={css.wrapper}>
            <p className={css.name}>Избранное</p>
         </div>
      </div>
   )
}
export default Favorites;