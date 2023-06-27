import { navigate } from "gatsby"
import React from "react"
import "./CardItem.scss"

export const CardCategory = ({ data, id }) => {
  const image = data?.assets[0].url ?? ""
  return (
    <div id={`item-${id}`} className="category-card" key={id}>
      <div className="card-some">
        <div className="GameImg">
          <div className="Gfooter">
            <div className="SmallIcon"></div>
            <span className="Descripion">{data.description.slice(0, 100)}{data.description.length > 100 && "..."}</span>
            <button onClick={() => navigate(`/category/${id}`)} className="button-cl">Productos</button>
          </div>
          <img src={image} className="GameIcon" alt="Game Icon" />

          <span className="Name">{data.name}</span>
        </div>
      </div>
    </div>
  )
}
