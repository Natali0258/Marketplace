import { useSelector } from 'react-redux';
import SellerInfoPage from '../sellerInfoPage/SellerInfoPage';
import Seller from '../seller/Seller';
import css from './SellerMainPage.module.css';

const SellerMainPage = () => {
   const isAuthSeller = useSelector(state => state.seller.isAuthSeller)

   return (
      <div>
         {isAuthSeller ? <Seller /> : <SellerInfoPage />}
      </div>
   )
}
export default SellerMainPage;