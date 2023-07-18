import React from "react"
import { UilAngleRightB } from "@iconscout/react-unicons"
import Commerce from "@chec/commerce.js"
import { navigate } from "gatsby"
import { motion } from "framer-motion"
import { useEffect } from "react"
import parse from "html-react-parser"

export const CardDark = ({ slideNext, product, addToCart }) => {
  const commerce = new Commerce(
    "pk_test_51875911a995a6bd1faee1b9b71f652fccac0c6474a16"
  )
  useEffect(() => {
    commerce.cart.retrieve().then()
  }, [])

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  }

  const addCard = ({ id, qt }) => {
    commerce.cart
      .add(id, 1)
      .then(response => console.log("aqui------------>", response))
    let prod = { id: id, img: product.image.url }
    addToCart(prod)
  }

  const descriptionHtml= parse(product?.description)

  return (
    <motion.div variants={item} className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              onClick={() => navigate(`/product/${product?.id}/`)}
              src={
                product?.image?.url
                  ? product.image.url
                  : "https://cdn.pixabay.com/photo/2015/03/27/00/09/puzzle-693865_1280.jpg"
              }
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <div className="blog-slider__title">{product?.name}</div>
            <div className="blog-slider__text">
              {descriptionHtml}
            </div>
            <div className="contents-btns">
              <a
                href="#"
                onClick={() => addCard(product)}
                className="blog-slider__button"
              >
                Agregar al carrito
              </a>

              <a
                href="#"
                onClick={() => addCard(product)}
                className="blog-slider__button2"
              >
                Agregar
              </a>
              <a
                href="#"
                onClick={() => navigate(`/product/${product?.id}/`)}
                className="blog-slider__button__plus"
              >
                Ver detalles
              </a>
              <a
                href="#"
                onClick={() => navigate(`/product/${product?.id}/`)}
                className="blog-slider__button__plus2"
              >
                Ver
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
      <div onClick={slideNext} className="btn-next">
        <UilAngleRightB />
      </div>
    </motion.div>
  )
}
