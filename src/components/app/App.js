import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import AppSeller from '../appSeller/AppSeller';
import AppUser from '../appUser/AppUser';
import Modal from '../modal.js/Modal';
import FeedbackForm from '../feedbackForm/FeedbackForm';
import css from './App.css';
import Registration from '../registration/Registration';

function App() {
  const isSeller = useSelector(state => state.seller.isSeller);
  const isModalActive = useSelector(state => state.user.isModalActive);
  const isFeedbackForm = useSelector(state => state.cart.isFeedbackForm);
  const isRegForm = useSelector(state => state.user.isRegForm)

  return (
    <div className={css.app}>
      {isSeller ? <AppSeller /> : <AppUser />}
      <Footer />
      <Modal active={isModalActive}>
        {isFeedbackForm && <FeedbackForm />}
        {isRegForm && <Registration />}
      </Modal>
    </div>
  );
}

export default App;
