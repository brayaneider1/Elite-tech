import React from 'react'
import {
  UilEstate,
  UilCheckCircle,
  UilHeart,
  UilShoppingCartAlt,
  UilTimesCircle,
  UilInfoCircle
} from "@iconscout/react-unicons";
import { motion } from 'framer-motion';
import { Link } from '@gatsbyjs/reach-router';
export const ProductCard = ({ product }) => {
  const recortarString = (strg) => {
    let a = strg.replace("<p>", '');
    let b = a.replace("</p>", "");
    return b;
  }
  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }
  return (

    <motion.div variants={item} className="card h-100 shadow-sm relative">
      <Link to={`/products/${product.permalink}`}>
        <a href="#">
          <img src={product.image.url} className="card-img-top" alt="product.title" />
        </a>

        <div className="label-top shadow-sm">
          <a className="text-white mb-2" href="#">{product.name}</a>
        </div>
      </Link>
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
    </motion.div>
  )
}
