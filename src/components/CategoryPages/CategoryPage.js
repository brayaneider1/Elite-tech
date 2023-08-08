import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Layout from "../Layout/Layout"
import Notification from "../Notification/Notification"
import LottieEmpy from "../../common/Lotties/empty.json"
import Lottie from "lottie-react"
import { Footer } from "../Footer/Footer"
import { ProductComponent } from "../Product/Product"
import { Loading } from "../Loading/Loading"

export default function CategoryPage({ pageContext }) {
  const [notifications, setNotifications] = useState([])

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

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : 
        <Layout>
          <Notification notifications={notifications} />

          <div className="container-category">
            <div className="banner-example">
              <div id="banner">
                <div className="content">
                  <span className="banner-header">{pageContext?.name}</span>
                </div>
                <img
                  className="banner-background"
                  src={
                    pageContext?.assets[0]?.url ||
                    "https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010_1280.jpg"
                  }
                />
                <div className="category-description">
                  <div className="banner-text">{pageContext?.description}</div>
                </div>
              </div>
            </div>

            {pageContext?.products.length !== 0 ? (
              <motion.div
                className={`container-category_content`}
                variants={container}
                initial="hidden"
                animate="show"
              >
                {pageContext?.products?.map((product, i) => (
                  <ProductComponent
                    product={product}
                    key={i}
                    addToCart={add}
                    notifications={notifications}
                  />
                ))}
              </motion.div>
            ) : (
              <Lottie
                className="content-lottie"
                animationData={LottieEmpy}
                loop={true}
              />
            )}
            <Footer />
          </div>
        </Layout>
      }
    </div>
  )
}
