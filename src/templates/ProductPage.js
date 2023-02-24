import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default function ProductPage({ data: { product } }) {
  const [mainImage] = product.images;

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.price.formatted}</p>
     
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    allChecProduct(filter: {id: {eq: $id}}) {
    nodes {
      name
      id
      description
      permalink
      price {
        formatted
      }
    }
  }
  }
`;
