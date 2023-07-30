import React, { useEffect } from "react"
import { motion } from "framer-motion"
import Commerce from "@chec/commerce.js"
import { Link, navigate } from "gatsby"
import { FaStar, FaHeart, FaEye, FaCartPlus } from "react-icons/fa"
import { HiCurrencyDollar } from "react-icons/hi"
import "./Product.scss"

export const ProductComponent = ({ product, key, addToCart }) => {
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

  return (
    <div key={key} className="prd-card-2">
      <div className="prd-head-card shimmer">
        <span className="prd-rate">
          <HiCurrencyDollar aria-hidden="true" />{" "}
          <span>{product?.price?.formatted.replace(".00", "")}</span>
        </span>
        <a
          href="#"
          onClick={() => navigate(`/product/${product?.id}/`)}
          className="prd-like"
        >
          <FaEye />
        </a>
      </div>
      <div className="prd-img-mask">
        <img
          src={
            product?.image?.url ||
            "https://cdn.pixabay.com/photo/2015/03/27/00/09/puzzle-693865_1280.jpg"
          }
          alt={product?.name || product?.filename}
          className="mouse"
        />
      </div>

      <div className="prd-card-content2">
        <span onClick={() => addCard(product)} className="prd-buy">
          <FaCartPlus aria-hidden="true" />
        </span>
        <h3 className="prd-card-title">{product?.name || product?.filename}</h3>
        <p className="prd-card-description">
          <div
            dangerouslySetInnerHTML={{ __html: product?.description }}
            className=""
          />
        </p>
      </div>
    </div>
  )
}
