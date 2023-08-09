import { graphql, Link } from "gatsby"
import { motion } from "framer-motion"
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
import { Footer } from "../components/Footer/Footer"
import SliderComponent from "../components/Brands/Brand"
import { Loading } from "../components/Loading/Loading"
import { BsArrowRightShort } from "react-icons/bs"
import { ProductComponent } from "../components/Product/Product"

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

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const customeSlider = useRef()

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
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

  var Window
  if (typeof window !== "undefined") {
    Window = window
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: Window?.location.origin,
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Notification notifications={notifications} />
          <div className=" custom-container container-ovf">
            <div className="best-seller">
              <Slider {...settings} ref={customeSlider}>
                {data.allProductsSort.nodes.map((product, index) => (
                  <CardDark
                    key={index}
                    addToCart={add}
                    product={product}
                    slideNext={gotoNext}
                  />
                ))}
              </Slider>
            </div>
            <div
              className="header_title"
              style={{
                width: "100%",
                textAlign: "center",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
            >
              Categorías
            </div>

            <div className="wrapper category">
              <div className="angry-grid">
                
                {data.allChecCategory.nodes.map((item, index) => (
                  <CardCategory
                    key={index}
                    data={item}
                    id={item?.id}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="Links">
              <span className="header_title">Ultimos agregados</span>
              <div className="view-more">
                <Link to="/store">Ver más</Link>
                <BsArrowRightShort />
              </div>
            </div>

            <motion.div
              className="product-container"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {data.allProductsCreated.nodes.slice(0, 4).map((product, i) => (
                <ProductComponent 
                product={product}
                key={i}
                addToCart={add}
                notifications={notifications}
      />
              ))}
            </motion.div>

         
            <SliderComponent />
            <Footer />
          </div>
        </Layout>
      )}
    </Auth0Provider>
  )
}

export default IndexPage
