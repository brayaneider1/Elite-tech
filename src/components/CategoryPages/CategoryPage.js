import React, { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "../ProductCard/ProductCard"
import Layout from "../Layout/Layout"
import Notification from "../Notification/Notification"

export default function CategoryPage({
  pageResources: {
    json: { pageContext },
  },
}) {
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
      <Notification notifications={notifications} />
      <div className="container-category">
        <h2>{pageContext?.name}</h2>
        <motion.div
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          className="container-category"
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
      </div>
    </Layout>
  )
}
