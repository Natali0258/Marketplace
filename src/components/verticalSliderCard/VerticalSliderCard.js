import css from './VerticalSliderCard.module.css';

const VerticalSliderCard = ({ image, changePhoto }) => {
   const choosePhoto = () => {
      changePhoto(image)
   }
   return (
      <div className={css.card}>
         <div className={css.box} onClick={choosePhoto}>
            <img src={"../../images/" + image} alt=" " className={css.image} />
         </div>
      </div>
   )
}
export default VerticalSliderCard;