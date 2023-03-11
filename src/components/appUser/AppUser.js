import Header from '../header/Header';
import Main from '../main/Main';
import css from './AppUser.module.css';

const AppUser = () => {
   return (
      <div className={css.app}>
         <Header />
         <Main />
      </div>
   );
}

export default AppUser;