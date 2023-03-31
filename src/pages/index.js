import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { ProductCard } from "../components/ProductCard/ProductCard"
import Layout from "../components/Layout/Layout"
import { AnimatePresence, motion } from "framer-motion"
import Notification from "../components/Notification/Notification"
import { CardCategory } from "../components/CardCategory/CardCategory"
import { HeaderC } from "../components/Header/Header"
import { CardDark } from "../components/CardDark/CardDark"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

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

    allChecCategory {
      nodes {
        name
        id
        description
        assets {
          url
        }
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
    console.log(notifications)
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

  const createItems = (length, handleClick) => {
    let deltaX = 0
    let difference = 0
    const swipeDelta = 20

    return Array.from({ length }).map((item, i) => (
      <div>
        {i}
        <CardDark slideNext={()=>handleClick(i)} />
      </div>
    ))
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const slideNext = () => {
    console.log("activeIndex", activeIndex)
    return setActiveIndex(activeIndex + 1)
  }
  const [items] = useState(createItems(4, setActiveIndex))

  useEffect(() => {
    console.log(
      "🚀 ~ file: index.js:93 ~ IndexPage ~ activeIndex:",
      activeIndex
    )
  }, [activeIndex])

  return (
    <Layout>
      <Notification notifications={notifications} />
      <div className="container-ovf">
      <HeaderC />
        <div className="best-seller">
          <AliceCarousel
            disableButtonsControls
            disableDotsControls
            activeIndex={activeIndex}
            mouseTracking
            items={items}
          />
        </div>
        <div className="wrapper category">
          {data.allChecCategory.nodes.map(item => (
            <CardCategory data={item} />
          ))}
        </div>
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
      </div>
    </Layout>
  )
}

export default IndexPage
