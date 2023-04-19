import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import Commerce from "@chec/commerce.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Layout from "../Layout/Layout"
import { ProductCard } from "../ProductCard/ProductCard"
import Notification from "../Notification/Notification"
import { HeaderC } from "../Header/Header"

export const pageQuery = graphql`
  query MyQuery {
    checProduct(id: {}) {
      id
      images {
        name
        id
      }
      name
      price {
        formatted
      }
      sku
      sort_order
      updated
      created
      categories {
        products {
          id
          name
          sku
          sort_order
          updated
        }
      }
    }
  }
`

export default function ProductPage({ pageContext }) {
  const [quantity, setQuantity] = useState(0)
  const [notifications, setNotifications] = useState([])
  console.log("🚀 ~ file: ProductPage.js:43 ~ pageResources:", pageContext)
  const [product, setProduct] = useState({})
  console.log("🚀 ~ file: ProductPage.js:15 ~ product:", product)
  const commerce = new Commerce(
    "pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543"
  )
  useEffect(() => {
    commerce.products
      .list({ query: pageContext.id })
      .then(product => setProduct(product.data[0]))
  }, [])

  useEffect(() => {
    commerce.cart.retrieve().then()
  }, [])

  useEffect(() => {
    const imgs = document.querySelectorAll(".img-select a")
    const imgBtns = [...imgs]
    let imgId = 1

    imgBtns.forEach(imgItem => {
      imgItem.addEventListener("click", event => {
        event.preventDefault()
        imgId = imgItem.dataset.id
        slideImage()
      })
    })

    function slideImage() {
      const displayWidth = document.querySelector(
        ".img-showcase img:first-child"
      ).clientWidth

      document.querySelector(".img-showcase").style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", slideImage)
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

  const add = arr => {
    setNotifications([...notifications, arr])
    setTimeout(() => {
      setNotifications(
        notifications.splice(
          notifications.findIndex(i => i === arr),
          1
        )
      )
    }, 1500)
  }

  const addCard = ({ id, qt }) => {
    commerce.cart
      .add(id, quantity)
      .then(response => console.log("aqui------------>", response))
    let prod = { id: id, img: product.image.url }
    add(prod)
  }

  return (
    <Layout>
      <Notification notifications={notifications} />
      <HeaderC />

      <div className="product-page">
        <div className="container-ovf">

        <div className="cardP-wrapper">
          <div className="cardP">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img
                    src={
                      product?.image?.url
                        ? product.image.url
                        : "https://cdn.pixabay.com/photo/2015/03/27/00/09/puzzle-693865_1280.jpg"
                    }
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                    alt="shoe image"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                    alt="shoe image"
                  />
                </div>
              </div>
              {/*  <div className="img-select">
                <div className="img-item">
                  <a href="#" data-id="1">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="2">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="3">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
                <div className="img-item">
                  <a href="#" data-id="4">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                      alt="shoe image"
                    />
                  </a>
                </div>
              </div> */}
            </div>
            <div className="product-content">
              <h2 className="product-title">{product?.name}</h2>
              <div className="product-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <p className="stock">
                  Stock disponible:
                  <span>{product?.inventory?.available}</span>
                </p>
              </div>

              <div className="product-price">
                <p className="last-price">
                  Antes:
                  <span>
                    {parseInt(product?.price?.formatted) -
                      (parseInt(product?.price?.formatted) * 5) / 100}
                  </span>
                </p>
                <p className="new-price">
                  Ahora: <span>{product?.price?.formatted_with_code} (5%)</span>
                </p>
              </div>

              <div className="product-detail">
                <h2>Descripción: </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                  className="blog-slider__text"
                />
              </div>
              <div className="wrap-add">
                <div className="input-quantity">
                  <span onClick={() => setQuantity(quantity - 1)}>-</span>
                  <input value={quantity} />
                  <span onClick={() => setQuantity(quantity + 1)}>+</span>
                </div>

                <a
                  href="#"
                  onClick={() => addCard(product)}
                  className="blog-slider__button"
                >
                  Agregar al carrito
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="header_title"
          style={{ width: "100%", textAlign: "center" }}
        >
          Productos relacionados
        </div>

        <motion.div
          style={{ display: "flex", flexWrap: "wrap", paddingTop: "20px" }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Array.isArray(product?.categories) &&
            pageContext?.categories[0]?.products?.map((product, i) => (
              <div>
                <ProductCard
                  product={product}
                  key={i}
                  addToCart={add}
                  notifications={notifications}
                />
              </div>
            ))}
        </motion.div>
        </div>
      </div>
    </Layout>
  )
}
