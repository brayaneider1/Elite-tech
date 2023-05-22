import { navigate } from "gatsby"
import React from "react"
import "./CardItem.scss"

export const CardCategory = ({ data, key }) => {
  const image = data?.assets[0].url ?? ""
  return (
    <div id={`item-${key}`} className="category-card">
      <div className="card-some">
        <div className="GameImg">
          <div className="Gfooter">
            <div className="SmallIcon"></div>
            <span className="Descripion">{data.description.slice(0,100)  }{data.description.length > 100 && "..." } </span>
            <button   onClick={() => navigate(`/category/${data.id}`)} class="button-cl"> Productos </button>
          </div>
          <img src={image} className="GameIcon" />

          <span className="Name">{data.name}</span>
        </div>
      </div>
    </div>
    /*     <div className="cardCategory product-card">
        <div className="product-image">
          <img
            className="image"
            src={image}
          />
        </div>
        <div className="product-details">
          <h1>Canada Goose</h1>
          <p>
            Great product title for a great product and all of the extra things
            a product might need to make it fill an entire card.
          </p>
          <button>SHOP NOW</button>
        </div>
    </div> */
  )
}
