import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../components/Layout/Layout"
import { Auth0Provider } from "@auth0/auth0-react"
import "react-alice-carousel/lib/alice-carousel.css"
import Notification from "../components/Notification/Notification"
import { CardCategory } from "../components/CardCategory/CardCategory"
import { useRef } from "react"
import { Footer } from "../components/Footer/Footer"
import { Loading } from "../components/Loading/Loading"
import ReactPaginate from "react-paginate"
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
const itemsPerPage = 5 // Cambia esto según tus necesidades

const StorePage = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const pageCount = Math.ceil(
    data.allProductsCreated.nodes.length / itemsPerPage
  )
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
  const startIdx = currentPage * itemsPerPage
  const visibleProducts = data.allProductsCreated.nodes.slice(
    startIdx,
    startIdx + itemsPerPage
  )

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  const customeSlider = useRef()

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
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

            <motion.div
              className="product-container"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {visibleProducts.map((product, i) => (
                <ProductComponent
                  product={product}
                  key={i}
                  addToCart={add}
                  notifications={notifications}
                />
              ))}
            </motion.div>

            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={({ selected }) => setCurrentPage(selected)}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />

            <Footer />
          </div>
        </Layout>
      )}
    </Auth0Provider>
  )
}

export default StorePage
