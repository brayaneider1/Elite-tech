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
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543');/* 
commerce.cart.add("prod_Op1YoVDre6lXLv", 1).then((response) => console.log("aqui------------>",response)); */
commerce.cart.contents().then((items) => console.log("item------------------->",items));
/* commerce.cart.delete().then((response) => console.log("item------------------->",response));
commerce.cart.contents().then((items) => console.log("item------------------->",items)); */
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
  console.log("data", data.allChecProduct.nodes)
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
