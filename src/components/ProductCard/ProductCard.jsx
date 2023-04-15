import React, { useEffect } from "react"
import { motion } from "framer-motion"
import Commerce from "@chec/commerce.js"
import { Link, navigate } from "gatsby"

export const ProductCard = ({ product, addToCart, notifications }) => {
  const commerce = new Commerce(
    "pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543"
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
    <motion.div variants={item} className="card">
      <div
        onClick={() => navigate(`/product/${product?.id}/`)}
        className="imgBox cursor-pointer"
      >
        <img
          src={product?.image?.url ? product.image.url : "https://cdn.pixabay.com/photo/2015/03/27/00/09/puzzle-693865_1280.jpg"}
          alt={product?.name ? product?.name : product?.filename}
          className="mouse"
        />
      </div>

      <div className="contentBox">
        <h3> {product?.name ? product?.name : product?.filename}</h3>
        <h2 className="price">
          ${product?.price?.formatted.replace(".00", "")}
        </h2>
        <a href="#" onClick={() => addCard(product)} className="buy">
          Comprar
        </a>
      </div>
    </motion.div>
  )
}


