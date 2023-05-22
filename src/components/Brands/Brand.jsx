import React from "react"
import Slider from "react-slick"
import "./brands.scss"

const importAll = r => {
  return r.keys().reduce((acc, curr) => {
    const imageName = curr.replace("./", "")
    const image = r(curr)
    acc[imageName] = image.default
    return acc
  }, {})
}

const images = importAll(
  require.context("../../imgs/brands/", false, /\.(png|jpe?g|svg)$/)
)
const imageNames = ["Asus.png", "Adata.png", "hp.png","intel.png","crucial.png","Kingston.png","Lenovo.jpg"]


const SliderComponent = () => {
 
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    arrows:false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imageNames.map(imageName => (
            <div className="slider-item">
          <img
            key={imageName}
            src={images[imageName]}
            alt={imageName.replace(".png", "")}
          />
            </div>

        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent
