import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";



export const CardDark = () => {
  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src="https://www.pngmart.com/files/7/SSD-PNG-Background-Image.png" alt="" />
          </div>
          <div className="blog-slider__content">
            <div className="blog-slider__title">SSD San Disk</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi..</div>
            <a href="#" className="blog-slider__button">ADD TO CART</a>
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>


  )
}
