import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import Commerce from "@chec/commerce.js"
import Layout from "../Layout/Layout"
import { ProductCard } from "../ProductCard/ProductCard"
import Notification from "../Notification/Notification"
import { ProductCardDetail } from "../ProductDetail/ProductDetail"
import { Loading } from "../Loading/Loading"
import { ProductComponent } from "../Product/Product"
import { Footer } from "../Footer/Footer"

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
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const commerce = new Commerce(
    "pk_test_51875911a995a6bd1faee1b9b71f652fccac0c6474a16"
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <div className="container-ovf">
            <Notification notifications={notifications} />
            <ProductCardDetail
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              addCard={addCard}
            />

            {pageContext?.categories[0]?.products?.length > 0 && (
              <h2 className="related-title" >Productos Relacionados</h2>
            )}

            <motion.div
              style={{
                display: "flex",
                flexWrap: "wrap",
                paddingTop: "20px",
                justifyContent: "space-between",
              }}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {Array.isArray(product?.categories) &&
                pageContext?.categories[0]?.products?.map((product, i) => (
                  <div>
                    <ProductComponent
                      product={product}
                      key={i}
                      addToCart={add}
                      notifications={notifications}
                    />
                  </div>
                ))}
            </motion.div>
            <Footer />
          </div>
        </Layout>
      )}
    </div>
  )
}
