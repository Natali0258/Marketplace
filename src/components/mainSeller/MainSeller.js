import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SellerInfoPage from '../sellerInfoPage/SellerInfoPage';
import SellerMainPage from '../sellerMainPage/SellerMainPage';
import Seller from '../seller/Seller';
import css from './MainSeller.module.css';

const MainSeller = () => {
   return (
      <div className={css.main} >
         <Routes>
            <Route exact path="/sellerMainPage" element={<SellerMainPage />} />
            <Route path="/sellerMainPage/sellerInfoPage" element={<SellerInfoPage />} />
            <Route path="/sellerMainPage/seller" element={<Seller />} />

            {/* <Route path="/news" element={<Seller />} />
            <Route path="/training" element={<Seller />} />
            <Route path="/partners" element={<Seller />} />
            <Route path="/commissions" element={<Seller />} />
            <Route path="/analytics" element={<Seller />} /> */}
            {/* <Route path="*" element={<MainPage />} /> */}
         </Routes>
      </div >
   )
}
export default MainSeller;