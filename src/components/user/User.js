import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import css from './User.module.css';

function User() {
   return (
      <div className={css.user}>
         <Header />
         <Main />
         <Footer />
      </div>
   );
}

export default User;