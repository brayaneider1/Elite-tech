import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BsFillEyeFill } from "react-icons/bs"
import "./ProductDetail.scss"
export const ProductCardDetail = ({
  product,
  quantity,
  setQuantity,
  addCard,
}) => {
  return (
    <div className="product-page">
      <div className="container">
        <div className="product-image">
          <img
            src={
              product?.image?.url ||
              "https://cdn.pixabay.com/photo/2015/03/27/00/09/puzzle-693865_1280.jpg"
            }
            alt="asd"
            className="product-pic"
          />
         
        </div>

        <div className="product-details">
          <header>
            <h1 className="title">{product?.name}</h1>
            <span className="colorCat">
              Stock disponible : <span>{product?.inventory?.available}</span>
            </span>
            <div className="price">
              <span className="before">
                {" "}
                {parseInt(product?.price?.formatted) +
                  (parseInt(product?.price?.formatted) * 5) / 100}
                00.00
              </span>
              <span className="current">

                {product?.price?.formatted_with_code}
              </span>
            </div>
          </header>
          <article>
            <h5>Descripción</h5>
            <p>
              <div
                dangerouslySetInnerHTML={{ __html: product?.description }}
                className="blog-slider__text"
              />
            </p>
          </article>
          <div className="wrap-add">
            <div className="input-quantity">
              <span onClick={() => setQuantity(quantity - 1)}>-</span>
              <input value={quantity} />
              <span onClick={() => setQuantity(quantity + 1)}>+</span>
            </div>
          </div>
          <div className="footer">
            <button className="" type="button" onClick={() => addCard(product)}>
              <StaticImage
                src="http://co0kie.github.io/codepen/nike-product-page/cart.png"
                alt=""
              />
              <span>add to cart</span>
            </button>
            <a
              className="visit"
              href={product?.thank_you_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillEyeFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
