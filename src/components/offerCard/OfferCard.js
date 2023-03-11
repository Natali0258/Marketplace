import css from './OfferCard.module.css';

const OfferCard = (props) => {
   const { image } = props.item;
   return (
      <div className={css.card}>
         <div className={css.box}>
            <img src={"../../images/" + image} alt=" " className={css.image} />
         </div>
      </div>
   )
}
export default OfferCard;