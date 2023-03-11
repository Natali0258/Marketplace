import { useSelector } from 'react-redux';
import arrow from '../../images/arrow.svg';
import { FaAngleRight } from 'react-icons/fa';
import css from './ProductPath.module.css';

const ProductPath = () => {
   const arr = useSelector(state => state.category.productPath)
   //выводим элементы массива newArr со стрелкой, 
   //а последний элемент массива arr выводим без стрелки
   const newArr = arr.slice(0, arr.length - 1)
   return (
      <div className={css.productPath}>
         {newArr.map(item =>
            <div key={item.id} className={css.item}>
               <span className={css.name}>{item.name}{'  '}</span>
               {/* <img src={arrow} className={css.arrow_right} alt="arrow" /> */}
               <FaAngleRight className={css.arrow_right} />
               {'  '}
            </div>
         )}
         <span>{arr[arr.length - 1].name}</span>
      </div>
   )
}
export default ProductPath;