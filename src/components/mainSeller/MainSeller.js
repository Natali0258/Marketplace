import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SellerInfoPage from '../sellerInfoPage/SellerInfoPage';
import SellerMainPage from '../sellerMainPage/SellerMainPage';
import SellerProducts from '../sellerProducts/SellerProducts';
import NotFound from '../notFound/NotFound';
import css from './MainSeller.module.css';

const MainSeller = () => {

   return (
      <div>
         <Routes>
            <Route exact path="/sellerInfoPage" element={<SellerInfoPage />} />
            <Route exact path="/sellerInfoPage/mainPage" element={<SellerMainPage />} />
            <Route path="/sellerInfoPage/products" element={<SellerProducts />} />
            <Route path="/sellerInfoPage/*" element={<NotFound />} />
            {/* <Route path="/news" element={<News />} />
            <Route path="/training" element={<Training />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/analytics" element={<Analytics />} /> */}
         </Routes>
      </div>
   )
}
export default MainSeller;