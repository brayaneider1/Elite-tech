import { navigate } from "gatsby"
import React from "react"

export const CardCategory = ({ data }) => {
  return (
/*     <div
      onClick={() => navigate(`/category/${data.id}`)}
      className="ag-courses_item"
    >
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
    </div> */



    <section className="section">
  <h1>Nom Nom Gallery</h1>
  <div className="grid">
    <div className="item">
      <div className="item__details">
        jelly-o brownie sweet
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        Muffin jelly gingerbread 
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        sesame snaps chocolate
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        Oat cake
      </div>
    </div>
    <div className="item item--full">
      <div className="item__details">
         jujubes cheesecake
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        Dragée pudding brownie
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        Oat cake
      </div>
    </div>
    <div className="item">
      <div className="item__details">
        powder toffee
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        pudding cheesecake
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        toffee bear claw 
      </div>
    </div>
    <div className="item">
      <div className="item__details">
        cake cookie croissant
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        liquorice sweet roll
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        chocolate marzipan
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        danish dessert lollipop
      </div>
    </div>
    <div className="item">
      <div className="item__details">
        sugar plum dragée
      </div>
    </div>
  </div>
</section>
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
