import React from "react"

export const CardCategory = ({ data }) => {
  return (
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">{data?.name}</div>

        <div className="ag-courses-item_date-box">
          Productos:
          <span className="ag-courses-item_date">
            &nbsp; {data.products.length}
          </span>
        </div>
      </a>
    </div>
  )
}

{
  /* <div className="col" ontouchstart="this.classList.toggle('hover');">
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
</div> */
}
