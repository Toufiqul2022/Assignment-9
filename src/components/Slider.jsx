import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../assets/image-5.avif";
import image2 from "../assets/image-4.jpg";
import image3 from "../assets/image-7.jpg";

const Slider = () => {
  return (
    <div className="max-w-11/12 mx-auto my-5">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            src={image1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            src={image2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            src={image3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
