import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import Commerce from "@chec/commerce.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Layout from "../Layout/Layout"

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

export default function ProductPage({
  pageResources: {
    json: { pageContext },
  },
  data,
}) {
  console.log("🚀 ~ file: ProductPage.js:43 ~ pageResources:", data)
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

  const recortarString = strg => {
    let a = strg?.replace("<p>", "")
    let b = a?.replace("</p>", "")
    return b
  }

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

    window.addEventListener("resize", slideImage)
  }, [])

  return (
    <Layout>
      <div className="product-page">
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
              <div className="img-select">
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
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title">{product?.name}</h2>
              <div className="product-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span>4.7(21)</span>
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
    </Layout>
  )
}
