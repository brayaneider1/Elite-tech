import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { ProductCard } from "../components/ProductCard/ProductCard"
import Layout from "../components/Layout/Layout"
import { AnimatePresence, motion } from "framer-motion"
import Notification from "../components/Notification/Notification"

export const pageQuery = graphql`
  query MyQuery {
    allChecProduct {
      nodes {
        name
        image {
          url
        }
        description
        permalink
        price {
          formatted
        }
        id
      }
    }
  }
`

const IndexPage = ({ data }) => {
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

  useEffect(() => {
    console.log(notifications);
  }, [notifications])
  

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
      <motion.div
        style={{ display: "flex", flexWrap: "wrap" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {data.allChecProduct.nodes.map((product, i) => (
          <ProductCard
            product={product}
            key={i}
            addToCart={add}
            notifications={notifications}
          />
        ))}
      </motion.div>
    </Layout>
  )
}

export default IndexPage
