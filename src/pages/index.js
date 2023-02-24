import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import Sidebar from '../components/Sidebar';
import { HeaderC } from "../components/Header/Header";
import { ProductCard } from "../components/ProductCard/ProductCard";



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
`;

const IndexPage = ({ data }) => {
  console.log('data', data.allChecProduct.nodes)

  return <div className="content-AppGlass">

    <div className="AppGlass">
      <Sidebar />
      {/* <MainDash /> */}
      <div className="content-main">
        {data.allChecProduct.nodes.map((product) => (
          <Link to={`/products/${product.permalink}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  </div>



}




export default IndexPage

