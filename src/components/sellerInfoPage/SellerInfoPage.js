import Slider from '../slider/Slider';
import products from '../../data/products';
import css from './SellerInfoPage.module.css';
import { useSelector } from 'react-redux';

const SellerInfoPage = () => {
   const isAuthSeller = useSelector(state => state.seller.isAuthSeller)

   return (
      <>
         {!isAuthSeller &&
            <div className={css.infoPage}>
               <div className={css.wrapper}>
                  <div className={css.container}>
                     <div className={css.wrapper_left}>
                        <h1>БИЗНЕС</h1>
                        <button className={css.button}>СТАТЬ ПРОДАВЦОМ</button>
                     </div>

                     <div className={css.wrapper_right}></div>
                  </div>
                  <div className={css.blocks} >
                     <div className={css.block}></div>
                     <div className={css.block}></div>
                     <div className={css.block}></div>
                  </div >
                  <h1 className={css.title}>СТАТЬ ПРОДАВЦОМ</h1>
                  <div className={css.blocks_become_seller} >
                     <div className={css.block}>ШАГ 1</div>
                     <div className={css.block}>ШАГ 2</div>
                     <div className={css.block}>ШАГ 3</div>
                  </div >
                  <h1 className={css.title}>ОБУЧАЮЩАЯ ИНФОРМАЦИЯ</h1>
                  <div className={css.blocks} >
                     <div className={css.block}></div>
                     <div className={css.block}></div>
                     <div className={css.block}></div>
                  </div >
                  <h1 className={css.title}>ПОМОЩЬ</h1>
                  <div className={css.slider}>
                     <Slider data={products} isProduct={true} />
                  </div>
               </div >
            </div >
         }
      </>
   )
}
export default SellerInfoPage; 