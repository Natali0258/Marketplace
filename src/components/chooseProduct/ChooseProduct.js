import { Link } from 'react-router-dom';
import ProductPath from '../productPath/ProductPath';
import Card from '../card/Card';
import css from './ChooseProduct.module.css';
import { useSelector } from 'react-redux';

const ChooseProduct = ({ items }) => {
   console.log('items=', items)
   //const products = useSelector(state => state.category.products)
   //console.log('products=', products)
   return (
      <div className={css.chooseProduct}>
         <div className={css.wrapper}>
            <ProductPath />
            <div className={css.cards}>
               {items.products.map(item => (
                  < Card key={item.id} item={item} />
               ))
               }
            </div>
         </div>
      </div >
   )
}
export default ChooseProduct;