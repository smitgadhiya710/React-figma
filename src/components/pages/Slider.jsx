import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider1 from "../../assets/landingPageImages/slider1.png";
import slider2 from "../../assets/landingPageImages/slider2.png";
import slider3 from "../../assets/landingPageImages/slider3.png";
import slider4 from "../../assets/landingPageImages/slider4.png";

function Slider() {
  return (
    <div className="max-w-screen px-4 sm:px-6 lg:mx-10 mt-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="custom-swiper"
      >
        {[slider1, slider2, slider3, slider4, slider2, slider3].map(
          (img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`topic-${i + 1}`}
                className="rounded-2xl shadow-md w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform hover:scale-105 duration-300"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

export default Slider;
