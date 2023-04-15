import env from "react-dotenv"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import AliceCarousel from "react-alice-carousel"
import Layout from "../components/Layout/Layout"
import { Auth0Provider } from "@auth0/auth0-react"
import React, { useState, useEffect } from "react"
import "react-alice-carousel/lib/alice-carousel.css"
import { HeaderC } from "../components/Header/Header"
import { CardDark } from "../components/CardDark/CardDark"
import Notification from "../components/Notification/Notification"
import { ProductCard } from "../components/ProductCard/ProductCard"
import { CardCategory } from "../components/CardCategory/CardCategory"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"

export const pageQuery = graphql`
  query MyQuery {
    allProductsCreated: allChecProduct(sort: { created: ASC }) {
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

    allProductsSort: allChecProduct(sort: { sort_order: DESC }) {
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
        products {
          name
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const [notifications, setNotifications] = useState([])
  const domain = process.env.DOMAIN
  const clientId = process.env.CLIENT_ID
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }
  const customeSlider = useRef()

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Layout>
        <HeaderC />
        <Notification notifications={notifications} />
        <div className="container-ovf">
          <div
            className="header_title"
            style={{ width: "100%", textAlign: "center" }}
          >
            Más vendidos
          </div>
          <div className="best-seller">
            <Slider {...settings} ref={customeSlider}>
              {data.allProductsSort.nodes.map(product => (
                <CardDark
                  addToCart={add}
                  product={product}
                  slideNext={gotoNext}
                />
              ))}
            </Slider>
          </div>
          <div
            className="header_title"
            style={{ width: "100%", textAlign: "center" }}
          >
            Categorías
          </div>

          <div className="wrapper category pr-5">
            {data.allChecCategory.nodes.map((item, i) => (
              <CardCategory data={item} key={i} />
            ))}
          </div>
          <div
            className="header_title"
            style={{ width: "100%", textAlign: "center" }}
          >
            Ultimos agregados
          </div>

          <motion.div
            style={{ display: "flex", flexWrap: "wrap", paddingTop: "20px" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {data.allProductsCreated.nodes.map((product, i) => (
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
    </Auth0Provider>
  )
}

export default IndexPage
