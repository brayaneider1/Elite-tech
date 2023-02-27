import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "@gatsbyjs/reach-router"

export default function ProductPage({ data: { product } }) {
  console.log("🚀 ~ file: ProductPage.js:7 ~ ProductPage ~ data:", product)
  const {
    description,
    id,
    image: { url },
    name,
    price: { formatted_with_symbol },
  } = product

  return (
    <Layout>
      <div className="product">
        <div className="product-container">
          <div className="image">
            <img src={url} alt="hloli" />
          </div>
          <div className="info">
            <div className="info-container">
            <Link to="/">
              <button>Back to Product List</button>
            </Link>
              <h3>{name}</h3>
              <p>{description}</p>
              <h2>
                USD<strong>{formatted_with_symbol}</strong>
              </h2>
            <form novalidate className="product-form">
              <div className="product-form-container">
                <fieldset className="css-cqk6nd e1dv7dtf4">
                  <label for="quantity" className="css-1a33nsn eqcymep3">
                    Qty.
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    step="1"
                    value="1"
                  />
                </fieldset>
                <fieldset className="select">
                  <label for="variant" className="css-1a33nsn eqcymep3">
                    "Size/Color"
                  </label>
                  <select
                    id="variant"
                    name="variant"
                    className="css-w9nwtc eqcymep1"
                  >
                    <option disabled value>
                      Choose Size/Color
                    </option>
                    slot
                  </select>
                </fieldset>
              </div>
              <button type="submit" className="e1dv7dtf7 css-10mmtt e88faj60">
                "Add to Cart
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
                "
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    product: checProduct(id: { eq: $id }) {
      name
      image {
        url
      }
      description
      price {
        formatted_with_symbol
      }
      id
    }
  }
`
