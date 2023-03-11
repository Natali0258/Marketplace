import css from './SliderPromotionCard.module.css';

const SliderPromotionCard = (props) => {
   const { image, name } = props.item;
   return (
      <div className={css.card}>
         <div className={css.box} >
            {/* <img src={"../../images/" + image} alt=" " className={css.image} /> */}
            <h2 className={css.product}>{name}</h2>
         </div>
      </div>
   )
}
export default SliderPromotionCard;