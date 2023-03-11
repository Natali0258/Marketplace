import SliderPromotions from '../slider/SliderPromotions';
import Slider from '../slider/Slider';
import OfferCard from '../offerCard/OfferCard';
import products from '../../data/products.js';
import promotions from '../../data/promotions.js';
import offer from '../../data/offer';
import css from './MainPage.module.css';

const MainPage = () => {

   return (
      <div className={css.main_page}>
         <div className={css.wrapper}>
            <section>
               <SliderPromotions data={promotions} />
            </section>

            <section className={css.products}>
               <h2>Предложение</h2>
               <Slider data={products} isProduct={true} />
            </section>

            <section>
               <SliderPromotions data={promotions} />
            </section>

            <section className={css.products}>
               <h2>Предложение</h2>
               <Slider data={products} isProduct={true} />
            </section>

            <section>
               <SliderPromotions data={promotions} />
            </section>

            <section className={css.offer}>
               {offer.offer.map(el => (
                  <OfferCard key={el.id} item={el}
                     style={{}} />
               ))
               }
            </section>
         </div>
      </div>
   )
}
export default MainPage;
