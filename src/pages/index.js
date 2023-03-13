import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MainDash from "../components/MainDash/MainDash"
import RightSide from "../components/RigtSide/RightSide"
import Sidebar from "../components/Sidebar"
import { HeaderC } from "../components/Header/Header"
import { ProductCard } from "../components/ProductCard/ProductCard"
import Layout from "../components/Layout/Layout"
import { motion } from "framer-motion"


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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }

  
  return (
    <Layout>
      <motion.div style={{ display: "flex" }} variants={container}
        initial="hidden"
        animate="show">

        {data.allChecProduct.nodes.map((product, i) => (
            <ProductCard product={product} key={i} />
        ))}

      </motion.div>

    </Layout>
  )
}

export default IndexPage
