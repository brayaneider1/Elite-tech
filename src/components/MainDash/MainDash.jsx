import React from "react";
import { CardDark } from "../CardDark/CardDark";
import { graphql } from "gatsby";
import { HeaderC } from "../Header/Header";
import { ProductCard } from "../ProductCard/ProductCard";
import "./MainDash.css";
import { useEffect } from "react";




const MainDash = (props) => {
  useEffect(() => {

    console.log('props graph', props)
  }, [props])

  return (
    <div className="MainDash">
      <HeaderC />
      <div className="contain-items">
        <CardDark />
        <div className="container-new">
          {/*<pre>{JSON.stringify(products, null, 2)} </pre> */}
        </div>
      </div>
    </div>
  );
};

export default MainDash








