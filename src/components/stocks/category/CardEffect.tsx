import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

// import "./styles.css";
import styles from "../../../styles/CategoryDetails.module.css";

type Props = {};

const CardEffect = (props: Props) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={`${styles.swiper} mySwiper`}
      >
        <SwiperSlide className="bg-[#14c8ab] rounded-lg">
          <img
            className="h-full"
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227464/samples/ecommerce/shoes.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="bg-blue-700 rounded-lg">
          <img
            className="h-full"
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227469/samples/ecommerce/leather-bag-gray.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="bg-red-600 rounded-lg">
          <img
            className="h-full"
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227459/samples/ecommerce/analog-classic.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardEffect;
