import React from "react"

export const CardCategory = ({ data }) => {
  console.log("🚀 ~ file: CardCategory.jsx:4 ~ CardCategory ~ data:", data)
  return (
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container">
        <div
          className="front"
          style={{
            backgroundImage:
            `url(${data?.assets[0]?.url})`,
          }}
        >
          <div className="inner">
            <p>{data?.name}</p>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
