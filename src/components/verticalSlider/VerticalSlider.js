// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import css from './VerticalSlider.module.css';
import VerticalSliderCard from '../verticalSliderCard/VerticalSliderCard';
import Feedback from "../feedback/Feedback";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const VerticalSlider = ({ slidesPerView, item, image, changePhoto, isProduct, isFeedback }) => {
   return (
      <div className={css.block}>
         <Swiper
            // direction={"vertical"}
            slidesPerView={slidesPerView}
            spaceBetween={10}
            //freeMode={true}
            mousewheel={true}
            pagination={{
               //clickable: true,
               type: "fraction",
            }}
            breakpoints={{ // условия для разных размеров окна браузера
               0: { // при 0px и выше
                  direction: 'horizontal', // горизонтальная прокрутка
               },
               652: { // при 652px и выше
                  direction: 'vertical', // вертикальная прокрутка
               },
               // 1009: { // при 1009px и выше
               //    direction: 'vertical', // вертикальная прокрутка
               // }
            }}
            modules={[Mousewheel, Pagination]}
            //modules={[FreeMode, Pagination]}
            className={css.mySwiper}
         >
            {isProduct &&
               <>
                  {item.images.map((image, index) =>
                     <SwiperSlide key={index}>
                        <VerticalSliderCard image={image} changePhoto={changePhoto} />
                     </SwiperSlide>
                  )}
               </>
            }

            {isFeedback &&
               <>
                  {item.reviews.map((feedback, index) =>
                     <SwiperSlide key={index}>
                        <Feedback feedback={feedback} />
                     </SwiperSlide>
                  )}
               </>
            }

         </Swiper>
      </div>
   );
}
export default VerticalSlider;