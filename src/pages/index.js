import env from "react-dotenv";
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import AliceCarousel from "react-alice-carousel"
import Layout from "../components/Layout/Layout"
import React, { useState, useEffect } from "react"
import "react-alice-carousel/lib/alice-carousel.css"
import { HeaderC } from "../components/Header/Header"
import { CardDark } from "../components/CardDark/CardDark"
import Notification from "../components/Notification/Notification"
import { ProductCard } from "../components/ProductCard/ProductCard"
import { CardCategory } from "../components/CardCategory/CardCategory"
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
  console.log("holi", process.env.MY_ENV_VARIABLE)
  useEffect(() => {}, [notifications])

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
      <div key={i}>
        {i}
        <CardDark slideNext={() => handleClick(i)} />
      </div>
    ))
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const slideNext = () => {
    return setActiveIndex(activeIndex + 1)
  }
  const [items] = useState(createItems(4, setActiveIndex))

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
          {data.allChecCategory.nodes.map((item,i) => (
            <CardCategory data={item} key={i}/>
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
