import { useSelector } from 'react-redux';
import css from './SellerMainPage.module.css';

const SellerMainPage = () => {
   const isAuthSeller = useSelector(state => state.seller.isAuthSeller)

   return (
      <>
         {isAuthSeller &&
            <div className={css.seller}>
               <div className={css.wrapper}>
                  <h3>Настройки</h3>
                  <div className={css.container}>
                     <div className={css.settingsMenu}>
                        <h4>Управление аккаунтом</h4>
                        <nav>
                           <ul className={css.list}>
                              <li>Имя и пароль</li>
                              <li>Сотрудники</li>
                              <li>Мои уведомления</li>
                              <li>Чаты и отзывы</li>
                              <li>API</li>
                              <li>Документооборот</li>
                              <li>Склады и регионы</li>
                              <li>Информация о компании</li>
                              <li>Договоры</li>
                           </ul>
                        </nav>
                     </div>
                     <div className={css.settingsMenuItems}></div>
                  </div>
               </div>
            </div>
         }
      </>
   )
}
export default SellerMainPage;