import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import { Suspense } from 'react';
import AppSeller from '../appSeller/AppSeller';
import AppUser from '../appUser/AppUser';
import Modal from '../modal.js/Modal';
import FeedbackForm from '../feedbackForm/FeedbackForm';
import RegAndLogForm from '../regAndLogForm/RegAndLogForm';
import RegAndLogFormSeller from '../regAndLogFormSeller/RegAndLogFormSeller';
import Register from '../register/Register';
import RegisterSeller from '../registerSeller/RegisterSeller';
import Login from '../login/Login';
import LoginSeller from '../loginSeller/LoginSeller';
import css from './App.css';
import { useLocation } from 'react-router-dom';

function App() {
  const isSeller = useSelector(state => state.seller.isSeller);
  const isModalActive = useSelector(state => state.user.isModalActive);
  const isFeedbackForm = useSelector(state => state.cart.isFeedbackForm);
  const isRegAndLogForm = useSelector(state => state.user.isRegAndLogForm);
  const isRegForm = useSelector(state => state.user.isRegForm);
  const isLogForm = useSelector(state => state.user.isLogForm);

  const isRegAndLogFormSeller = useSelector(state => state.seller.isRegAndLogFormSeller);
  const isRegFormSeller = useSelector(state => state.seller.isRegFormSeller);
  const isLogFormSeller = useSelector(state => state.seller.isLogFormSeller);

  const location = useLocation()
  return (
    <Suspense fallbeack={'Loading...'}>
      <div className={css.app}>
        {isSeller ? <AppSeller /> : <AppUser />}
        {location.pathname === "/"
          || location.pathname === "/category"
          || location.pathname === "/choose"
          || location.pathname === "/cart"
          || location.pathname === "/favorites"
          || location.pathname === "/orders"
          || location.pathname === "/login"
          || location.pathname === "/register"
          || location.pathname === "/sellerInfoPage"
          || location.pathname === "/sellerInfoPage/mainPage"
          || location.pathname === "/sellerInfoPage/products" ?
          <Footer />
          : ""}
        <Modal active={isModalActive}>
          {isFeedbackForm && <FeedbackForm />}
          {isRegAndLogForm && <RegAndLogForm />}
          {isRegForm && <Register />}
          {isLogForm && <Login />}

          {isRegAndLogFormSeller && <RegAndLogFormSeller />}
          {isRegFormSeller && <RegisterSeller />}
          {isLogFormSeller && <LoginSeller />}
        </Modal>
      </div>
    </Suspense >
  );
}

export default App;
