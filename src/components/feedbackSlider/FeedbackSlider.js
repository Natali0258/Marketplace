import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Feedback from "../feedback/Feedback";
import css from "./FeedbackSlider.module.css";
//import SliderCard from "../sliderCard/SliderCard";
//https://swiperjs.com/react
// npm install swiper

const FeedbackSlider = ({ data, item, isProduct, isFeedback }) => {
   return (
      <div className={css.block}>
         <Swiper
            // slidesPerView={'auto'}
            spaceBetween={60}
            breakpoints={{
               // когда ширина окна >= 295px
               295: {
                  width: 295,
                  slidesPerView: 1,
               },
               // когда ширина окна >= 652px
               652: {
                  width: 652,
                  slidesPerView: 2,
               },
               // когда ширина окна >= 1009px
               1009: {
                  width: 1009,
                  slidesPerView: 2,
               },
               // когда ширина окна >= 1366px
               1366: {
                  width: 1366,
                  slidesPerView: 3,
               },
               // когда ширина окна >= 1723px
               1723: {
                  width: 1723,
                  slidesPerView: 3,
               },
            }}
            className={css.mySwiper}
         >
            {/* {isProduct &&
               <>
                  {data.products.map(item =>
                     <SwiperSlide key={item.id}>
                        <SliderCard className={css.card} item={item} />
                     </SwiperSlide>
                  )}
               </>
            } */}

            {isFeedback &&
               <>
                  {data.feedbacks.map((feedback) =>
                     <SwiperSlide key={feedback.id}>
                        <Link to={`feedbacks/${data.id}`} className={css.link}>
                           <Feedback feedback={feedback} />
                        </Link>
                     </SwiperSlide>
                  )}
               </>
            }
         </Swiper>
      </div >
   );
}
export default FeedbackSlider;