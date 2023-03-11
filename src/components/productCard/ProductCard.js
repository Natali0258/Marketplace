import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import ProductPath from '../productPath/ProductPath';
import products from '../../data/products';
import ProductsToCart from '../productsToCart/ProductsToCart';
import VerticalSlider from '../verticalSlider/VerticalSlider';
import Slider from '../slider/Slider';
import FeedbackSlider from '../feedbackSlider/FeedbackSlider';
import css from './ProductCard.module.css';

const ProductCard = () => {
   const params = useParams();
   const { productId } = params;
   const dispatch = useDispatch();
   const [index, setIndex] = useState(0);

   const item = products.products.find(product => product.id === parseFloat(productId))

   //при клике по новому товару index обнуляется
   useEffect(() => {
      setIndex(index => {
         return 0;
      })
   }, [item])

   const changePhoto = (image) => {
      for (let i = 0; i < item.images.length; i++) {
         if (image === item.images[i]) {
            setIndex(index => {
               return i
            })
         }
      }
   }

   const addProductToCart = () => {
      dispatch(addToCart(item))
   }

   return (
      <div className={css.productCard} >
         <div className={css.wrapper}>
            <ProductPath />
            <h2 className={css.name}>{item.name}</h2>
            <Link to={`feedbacks/${item.id}`}>
               <p className={css.feedbacks}>Отзывы</p>
            </Link>
            <section className={css.about_product}>

               <div className={css.slider}>
                  <VerticalSlider item={item} isProduct={true} slidesPerView={4} changePhoto={changePhoto} />
               </div>

               <div className={css.photo}>
                  <img src={"../../images/" + item.images[index]} alt=" " className={css.image} />
               </div>

               <div className={css.info}>
                  <h2 className={css.name}>{item.name}</h2>
                  <p className={css.title}>Характеристика</p>
                  <div><strong className={css.subtitle}>Цена:</strong> <strong className={css.text}>{item.price} руб</strong></div>
                  <div><strong className={css.subtitle}>Таблица размеров:</strong> <strong className={css.text_size}>
                     {item.size.map((el, index) => (
                        <div key={index} className={css.size}>{el}</div>
                     ))}
                  </strong></div>
                  <div><strong className={css.subtitle}>Состав:</strong> <strong className={css.text}>{item.compound}</strong></div>
                  <div><strong className={css.subtitle}>Бренд:</strong> <strong className={css.text}>{item.brend}</strong></div>
                  <div><strong className={css.subtitle}>Сроки поставки:</strong> <strong className={css.text}>{ }</strong></div>
               </div>

               <div className={css.add_product_to_cart}>
                  <ProductsToCart />
                  <button className={css.button} onClick={addProductToCart}>Добавить в корзину</button>
               </div>
            </section>

            <section>
               <h2>Полное описание товара</h2>
               <div className={css.descriptions}>{item.descriptions}</div>
            </section>

            <section>
               <h2>Другие предложения от продавцов</h2>
            </section>

            <section>
               <h2>Рекомендации</h2>
               <Slider data={products} isProduct={true} />
            </section>

            <section>
               <h2>Покупают вместе</h2>
               <Slider data={products} isProduct={true} />
            </section>

            <section className={css.section_feedbacks}>
               <h2>Отзывы</h2>
               {/* <Reviews item={item} /> */}
               <FeedbackSlider data={item} isFeedback={true} />
               <Link to={`feedbacks/${item.id}`} className={css.link}>
                  <button>Смотрите все отзывы</button>
               </Link>
            </section>

            <section>
               <h2>Похожие товары</h2>
               <Slider data={products} isProduct={true} />
            </section>
         </div >
      </div >
   )
}
export default ProductCard;