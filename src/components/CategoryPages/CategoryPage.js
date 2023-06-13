import React, { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "../ProductCard/ProductCard"
import Layout from "../Layout/Layout"
import Notification from "../Notification/Notification"
import LottieEmpy from "../../common/Lotties/empty.json"

import Lottie from "lottie-react"
import { HeaderC } from "../Header/Header"
import { Footer } from "../Footer/Footer"

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
  return (
    <Layout>
      <HeaderC/>
      <Notification notifications={notifications} />
      <div className="container-category">
        <div className="banner-example">
          <div id="banner">
            <div
              style={{
                backgroundImage: `url("${pageContext?.assets[0]?.url}")`,
              }}
              className=" bannerItem"
            >
              <div className="content">
                <span className="banner-header">{pageContext?.name}</span>
                <div className="banner-text">{pageContext?.description}</div>
              </div>
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
              <ProductCard
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
  )
}
