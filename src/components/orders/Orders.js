import css from './Orders.module.css';

const Orders = () => {

   return (
      <div className={css.orders}>
         <div className={css.wrapper}>
            <p className={css.name}>Заказы</p>
         </div>
      </div>
   )
}
export default Orders;