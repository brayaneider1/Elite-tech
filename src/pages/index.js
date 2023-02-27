import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MainDash from "../components/MainDash/MainDash"
import RightSide from "../components/RigtSide/RightSide"
import Sidebar from "../components/Sidebar"
import { HeaderC } from "../components/Header/Header"
import { ProductCard } from "../components/ProductCard/ProductCard"
import Layout from "../components/Layout/Layout"

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
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log("data", data.allChecProduct.nodes)

  return (
    <Layout>
      {data.allChecProduct.nodes.map((product, i) => (
        <Link to={`/products/${product.permalink}`}>
          <ProductCard product={product} key={i} />
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage
