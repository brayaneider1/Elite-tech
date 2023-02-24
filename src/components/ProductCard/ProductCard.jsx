import React from 'react'
import {
  UilEstate,
  UilCheckCircle,
  UilHeart,
  UilShoppingCartAlt,
  UilTimesCircle,
  UilInfoCircle
} from "@iconscout/react-unicons";
export const ProductCard = ({product}) => {
  console.log("🚀 ~ file: ProductCard.jsx:11 ~ ProductCard ~ props:", product)
  const recortarString = (strg) => { 
    let a = strg.replace("<p>", '');
    let b = a.replace("</p>","");
    return b;
   }
  return (
    <div className="card h-100 shadow-sm relative">
      <a href="#">
        <img src={product.image.url} className="card-img-top" alt="product.title" />
      </a>

      <div className="label-top shadow-sm">
        <a className="text-white mb-2" href="#">{product.name}</a>
      </div>
      <div className="card-body">

        <h5 className="card-title">
          <a target="_blank" href="#">{recortarString(product.description)}</a>
        </h5>
        <span className="bg-success">${product.price.formatted}</span>

        <div className='footer'>
          <a href="#" className="btn-warning bold-btn">add to cart</a>
          <i className="far fa-heart"></i>
        </div>
      </div>
    </div>
  )
}
