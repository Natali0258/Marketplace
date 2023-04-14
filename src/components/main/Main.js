import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../mainPage/MainPage';
import ChooseProduct from '../chooseProduct/ChooseProduct';
import ProductCard from '../productCard/ProductCard';
import Cart from '../cart/Cart';
import Feedbacks from '../feedbacks/Feedbacks';
import Favorites from '../favorites/Favorites';
import Orders from '../orders/Orders';
import products from '../../data/products';
import offer from '../../data/offer';
import Category from '../category/Category';
import Login from '../login/Login';
import Register from '../register/Register';
import NotFound from '../notFound/NotFound';
import css from './Main.module.css';

const Main = () => {
   return (
      <div className={css.main} >
         <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/choose" element={<ChooseProduct items={products} />} />
            <Route path="/choose/:productId" element={<ProductCard />} />
            <Route path="/choose/:productId/feedbacks/:productId" element={<Feedbacks />} />
            <Route path="/cart" element={<Cart items={offer} />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/buyer" element={<Buyer />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/places" element={<Places />} />
            <Route path="/help" element={<Help />} /> */}
         </Routes>
      </div >
   )
}
export default Main;