import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import css from "./Slider.module.css";
import SliderPromotionCard from "../sliderPromotionCard/SliderPromotionCard";
//https://swiperjs.com/react
// npm install swiper

const SliderPromotions = ({ number, margin, data }) => {
   return (
      <div className={css.block}>
         <Swiper
            slidesPerView={number}
            spaceBetween={margin}
            centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: true,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={css.mySwiper}
         >
            {data.promotions.map(item => (
               <SwiperSlide key={item.id}>
                  <SliderPromotionCard item={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div >
   );
}
export default SliderPromotions;