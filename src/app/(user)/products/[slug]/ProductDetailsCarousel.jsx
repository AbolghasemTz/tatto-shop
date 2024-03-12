"use client";
import React from "react";
import "../../../../styles/deatilsSlider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const images = [
  { image: "/images/g-4.jpg", id: 1 },
  { image: "/images/g-2.jpg", id: 2 },
  { image: "/images/g-5.jpg", id: 3 },
  { image: "/images/g-6.jpg", id: 4 },
];

function ProductDetailsCarousel() {
  return (
    <div className=" w-auto max-w-[550px] mx-auto sticky top-[50px] ">
      <Carousel
        thumbWidth={50}
        showIndicators={false}
        showStatus={false}
        className="productCarousel"
      >
        {images.map((img) => (
          <img key={img.id} src={img.image} alt="" className=" rounded-lg "/>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductDetailsCarousel;
