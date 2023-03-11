import HeaderSeller from '../headerSeller/HeaderSeller';
import MainSeller from '../mainSeller/MainSeller';
import css from './AppSeller.module.css';

const AppSeller = () => {
   return (
      <div className={css.app}>
         <HeaderSeller />
         <MainSeller />
      </div>
   );
}

export default AppSeller;